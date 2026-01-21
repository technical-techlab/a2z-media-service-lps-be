export type ServiceSlug = "smm" | "creative" | "media-buying";

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

export const translations: Record<"en" | "ar", LanguageTranslations> = {
  en: {
    smm: {
      hero: {
        title: "Social Media that Drives Real Business Results",
        subtitle:
          "We turn strategy, content, and consistency into measurable growth.",
        description: "Reach out to us now and start seeing results!",
        cta: "START NOW",
      },
      socialMedia: {
        title: "Social Media Management",
        description:
          "We develop strategic, creatively-led content directions that guide audiences from awareness to action, using strong storytelling, clear messaging, and consistent visual identity.",
        points: [
          "Our social media management approach is designed to:",
          "Create content that supports sales journeys naturally",
          "Build credibility and long-term brand trust through storytelling",
          "Deliver relevant, audience-first content that attracts the right attention",
          "Increase conversion opportunities",
        ],
        cta: "START NOW",
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Creative Solutions & Activations Management",
          },
          {
            title: "Social Media Management, PR & Influencers",
          },
          {
            title: "Media Buying & Performance",
          },
          {
            title: "Events & Activations Management",
          },
        ],
      },
      clients: {
        title: "Our Clients",
      },
      contact: {
        title: "Get in touch",
        fullName: "First name",
        lastName: "Last name",
        emailAddress: "Email address",
        phoneNumber: "Phone number",
        phoneCountry: "+966",
        companyName: "Company name",
        submit: "Submit",
      },
      footer: {
        copyright:
          "© 2026 A2Z Media. Powered by A2Z Media Group. All Rights Reserved.",
      },
    },
    creative: {
      hero: {
        title: "Creativity that moves people.",
        subtitle:
          "Creative visuals, direction, events conceptualization, and activations. We craft experiences that engage, inspire, and leave a lasting impact.",
        description: "Reach out to us now and start seeing results!",
        cta: "START NOW",
      },
      socialMedia: {
        title: "Creative & Activations",
        description:
          "Starting with creative direction all the way to on-ground activations and live events, we focus on experiences that feel thoughtful and true to your brand. Every move has a purpose.",
        points: [
          "Our approach is built around:",
          "Clear creative direction and strong brand alignment",
          "Creative ideas and visuals that align with brand identity",
          "Activations and events that invite real participation",
          "Concepts that guarantee real impact",
        ],
        cta: "START NOW",
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Creative Solutions & Activations Management",
          },
          {
            title: "Social Media Management, PR & Influencers",
          },
          {
            title: "Media Buying & Performance",
          },
          {
            title: "Events & Activations Management",
          },
        ],
      },
      clients: {
        title: "Our Clients",
      },
      contact: {
        title: "Get in touch",
        fullName: "First name",
        lastName: "Last name",
        emailAddress: "Email address",
        phoneNumber: "Phone number",
        phoneCountry: "+966",
        companyName: "Company name",
        submit: "Submit",
      },
      footer: {
        copyright:
          "© 2026 A2Z Media. Powered by A2Z Media Group. All Rights Reserved.",
      },
    },
    "media-buying": {
      hero: {
        title: "Paid media that actually performs.",
        subtitle:
          "Based on clear strategies, we plan, run, and optimize paid campaigns that turn spend into measurable ROI.",
        description: "Reach out to us now and start seeing results!",
        cta: "START NOW",
      },
      socialMedia: {
        title: "Media Buying",
        description:
          "We develop full-funnel media strategies that move audiences from awareness to action, utilizing smart planning, clear objectives, and continuous optimization to maximize real impact.",
        points: [
          "Our media buying approach is designed to:",
          "Develop comprehensive strategies that turn ad spend into qualified leads and measurable sales",
          "Identify & reach the right audience across platforms",
          "Align creatives and messaging with campaign goals and funnel stages",
          "Improve performance over time through testing and optimization",
          "Deliver clear & actionable reporting that connects media spend to real business outcomes",
        ],
        cta: "START NOW",
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Creative Solutions & Activations Management",
          },
          {
            title: "Social Media Management, PR & Influencers",
          },
          {
            title: "Media Buying & Performance",
          },
          {
            title: "Events & Activations Management",
          },
        ],
      },
      clients: {
        title: "Our Clients",
      },
      contact: {
        title: "Get in touch",
        fullName: "First name",
        lastName: "Last name",
        emailAddress: "Email address",
        phoneNumber: "Phone number",
        phoneCountry: "+966",
        companyName: "Company name",
        submit: "Submit",
      },
      footer: {
        copyright:
          "© 2026 A2Z Media. Powered by A2Z Media Group. All Rights Reserved.",
      },
    },
  },
  ar: {
    smm: {
      hero: {
        title: "من منصات التواصل الاجتماعي إلى نتائج حقيقية.",
        subtitle: "استراتيجية واضحة ومحتوى منتظم يؤدي إلى نتائج ملموسة.",
        description: "تواصل معنا الآن وابدأ بتحقيق النتائج!",
        cta: "ابدأ الآن",
      },
      socialMedia: {
        title: "إدارة وسائل التواصل الاجتماعي",
        description:
          "نقدم استراتيجيات محتوى مبتكرة تقود جمهورك المستهدف خطوة بخطوة، من الوعي بالعلامة التجارية إلى اتخاذ القرار، من خلال سرد قصصي قوي، رسائل واضحة، وهوية بصرية متناسقة.",
        points: [
          "يرتكز أسلوبنا في إدارة وسائل التواصل الاجتماعي على:",
          "إنتاج محتوى يدعم رحلة الشراء بشكل طبيعي",
          "بناء مصداقية وثقة طويلة الأمد مع جمهورك عبر القصص الأصيلة",
          "تقديم محتوى ملائم لكل منصة ليجذب الانتباه الصحيح",
          "زيادة فرص اتخاذ القرار وتحقيق نتائج ملموسة",
        ],
        cta: "ابدأ الآن",
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "الحلول الإبداعية",
          },
          {
            title: "شراء الوسائط والإعلان",
          },
          {
            title: "إدارة وسائل التواصل الاجتماعي والمؤثرين",
          },
          {
            title: "إدارة الأنشطة والفعاليات",
          },
        ],
      },
      clients: {
        title: "عملاؤنا",
      },
      contact: {
        title: "تواصل معنا",
        fullName: "الاسم الأول",
        lastName: "اسم العائلة",
        emailAddress: "البريد الإلكتروني",
        phoneNumber: "رقم الهاتف",
        phoneCountry: "+966",
        companyName: "اسم الشركة",
        submit: "إرسال",
      },
      footer: {
        copyright:
          "© 2025 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.",
      },
    },
    creative: {
      hero: {
        title: "أفكار وتجارب تُلهم وتبقى.",
        subtitle:
          "أفكار، تصاميم إبداعية، وفعاليات، تكوّن تجارب مميزة تترك بصمة حقيقية عند جمهورك.",
        description: "تواصل معنا الآن وابدأ بتحقيق النتائج!",
        cta: "ابدأ الآن",
      },
      socialMedia: {
        title: "التصاميم الإبداعية والفعاليات",
        description:
          "نقدم تصاميم إبداعية مع التوجيه اللازم بجاني الأنشطة والفعاليات، مع التركيز على خلق تجارب مدروسة تتماشى مع هوية علامتك التجارية. كل خطوة بهدف واضح.",
        points: [
          "يعتمد أسلوبنا الإبداعي على:",
          "توجيه إبداعي واضح ومتسق مع هوية العلامة التجارية",
          "أفكار وتصاميم مبتكرة تعكس هوية العلامة التجارية",
          "فعاليات وتجارب تجذب الجمهور المستهدف للمشاركة",
          "أفكار متكاملة تضمن تحقيق أثر ملموس",
        ],
        cta: "ابدأ الآن",
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "الحلول الإبداعية",
          },
          {
            title: "شراء الوسائط والإعلان",
          },
          {
            title: "إدارة وسائل التواصل الاجتماعي والمؤثرين",
          },
          {
            title: "إدارة الأنشطة والفعاليات",
          },
        ],
      },
      clients: {
        title: "عملاؤنا",
      },
      contact: {
        title: "تواصل معنا",
        fullName: "الاسم الأول",
        lastName: "اسم العائلة",
        emailAddress: "البريد الإلكتروني",
        phoneNumber: "رقم الهاتف",
        phoneCountry: "+966",
        companyName: "اسم الشركة",
        submit: "إرسال",
      },
      footer: {
        copyright:
          "© 2025 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.",
      },
    },
    "media-buying": {
      hero: {
        title: "حملات إعلانية مدفوعة تحقق أهدافك.",
        subtitle:
          "باستراتيجيات واضحة، نخطط، نشغّل، ونعدّل الحملات باستمرار لضمان أن كل ريال يُساهم في نتائج حقيقية ملموسة.",
        description: "تواصل معنا الآن وابدأ بتحقيق النتائج!",
        cta: "ابدأ الآن",
      },
      socialMedia: {
        title: "الإعلانات الممولة وتحسين الأداء",
        description:
          "نقدم استراتيجيات إعلانية شاملة تدفع جمهورك المستهدف إلى اتخاذ القرار، باستخدام تخطيط ذكي، أهداف واضحة، وتحسين مستمر لضمان تأثير حقيقي وملموس.",
        points: [
          "  يركز أسلوبنا في الإعلانات الممولة على:",
          "تطوير استراتيجيات متكاملة للوصول إلى عملاء محتملين ومبيعات قابلة للقياس",
          "تحديد الجمهور المناسب والوصول إليه عبر جميع المنصات",
          "مواءمة الإعلانات والرسائل مع أهداف الحملة ومراحل رحلة العميل",
          "تحسين الأداء بشكل مستمر من خلال الاختبار والتعديل",
          "تقديم تقارير واضحة وقابلة للتنفيذ تربط الإعلانات الممولة بالنتائج الحقيقية لأعمالك",
        ],
        cta: "ابدأ الآن",
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "الحلول الإبداعية",
          },
          {
            title: "شراء الوسائط والإعلان",
          },
          {
            title: "إدارة وسائل التواصل الاجتماعي والمؤثرين",
          },
          {
            title: "إدارة الأنشطة والفعاليات",
          },
        ],
      },
      clients: {
        title: "عملاؤنا",
      },
      contact: {
        title: "تواصل معنا",
        fullName: "الاسم الأول",
        lastName: "اسم العائلة",
        emailAddress: "البريد الإلكتروني",
        phoneNumber: "رقم الهاتف",
        phoneCountry: "+966",
        companyName: "اسم الشركة",
        submit: "إرسال",
      },
      footer: {
        copyright:
          "© 2025 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.",
      },
    },
  },
};
