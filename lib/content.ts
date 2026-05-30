export const SITE = {
  name: "ContrataPJ",
  tagline: "Gestão simplificada",
  whatsapp: "https://api.whatsapp.com/send/?phone=5521999508940&text=Olá%2C+gostaria+de+falar+com+um+vendedor%21",
  loginUrl: "https://app.contratapj.com.br/login",
  videoId: "sfZpi_Ue9is", // YouTube video ID on the home hero
};

export const NAV = [
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Planos", href: "/planos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
  { label: "Central de Ajuda", href: "/central-de-ajuda" },
];

export const HOME = {
  hero: {
    title: "O 1º sistema de gestão PJ's do Brasil!",
    titleHighlight: "O mais completo e eficiente!",
    description:
      "A ContrataPJ permite monitorar seus PJs, criar contratos automaticamente, receber notas fiscais na data desejada, pagar todas as notas com apenas 1 boleto, deixando você livre para se preocupar com o que realmente importa.",
    ctaLabel: "Solicitar demonstração",
  },
  features: [
    {
      title: "Gestão de PJs",
      description:
        "Centralize informações de todos os seus prestadores PJ em um único lugar com dashboards em tempo real.",
      image: "/images/img-home-dash1-1024x765.png",
    },
    {
      title: "Contratos automáticos",
      description:
        "Crie contratos PJ de forma automatizada, com modelos personalizados e assinatura digital integrada.",
      image: "/images/img-home-contract.png",
    },
    {
      title: "Notas fiscais",
      description:
        "Receba todas as notas fiscais dos seus PJs nas datas combinadas, com lembretes e verificação automática.",
      image: "/images/img-home-notas-1.png",
    },
    {
      title: "Pagamento centralizado",
      description:
        "Pague todas as notas fiscais com apenas 1 boleto consolidado, simplificando seu financeiro.",
      image: "/images/img-home-dash2-1024x765.png",
    },
  ],
  brandLogos: [
    "/images/Logotipo_Solida_Sin_Tagline_RGB_Positivo_Color_Alta-1024x322-1.png",
    "/images/Allied-IT-colorido-1.png",
    "/images/Investidores.vc_-1-1.png",
    "/images/622105211f288975177934bd_GPinho-Normal.png",
    "/images/logo-proesc-Natalia-Mendonca-1-e1769459604184.png",
    "/images/logo2.png",
  ],
  faq: [
    {
      question: "Preciso mudar minha forma de pagamento ou sistema financeiro atual?",
      answer:
        "Não. O ContrataPJ se integra ao seu fluxo financeiro atual — você continua usando seus sistemas, e o nosso consolida tudo num boleto único.",
    },
    {
      question: "O sistema é seguro e está em conformidade com a LGPD?",
      answer:
        "Sim. Seguimos as melhores práticas de segurança e somos totalmente aderentes à Lei Geral de Proteção de Dados (LGPD).",
    },
    // Additional FAQs will be added in Task 4.6 after scraping the original
  ],
} as const;

export const PRICING = {
  // To be filled in Task 5.2 (Planos page) after scraping prices from original
  plans: [] as Array<{ name: string; price: string; features: string[]; ctaLabel: string }>,
};
