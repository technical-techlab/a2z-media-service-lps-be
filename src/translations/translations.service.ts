import { Injectable } from '@nestjs/common';
import { translations, Translation, ServiceSlug } from './translations.data';

@Injectable()
export class TranslationsService {
  getTranslations(language: 'en' | 'ar', service: ServiceSlug, country: 'qa' | 'sa' = 'qa'): Translation {
    const lang = language === 'ar' ? 'ar' : 'en';
    const serviceSlug = this.isValidService(service) ? service : 'smm';
    const countrySlug = country === 'sa' ? 'sa' : 'qa';
    
    const baseTranslation = translations[lang][serviceSlug];
    
    // Resolve country-specific fields
    return {
      ...baseTranslation,
      hero: {
        ...baseTranslation.hero,
        tagline: typeof baseTranslation.hero.tagline === 'object' 
          ? baseTranslation.hero.tagline[countrySlug] 
          : baseTranslation.hero.tagline,
        title: typeof baseTranslation.hero.title === 'object' 
          ? baseTranslation.hero.title[countrySlug] 
          : baseTranslation.hero.title,
      },
    };
  }

  private isValidService(service: string): service is ServiceSlug {
    return ['smm', 'creative', 'media-buying', 'events'].includes(service);
  }
}
