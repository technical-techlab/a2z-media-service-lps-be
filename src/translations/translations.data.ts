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
          "Posting consistently but not seeing real results?\n\nIf your content looks good but doesn't drive leads, trust, or clear ROI, the problem isn't effort, it's structure.",
        points: [
          "How we fix it?\n\nWe turn social media into a focused growth channel by:",
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
          "Great ideas but limited real-world impact?\n\nWhen campaigns look impressive yet fail to engage, and events generate noise without lasting value, the challenge isn't creativity it's alignment and execution.",
        points: [
          "How we fix it?\n\nWe create brand-led concepts and activations designed to translate ideas into meaningful experiences. We do this by:",
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
          "Spending on ads but unsure what's actually driving results?\n\nIf your ad budget is going out every month but leads are inconsistent, costs keep rising, or performance feels unpredictable, the issue isn't spend, it's strategy and optimisation.",
        points: [
          "How we fix it?\n\nWe turn paid media into a controlled, performance-driven growth engine, built to deliver measurable outcomes. We do this by:",
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
        tagline: "وكالة حائزة على جوائز محلية وإقليمية",
        title: "عزز حضورك بخطط واستراتيجيات مجرّبة، مدروسة، وواضحة.",
        subtitle:
          "فريق واحد يتولى العمل بالكامل، من الفكرة حتى التنفيذ، مع الالتزام بجودة الخدمة وتحقيق نتائج تتجاوز التوقعات.",
        description: "تواصل معنا لنبدأ بتحقيق نتائج ملموسة.",
        cta: "احجز استشارتك التسويقية الآن!",
      },
      socialMedia: {
        title: "إدارة وسائل التواصل الاجتماعي",
        description:
          "الانتظام في النشر وحده لا يضمن لك النتائج؛ التحدي الحقيقي هو تحويل هذا الظهور إلى ثقة، ثم إلى قرار. في كثير من الأحيان، يبدو المحتوى قويًا من الخارج، لكنه لا ينعكس على نمو الحساب، أو زيادة العملاء المحتملين، أو تحقيق عائد واضح. المسألة ليست في \"كثرة النشر\"… بل في غياب منهجية صحيحة تربط المحتوى بأهداف عملك.",
        points: [
          "كيف نغيّر ذلك؟\n\nنعمل على إعادة تنظيم دور وسائل التواصل الاجتماعي ضمن منظومة التسويق من خلال:",
          "محتوى مرتبط بأهداف العمل ويدعم مسار العميل.",
          "رسائل واضحة وهوية متسقة تعزز المصداقية.",
          "استهداف دقيق يركّز على الجمهور الأكثر ارتباطًا بالعلامة.",
          "اتباع استراتيجية فعالة تزيد من فرص التحويل وتحقق نتائج قابلة للقياس.",
        ],
        outcome: "إدارة محتوى مدروسة تدعم نمو أعمالك.",
        cta: "طوّر أداء منصاتك",
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "الحلول الإبداعية",
          },
          {
            title: "الإعلانات الرقمية والحملات المدفوعة",
          },
          {
            title: "إدارة وسائل التواصل الاجتماعي، العلاقات العامة، والتسويق عبر المؤثرين",
          },
          {
            title: "إدارة الفعاليات",
          },
        ],
      },
      clients: {
        title: "عملاؤنا الناجحون",
      },
      analytics: {
        title: "نجعل وسائل التواصل الاجتماعي تعمل بجدية أكبر لعملك:",
        metrics: [
          {
            value: "+68%",
            label: "زيادة في معدلات التفاعل",
          },
          {
            value: "+42%",
            label: "زيادة في عدد العملاء المحتملين",
          },
          {
            value: "–35%",
            label: "قلة في تكلفة العميل المحتمل عبر منصات التواصل الاجتماعي",
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
          "© 2026 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.",
      },
    },
    creative: {
      hero: {
        tagline: "وكالة حائزة على جوائز محلية وإقليمية",
        title: "عزز حضورك بخطط واستراتيجيات مجرّبة، مدروسة، وواضحة.",
        subtitle:
          "فريق واحد يتولى العمل بالكامل، من الفكرة حتى التنفيذ، مع التزام بجودة الخدمة وتحقيق نتائج تتجاوز التوقعات.",
        description: "تواصل معنا لنبدأ بتحقيق نتائج ملموسة.",
        cta: "اطلب تقييمًا إبداعيًا مجانيًا!",
      },
      socialMedia: {
        title: "التصاميم الإبداعية والفعاليات",
        description:
          "الأفكار قوية لكن تأثيرها على أرض الواقع محدود؟\n\nحين تبدو الحملات جذابة بصريًا دون تفاعل فعلي، وتُحدث الفعاليات ضجة مؤقتة بلا قيمة مستدامة، فالتحدي ليس في الإبداع، بل في وضوح الرؤية وجودة التنفيذ.",
        points: [
          "كيف نغيّر ذلك؟\n\nنطوّر مفاهيم وتجارب تقودها رؤيتك، مصمّمة لتحويل الأفكار إلى تجارب مؤثرة وذات معنى. ونحقق ذلك من خلال:",
          "تحديد توجه إبداعي واضح منذ البداية.",
          "تطوير مفاهيم أصيلة تعكس هويتك.",
          "تصميم تجارب تحفّز المشاركة الحقيقية.",
          "تنفيذ الفعاليات باحتراف ولغرض واضح.",
        ],
        outcome: "أعمال إبداعية وأفكار تتحول لتجارب واقعية تصنع ارتباط قوي مع العملاء، وتحقق قيمة حقيقية للعلامات التجارية حتى بعد انتهاء الفعالية.",
        cta: "اكتشف كيف نُفعِّل قوة علامتك",
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "الحلول الإبداعية",
          },
          {
            title: "الإعلانات الرقمية والحملات المدفوعة",
          },
          {
            title: "إدارة وسائل التواصل الاجتماعي، العلاقات العامة، والتسويق عبر المؤثرين",
          },
          {
            title: "إدارة الفعاليات",
          },
        ],
      },
      clients: {
        title: "عملاؤنا",
      },
      analytics: {
        title: "أرقام تعكس طبيعة عملنا",
        metrics: [
          {
            value: "+65%",
            label: "في تفاعل الجمهور خلال الفعاليات",
          },
          {
            value: "+48%",
            label: "في تذكّر العلامة التجارية بعد الحملات والفعاليات",
          },
          {
            value: "+40%",
            label: "في معدلات الحضور والتفاعل",
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
          "© 2026 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.",
      },
    },
    "media-buying": {
      hero: {
        tagline: "وكالة حائزة على جوائز محلية وإقليمية",
        title: "عزز حضورك بخطط واستراتيجيات مجرّبة، مدروسة، وواضحة.",
        subtitle:
          "فريق واحد يتولى العمل بالكامل، من الفكرة حتى التنفيذ، مع الالتزام بجودة الخدمة وتحقيق نتائج تتجاوز التوقعات.",
        description: "تواصل معنا لنبدأ بتحقيق نتائج ملموسة.",
        cta: "ابدأ الآن!",
      },
      socialMedia: {
        title: "الإعلانات الرقمية والمدفوعة",
        description:
          "تستثمر في الإعلانات، لكن النتائج غير واضحة؟\n\nعندما تُصرف الميزانيات دون استقرار في عدد العملاء المحتملين، مع ارتفاع التكلفة واضطراب الأداء، فالمشكلة لا تكمن في معدّل الصرف، بل في غياب الاستراتيجية والتحسين الفعّال.",
        points: [
          "كيف نغيّر المعادلة؟\n\nنحوّل الإعلانات المدفوعة إلى منظومة مُحكمة التخطيط قائمة على الأداء، وتحقق نتائج ملموسة يمكن قياسها.",
          "تحويل ميزانيتك إلى عملاء محتملين مؤهلين ونتائج ملموسة.",
          "الوصول للجمهور الصحيح بدقة، من خلال المنصات المناسبة.",
          "توحيد الرسالة والجانب الإبداعي لخدمة هدف كل مرحلة.",
          "تحسين النتائج من خلال الاختبارات وإجراء التعديلات اللازمة لكل مرحلة.",
          "تقارير مفصلة وواضحة تركّز على النتائج.",
        ],
        outcome: "حملات إعلانية ناجحة، تحكّم أفضل في الميزانية، وأداء ثابت.",
        cta: "حسن نتائج إعلاناتك الآن",
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "الحلول الإبداعية",
          },
          {
            title: "الإعلانات الرقمية والحملات المدفوعة",
          },
          {
            title: "إدارة وسائل التواصل الاجتماعي، العلاقات العامة، والتسويق عبر المؤثرين.",
          },
          {
            title: "إدارة الفعاليات",
          },
        ],
      },
      clients: {
        title: "عملاؤنا",
      },
      analytics: {
        title: "نتائج مبنية على الأداء بعوائد واضحة",
        metrics: [
          {
            value: "+52%",
            label: "في جودة العملاء المحتملين من الحملات المدفوعة",
          },
          {
            value: "–38%",
            label: "في تكلفة العميل المحتمل",
          },
          {
            value: "+47%",
            label: "في معدلات التحويل",
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
          "© 2026 A2Z ميديا. مدعوم من A2Z ميديا جروب. جميع الحقوق محفوظة.",
      },
    },
  },
};
