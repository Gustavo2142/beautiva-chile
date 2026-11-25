export interface TreatmentItem {
  name: string;
  priceClp: number;
  priceNote?: string;
  duration: string;
  summary: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  image: string;
  startingPriceClp: number;
  description: string;
  treatments: TreatmentItem[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  registry: string;
  experience: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  spanClass: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  commune: string;
  procedure: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  image: string;
  excerpt: string;
  readTime: string;
  sections: {
    heading?: string;
    paragraphs?: string[];
    bullets?: { label?: string; text: string }[];
  }[];
}

export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  commune: string;
  phone: string;
  phoneHref: string;
  email: string;
  hoursWeek: string;
  hoursSaturday: string;
  hoursSunday: string;
}

export function formatClp(amount: number): string {
  return `$${amount.toLocaleString("es-CL")} CLP`;
}

export const CLINIC_INFO = {
  brandName: "Beautiva Chile",
  promoBadge: "Promoción",
  promoText:
    "20% DCTO en tu primera evaluación facial y toxina botulínica — válido este mes",
  phoneDisplay: "+56 9 8420 3150",
  phoneHref: "tel:+56984203150",
  whatsappHref:
    "https://wa.me/56984203150?text=Hola%20Beautiva%20Chile%2C%20quisiera%20agendar%20una%20evaluaci%C3%B3n%20m%C3%A9dica.",
  email: "contacto@beautivachile.cl",
};

export const NAV_LINKS = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Galería", href: "/#galeria" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Preguntas", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
];

export const HERO_SLIDES = [
  {
    src: "/images/hero-1.jpg",
    alt: "Especialista realizando tratamiento de rejuvenecimiento facial en Beautiva Chile",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Evaluación estética personalizada en clínica de Santiago",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Atención médica estética de alta precisión en Beautiva Chile",
  },
];

export const PARTNER_LOGOS = [
  { name: "Allergan Aesthetics", subtitle: "Insumos Certificados" },
  { name: "Galderma Chile", subtitle: "Dermatología Médica" },
  { name: "Merz Aesthetics", subtitle: "Bioestimulación" },
  { name: "SOCHICIR", subtitle: "Cirugía Plástica" },
  { name: "ISP Chile", subtitle: "Registro Sanitario" },
  { name: "Webpay Plus", subtitle: "Hasta 12 Cuotas" },
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: "experts",
    title: "Médicos Acreditados",
    description:
      "Cirujanos plásticos y médicos estéticos inscritos en la Superintendencia de Salud, con formación continua internacional.",
  },
  {
    id: "care",
    title: "Acompañamiento Integral",
    description:
      "Desde el diagnóstico facial o corporal hasta tus controles post-procedimiento, te acompañamos en cada etapa.",
  },
  {
    id: "results",
    title: "Resultados Naturales",
    description:
      "Protocolos personalizados con insumos aprobados por el ISP para realzar tus facciones sin perder tu expresión.",
  },
];

export const CLINIC_STATS = [
  {
    value: 18,
    prefix: "+",
    suffix: ".000",
    label: "Procedimientos realizados con foco en seguridad y naturalidad",
  },
  {
    value: 15,
    prefix: "+",
    suffix: " Años",
    label: "De trayectoria clínica en Providencia y Vitacura",
  },
  {
    value: 25,
    prefix: "+",
    suffix: "",
    label: "Especialistas y profesionales de la salud estética",
  },
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "rejuvenecimiento-facial",
    number: "01",
    title: "Rejuvenecimiento Facial",
    shortTitle: "Rejuvenecimiento Facial",
    image: "/images/service-1.jpg",
    startingPriceClp: 85000,
    description:
      "Tratamientos médicos mínimamente invasivos para suavizar líneas de expresión, devolver luminosidad y estimular colágeno propio.",
    treatments: [
      {
        name: "Limpieza Facial Médica Hydrafacial",
        priceClp: 85000,
        duration: "50 min",
        summary:
          "Higienización profunda, microdermoabrasión hidroactiva e infusión de antioxidantes.",
      },
      {
        name: "Toxina Botulínica 3 Zonas (Frente, Entrecejo, Patas de Gallo)",
        priceClp: 240000,
        duration: "30 min",
        summary:
          "Aplicación médica precisa con control a los 14 días incluido sin costo.",
      },
      {
        name: "Bioestimulador de Colágeno (Sculptra / Radiesse)",
        priceClp: 480000,
        duration: "45 min",
        summary:
          "Recupera firmeza y densidad dérmica progresiva con efecto natural por hasta 24 meses.",
      },
      {
        name: "Láser CO2 Fraccionado Facial",
        priceClp: 360000,
        duration: "60 min",
        summary:
          "Renovación cutánea para textura, poros dilatados, manchas solares y cicatrices.",
      },
    ],
  },
  {
    id: "cirugia-mamaria",
    number: "02",
    title: "Cirugía Mamaria",
    shortTitle: "Cirugía Mamaria",
    image: "/images/service-2.jpg",
    startingPriceClp: 3490000,
    description:
      "Procedimientos quirúrgicos en pabellones acreditados por la Seremi de Salud, con implantes certificados y seguimiento postoperatorio completo.",
    treatments: [
      {
        name: "Evaluación Quirúrgica con Simulación 3D",
        priceClp: 45000,
        priceNote: "Abonable al procedimiento",
        duration: "45 min",
        summary:
          "Consulta con cirujano plástico acreditado, toma de medidas y proyección volumétrica.",
      },
      {
        name: "Mamoplastía de Aumento",
        priceClp: 3490000,
        priceNote: "Desde (todo incluido)",
        duration: "Pabellón ambulatorio / 1 noche",
        summary:
          "Implantes de última generación con pabellón, anestesista, sostén clínico y controles.",
      },
      {
        name: "Mastopexia (Levantamiento Mamario)",
        priceClp: 3890000,
        priceNote: "Desde",
        duration: "2 a 3 hrs",
        summary:
          "Reposicionamiento y firmeza mamaria con o sin implantes según evaluación médica.",
      },
      {
        name: "Reducción Mamaria",
        priceClp: 4150000,
        priceNote: "Desde",
        duration: "2,5 a 3 hrs",
        summary:
          "Alivio postural y proporcionalidad armónica con seguimiento kinésico postoperatorio.",
      },
    ],
  },
  {
    id: "armonizacion-labios",
    number: "03",
    title: "Armonización & Labios",
    shortTitle: "Armonización & Labios",
    image: "/images/service-3.jpg",
    startingPriceClp: 260000,
    description:
      "Diseño facial con ácido hialurónico de alta reticulación para equilibrar perfil, proyectar labios e hidratar sin sobrecargar.",
    treatments: [
      {
        name: "Perfilado e Hidratación Labial (1 ml)",
        priceClp: 260000,
        duration: "40 min",
        summary:
          "Ácido hialurónico específico para labios suaves, definidos y proporcionados.",
      },
      {
        name: "Rinomodelación con Ácido Hialurónico",
        priceClp: 290000,
        duration: "35 min",
        summary:
          "Corrección sutil de dorso y proyección de punta nasal sin cirugía ni reposo.",
      },
      {
        name: "Relleno de Ojeras (Redensity II)",
        priceClp: 295000,
        duration: "35 min",
        summary:
          "Atenúa el surco y aspecto cansado respetando la anatomía periocular.",
      },
      {
        name: "Armonización Facial Full Face (3 jeringas)",
        priceClp: 720000,
        duration: "60 min",
        summary:
          "Plan personalizado de pómulos, mentón y ángulo mandibular en una sesión.",
      },
    ],
  },
  {
    id: "contorno-corporal",
    number: "04",
    title: "Contorno Corporal",
    shortTitle: "Contorno Corporal",
    image: "/images/service-4.jpg",
    startingPriceClp: 180000,
    description:
      "Tecnología médica no invasiva y cirugía de alta definición para modelar cintura, abdomen y flancos con recuperación guiada.",
    treatments: [
      {
        name: "Enzimas Recombinantes / Lipolíticos Localizados",
        priceClp: 180000,
        priceNote: "Por sesión",
        duration: "30 min",
        summary:
          "Reducción focalizada de adiposidad en papada, abdomen bajo o flancos.",
      },
      {
        name: "Criolipólisis Médica 360° (2 zonas)",
        priceClp: 220000,
        duration: "60 min",
        summary:
          "Eliminación controlada de tejido adiposo mediante frío sin incisiones.",
      },
      {
        name: "Lipoescultura HD con Tecnología VASER",
        priceClp: 3290000,
        priceNote: "Desde",
        duration: "Pabellón + 10 drenajes",
        summary:
          "Definición de contorno corporal con equipo quirúrgico certificado y kinesiología incluida.",
      },
      {
        name: "Abdominoplastía Completa",
        priceClp: 4190000,
        priceNote: "Desde",
        duration: "Pabellón + hospitalización",
        summary:
          "Corrección de diástasis abdominal y excedente cutáneo para un abdomen firme.",
      },
    ],
  },
];

export const TEAM_MEMBERS: Specialist[] = [
  {
    id: "camila-valdivia",
    name: "Dra. Camila Valdivia",
    role: "Dermatóloga Estética",
    registry: "Reg. SIS N° 314.820 · U. de Chile",
    experience: "12 años de experiencia clínica",
    bio: "Especialista en rejuvenecimiento facial, láser médico y protocolos de bioestimulación cutánea.",
    image: "/images/team-1.jpg",
  },
  {
    id: "valentina-soto",
    name: "Dra. Valentina Soto",
    role: "Cirujana Plástica",
    registry: "CONACEM · Miembro SOCHICIR",
    experience: "15 años en cirugía estética",
    bio: "Dedicada a cirugía mamaria y contorno corporal HD con foco en seguridad perioperatoria.",
    image: "/images/team-2.jpg",
  },
  {
    id: "francisca-munoz",
    name: "Dra. Francisca Muñoz",
    role: "Medicina Estética Facial",
    registry: "Reg. SIS N° 402.195 · P. U. Católica",
    experience: "9 años en armonización facial",
    bio: "Experta en toxina botulínica, ácido hialurónico y diseño facial armónico sin exceso de volumen.",
    image: "/images/team-3.jpg",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery-1.jpg",
    alt: "Evaluación facial con marcación anatómica previa a procedimiento",
    title: "Planificación Anatómica Facial",
    category: "Diagnóstico",
    spanClass: "md:col-span-4 md:row-span-1",
  },
  {
    id: "g2",
    src: "/images/service-1.jpg",
    alt: "Comparativa de luminosidad y textura cutánea antes y después",
    title: "Antes y Después: Rejuvenecimiento",
    category: "Resultados",
    spanClass: "md:col-span-4 md:row-span-2",
  },
  {
    id: "g3",
    src: "/images/gallery-3.jpg",
    alt: "Sesión de tratamiento facial hidratante en box clínico",
    title: "Hidratación Profunda & Spa Médico",
    category: "Cuidado Facial",
    spanClass: "md:col-span-4 md:row-span-1",
  },
  {
    id: "g4",
    src: "/images/gallery-4.jpg",
    alt: "Aplicación de tecnología láser facial con protección ocular",
    title: "Tecnología Láser de Precisión",
    category: "Equipamiento",
    spanClass: "md:col-span-4 md:row-span-1",
  },
  {
    id: "g5",
    src: "/images/service-3.jpg",
    alt: "Perfilado labial con ácido hialurónico de alta precisión",
    title: "Armonización y Perfilado Labial",
    category: "Inyectables",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "g6",
    src: "/images/gallery-6.jpg",
    alt: "Tratamiento estético facial con ultrasonido focalizado",
    title: "Tensor Facial No Invasivo",
    category: "Tecnología",
    spanClass: "md:col-span-2 md:row-span-1",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "El equipo de Beautiva en Providencia es increíble. Desde la evaluación hasta el control a las dos semanas todo fue claro y cercano. Mi piel nunca se había visto tan luminosa.",
    author: "Sofía M.",
    commune: "Providencia",
    procedure: "Hydrafacial + Toxina Botulínica",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Tenía susto de que mis labios quedaran exagerados, pero la doctora escuchó exactamente lo que buscaba. El resultado fue súper sutil y natural.",
    author: "Javiera R.",
    commune: "Las Condes",
    procedure: "Perfilado Labial",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Excelente atención en la sede de Vitacura. Me explicaron cada paso, los valores en pesos sin sorpresas y pude pagar en 6 cuotas sin interés.",
    author: "Tomás V.",
    commune: "Vitacura",
    procedure: "Rinomodelación",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Me realicé bioestimuladores de colágeno y a los dos meses mis amigas me preguntaban qué crema estaba usando. Se nota la calidad médica.",
    author: "Catalina A.",
    commune: "Ñuñoa",
    procedure: "Bioestimuladores",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "El postoperatorio con kinesiología incluida marcó la diferencia. Me sentí acompañada desde el primer día hasta el alta médica.",
    author: "Valentina P.",
    commune: "Lo Barnechea",
    procedure: "Contorno Corporal",
    avatar: "/images/avatar-5.jpg",
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    number: "1",
    question: "¿Qué diferencia hay entre medicina estética y cirugía plástica?",
    answer:
      "La medicina estética agrupa procedimientos mínimamente invasivos y ambulatorios (como toxina botulínica, ácido hialurónico o láser) que no requieren pabellón ni reposo prolongado. La cirugía plástica aborda cambios estructurales en pabellón acreditado, como cirugía mamaria o abdominoplastía.",
  },
  {
    number: "2",
    question: "¿Estos procedimientos tienen cobertura por Fonasa o Isapre?",
    answer:
      "Los tratamientos netamente estéticos son electivos y no cuentan con bonificación de Fonasa ni Isapre. En casos con indicación médica reconstructiva (por ejemplo, gigantomastia sintomática o secuelas traumáticas), nuestro equipo emite informes para evaluación de cobertura según tu plan.",
  },
  {
    number: "3",
    question: "¿Cómo funcionan los medios de pago y cuotas sin interés?",
    answer:
      "Aceptamos transferencia bancaria, tarjetas de débito (Redcompra) y tarjetas de crédito vía Webpay Plus hasta en 12 cuotas sin interés según convenio de tu banco. Todos nuestros presupuestos se entregan cerrados en pesos chilenos (CLP).",
  },
  {
    number: "4",
    question: "¿Son seguros los insumos que utilizan en inyectables?",
    answer:
      "Sí. Trabajamos exclusivamente con marcas originales aprobadas por el Instituto de Salud Pública de Chile (ISP), trazabilidad por lote y aplicación directa realizada únicamente por médicos acreditados.",
  },
  {
    number: "5",
    question: "¿La evaluación inicial tiene costo y cuánto dura?",
    answer:
      "La evaluación facial de medicina estética tiene un valor promocional de $25.000 CLP (100% abonables si realizas tu tratamiento dentro de los 30 días siguientes). La evaluación quirúrgica con simulación 3D tiene un valor de $45.000 CLP, también abonables al procedimiento.",
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "belleza-natural-medicina-estetica",
    title: "Cómo la medicina estética actual realza tu belleza natural",
    date: "29 mar 2025",
    categories: ["Tratamientos", "Bienestar"],
    image: "/images/blog-1.jpg",
    excerpt:
      "Hoy la tendencia en Chile deja atrás los excesos: priorizamos armonía facial, prevención del envejecimiento y resultados imperceptibles.",
    readTime: "4 min de lectura",
    sections: [
      {
        heading: "Introducción",
        paragraphs: [
          "En los últimos años, la medicina estética en Chile ha vivido un cambio profundo: ya no se busca transformar los rasgos ni borrar toda expresión, sino acompañar el paso del tiempo con frescura, proporción y salud cutánea.",
        ],
      },
      {
        heading: "1. Menos volumen, mejor calidad de piel",
        bullets: [
          {
            text: "El enfoque actual combina bioestimuladores de colágeno con dosis precisas de toxina botulínica.",
          },
          {
            text: "Cada rostro tiene proporciones únicas que se respetan en la evaluación previa.",
          },
          {
            text: "Los resultados graduales permiten volver al trabajo el mismo día sin cambios bruscos.",
          },
        ],
      },
      {
        heading: "2. Tratamientos más solicitados en Santiago",
        bullets: [
          {
            label: "Toxina Botulínica Preventiva:",
            text: "suaviza líneas de expresión en frente y entrecejo manteniendo la naturalidad al hablar.",
          },
          {
            label: "Ácido Hialurónico de Baja Densidad:",
            text: "hidrata labios y atenúa ojeras sin aportar peso innecesario.",
          },
          {
            label: "Bioestimuladores:",
            text: "activan la producción propia de colágeno tipo I y III para recuperar firmeza.",
          },
        ],
      },
      {
        heading: "Conclusión",
        paragraphs: [
          "Elegir una clínica acreditada ante la Seremi de Salud y conversar expectativas reales con tu médico tratante es la clave para sentirte más cómoda y segura en tu propia piel.",
        ],
      },
    ],
  },
  {
    slug: "tratamientos-sin-cirugia-luminosidad",
    title: "Tratamientos no quirúrgicos para recuperar la luminosidad del rostro",
    date: "22 mar 2025",
    categories: ["Cuidado Facial", "Tratamientos"],
    image: "/images/blog-2.jpg",
    excerpt:
      "Conoce las opciones ambulatorias sin pabellón ni incapacidad para combatir piel opaca, manchas solares y deshidratación.",
    readTime: "3 min de lectura",
    sections: [
      {
        paragraphs: [
          "La radiación UV de Santiago, la contaminación urbana y el estrés diario apagan progresivamente la luminosidad facial. Hoy existen protocolos médicos sin cirugía capaces de revitalizar la piel en menos de una hora.",
        ],
      },
      {
        heading: "Opciones destacadas en consulta",
        bullets: [
          {
            label: "Hydrafacial Médico:",
            text: "limpieza profunda e infusión de ácido hialurónico y péptidos en una sola sesión de 50 minutos.",
          },
          {
            label: "Skinboosters:",
            text: "microinyecciones de hidratación profunda que mejoran la elasticidad de mejillas, cuello y escote.",
          },
          {
            label: "Láser Fraccionado Suave:",
            text: "unifica el tono, atenúa manchas post-verano y afina la textura de los poros.",
          },
        ],
      },
      {
        paragraphs: [
          "Complementar estos procedimientos con fotoprotección diaria FPS 50+ multiplica la duración de los resultados durante todo el año.",
        ],
      },
    ],
  },
  {
    slug: "cuidados-piel-santiago-guia",
    title: "Cómo mantener un rostro fresco y firme con protocolos preventivos",
    date: "12 feb 2025",
    categories: ["Bienestar", "Cuidado Facial"],
    image: "/images/gallery-6.jpg",
    excerpt:
      "La constancia y la combinación inteligente de tecnologías médicas evitan procedimientos invasivos en el futuro.",
    readTime: "4 min de lectura",
    sections: [
      {
        heading: "Prevención antes que corrección",
        paragraphs: [
          "A partir de los 28–30 años disminuye naturalmente nuestra síntesis de colágeno. Actuar de forma preventiva con dosis conservadoras permite mantener la firmeza facial sin cambiar tu identidad.",
        ],
      },
      {
        heading: "Tecnología al servicio de la firmeza",
        bullets: [
          {
            label: "Radiofrecuencia y Ultrasonido:",
            text: "tensan planos profundos estimulando neocolagénesis sin marcas visibles.",
          },
          {
            label: "Peelings Químicos Médicos:",
            text: "renuevan capas superficiales en otoño e invierno para controlar hiperpigmentación.",
          },
        ],
      },
    ],
  },
  {
    slug: "abdominoplastia-vs-lipoescultura-chile",
    title: "Abdominoplastía vs. Lipoescultura: ¿cuál es la indicada para ti?",
    date: "31 ene 2025",
    categories: ["Cirugía", "Tratamientos"],
    image: "/images/blog-5.jpg",
    excerpt:
      "Resolvemos las dudas más frecuentes sobre flacidez, diástasis abdominal y grasa localizada antes de agendar tu evaluación quirúrgica.",
    readTime: "5 min de lectura",
    sections: [
      {
        paragraphs: [
          "Muchas pacientes llegan a consulta preguntando si necesitan una lipoescultura o una abdominoplastía. Aunque ambas mejoran el contorno del abdomen, resuelven problemas anatómicos distintos.",
        ],
      },
      {
        heading: "¿Cuándo conviene la Lipoescultura?",
        paragraphs: [
          "Es ideal cuando existe buena elasticidad cutánea y el objetivo es retirar depósitos de grasa localizada en abdomen, cintura o espalda que no ceden con alimentación ni ejercicio.",
        ],
      },
      {
        heading: "¿Cuándo se indica Abdominoplastía?",
        paragraphs: [
          "Cuando hay excedente de piel, estrías bajo el ombligo o separación de los músculos rectos abdominales (diástasis), frecuente después de embarazos o bajas importantes de peso.",
        ],
      },
    ],
  },
  {
    slug: "preparacion-primera-evaluacion-estetica",
    title: "Qué preguntar en tu primera evaluación de medicina estética en Chile",
    date: "15 ene 2025",
    categories: ["Bienestar"],
    image: "/images/blog-4.jpg",
    excerpt:
      "Checklist práctico para verificar acreditación médica, registro ISP de insumos y claridad en el presupuesto antes de cualquier procedimiento.",
    readTime: "3 min de lectura",
    sections: [
      {
        heading: "Puntos clave para elegir con tranquilidad",
        bullets: [
          {
            label: "Registro en Superintendencia de Salud:",
            text: "asegúrate de que quien realiza el procedimiento sea médico cirujano o especialista acreditado.",
          },
          {
            label: "Autorización Sanitaria:",
            text: "la sala de procedimientos o pabellón debe contar con resolución vigente de la Seremi de Salud.",
          },
          {
            label: "Presupuesto transparente:",
            text: "solicita siempre el valor total en CLP incluyendo controles posteriores e insumos.",
          },
        ],
      },
    ],
  },
];

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    id: "providencia",
    name: "Sede Providencia",
    address: "Av. Providencia 2133, Of. 402",
    commune: "Providencia, Santiago (Metro Los Leones)",
    phone: "+56 2 2480 6120",
    phoneHref: "tel:+56224806120",
    email: "providencia@beautivachile.cl",
    hoursWeek: "LUNES A VIERNES: 09:00 – 19:30 hrs",
    hoursSaturday: "SÁBADO: 09:30 – 14:30 hrs",
    hoursSunday: "DOMINGO Y FESTIVOS: CERRADO",
  },
  {
    id: "vitacura",
    name: "Sede Vitacura",
    address: "Av. Vitacura 5250, Piso 3",
    commune: "Vitacura, Santiago",
    phone: "+56 9 8420 3150",
    phoneHref: "tel:+56984203150",
    email: "vitacura@beautivachile.cl",
    hoursWeek: "LUNES A VIERNES: 09:30 – 20:00 hrs",
    hoursSaturday: "SÁBADO: 10:00 – 14:00 hrs",
    hoursSunday: "DOMINGO Y FESTIVOS: CERRADO",
  },
];
