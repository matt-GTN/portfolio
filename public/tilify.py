import re
import xml.etree.ElementTree as ET

def make_path_tileable(d_attr, width=960.0):
    """
    Transforms the 'd' attribute of an SVG path to make its top wave segment
    horizontally tileable. Assumes a specific path structure where the top
    wavy part is followed by a vertical line down to a flat bottom line.
    """
    
    # Find the split point between the top wave and the bottom fill.
    # This regex ensures we capture the exact segment L960 <Y_end> followed by L960 541
    # We need to find the specific "L960 541" that marks the transition to the flat bottom.
    # The original SVG's L960 541 is exactly that.
    
    # We'll split the path data into the top wave segment and the bottom fill segment.
    # The bottom fill segment starts with L960 541 and continues along the bottom edge.
    # The top wave segment ends just before L960 541.
    
    # Find the part of the string that represents the bottom fill section.
    # It typically starts with 'L960 541' or similar, followed by points on the bottom.
    # For robust splitting, we'll parse the whole path data, find the last point of the wave (X=960),
    # and then identify the subsequent segments that form the bottom boundary.

    # Let's re-parse to be more explicit about what is the wave and what is the base.
    # The structure is M0 Y_start ... L960 Y_end_wave L960 541 L...L0 541Z
    
    # Split the path string to isolate the part that defines the wave.
    # We look for the `L960 541` segment which is the start of the vertical line to the bottom right corner.
    # Everything before this segment is considered part of the "top wave".
    
    # Using regex to capture parts more reliably, avoiding simple `find` issues with float variations.
    # Find the last 'L' command before the 'L...541' sequence which defines the bottom border.
    
    # Let's rely on the explicit structure: M0 Y_start ... L960 Y_end_wave followed by L960 541 and then the bottom horizontal line segments.
    # This structure is consistent across all paths.
    
    # We need to extract the segments one by one.
    path_commands = re.findall(r"([MLCZ])([^MLCZ]*)", d_attr)
    
    # The first command is M0 Y_start
    m_cmd = path_commands[0]
    start_y = float(re.findall(r"-?\d+\.?\d*", m_cmd[1])[1]) # Y-coordinate of M0 Y_start
    
    # The command that ends the top wave is typically the one before L960 541.
    # It's explicitly L960 <Y_end_wave>
    
    top_wave_segments = []
    bottom_fill_segments = []
    
    # Flag to indicate when we've passed the top wave and are in the bottom fill.
    # The transition from the top wave to the bottom fill occurs after the L960 Y_end_wave,
    # and the next command is L960 541.
    
    found_wave_end = False
    
    for i, (cmd_type, values_str) in enumerate(path_commands):
        if not found_wave_end:
            # Check if this is the last point of the wave at X=960
            # It's the L command that specifies X=960 and a Y coordinate before the L960 541 drop.
            if cmd_type == 'L':
                coords = [float(c) for c in re.findall(r"-?\d+\.?\d*(?:e[+-]?\d+)?", values_str)]
                if len(coords) == 2 and coords[0] == width:
                    # This is the L960 Y_end_wave command.
                    # The next command should be L960 541.
                    # We need to extract Y_end_wave for our delta calculation.
                    end_y_wave = coords[1] # This is the Y_end for the wave
                    found_wave_end = True
                    
                    # Store this segment as the last top wave segment before adjustment.
                    top_wave_segments.append((cmd_type, values_str))
                    continue # Continue to the next segment which is L960 541
            
            top_wave_segments.append((cmd_type, values_str))
        else:
            # All subsequent segments are part of the bottom fill.
            bottom_fill_segments.append((cmd_type, values_str))

    if not found_wave_end:
        # This should not happen with the given SVG structure, but for robustness.
        raise ValueError("Could not find the end point of the wave at X=960.")

    delta_y = end_y_wave - start_y

    if abs(delta_y) < 1e-9: # Check for negligible difference
        return d_attr # Already tileable, return original

    transformed_top_wave_cmds = []
    for cmd_type, values_str in top_wave_segments:
        coords = [float(c) for c in re.findall(r"-?\d+\.?\d*(?:e[+-]?\d+)?", values_str)]
        
        new_coords = []
        if cmd_type in ['M', 'L']:
            x, y = coords[0], coords[1]
            y_adjusted = y - (delta_y * (x / width))
            new_coords.extend([x, y_adjusted])
        elif cmd_type == 'C':
            for j in range(0, len(coords), 2):
                x, y = coords[j], coords[j+1]
                y_adjusted = y - (delta_y * (x / width))
                new_coords.extend([x, y_adjusted])
        else: # For 'Z' or any other non-coordinate command, just append as is.
            # Z command has no coordinates, so it's fine.
            new_coords = coords # Should be empty for 'Z'
        
        # Use str() for maximum precision in output, which helps with rendering
        transformed_top_wave_cmds.append(cmd_type + " ".join(map(str, new_coords)))

    # Reconstruct the 'd' attribute
    # The last command of top_wave_segments (before adjustment) was L960 Y_end_wave
    # After adjustment, it's L960 Y_start (original Y_start).
    # The bottom_fill_segments (starting with L960 541) remain unchanged.
    
    # Reconstruct the entire new d attribute string
    new_d_attr = "".join(transformed_top_wave_cmds) + "".join([cmd_type + values_str for cmd_type, values_str in bottom_fill_segments])
    
    return new_d_attr


# Original SVG content
svg_content = """<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#001220"></rect><path d="M0 316L12.3 317.2C24.7 318.3 49.3 320.7 74 320.2C98.7 319.7 123.3 316.3 148 312.7C172.7 309 197.3 305 221.8 311.8C246.3 318.7 270.7 336.3 295.2 338.5C319.7 340.7 344.3 327.3 369 328.2C393.7 329 418.3 344 443 345C467.7 346 492.3 333 517 326.5C541.7 320 566.3 320 591 321.7C615.7 323.3 640.3 326.7 664.8 328.3C689.3 330 713.7 330 738.2 327.7C762.7 325.3 787.3 320.7 812 324.2C836.7 327.7 861.3 339.3 886 339.7C910.7 340 935.3 329 947.7 323.5L960 318L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#fa7268"></path><path d="M0 387L12.3 389.2C24.7 391.3 49.3 395.7 74 393C98.7 390.3 123.3 380.7 148 376.5C172.7 372.3 197.3 373.7 221.8 372.3C246.3 371 270.7 367 295.2 371.3C319.7 375.7 344.3 388.3 369 392.7C393.7 397 418.3 393 443 392.5C467.7 392 492.3 395 517 388.3C541.7 381.7 566.3 365.3 591 357.2C615.7 349 640.3 349 664.8 349.5C689.3 350 713.7 351 738.2 354.3C762.7 357.7 787.3 363.3 812 365.2C836.7 367 861.3 365 886 361.8C910.7 358.7 935.3 354.3 947.7 352.2L960 350L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#ef5f67"></path><path d="M0 402L12.3 405.2C24.7 408.3 49.3 414.7 74 418.2C98.7 421.7 123.3 422.3 148 422.5C172.7 422.7 197.3 422.3 221.8 424C246.3 425.7 270.7 429.3 295.2 428C319.7 426.7 344.3 420.3 369 412.7C393.7 405 418.3 396 443 393.3C467.7 390.7 492.3 394.3 517 394.3C541.7 394.3 566.3 390.7 591 392.3C615.7 394 640.3 401 664.8 403.8C689.3 406.7 713.7 405.3 738.2 403.3C762.7 401.3 787.3 398.7 812 401.5C836.7 404.3 861.3 412.7 886 417.8C910.7 423 935.3 425 947.7 426L960 427L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#e34c67"></path><path d="M0 475L12.3 468.8C24.7 462.7 49.3 450.3 74 447.8C98.7 445.3 123.3 452.7 148 453.2C172.7 453.7 197.3 447.3 221.8 449.5C246.3 451.7 270.7 462.3 295.2 462.7C319.7 463 344.3 453 369 451.7C393.7 450.3 418.3 457.7 443 456.3C467.7 455 492.3 445 517 445C541.7 445 566.3 455 591 458.8C615.7 462.7 640.3 460.3 664.8 456.2C689.3 452 713.7 446 738.2 446C762.7 446 787.3 452 812 457.7C836.7 463.3 861.3 468.7 886 471.5C910.7 474.3 935.3 474.7 947.7 474.8L960 475L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#d53867"></path><path d="M0 501L12.3 498.3C24.7 495.7 49.3 490.3 74 488.8C98.7 487.3 123.3 489.7 148 489.5C172.7 489.3 197.3 486.7 221.8 487C246.3 487.3 270.7 490.7 295.2 493.2C319.7 495.7 344.3 497.3 369 499C393.7 500.7 418.3 502.3 443 498.8C467.7 495.3 492.3 486.7 517 488.5C541.7 490.3 566.3 502.7 591 502.2C615.7 501.7 640.3 488.3 664.8 482.7C689.3 477 713.7 479 738.2 484.7C762.7 490.3 787.3 499.7 812 504.8C836.7 510 861.3 511 886 511.3C910.7 511.7 935.3 511.3 947.7 511.2L960 511L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#c62368"></path></svg>"""

# Parse the SVG content
root = ET.fromstring(svg_content)

# Find all path elements
paths = root.findall('{http://www.w3.org/2000/svg}path')

# Iterate and apply the transformation to each path
for path_element in paths:
    original_d = path_element.get('d')
    try:
        new_d = make_path_tileable(original_d)
        path_element.set('d', new_d)
    except ValueError as e:
        print(f"Skipping path due to error: {e}")
        # If an error occurs, the path remains unchanged.

# Serialize the modified SVG back to a string
# Ensure a standard XML declaration for proper rendering.
modified_svg_content = ET.tostring(root, encoding='unicode', xml_declaration=True)

# Output the modified SVG
print(modified_svg_content)