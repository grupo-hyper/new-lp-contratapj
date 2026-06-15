export const SITE = {
  name: "ContrataPJ",
  tagline: "Gestão simplificada",
  whatsapp: "https://api.whatsapp.com/send/?phone=5521999508940&text=Olá%2C+gostaria+de+falar+com+um+vendedor%21",
  loginUrl: "https://app.contratapj.com.br/login",
  videoId: "sfZpi_Ue9is", // YouTube video ID on the home hero
};

export const NAV = [
  { label: "Início", href: "/" },
  { label: "Funcionalidades", href: "/funcionalidades" },
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
      question: "O que é a ContrataPJ?",
      answer:
        "É uma plataforma para gestão de prestadores de serviço. Ela organiza a contratação, o envio e aprovação de notas fiscais, os pagamentos e os contratos digitais — tudo em um só lugar, com controle total e segurança.",
    },
    {
      question: "Para que tipo de empresa a ContrataPJ é indicada?",
      answer:
        "Se você contrata prestadores de serviço e quer evitar bagunça com notas, e-mails soltos, planilhas, erros de pagamento e minimizar riscos, a plataforma é pra você. Vale tanto pra startups quanto pra empresas mais estruturadas.",
    },
    {
      question: "A ContrataPJ ajuda com a parte jurídica da contratação?",
      answer:
        "Sim. Você pode gerar contratos digitais personalizados e com validade jurídica, além de garantir rastreabilidade e histórico de aprovações. Isso reduz muito o risco de passivo trabalhista por vínculo indevido.",
    },
    {
      question: "A plataforma cuida da assinatura dos contratos também?",
      answer:
        "Sim! Dá pra assinar digitalmente os contratos direto pela plataforma, com validade jurídica. Nada de papelada voando por aí.",
    },
    {
      question: "Como funciona o processo de pagamento de PJs pela plataforma?",
      answer:
        "Você aprova as notas pela plataforma e gera uma remessa. A gente organiza tudo num boleto único, e depois do pagamento, os valores são repassados automaticamente aos prestadores.",
    },
    {
      question: "Preciso mudar minha forma de pagamento ou sistema financeiro atual?",
      answer:
        "Não. A plataforma se adapta ao seu processo. Você pode continuar pagando via boleto, transferência ou Pix — e usar os dados que já usa no dia a dia. A diferença é que agora tudo fica centralizado e rastreável.",
    },
    {
      question: "Qual o custo da ContrataPJ?",
      answer:
        "O modelo é por assinatura mensal, com planos que variam conforme o volume de prestadores ativos. Você paga e utiliza no mês subsequente — sem surpresas ou taxas escondidas.",
    },
    {
      question: "Quais são os planos disponíveis na ContrataPJ? Como escolher o melhor?",
      answer:
        "A ContrataPJ oferece dois planos: Starter e Plus. A recomendação é avaliar o volume de prestadores e o nível de automação desejado. Se precisar de ajuda, nosso time comercial pode orientar na escolha ideal.",
    },
    {
      question: "Quais são os métodos de pagamento aceitos?",
      answer:
        "Aceitamos pagamento via cartão de crédito, com cobrança mensal e sem comprometer o seu limite. Simples e direto.",
    },
    {
      question: "O sistema é seguro e está em conformidade com a LGPD?",
      answer:
        "Sim. A plataforma segue as diretrizes da LGPD, com criptografia, autenticação e controle de acesso por perfil. Seus dados (e os dos seus prestadores) estão protegidos.",
    },
    {
      question: "Quanto tempo leva para começar a usar?",
      answer:
        "Como empresa contratante, você pode se cadastrar e receber o login na hora. Depois de cadastrar o pagamento, já pode subir os prestadores e começar a operar. O onboarding é simples e com apoio da nossa equipe.",
    },
    {
      question: "Como faço para entrar em contato com o suporte ao cliente?",
      answer:
        "Nosso suporte funciona 8 horas por dia, 5 dias por semana. Você pode falar com a gente direto na plataforma via chat ao vivo, por e-mail ou consultar nossa central de ajuda com artigos atualizados.",
    },
  ],
} as const;

export const PRICING = {
  hero: {
    title: "Escolha o melhor plano para você",
    subtitle: "Planos flexíveis por prestador ativo. Sem taxas escondidas.",
  },
  plans: [
    {
      name: "Starter",
      price: "R$ 29,90",
      priceDetail: "por PJ/mês",
      tagline: "Ótimo desempenho com todas as funcionalidades",
      features: [
        "Criação e automatização de contratos",
        "Assinatura digital de contratos",
        "Renovações dos contratos",
        "Recebimento de notas fiscais dentro da plataforma",
        "Monitoramento ativo dos seus PJs",
        "Validações do CNPJ de seus prestadores",
        "Pagamento em remessa de seus prestadores",
        "Integrações com ERP Financeiro",
      ],
      ctaLabel: "Solicitar Demonstração",
      highlighted: false,
    },
    {
      name: "Plus",
      price: "R$ 45,90",
      priceDetail: "por PJ/mês",
      tagline: "Ideal para empresas que precisam de uma atenção maior nos contratos",
      features: [
        "Todas as funcionalidades do plano Starter",
        "Análise de contratos",
        "Criação de contratos",
        "Análise da relação da empresa com o PJ",
        "Consultoria de governança PJ",
      ],
      ctaLabel: "Solicitar Demonstração",
      highlighted: true,
    },
  ],
  enterprise: {
    title: "Mais de 50 PJs?",
    subtitle: "Condições Exclusivas para Você!",
    description:
      "Garanta descontos especiais nos planos Starter ou Plus para contratação anual e otimize a gestão PJ da sua empresa com menos riscos e mais segurança jurídica.",
    perks: ["Reduza riscos trabalhistas", "Economize com eficiência", "Gestão simplificada"],
    ctaLabel: "Fale com um Especialista",
  },
};

export const HELP_CENTER = {
  categories: [
    {
      title: "Primeiros passos",
      slug: "primeiros-passos",
      topics: [
        {
          question: "O que é a ContrataPJ?",
          answer:
            "É uma plataforma para gestão de prestadores de serviço. Ela organiza a contratação, o envio e aprovação de notas fiscais, os pagamentos e os contratos digitais — tudo em um só lugar, com controle total e segurança.",
        },
        {
          question: "Para que tipo de empresa a ContrataPJ é indicada?",
          answer:
            "Se você contrata prestadores de serviço e quer evitar bagunça com notas, e-mails soltos, planilhas, erros de pagamento e minimizar riscos, a plataforma é pra você. Vale tanto pra startups quanto pra empresas mais estruturadas.",
        },
        {
          question: "Quanto tempo leva para começar a usar?",
          answer:
            "Como empresa contratante, você pode se cadastrar e receber o login na hora. Depois de cadastrar o pagamento, já pode subir os prestadores e começar a operar. O onboarding é simples e com apoio da nossa equipe.",
        },
        {
          question: "A ContrataPJ oferece onboarding ou suporte na implantação?",
          answer:
            "Sim. Nossa equipe acompanha o processo de implantação, ajuda a configurar a conta e garante que você esteja operando com segurança desde o primeiro dia.",
        },
      ],
    },
    {
      title: "Contratos e Jurídico",
      slug: "contratos-e-juridico",
      topics: [
        {
          question: "A ContrataPJ ajuda com a parte jurídica da contratação?",
          answer:
            "Sim. Você pode gerar contratos digitais personalizados e com validade jurídica, além de garantir rastreabilidade e histórico de aprovações. Isso reduz muito o risco de passivo trabalhista por vínculo indevido.",
        },
        {
          question: "A plataforma cuida da assinatura dos contratos também?",
          answer:
            "Sim! Dá pra assinar digitalmente os contratos direto pela plataforma, com validade jurídica. Nada de papelada voando por aí.",
        },
        {
          question: "O sistema é seguro e está em conformidade com a LGPD?",
          answer:
            "Sim. A plataforma segue as diretrizes da LGPD, com criptografia, autenticação e controle de acesso por perfil. Seus dados (e os dos seus prestadores) estão protegidos.",
        },
        {
          question: "Como a plataforma reduz o risco de vínculo empregatício?",
          answer:
            "A ContrataPJ centraliza contratos, registros de serviços e aprovações, criando uma trilha documental robusta que demonstra a natureza independente da relação com o prestador — um argumento sólido em caso de auditoria ou processo trabalhista.",
        },
      ],
    },
    {
      title: "Pagamentos e Notas Fiscais",
      slug: "pagamentos-e-notas-fiscais",
      topics: [
        {
          question: "Como funciona o processo de pagamento de PJs pela plataforma?",
          answer:
            "Você aprova as notas pela plataforma e gera uma remessa. A gente organiza tudo num boleto único, e depois do pagamento, os valores são repassados automaticamente aos prestadores.",
        },
        {
          question: "Preciso mudar minha forma de pagamento ou sistema financeiro atual?",
          answer:
            "Não. A plataforma se adapta ao seu processo. Você pode continuar pagando via boleto, transferência ou Pix — e usar os dados que já usa no dia a dia. A diferença é que agora tudo fica centralizado e rastreável.",
        },
        {
          question: "Quais são os métodos de pagamento aceitos?",
          answer:
            "Aceitamos pagamento via cartão de crédito, com cobrança mensal e sem comprometer o seu limite. Simples e direto.",
        },
        {
          question: "Como funciona o recebimento das notas fiscais dos prestadores?",
          answer:
            "O prestador emite a nota fiscal e faz o upload direto na plataforma. Você recebe uma notificação, analisa e aprova (ou solicita correção). Tudo registrado, sem e-mails perdidos.",
        },
      ],
    },
    {
      title: "Planos e Suporte",
      slug: "planos-e-suporte",
      topics: [
        {
          question: "Qual o custo da ContrataPJ?",
          answer:
            "O modelo é por assinatura mensal, com planos que variam conforme o volume de prestadores ativos. Você paga e utiliza no mês subsequente — sem surpresas ou taxas escondidas.",
        },
        {
          question: "Quais são os planos disponíveis na ContrataPJ? Como escolher o melhor?",
          answer:
            "A ContrataPJ oferece dois planos: Starter e Plus. A recomendação é avaliar o volume de prestadores e o nível de automação desejado. Se precisar de ajuda, nosso time comercial pode orientar na escolha ideal.",
        },
        {
          question: "Como faço para entrar em contato com o suporte ao cliente?",
          answer:
            "Nosso suporte funciona 8 horas por dia, 5 dias por semana. Você pode falar com a gente direto na plataforma via chat ao vivo, por e-mail ou consultar nossa central de ajuda com artigos atualizados.",
        },
        {
          question: "É possível cancelar a qualquer momento?",
          answer:
            "Sim. Não há fidelidade obrigatória. Você pode cancelar a assinatura a qualquer momento sem multas ou burocracia.",
        },
      ],
    },
  ],
} as const;

export const REASONS = {
  empresas: [
    { number: 1, title: "Onboarding desburocratizado" },
    { number: 2, title: "Emissão de contratos automatizados" },
    { number: 3, title: "Gestão e emissão de pagamentos" },
    { number: 4, title: "Integração com ERP financeiro" },
    { number: 5, title: "Relatórios para o jurídico" },
    { number: 6, title: "Dashboards automatizados" },
  ],
  prestadores: [
    { number: 1, title: "Onboarding facilitado" },
    { number: 2, title: "Abertura de empresa" },
    { number: 3, title: "Geração de notas fiscais" },
    { number: 4, title: "Pagamento de DAS" },
    { number: 5, title: "Assinatura de contratos" },
    { number: 6, title: "Monitoramento do CNPJ" },
  ],
};

export const CASE_VIDEOS = [
  { id: "UdPMVfEq71g", title: "Caso de sucesso — Como a ContrataPJ transformou a gestão de PJs" },
  { id: "8y-1qXAsyYQ", title: "Caso de sucesso — Simplificando contratos e pagamentos com a ContrataPJ" },
  { id: "-WiZDMxpGTE", title: "Caso de sucesso — Gestão completa de prestadores com a ContrataPJ" },
];

export const FEATURES_PAGE = {
  hero: {
    title: "Recursos e funcionalidades da ContrataPJ",
    subtitle: "Todos os recursos da ContrataPJ",
  },
  sections: [
    {
      id: "gestao-pj",
      title: "Gestão de Prestadores",
      description:
        "Tudo sobre seus prestadores em um lugar só! Gerencie cadastros, contratos e relatórios dos seus PJs de forma simples e organizada. Onboarding facilitado, base central de prestadores, relatórios e importação em massa.",
      image: "/images/img-home-dash1-1024x765.png",
    },
    {
      id: "contratos",
      title: "Gestão de Contratos",
      description:
        "Gestão completa de contratos: digitalize todo o ciclo contratual, crie, assine, armazene e acompanhe contratos com segurança. Receba alertas automáticos, utilize modelos validados e conte com análises jurídicas assistidas por IA.",
      image: "/images/img-home-contract.png",
    },
    {
      id: "notas",
      title: "Notas Fiscais",
      description:
        "Gerencie notas fiscais com rapidez e facilidade. Aprovação rápida, alertas inteligentes e dashboard para controle total. Sugestão de nota automática, controle e aprovação de notas, notificações inteligentes e dashboard de notas.",
      image: "/images/img-home-notas-1.png",
    },
    {
      id: "pagamento",
      title: "Controle Financeiro",
      description:
        "Controle ágil e prático de pagamentos. Pague notas via PIX em lote, controle pagamentos, gere relatórios e integre com ERPs — tudo com alertas e dashboard.",
      image: "/images/img-home-dash2-1024x765.png",
    },
    {
      id: "dashboard",
      title: "Dashboards e Relatórios",
      description:
        "Tenha todo o suporte necessário para sua gestão. Monitore sua operação com painéis analíticos, receba alertas inteligentes e conte com suporte contínuo. Tudo automatizado para você não perder prazos e decisões importantes.",
      image: "/images/img-home-dash3-1024x765.png",
    },
  ],
} as const;
