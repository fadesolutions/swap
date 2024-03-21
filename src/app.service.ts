import { Injectable } from '@nestjs/common';
import { I18n, I18nContext, I18nService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) { }

  getHello(): string {
    const m = this.i18n.t('keywords.message');
    console.log(m);

    return `${m}`;
    return 'Hello World!';
  }
}
