import { Injectable } from '@nestjs/common';
import { translations, Translation, ServiceSlug } from './translations.data';

@Injectable()
export class TranslationsService {
  getTranslations(language: 'en' | 'ar', service: ServiceSlug): Translation {
    const lang = language === 'ar' ? 'ar' : 'en';
    const serviceSlug = this.isValidService(service) ? service : 'smm';
    return translations[lang][serviceSlug];
  }

  private isValidService(service: string): service is ServiceSlug {
    return ['smm', 'creative', 'media-buying', 'events'].includes(service);
  }
}
