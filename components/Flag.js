// components/Flag.js
import Image from 'next/image';

const Flag = ({ countryCode, className }) => {
  if (!countryCode) return null;

  return (
    <Image
      src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
      alt={`${countryCode} flag`}
      width={20}
      height={15}
      className={className}
    />
  );
};

export default Flag;
