import { Controller, Get, Query } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { ServiceSlug } from './translations.data';

@Controller('api/translations')
export class TranslationsController {
  constructor(private readonly translationsService: TranslationsService) {}

  @Get()
  getTranslations(
    @Query('language') language: 'en' | 'ar',
    @Query('service') service: ServiceSlug
  ) {
    const lang = language === 'ar' ? 'ar' : 'en';
    const serviceSlug = service || 'smm';
    return this.translationsService.getTranslations(lang, serviceSlug);
  }
}
