export type ServiceSlug = "smm" | "creative" | "media-buying";

export interface Translation {
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  socialMedia: {
    title: string;
    description: string;
    points: string[];
    outcome: string;
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
  analytics: {
    title: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
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
        tagline: "Award-Winning Media Agency",
        title: "Be consistently ahead in your marketing, guided by our proven systems and real results.",
        subtitle:
          "We are your fully integrated partner, delivering results and end-to-end in-house execution supported by exceptional service.",
        description: "Reach out to us now and start seeing results!",
        cta: "Request a Free Audit",
      },
      socialMedia: {
        title: "SOCIAL MEDIA MANAGEMENT",
        description:
          "Posting consistently but not seeing real results? If your content looks good but doesn't drive leads, trust, or clear ROI, the problem isn't effort, it's structure.",
        points: [
          "How we fix it? We turn social media into a focused growth channel by:",
          "Creating content that naturally supports the sales journey.",
          "Building credibility through clear storytelling and consistent branding.",
          "Attracting the right audience, not just engagement.",
          "Increasing conversion opportunities with strategy-led execution.",
        ],
        outcome: "Social media that works for your business, not just your feed.",
        cta: "IMPROVE MY SOCIAL MEDIA PERFORMANCE",
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Creative Solutions",
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
        title: "Our Successful Clients",
      },
      analytics: {
        title: "We make your social media work harder for your business:",
        metrics: [
          {
            value: "+68%",
            label: "average engagement growth",
          },
          {
            value: "+42%",
            label: "increase in qualified inbound leads",
          },
          {
            value: "–35%",
            label: "lower cost per lead from social channels",
          },
        ],
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
        tagline: "Award-Winning Media Agency",
        title: "Be consistently ahead in your marketing guided by our proven systems and real results.",
        subtitle:
          "We are your fully integrated partner, delivering results and end-to-end in-house execution supported by exceptional service.",
        description: "Reach out to us now and start seeing results!",
        cta: "Request a Free Creative Review",
      },
      socialMedia: {
        title: "Creative & Activations",
        description:
          "Great ideas but limited real-world impact? When campaigns look impressive yet fail to engage, and events generate noise without lasting value, the challenge isn't creativity it's alignment and execution.",
        points: [
          "How we fix it? We create brand-led concepts and activations designed to translate ideas into meaningful experiences. We do this by:",
          "Setting clear creative direction from the start",
          "Developing concepts that feel authentic and intentional",
          "Designing activations that invite real participation",
          "Executing live events and on-ground activations with purpose",
        ],
        outcome: "Creative work and activations that people remember and brands benefit from long after the moment ends.",
        cta: "EXPLORE WHAT YOUR BRAND COULD ACTIVATE",
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Creative Solutions",
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
        title: "Our Successful Clients",
      },
      analytics: {
        title: "We deliver memorable experiences with lasting results",
        metrics: [
          {
            value: "+65%",
            label: "increase in audience engagement at activations",
          },
          {
            value: "+48%",
            label: "higher brand recall post-campaigns and events",
          },
          {
            value: "+40%",
            label: "uplift in footfall and interaction rates",
          },
        ],
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
        tagline: "Award-Winning Media Agency",
        title: "Be consistently ahead in your marketing guided by our proven systems and real results.",
        subtitle:
          "We are your fully integrated partner, delivering results and end-to-end in-house execution supported by exceptional service.",
        description: "Reach out to us now and start seeing results!",
        cta: "Request a Free Audit",
      },
      socialMedia: {
        title: "Media Buying",
        description:
          "Spending on ads but unsure what's actually driving results? If your ad budget is going out every month but leads are inconsistent, costs keep rising, or performance feels unpredictable, the issue isn't spend, it's strategy and optimisation.",
        points: [
          "How we fix it? We turn paid media into a controlled, performance-driven growth engine, built to deliver measurable outcomes. We do this by:",
          "Turning ad spend into qualified leads and real sales.",
          "Reaching the right audience, on the right platforms.",
          "Aligning creatives and messaging to each funnel stage.",
          "Improving performance through testing and optimisation.",
          "Delivering clear, outcome-led reporting.",
        ],
        outcome: "Paid media that's predictable, scalable, and accountable.",
        cta: "UNLOCK SMARTER MEDIA PERFORMANCE",
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Creative Solutions",
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
        title: "Our Successful Clients",
      },
      analytics: {
        title: "Performance-led media that delivered real returns",
        metrics: [
          {
            value: "+52%",
            label: "improvement in lead quality from paid media",
          },
          {
            value: "–38%",
            label: "reduction in cost per lead",
          },
          {
            value: "+47%",
            label: "increase in conversion rates from paid campaigns",
          },
        ],
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
        tagline: "وكالة إعلامية حائزة على جوائز",
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
        outcome: "وسائل تواصل اجتماعي تعمل لصالح عملك، وليس فقط لإنشاء المحتوى.",
        cta: "حسّن أداء وسائل التواصل الاجتماعي",
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
      analytics: {
        title: "نجعل وسائل التواصل الاجتماعي تعمل بجدية أكبر لعملك:",
        metrics: [
          {
            value: "+68%",
            label: "نمو متوسط في التفاعل",
          },
          {
            value: "+42%",
            label: "زيادة في العملاء المحتملين المؤهلين",
          },
          {
            value: "–35%",
            label: "انخفاض في تكلفة العميل المحتمل من قنوات التواصل الاجتماعي",
          },
        ],
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
        tagline: "وكالة إعلامية حائزة على جوائز",
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
        outcome: "أعمال إبداعية وفعاليات يتذكرها الناس وتستفيد منها العلامات التجارية لفترة طويلة بعد انتهاء اللحظة.",
        cta: "اكتشف ما يمكن أن تفعله علامتك التجارية",
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
      analytics: {
        title: "نقدم تجارب لا تُنسى بنتائج دائمة",
        metrics: [
          {
            value: "+65%",
            label: "زيادة في تفاعل الجمهور في الفعاليات",
          },
          {
            value: "+48%",
            label: "تذكر أعلى للعلامة التجارية بعد الحملات والفعاليات",
          },
          {
            value: "+40%",
            label: "ارتفاع في معدلات الحضور والتفاعل",
          },
        ],
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
        tagline: "وكالة إعلامية حائزة على جوائز",
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
        outcome: "إعلانات ممولة يمكن التنبؤ بها، قابلة للتوسع، وخاضعة للمساءلة.",
        cta: "اطلق أداء إعلاني أذكى",
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
      analytics: {
        title: "إعلانات موجهة بالأداء حققت عوائد حقيقية",
        metrics: [
          {
            value: "+52%",
            label: "تحسين في جودة العملاء المحتملين من الإعلانات المدفوعة",
          },
          {
            value: "–38%",
            label: "انخفاض في تكلفة العميل المحتمل",
          },
          {
            value: "+47%",
            label: "زيادة في معدلات التحويل من الحملات المدفوعة",
          },
        ],
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
