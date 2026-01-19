export type ServiceSlug = 'smm' | 'creative' | 'media-buying' | 'events';

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  socialMedia: {
    title: string;
    description: string;
    points: string[];
    cta: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  clients: {
    title: string;
  };
  contact: {
    title: string;
    fullName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    phoneCountry: string;
    companyName: string;
    submit: string;
  };
  footer: {
    copyright: string;
  };
}

type LanguageTranslations = Record<ServiceSlug, Translation>;

export const translations: Record<'en' | 'ar', LanguageTranslations> = {
  en: {
    smm: {
      hero: {
        title: 'Social Media that Drives Real Business Results',
        subtitle: 'We turn strategy, content, and consistency into measurable growth.',
        description: 'test description',
        cta: 'START NOW'
      },
      socialMedia: {
        title: 'Social Media Management',
        description: 'From content creation to analytics, we handle the day-to-day of your social media so you can focus on what you do best—running your business.',
        points: [
          'Our social media management approach integrates:',
          'Data-driven strategies with measurable results',
          'Content creation that aligns with your brand and resonates with your audience',
          'Deliver relevant, audience-first content that plans to the right platforms',
          'Increase follower engagement'
        ],
        cta: 'START NOW'
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'Creative Solutions',
            description: 'Innovative content strategies'
          },
          {
            title: 'Media Buying & Advertising',
            description: 'Targeted ad campaigns'
          },
          {
            title: 'Social Media Management & Influencers',
            description: 'Complete social presence'
          },
          {
            title: 'Events & Activations Management',
            description: 'Memorable experiences'
          }
        ]
      },
      clients: {
        title: 'Our Clients'
      },
      contact: {
        title: 'Get in touch',
        fullName: 'First name',
        lastName: 'Last name',
        emailAddress: 'Email address',
        phoneNumber: 'Phone number',
        phoneCountry: '+966',
        companyName: 'Company name',
        submit: 'Submit'
      },
      footer: {
        copyright: '© 2026 A2Z Media. Powered by A2Z Media Group. All Rights Reserved.'
      }
    },
    creative: {
      hero: {
        title: 'Creative Solutions that Transform Your Brand',
        subtitle: 'Innovative strategies that bring your vision to life.',
        description: 'Creative solutions description',
        cta: 'START NOW'
      },
      socialMedia: {
        title: 'Creative Solutions',
        description: 'We craft compelling narratives and visual identities that resonate with your audience and elevate your brand presence.',
        points: [
          'Our creative approach includes:',
          'Brand strategy and positioning',
          'Visual identity design',
          'Content creation and storytelling',
          'Campaign conceptualization'
        ],
        cta: 'START NOW'
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'Creative Solutions',
            description: 'Innovative content strategies'
          },
          {
            title: 'Media Buying & Advertising',
            description: 'Targeted ad campaigns'
          },
          {
            title: 'Social Media Management & Influencers',
            description: 'Complete social presence'
          },
          {
            title: 'Events & Activations Management',
            description: 'Memorable experiences'
          }
        ]
      },
      clients: {
        title: 'Our Clients'
      },
      contact: {
        title: 'Get in touch',
        fullName: 'First name',
        lastName: 'Last name',
        emailAddress: 'Email address',
        phoneNumber: 'Phone number',
        phoneCountry: '+966',
        companyName: 'Company name',
        submit: 'Submit'
      },
      footer: {
        copyright: '© 2026 A2Z Media. Powered by A2Z Media Group. All Rights Reserved.'
      }
    },
    'media-buying': {
      hero: {
        title: 'Media Buying & Advertising Excellence',
        subtitle: 'Strategic ad placements that maximize your ROI.',
        description: 'Media buying description',
        cta: 'START NOW'
      },
      socialMedia: {
        title: 'Media Buying & Advertising',
        description: 'We optimize your advertising spend across all channels to reach the right audience at the right time with the right message.',
        points: [
          'Our media buying services include:',
          'Multi-channel campaign management',
          'Performance tracking and optimization',
          'Audience targeting and segmentation',
          'Budget optimization strategies'
        ],
        cta: 'START NOW'
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'Creative Solutions',
            description: 'Innovative content strategies'
          },
          {
            title: 'Media Buying & Advertising',
            description: 'Targeted ad campaigns'
          },
          {
            title: 'Social Media Management & Influencers',
            description: 'Complete social presence'
          },
          {
            title: 'Events & Activations Management',
            description: 'Memorable experiences'
          }
        ]
      },
      clients: {
        title: 'Our Clients'
      },
      contact: {
        title: 'Get in touch',
        fullName: 'First name',
        lastName: 'Last name',
        emailAddress: 'Email address',
        phoneNumber: 'Phone number',
        phoneCountry: '+966',
        companyName: 'Company name',
        submit: 'Submit'
      },
      footer: {
        copyright: '© 2026 A2Z Media. Powered by A2Z Media Group. All Rights Reserved.'
      }
    },
    events: {
      hero: {
        title: 'Events & Activations that Create Lasting Impact',
        subtitle: 'Memorable experiences that connect your brand with audiences.',
        description: 'Events description',
        cta: 'START NOW'
      },
      socialMedia: {
        title: 'Events & Activations Management',
        description: 'From concept to execution, we create immersive brand experiences that engage audiences and drive meaningful connections.',
        points: [
          'Our event services include:',
          'Event planning and management',
          'Brand activations',
          'Experiential marketing',
          'Post-event analysis and reporting'
        ],
        cta: 'START NOW'
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'Creative Solutions',
            description: 'Innovative content strategies'
          },
          {
            title: 'Media Buying & Advertising',
            description: 'Targeted ad campaigns'
          },
          {
            title: 'Social Media Management & Influencers',
            description: 'Complete social presence'
          },
          {
            title: 'Events & Activations Management',
            description: 'Memorable experiences'
          }
        ]
      },
      clients: {
        title: 'Our Clients'
      },
      contact: {
        title: 'Get in touch',
        fullName: 'First name',
        lastName: 'Last name',
        emailAddress: 'Email address',
        phoneNumber: 'Phone number',
        phoneCountry: '+966',
        companyName: 'Company name',
        submit: 'Submit'
      },
      footer: {
        copyright: '© 2026 A2Z Media. Powered by A2Z Media Group. All Rights Reserved.'
      }
    }
  },
  ar: {
    smm: {
      hero: {
        title: 'وسائل التواصل الاجتماعي التي تحقق نتائج أعمال حقيقية',
        subtitle: 'نحول الاستراتيجية والمحتوى والاتساق إلى نمو قابل للقياس.',
        description: 'اختبار الوصف',
        cta: 'ابدأ الآن'
      },
      socialMedia: {
        title: 'إدارة وسائل التواصل الاجتماعي',
        description: 'من إنشاء المحتوى إلى التحليلات، نتعامل مع الأعمال اليومية لوسائل التواصل الاجتماعي الخاصة بك حتى تتمكن من التركيز على ما تفعله بشكل أفضل - إدارة عملك.',
        points: [
          'يتضمن نهج إدارة وسائل التواصل الاجتماعي لدينا:',
          'استراتيجيات قائمة على البيانات مع نتائج قابلة للقياس',
          'إنشاء محتوى يتماشى مع علامتك التجارية ويتردد صداه مع جمهورك',
          'تقديم محتوى ذي صلة يركز على الجمهور ويخطط للمنصات المناسبة',
          'زيادة تفاعل المتابعين'
        ],
        cta: 'ابدأ الآن'
      },
      services: {
        title: 'خدماتنا',
        items: [
          {
            title: 'الحلول الإبداعية',
            description: 'استراتيجيات محتوى مبتكرة'
          },
          {
            title: 'شراء الوسائط والإعلان',
            description: 'حملات إعلانية مستهدفة'
          },
          {
            title: 'إدارة وسائل التواصل الاجتماعي والمؤثرين',
            description: 'حضور اجتماعي كامل'
          },
          {
            title: 'إدارة الفعاليات والتنشيطات',
            description: 'تجارب لا تنسى'
          }
        ]
      },
      clients: {
        title: 'عملاؤنا'
      },
      contact: {
        title: 'تواصل معنا',
        fullName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        emailAddress: 'البريد الإلكتروني',
        phoneNumber: 'رقم الهاتف',
        phoneCountry: '+966',
        companyName: 'اسم الشركة',
        submit: 'إرسال'
      },
      footer: {
        copyright: '© 2025 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.'
      }
    },
    creative: {
      hero: {
        title: 'حلول إبداعية تحول علامتك التجارية',
        subtitle: 'استراتيجيات مبتكرة تجعل رؤيتك حقيقة.',
        description: 'وصف الحلول الإبداعية',
        cta: 'ابدأ الآن'
      },
      socialMedia: {
        title: 'الحلول الإبداعية',
        description: 'نصنع قصصًا مقنعة وهويات بصرية تتردد صداها مع جمهورك وترفع من حضور علامتك التجارية.',
        points: [
          'يتضمن نهجنا الإبداعي:',
          'استراتيجية العلامة التجارية وتحديد المواقع',
          'تصميم الهوية البصرية',
          'إنشاء المحتوى وسرد القصص',
          'تصور الحملات'
        ],
        cta: 'ابدأ الآن'
      },
      services: {
        title: 'خدماتنا',
        items: [
          {
            title: 'الحلول الإبداعية',
            description: 'استراتيجيات محتوى مبتكرة'
          },
          {
            title: 'شراء الوسائط والإعلان',
            description: 'حملات إعلانية مستهدفة'
          },
          {
            title: 'إدارة وسائل التواصل الاجتماعي والمؤثرين',
            description: 'حضور اجتماعي كامل'
          },
          {
            title: 'إدارة الفعاليات والتنشيطات',
            description: 'تجارب لا تنسى'
          }
        ]
      },
      clients: {
        title: 'عملاؤنا'
      },
      contact: {
        title: 'تواصل معنا',
        fullName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        emailAddress: 'البريد الإلكتروني',
        phoneNumber: 'رقم الهاتف',
        phoneCountry: '+966',
        companyName: 'اسم الشركة',
        submit: 'إرسال'
      },
      footer: {
        copyright: '© 2025 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.'
      }
    },
    'media-buying': {
      hero: {
        title: 'التميز في شراء الوسائط والإعلان',
        subtitle: 'مواضع إعلانية استراتيجية تزيد من عائد استثمارك.',
        description: 'وصف شراء الوسائط',
        cta: 'ابدأ الآن'
      },
      socialMedia: {
        title: 'شراء الوسائط والإعلان',
        description: 'نحسن إنفاقك الإعلاني عبر جميع القنوات للوصول إلى الجمهور المناسب في الوقت المناسب بالرسالة المناسبة.',
        points: [
          'تشمل خدمات شراء الوسائط لدينا:',
          'إدارة الحملات متعددة القنوات',
          'تتبع الأداء والتحسين',
          'استهداف الجمهور والتجزئة',
          'استراتيجيات تحسين الميزانية'
        ],
        cta: 'ابدأ الآن'
      },
      services: {
        title: 'خدماتنا',
        items: [
          {
            title: 'الحلول الإبداعية',
            description: 'استراتيجيات محتوى مبتكرة'
          },
          {
            title: 'شراء الوسائط والإعلان',
            description: 'حملات إعلانية مستهدفة'
          },
          {
            title: 'إدارة وسائل التواصل الاجتماعي والمؤثرين',
            description: 'حضور اجتماعي كامل'
          },
          {
            title: 'إدارة الفعاليات والتنشيطات',
            description: 'تجارب لا تنسى'
          }
        ]
      },
      clients: {
        title: 'عملاؤنا'
      },
      contact: {
        title: 'تواصل معنا',
        fullName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        emailAddress: 'البريد الإلكتروني',
        phoneNumber: 'رقم الهاتف',
        phoneCountry: '+966',
        companyName: 'اسم الشركة',
        submit: 'إرسال'
      },
      footer: {
        copyright: '© 2025 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.'
      }
    },
    events: {
      hero: {
        title: 'فعاليات وتنشيطات تخلق تأثيرًا دائمًا',
        subtitle: 'تجارب لا تنسى تربط علامتك التجارية بالجماهير.',
        description: 'وصف الفعاليات',
        cta: 'ابدأ الآن'
      },
      socialMedia: {
        title: 'إدارة الفعاليات والتنشيطات',
        description: 'من المفهوم إلى التنفيذ، نخلق تجارب علامة تجارية غامرة تشرك الجماهير وتدفع الاتصالات الهادفة.',
        points: [
          'تشمل خدمات الفعاليات لدينا:',
          'تخطيط وإدارة الفعاليات',
          'تنشيطات العلامة التجارية',
          'التسويق التجريبي',
          'تحليل وتقارير ما بعد الحدث'
        ],
        cta: 'ابدأ الآن'
      },
      services: {
        title: 'خدماتنا',
        items: [
          {
            title: 'الحلول الإبداعية',
            description: 'استراتيجيات محتوى مبتكرة'
          },
          {
            title: 'شراء الوسائط والإعلان',
            description: 'حملات إعلانية مستهدفة'
          },
          {
            title: 'إدارة وسائل التواصل الاجتماعي والمؤثرين',
            description: 'حضور اجتماعي كامل'
          },
          {
            title: 'إدارة الفعاليات والتنشيطات',
            description: 'تجارب لا تنسى'
          }
        ]
      },
      clients: {
        title: 'عملاؤنا'
      },
      contact: {
        title: 'تواصل معنا',
        fullName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        emailAddress: 'البريد الإلكتروني',
        phoneNumber: 'رقم الهاتف',
        phoneCountry: '+966',
        companyName: 'اسم الشركة',
        submit: 'إرسال'
      },
      footer: {
        copyright: '© 2025 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.'
      }
    }
  }
};
