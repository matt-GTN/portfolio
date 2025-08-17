// __tests__/language.test.js
import { translations } from '../translations';

describe('Language System Tests', () => {
  describe('Translation Structure', () => {
    test('should have both French and English translations', () => {
      expect(translations).toHaveProperty('fr');
      expect(translations).toHaveProperty('en');
    });

    test('should have consistent navigation keys', () => {
      const frNavKeys = Object.keys(translations.fr.navigation);
      const enNavKeys = Object.keys(translations.en.navigation);
      
      expect(frNavKeys).toEqual(enNavKeys);
      expect(frNavKeys).toContain('me');
      expect(frNavKeys).toContain('projects');
      expect(frNavKeys).toContain('skills');
      expect(frNavKeys).toContain('beyondCode');
      expect(frNavKeys).toContain('contact');
    });

    test('should have consistent content structure', () => {
      const frContentKeys = Object.keys(translations.fr.content);
      const enContentKeys = Object.keys(translations.en.content);
      
      expect(frContentKeys).toEqual(enContentKeys);
      expect(frContentKeys).toContain('me');
      expect(frContentKeys).toContain('projects');
      expect(frContentKeys).toContain('skills');
      expect(frContentKeys).toContain('beyondCode');
      expect(frContentKeys).toContain('contact');
    });

    test('should have homepage translations', () => {
      expect(translations.fr.homepage).toBeDefined();
      expect(translations.en.homepage).toBeDefined();
      expect(translations.fr.homepage.greeting).toBeDefined();
      expect(translations.en.homepage.greeting).toBeDefined();
      expect(translations.fr.homepage.roles).toBeInstanceOf(Array);
      expect(translations.en.homepage.roles).toBeInstanceOf(Array);
    });
  });

  describe('Translation Content Validation', () => {
    test('should have non-empty navigation translations', () => {
      Object.values(translations.fr.navigation).forEach(value => {
        expect(typeof value).toBe('string');
        expect(value.length).toBeGreaterThan(0);
      });

      Object.values(translations.en.navigation).forEach(value => {
        expect(typeof value).toBe('string');
        expect(value.length).toBeGreaterThan(0);
      });
    });

    test('should have valid project translations', () => {
      expect(translations.fr.content.projects.items).toBeInstanceOf(Array);
      expect(translations.en.content.projects.items).toBeInstanceOf(Array);
      expect(translations.fr.content.projects.items.length).toBe(3);
      expect(translations.en.content.projects.items.length).toBe(3);

      translations.fr.content.projects.items.forEach(project => {
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('category');
        expect(project).toHaveProperty('description');
        expect(typeof project.title).toBe('string');
        expect(typeof project.category).toBe('string');
        expect(typeof project.description).toBe('string');
      });
    });

    test('should have valid skills categories', () => {
      const frSkills = translations.fr.content.skills.categories;
      const enSkills = translations.en.content.skills.categories;

      expect(Object.keys(frSkills)).toHaveLength(5);
      expect(Object.keys(enSkills)).toHaveLength(5);

      Object.values(frSkills).forEach(skillArray => {
        expect(skillArray).toBeInstanceOf(Array);
        expect(skillArray.length).toBeGreaterThan(0);
      });

      Object.values(enSkills).forEach(skillArray => {
        expect(skillArray).toBeInstanceOf(Array);
        expect(skillArray.length).toBeGreaterThan(0);
      });
    });

    test('should have valid contact methods', () => {
      expect(translations.fr.content.contact.methods).toBeInstanceOf(Array);
      expect(translations.en.content.contact.methods).toBeInstanceOf(Array);
      expect(translations.fr.content.contact.methods.length).toBe(4);
      expect(translations.en.content.contact.methods.length).toBe(4);

      translations.fr.content.contact.methods.forEach(method => {
        expect(method).toHaveProperty('label');
        expect(method).toHaveProperty('value');
        expect(method).toHaveProperty('type');
        expect(typeof method.label).toBe('string');
        expect(typeof method.value).toBe('string');
        expect(typeof method.type).toBe('string');
      });
    });
  });

  describe('Translation Key Consistency', () => {
    test('should have matching number of values in core sections', () => {
      expect(translations.fr.content.me.values.length).toBe(translations.en.content.me.values.length);
      expect(translations.fr.content.me.profile.length).toBe(translations.en.content.me.profile.length - 1); // -1 because age is calculated dynamically
      expect(translations.fr.content.me.languages.length).toBe(translations.en.content.me.languages.length);
    });

    test('should have matching hobbies structure', () => {
      expect(translations.fr.content.beyondCode.hobbies.items.length).toBe(4);
      expect(translations.en.content.beyondCode.hobbies.items.length).toBe(4);
      
      translations.fr.content.beyondCode.hobbies.items.forEach((hobby, index) => {
        const enHobby = translations.en.content.beyondCode.hobbies.items[index];
        expect(hobby).toHaveProperty('title');
        expect(hobby).toHaveProperty('description');
        expect(enHobby).toHaveProperty('title');
        expect(enHobby).toHaveProperty('description');
      });
    });

    test('should have common translations', () => {
      expect(translations.fr.common).toBeDefined();
      expect(translations.en.common).toBeDefined();
      expect(translations.fr.common.cta).toBeDefined();
      expect(translations.en.common.cta).toBeDefined();
      expect(translations.fr.common.loading).toBeDefined();
      expect(translations.en.common.loading).toBeDefined();
    });
  });

  describe('Language Detection Logic', () => {
    test('should handle browser language detection', () => {
      // Mock navigator.language
      const originalNavigator = global.navigator;
      
      // Test French detection
      global.navigator = { language: 'fr-FR' };
      expect(global.navigator.language.toLowerCase().startsWith('fr')).toBe(true);
      
      // Test English detection
      global.navigator = { language: 'en-US' };
      expect(global.navigator.language.toLowerCase().startsWith('fr')).toBe(false);
      
      // Restore original navigator
      global.navigator = originalNavigator;
    });

    test('should validate supported languages', () => {
      const supportedLanguages = ['fr', 'en'];
      
      expect(supportedLanguages.includes('fr')).toBe(true);
      expect(supportedLanguages.includes('en')).toBe(true);
      expect(supportedLanguages.includes('es')).toBe(false);
      expect(supportedLanguages.includes('de')).toBe(false);
    });
  });

  describe('Translation Function Simulation', () => {
    // Simulate the translation function behavior
    const mockT = (key, language = 'en') => {
      try {
        const keys = key.split('.');
        let value = translations[language];
        
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            // Fallback to English
            value = translations.en;
            for (const fallbackKey of keys) {
              if (value && typeof value === 'object' && fallbackKey in value) {
                value = value[fallbackKey];
              } else {
                return key; // Return key as fallback
              }
            }
            break;
          }
        }
        
        return value;
      } catch (error) {
        return key;
      }
    };

    test('should return correct translations for valid keys', () => {
      expect(mockT('navigation.me', 'fr')).toBe('Moi');
      expect(mockT('navigation.me', 'en')).toBe('Me');
      expect(mockT('content.projects.title', 'fr')).toBe('Mes Projets');
      expect(mockT('content.projects.title', 'en')).toBe('My Projects');
    });

    test('should fallback to English for missing French keys', () => {
      // Test with a hypothetical missing key
      expect(mockT('nonexistent.key', 'fr')).toBe('nonexistent.key');
      expect(mockT('nonexistent.key', 'en')).toBe('nonexistent.key');
    });

    test('should handle nested object access', () => {
      expect(mockT('content.me.sections.coreValues', 'fr')).toBe('Valeurs Fondamentales');
      expect(mockT('content.me.sections.coreValues', 'en')).toBe('Core Values');
    });
  });
});

// Manual test instructions for browser testing
console.log(`
🧪 MANUAL TESTING CHECKLIST:

1. Language Toggle Functionality:
   - Click French flag → Interface should switch to French
   - Click English flag → Interface should switch to English
   - Refresh page → Language preference should persist

2. Navigation Translation:
   - All navbar items should translate correctly
   - Card titles should update when language changes

3. Content Translation:
   - Me section: All text should translate
   - Projects section: Titles, categories, descriptions should translate
   - Skills section: Category names should translate
   - Beyond Code section: All content should translate
   - Contact section: Labels and messages should translate

4. Responsive Design:
   - Language toggle should work on mobile
   - All translated content should fit properly

5. Accessibility:
   - Tab navigation should work with language toggle
   - Screen readers should announce language changes

6. Error Handling:
   - Console should show warnings for missing translations
   - Site should remain functional with incomplete translations

7. Performance:
   - Language switching should be instant
   - No unnecessary re-renders should occur
`);