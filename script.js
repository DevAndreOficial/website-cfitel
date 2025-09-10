// ===== GLOBAL VARIABLES =====
let isMenuOpen = false
const currentFilter = "all"

// ===== COURSE DATA =====
const coursesData = {
  "desenvolvimento-web": {
    title: "Desenvolvimento Web Full Stack",
    category: "Tecnologia",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 meses",
    level: "Intermediário",
    price: "150.000 Kz",
    description:
      "Este curso abrangente de Desenvolvimento Web Full Stack foi projetado para transformar iniciantes em desenvolvedores profissionais capazes de criar aplicações web completas e modernas. Durante 6 meses intensivos, você dominará tanto o front-end quanto o back-end, aprendendo as tecnologias mais demandadas pelo mercado.",
    objectives: [
      "Dominar HTML5, CSS3 e JavaScript moderno",
      "Criar interfaces responsivas e interativas",
      "Desenvolver APIs RESTful robustas",
      "Trabalhar com bancos de dados relacionais e NoSQL",
      "Implementar autenticação e autorização",
      "Utilizar ferramentas de versionamento (Git)",
      "Aplicar metodologias ágeis de desenvolvimento",
    ],
    requirements: [
      "Conhecimentos básicos de informática",
      "Lógica de programação (desejável)",
      "Dedicação de pelo menos 15 horas semanais",
      "Computador com acesso à internet",
    ],
    curriculum: [
      "Fundamentos de HTML5 e CSS3",
      "JavaScript ES6+ e DOM Manipulation",
      "React.js e desenvolvimento de SPAs",
      "Node.js e Express.js",
      "Bancos de dados (MySQL e MongoDB)",
      "APIs RESTful e GraphQL",
      "Autenticação JWT e OAuth",
      "Deploy e DevOps básico",
      "Projeto final integrado",
    ],
    features: [
      "Certificado reconhecido",
      "Suporte 24/7",
      "Projetos práticos",
      "Mentoria individual",
      "Acesso vitalício ao material",
      "Comunidade exclusiva",
    ],
  },
  "analise-dados": {
    title: "Análise de Dados e Business Intelligence",
    category: "Tecnologia",
    image: "/placeholder.svg?height=400&width=600",
    duration: "4 meses",
    level: "Avançado",
    price: "120.000 Kz",
    description:
      "Transforme dados em insights estratégicos com nosso curso avançado de Análise de Dados e Business Intelligence. Aprenda a coletar, processar e visualizar dados para apoiar decisões empresariais importantes.",
    objectives: [
      "Dominar Python para análise de dados",
      "Criar dashboards interativos",
      "Aplicar técnicas de machine learning",
      "Desenvolver relatórios automatizados",
      "Implementar soluções de BI",
    ],
    requirements: [
      "Conhecimentos básicos de matemática",
      "Experiência com Excel (desejável)",
      "Lógica de programação básica",
    ],
    curriculum: [
      "Python para Data Science",
      "Pandas e NumPy",
      "Visualização com Matplotlib e Seaborn",
      "Power BI e Tableau",
      "SQL avançado",
      "Machine Learning básico",
      "Projeto final de BI",
    ],
    features: ["Certificado reconhecido", "Projetos reais", "Mentoria especializada", "Acesso a ferramentas premium"],
  },
  ciberseguranca: {
    title: "Cibersegurança e Ethical Hacking",
    category: "Tecnologia",
    image: "/placeholder.svg?height=400&width=600",
    duration: "5 meses",
    level: "Avançado",
    price: "180.000 Kz",
    description:
      "Torne-se um especialista em segurança cibernética e aprenda a proteger sistemas e redes contra ameaças modernas. Este curso aborda desde conceitos fundamentais até técnicas avançadas de ethical hacking.",
    objectives: [
      "Identificar vulnerabilidades em sistemas",
      "Implementar medidas de segurança",
      "Realizar testes de penetração",
      "Desenvolver políticas de segurança",
      "Responder a incidentes de segurança",
    ],
    requirements: [
      "Conhecimentos de redes de computadores",
      "Experiência com sistemas operacionais",
      "Noções básicas de programação",
    ],
    curriculum: [
      "Fundamentos de Cibersegurança",
      "Redes e Protocolos de Segurança",
      "Ethical Hacking e Penetration Testing",
      "Análise de Malware",
      "Forense Digital",
      "Gestão de Riscos",
      "Laboratórios práticos",
    ],
    features: [
      "Laboratório virtual exclusivo",
      "Certificações internacionais",
      "Simulações reais",
      "Networking profissional",
    ],
  },
  "gestao-projetos": {
    title: "Gestão de Projetos",
    category: "Gestão",
    image: "/placeholder.svg?height=400&width=600",
    duration: "3 meses",
    level: "Intermediário",
    price: "90.000 Kz",
    description:
      "Domine as metodologias ágeis e tradicionais de gestão de projetos. Aprenda a liderar equipes, gerenciar recursos e entregar projetos no prazo e dentro do orçamento.",
    objectives: [
      "Aplicar metodologias PMI e Scrum",
      "Gerenciar cronogramas e orçamentos",
      "Liderar equipes multidisciplinares",
      "Mitigar riscos de projeto",
      "Comunicar efetivamente com stakeholders",
    ],
    requirements: ["Experiência profissional mínima", "Conhecimentos básicos de gestão", "Capacidade de liderança"],
    curriculum: [
      "Fundamentos de Gestão de Projetos",
      "Metodologia PMI/PMBOK",
      "Scrum e Metodologias Ágeis",
      "Ferramentas de Gestão",
      "Liderança e Comunicação",
      "Gestão de Riscos",
      "Projeto prático",
    ],
    features: ["Preparação para certificação PMP", "Simuladores de projeto", "Cases reais", "Networking empresarial"],
  },
  "marketing-digital": {
    title: "Marketing Digital e Redes Sociais",
    category: "Gestão",
    image: "/placeholder.svg?height=400&width=600",
    duration: "4 meses",
    level: "Básico",
    price: "75.000 Kz",
    description:
      "Aprenda estratégias eficazes de marketing digital para impulsionar negócios online. Domine as principais plataformas e ferramentas para criar campanhas de sucesso.",
    objectives: [
      "Criar estratégias de marketing digital",
      "Gerenciar redes sociais profissionalmente",
      "Desenvolver campanhas publicitárias",
      "Analisar métricas e ROI",
      "Otimizar presença online",
    ],
    requirements: [
      "Conhecimentos básicos de internet",
      "Criatividade e interesse em comunicação",
      "Noções básicas de negócios",
    ],
    curriculum: [
      "Fundamentos do Marketing Digital",
      "SEO e SEM",
      "Gestão de Redes Sociais",
      "Google Ads e Facebook Ads",
      "Email Marketing",
      "Analytics e Métricas",
      "Projeto de campanha",
    ],
    features: [
      "Certificações Google e Facebook",
      "Projetos práticos",
      "Mentoria em campanhas",
      "Acesso a ferramentas premium",
    ],
  },
  "ingles-tecnico": {
    title: "Inglês Técnico para TI",
    category: "Idiomas",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 meses",
    level: "Básico",
    price: "60.000 Kz",
    description:
      "Desenvolva fluência em inglês técnico específico para a área de tecnologia. Aprenda vocabulário especializado e melhore sua comunicação profissional.",
    objectives: [
      "Dominar vocabulário técnico de TI",
      "Comunicar-se em reuniões técnicas",
      "Ler documentação em inglês",
      "Escrever relatórios técnicos",
      "Participar de conferências internacionais",
    ],
    requirements: ["Inglês básico", "Interesse na área de TI", "Dedicação para prática diária"],
    curriculum: [
      "Vocabulário Técnico Fundamental",
      "Comunicação Oral em TI",
      "Leitura de Documentação",
      "Escrita Técnica",
      "Apresentações em Inglês",
      "Simulações de Entrevistas",
      "Projeto final",
    ],
    features: ["Aulas conversacionais", "Material atualizado", "Simulações reais", "Certificado internacional"],
  },
}

// ===== DOM CONTENT LOADED =====
// Aguarda todo o conteúdo HTML ser carregado e processado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  initializeApp(); // Quando o DOM estiver pronto, inicia o aplicativo
});


// ===== INITIALIZE APP =====
// Função principal que inicializa a aplicação
function initializeApp() {
  setupEventListeners(); // Chama a função que configura todos os ouvintes de eventos (por exemplo: cliques, mudanças, etc.)
  setupScrollAnimations(); // Ativa as animações que ocorrem durante a rolagem da página
  setupBackToTop(); // Configura o botão ou link que permite voltar ao topo da página


  // Page-specific initializations
  // Abaixo são verificações para inicializar scripts específicos de cada página, com base no nome do arquivo da URL

  if (window.location.pathname.includes("cursos.html")) {
    initializeCoursesPage(); // Inicializa recursos específicos da página de cursos
  } else if (window.location.pathname.includes("curso-detalhes.html")) {
    initializeCourseDetailsPage(); // Inicializa recursos da página de detalhes do curso
  } else if (window.location.pathname.includes("inscricao.html")) {
    initializeRegistrationPage(); // Inicializa recursos da página de inscrição
  } else if (window.location.pathname.includes("noticias.html")) {
    initializeNewsPage(); // Inicializa a página com a lista de notícias
  } else if (window.location.pathname.includes("noticia-detalhes.html")) {
    initializeNewsDetailPage(); // Inicializa a página de detalhes de uma notícia específica
  }
}

// ===== EVENT LISTENERS =====
// Função que configura os ouvintes de eventos (event listeners) para interações do usuário na interface
function setupEventListeners() {
  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle") // Seleciona o botão (ícone de menu ou "hambúrguer")
  const navMenu = document.getElementById("nav-menu")     // Seleciona o menu que será exibido/escondido


  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMobileMenu) // Quando o botão for clicado, chama a função toggleMobileMenu()
  }

  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll(".nav__link") // Seleciona todos os links do menu com a classe .nav__link

  //  ✔ Explicação:
  //Se o menu estiver aberto no mobile e o usuário clicar em um link (ex: "Sobre", "Contato"), o menu será automaticamente fechado.
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu) // Para cada link, adiciona um evento que fecha o menu ao ser clicado
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]') // Seleciona todos os links que começam com #

  anchorLinks.forEach((link) => {
    link.addEventListener("click", handleSmoothScroll) // Adiciona um scroll suave ao clicar em um link de âncora
  })
}

// ===== MOBILE MENU =====

// Função para alternar (abrir/fechar) o menu mobile
function toggleMobileMenu() {
  const navMenu = document.getElementById("nav-menu") // Seleciona o menu de navegação
  const navToggle = document.getElementById("nav-toggle") // Seleciona o botão de toggle (ícone de menu)

  isMenuOpen = !isMenuOpen // Inverte o estado do menu (aberto <-> fechado)

  if (isMenuOpen) {
    navMenu.classList.add("show") // Mostra o menu adicionando a classe 'show'
    navToggle.innerHTML = '<i class="fas fa-times"></i>' // Muda o ícone para "X" (ícone de fechar)
  } else {
    navMenu.classList.remove("show") // Esconde o menu removendo a classe 'show'
    navToggle.innerHTML = '<i class="fas fa-bars"></i>' // Muda o ícone para "barras" (menu)
  }
}

// Função para fechar o menu mobile (usada ao clicar em links)
function closeMobileMenu() {
  const navMenu = document.getElementById("nav-menu") // Seleciona o menu
  const navToggle = document.getElementById("nav-toggle") // Seleciona o botão de toggle

  if (isMenuOpen) {
    navMenu.classList.remove("show") // Esconde o menu
    navToggle.innerHTML = '<i class="fas fa-bars"></i>' // Volta o ícone para o menu (barras)
    isMenuOpen = false // Define que o menu está fechado
  }
}

// ===== SMOOTH SCROLLING =====

// Função que realiza rolagem suave ao clicar em âncoras (#)
function handleSmoothScroll(e) {
  const href = e.currentTarget.getAttribute("href") // Obtém o valor do href do link clicado

  if (href.startsWith("#")) { // Verifica se o link é uma âncora
    e.preventDefault() // Impede o comportamento padrão do link

    const targetId = href.substring(1) // Remove o "#" do início
    const targetElement = document.getElementById(targetId) // Seleciona o elemento destino da rolagem

    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight // Altura do cabeçalho
      const targetPosition = targetElement.offsetTop - headerHeight - 20 // Calcula a posição ajustada do alvo

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Rola suavemente até o alvo
      })
    }
  }
}

// ===== SCROLL ANIMATIONS =====

// Função para configurar animações ao rolar a página
function setupScrollAnimations() {
  const observerOptions = {
    //threshold: É o quanto do elemento precisa estar visível (na viewport) para que o IntersectionObserver dispare a função. 
    // 0 → a função dispara assim que qualquer parte do elemento aparece.
    // 1 → a função só dispara quando 100% do elemento estiver visível.
    threshold: 0.1, // Quando 10% do elemento estiver visível
    //rootMargin – "margem da área observada"
    //É como um "alinhamento extra" ou "zona de ativação" ao redor da área visível (viewport).
    // Você pode usar valores positivos ou negativos para expandir ou reduzir essa área. Ele funciona como margem em CSS (top right bottom left).
    rootMargin: "0px 0px -50px 0px", // Margem inferior para acionar a animação mais cedo
  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions) // Cria o observador

  // Seleciona todos os elementos que devem ser animados ao rolar
  const animateElements = document.querySelectorAll(".about__item, .stats__item, .contact__item, .course-card")
  
  animateElements.forEach((el) => {
    el.classList.add("animate-on-scroll") // Adiciona classe inicial
    observer.observe(el) // Começa a observar o elemento
  })
}

// Função chamada quando os elementos observados entram na tela
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { // Se o elemento estiver visível na tela
      entry.target.classList.add("animated") // Adiciona a classe de animação
    }
  })
}
// ===== BACK TO TOP BUTTON =====
// Função para configurar o botão "voltar ao topo"
function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top") // Seleciona o botão com o ID 'back-to-top'

  if (backToTopBtn) {
    // Quando a página for rolada...
    window.addEventListener("scroll", () => {
      // Se o scroll vertical for maior que 300px
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show") // Mostra o botão adicionando a classe 'show'
      } else {
        backToTopBtn.classList.remove("show") // Esconde o botão removendo a classe 'show'
      }
    })

    // Ao clicar no botão...
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0, // Vai até o topo da página (posição 0)
        behavior: "smooth", // Faz a rolagem suave
      })
    })
  }
}

// ===== COURSES PAGE =====
function initializeCoursesPage() {
  setupCourseFilters()
  animateCourseCards()
}

function setupCourseFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const courseCards = document.querySelectorAll(".course-card")

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Filter courses
      filterCourses(filter, courseCards)
    })
  })
}

function filterCourses(filter, courseCards) {
  courseCards.forEach((card) => {
    const category = card.getAttribute("data-category")

    if (filter === "all" || category === filter) {
      card.classList.remove("hidden")
      setTimeout(() => {
        card.style.display = "block"
      }, 50)
    } else {
      card.classList.add("hidden")
      setTimeout(() => {
        if (card.classList.contains("hidden")) {
          card.style.display = "none"
        }
      }, 300)
    }
  })
}

function animateCourseCards() {
  const courseCards = document.querySelectorAll(".course-card")

  courseCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    card.classList.add("animate-on-scroll")
  })
}

// ===== COURSE DETAILS PAGE =====
function initializeCourseDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search)
  const courseId = urlParams.get("curso")

  if (courseId && coursesData[courseId]) {
    loadCourseDetails(coursesData[courseId])
  } else {
    showCourseNotFound()
  }
}

function loadCourseDetails(course) {
  const contentContainer = document.getElementById("course-content")
  const breadcrumb = document.getElementById("course-breadcrumb")

  if (breadcrumb) {
    breadcrumb.textContent = course.title
  }

  if (contentContainer) {
    contentContainer.innerHTML = `
            <div class="course-details__main">
                <div class="course-details__content">
                    <img src="${course.image}" alt="${course.title}" class="course-details__image">
                    
                    <h1 class="course-details__title">${course.title}</h1>
                    
                    <div class="course-details__meta">
                        <div class="course-details__meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${course.duration}</span>
                        </div>
                        <div class="course-details__meta-item">
                            <i class="fas fa-signal"></i>
                            <span>${course.level}</span>
                        </div>
                        <div class="course-details__meta-item">
                            <i class="fas fa-tag"></i>
                            <span>${course.category}</span>
                        </div>
                    </div>
                    
                    <div class="course-details__section">
                        <h3>Descrição do Curso</h3>
                        <p class="course-details__description">${course.description}</p>
                    </div>
                    
                    <div class="course-details__section">
                        <h3>Objetivos do Curso</h3>
                        <ul class="course-details__list">
                            ${course.objectives
        .map(
          (obj) => `
                                <li><i class="fas fa-check"></i> ${obj}</li>
                            `,
        )
        .join("")}
                        </ul>
                    </div>
                    
                    <div class="course-details__section">
                        <h3>Conteúdo Programático</h3>
                        <ul class="course-details__list">
                            ${course.curriculum
        .map(
          (item) => `
                                <li><i class="fas fa-play"></i> ${item}</li>
                            `,
        )
        .join("")}
                        </ul>
                    </div>
                    
                    <div class="course-details__section">
                        <h3>Requisitos</h3>
                        <ul class="course-details__list">
                            ${course.requirements
        .map(
          (req) => `
                                <li><i class="fas fa-info-circle"></i> ${req}</li>
                            `,
        )
        .join("")}
                        </ul>
                    </div>
                </div>
                
                <div class="course-details__sidebar">
                    <div class="course-details__price">
                        <div class="course-details__price-value">${course.price}</div>
                        <div class="course-details__price-label">Valor total do curso</div>
                    </div>
                    
                    <ul class="course-details__features">
                        ${course.features
        .map(
          (feature) => `
                            <li><i class="fas fa-check"></i> ${feature}</li>
                        `,
        )
        .join("")}
                    </ul>
                    
                    <a href="inscricao.html?curso=${getKeyByValue(coursesData, course)}" class="btn btn--primary btn--full">
                        <i class="fas fa-user-plus"></i>
                        Inscrever-se Agora
                    </a>
                    
                    <div style="margin-top: 1rem;">
                        <a href="cursos.html" class="btn btn--secondary btn--full">
                            <i class="fas fa-arrow-left"></i>
                            Ver Outros Cursos
                        </a>
                    </div>
                </div>
            </div>
        `
  }
}

function showCourseNotFound() {
  const contentContainer = document.getElementById("course-content")
  if (contentContainer) {
    contentContainer.innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--secondary-color); margin-bottom: 2rem;"></i>
                <h2>Curso não encontrado</h2>
                <p>O curso que você está procurando não existe ou foi removido.</p>
                <a href="cursos.html" class="btn btn--primary" style="margin-top: 2rem;">
                    <i class="fas fa-arrow-left"></i>
                    Voltar aos Cursos
                </a>
            </div>
        `
  }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value)
}

// ===== REGISTRATION PAGE =====
function initializeRegistrationPage() {
  setupRegistrationForm()
  preSelectCourse()
}

function setupRegistrationForm() {
  const form = document.getElementById("registration-form")

  if (form) {
    form.addEventListener("submit", handleRegistrationSubmit)
  }
}

function preSelectCourse() {
  const urlParams = new URLSearchParams(window.location.search)
  const courseId = urlParams.get("curso")
  const courseSelect = document.getElementById("curso")

  if (courseId && courseSelect) {
    courseSelect.value = courseId
  }
}

function handleRegistrationSubmit(e) {
  e.preventDefault()

  const form = e.target
  const formData = new FormData(form)
  const submitBtn = form.querySelector('button[type="submit"]')

  // Show loading state
  submitBtn.classList.add("loading")
  submitBtn.innerHTML = '<div class="spinner"></div> Enviando...'
  submitBtn.disabled = true

  // Simulate form submission
  setTimeout(() => {
    // Reset button
    submitBtn.classList.remove("loading")
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Inscrição'
    submitBtn.disabled = false

    // Show success modal
    showSuccessModal()

    // Reset form
    form.reset()
  }, 2000)
}

function showSuccessModal() {
  const modal = document.getElementById("success-modal")
  if (modal) {
    modal.classList.add("active")
  }
}

function closeModal() {
  const modal = document.getElementById("success-modal")
  if (modal) {
    modal.classList.remove("active")
  }
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// ===== ERROR HANDLING =====
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
})

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading if needed
document.addEventListener("DOMContentLoaded", lazyLoadImages)

// ===== NEWS DATA =====
const newsData = {
  "bootcamp-dev-2024": {
    title: "Bootcamp Intensivo de Desenvolvimento Web 2024 - Transforme sua Carreira em 12 Semanas",
    category: "Bootcamp",
    date: "15 Janeiro 2024",
    author: "Equipe CFITEL",
    views: "1.2k",
    image: "img/web.png",
    excerpt:
      "Está pronto para uma transformação completa na sua carreira? Nosso Bootcamp Intensivo de Desenvolvimento Web 2024 é a oportunidade que você estava esperando.",
    content: `
      <p>O mercado de tecnologia nunca esteve tão aquecido, e a demanda por desenvolvedores web qualificados continua crescendo exponencialmente. Se você está buscando uma mudança de carreira ou quer aprimorar suas habilidades técnicas, nosso Bootcamp Intensivo de Desenvolvimento Web 2024 é a oportunidade perfeita.</p>
      
      <h3>Por que escolher nosso Bootcamp?</h3>
      <p>Em apenas 12 semanas intensivas, você será transformado de iniciante a desenvolvedor full-stack pronto para o mercado. Nossa metodologia combina teoria sólida com prática intensiva, garantindo que você saia preparado para enfrentar desafios reais.</p>
      
      <h3>O que você vai aprender:</h3>
      <ul>
        <li><strong>Front-end Moderno:</strong> HTML5, CSS3, JavaScript ES6+, React.js</li>
        <li><strong>Back-end Robusto:</strong> Node.js, Express.js, APIs RESTful</li>
        <li><strong>Bancos de Dados:</strong> MySQL, MongoDB, modelagem de dados</li>
        <li><strong>Ferramentas Profissionais:</strong> Git, GitHub, VS Code, DevTools</li>
        <li><strong>Deploy e DevOps:</strong> Heroku, Netlify, AWS básico</li>
        <li><strong>Metodologias Ágeis:</strong> Scrum, Kanban, trabalho em equipe</li>
      </ul>
      
      <h3>Metodologia Diferenciada</h3>
      <p>Nosso bootcamp não é apenas sobre assistir aulas. Você trabalhará em projetos reais desde a primeira semana, construindo um portfólio impressionante que chamará a atenção dos recrutadores. Cada projeto é cuidadosamente planejado para simular desafios do mundo real.</p>
      
      <h3>Suporte Completo</h3>
      <p>Durante todo o bootcamp, você terá acesso a:</p>
      <ul>
        <li>Mentoria individual semanal</li>
        <li>Suporte técnico 24/7</li>
        <li>Comunidade exclusiva de alunos</li>
        <li>Workshops com profissionais do mercado</li>
        <li>Preparação para entrevistas técnicas</li>
        <li>Apoio na busca por oportunidades de trabalho</li>
      </ul>
      
      <h3>Investimento e Vagas</h3>
      <p>O investimento é de apenas 180.000 Kz, que pode ser parcelado em até 6x sem juros. Temos apenas 25 vagas disponíveis para garantir a qualidade do ensino e atenção individualizada.</p>
    `,
    cta: {
      title: "Pronto para Transformar sua Carreira?",
      description: "Não perca esta oportunidade única. As inscrições estão abertas por tempo limitado!",
      buttonText: "Inscreva-se Agora",
      buttonLink: "inscricao.html?curso=desenvolvimento-web",
    },
  },
  "formatura-analise-dados": {
    title: "Parabéns à Turma de Análise de Dados 2023!",
    category: "Formatura",
    date: "10 Janeiro 2024",
    author: "CFITEL",
    views: "856",
    image: "/placeholder.svg?height=400&width=800",
    excerpt:
      "Celebramos o sucesso de mais 25 profissionais formados em nosso curso de Análise de Dados com 96% de taxa de empregabilidade.",
    content: `
      <p>É com imenso orgulho que celebramos a formatura de mais uma turma excepcional do curso de Análise de Dados e Business Intelligence do CFITEL. Os 25 novos profissionais que concluíram o programa demonstraram dedicação, perseverança e excelência técnica ao longo de 4 meses intensivos de aprendizado.</p>
      
      <h3>Resultados Impressionantes</h3>
      <p>Nossa turma de 2023 alcançou marcos extraordinários:</p>
      <ul>
        <li><strong>96% de taxa de empregabilidade</strong> em menos de 3 meses após a formatura</li>
        <li><strong>Salário médio inicial:</strong> 85.000 Kz mensais</li>
        <li><strong>15 alunos</strong> já promovidos em suas empresas atuais</li>
        <li><strong>8 alunos</strong> contratados por empresas parceiras do CFITEL</li>
        <li><strong>2 alunos</strong> abriram suas próprias consultorias em dados</li>
      </ul>
      
      <h3>Depoimentos dos Formandos</h3>
      <p><em>"O curso do CFITEL mudou completamente minha perspectiva profissional. Em 4 meses, passei de assistente administrativo para analista de dados em uma multinacional. A metodologia prática e o suporte dos professores foram fundamentais."</em> - Maria Santos, Analista de Dados na TechCorp</p>
      
      <p><em>"Nunca imaginei que conseguiria dominar Python e machine learning tão rapidamente. O projeto final que desenvolvi me ajudou a conseguir uma promoção na empresa onde já trabalhava."</em> - João Silva, Business Intelligence Analyst</p>
      
      <h3>Projetos Desenvolvidos</h3>
      <p>Durante o curso, os alunos desenvolveram projetos impressionantes:</p>
      <ul>
        <li>Sistema de previsão de vendas para e-commerce</li>
        <li>Dashboard interativo para análise de performance de marketing</li>
        <li>Modelo de detecção de fraudes em transações financeiras</li>
        <li>Análise preditiva de churn de clientes</li>
        <li>Otimização de rotas de entrega usando algoritmos de ML</li>
      </ul>
      
      <h3>Próxima Turma</h3>
      <p>Inspirado pelo sucesso desta turma? A próxima turma de Análise de Dados inicia em março de 2024. As inscrições já estão abertas!</p>
    `,
    cta: {
      title: "Seja o Próximo Sucesso!",
      description: "Junte-se à próxima turma de Análise de Dados e transforme sua carreira.",
      buttonText: "Inscreva-se na Próxima Turma",
      buttonLink: "inscricao.html?curso=analise-dados",
    },
  },
  "tech-talk-ia": {
    title: "Tech Talk: O Futuro da Inteligência Artificial",
    category: "Evento",
    date: "8 Janeiro 2024",
    author: "CFITEL",
    views: "2.1k",
    image: "img/talk-ia.jpg",
    excerpt:
      "Evento gratuito com especialistas da área. Descubra as tendências em IA e como se preparar para o futuro.",
    content: `
      <p>A Inteligência Artificial está revolucionando todos os setores da economia, e profissionais que não se adaptarem ficarão para trás. Por isso, o CFITEL convida você para um evento especial e gratuito sobre o futuro da IA e suas implicações no mercado de trabalho.</p>
      
      <h3>Programação do Evento</h3>
      <p><strong>Data:</strong> 25 de Janeiro de 2024<br>
      <strong>Horário:</strong> 19h às 21h<br>
      <strong>Formato:</strong> Online (Zoom)<br>
      <strong>Investimento:</strong> Gratuito</p>
      
      <h3>Palestrantes Confirmados</h3>
      <ul>
        <li><strong>Dr. Carlos Mendes</strong> - PhD em Machine Learning, ex-Google</li>
        <li><strong>Ana Rodrigues</strong> - Head of AI na TechSolutions</li>
        <li><strong>Prof. Miguel Santos</strong> - Coordenador de IA do CFITEL</li>
      </ul>
      
      <h3>Temas Abordados</h3>
      <ul>
        <li>Tendências atuais em Inteligência Artificial</li>
        <li>Como a IA está transformando diferentes indústrias</li>
        <li>Oportunidades de carreira em IA</li>
        <li>Habilidades essenciais para profissionais de IA</li>
        <li>Ferramentas e tecnologias emergentes</li>
        <li>Ética e responsabilidade na IA</li>
      </ul>
      
      <h3>Para Quem é Este Evento</h3>
      <ul>
        <li>Profissionais de TI interessados em IA</li>
        <li>Estudantes de tecnologia</li>
        <li>Empreendedores buscando inovação</li>
        <li>Gestores que querem entender o impacto da IA</li>
        <li>Qualquer pessoa curiosa sobre o futuro da tecnologia</li>
      </ul>
      
      <h3>Bônus Exclusivos</h3>
      <p>Todos os participantes receberão:</p>
      <ul>
        <li>E-book gratuito: "Guia Completo de IA para Iniciantes"</li>
        <li>Lista de recursos e ferramentas de IA</li>
        <li>Desconto especial nos cursos de IA do CFITEL</li>
        <li>Acesso à gravação do evento</li>
        <li>Certificado de participação</li>
      </ul>
    `,
    cta: {
      title: "Garante Sua Vaga Gratuita!",
      description: "Vagas limitadas. Inscreva-se agora e não perca esta oportunidade única.",
      buttonText: "Inscrever-se Gratuitamente",
      buttonLink: "inscricao.html",
    },
  },
}

// ===== NEWS PAGE FUNCTIONALITY =====
function initializeNewsPage() {
  setupNewsFilters()
  setupNewsletterForm()
  setupLoadMoreButton()
}

function setupNewsFilters() {
  const filterButtons = document.querySelectorAll(".category-btn")
  const newsCards = document.querySelectorAll(".news-card")

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category")

      // Update active button
      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Filter news
      filterNews(category, newsCards)
    })
  })
}

function filterNews(category, newsCards) {
  newsCards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category")

    if (category === "all" || cardCategory === category) {
      card.classList.remove("hidden")
      setTimeout(() => {
        card.style.display = "block"
      }, 50)
    } else {
      card.classList.add("hidden")
      setTimeout(() => {
        if (card.classList.contains("hidden")) {
          card.style.display = "none"
        }
      }, 300)
    }
  })
}

function setupNewsletterForm() {
  const form = document.getElementById("newsletter-form")

  if (form) {
    form.addEventListener("submit", handleNewsletterSubmit)
  }
}

function handleNewsletterSubmit(e) {
  e.preventDefault()

  const form = e.target
  const email = form.querySelector('input[type="email"]').value
  const submitBtn = form.querySelector('button[type="submit"]')

  // Show loading state
  submitBtn.innerHTML = '<div class="spinner"></div> Inscrevendo...'
  submitBtn.disabled = true

  // Simulate subscription
  setTimeout(() => {
    // Reset button
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Inscrever-se'
    submitBtn.disabled = false

    // Show success message
    alert("Obrigado! Você foi inscrito em nossa newsletter.")

    // Reset form
    form.reset()
  }, 2000)
}

function setupLoadMoreButton() {
  const loadMoreBtn = document.getElementById("load-more-btn")

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMoreNews)
  }
}

function loadMoreNews() {
  const loadMoreBtn = document.getElementById("load-more-btn")

  // Show loading state
  loadMoreBtn.innerHTML = '<div class="spinner"></div> Carregando...'
  loadMoreBtn.disabled = true

  // Simulate loading more news
  setTimeout(() => {
    // Reset button
    loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Carregar Mais Notícias'
    loadMoreBtn.disabled = false

    // In a real application, you would load more news here
    alert("Todas as notícias foram carregadas!")
  }, 1500)
}

// ===== NEWS DETAIL PAGE =====
function initializeNewsDetailPage() {
  const urlParams = new URLSearchParams(window.location.search)
  const newsId = urlParams.get("id")

  if (newsId && newsData[newsId]) {
    loadNewsDetail(newsData[newsId])
    loadRelatedArticles(newsId)
  } else {
    showNewsNotFound()
  }
}

function loadNewsDetail(news) {
  const contentContainer = document.getElementById("article-content")
  const breadcrumb = document.getElementById("article-breadcrumb")

  if (breadcrumb) {
    breadcrumb.textContent = news.title
  }

  if (contentContainer) {
    contentContainer.innerHTML = `
      <div class="article-detail__category">${news.category}</div>
      
      <h1 class="article-detail__title">${news.title}</h1>
      
      <div class="article-detail__meta">
        <span class="article-detail__date">
          <i class="fas fa-calendar"></i> ${news.date}
        </span>
        <span class="article-detail__author">
          <i class="fas fa-user"></i> ${news.author}
        </span>
        <span class="article-detail__views">
          <i class="fas fa-eye"></i> ${news.views} visualizações
        </span>
      </div>
      
      <img src="${news.image}" alt="${news.title}" class="article-detail__image">
      
      <div class="article-detail__body">
        ${news.content}
      </div>
      
      ${news.cta
        ? `
        <div class="article-detail__cta">
          <h4>${news.cta.title}</h4>
          <p>${news.cta.description}</p>
          <a href="${news.cta.buttonLink}" class="btn btn--primary">
            <i class="fas fa-arrow-right"></i>
            ${news.cta.buttonText}
          </a>
        </div>
      `
        : ""
      }
    `
  }
}

function loadRelatedArticles(currentNewsId) {
  const relatedContainer = document.getElementById("related-articles")

  if (relatedContainer) {
    // Get other news articles (excluding current one)
    const relatedNews = Object.keys(newsData)
      .filter((id) => id !== currentNewsId)
      .slice(0, 3)
      .map((id) => ({ id, ...newsData[id] }))

    relatedContainer.innerHTML = relatedNews
      .map(
        (news) => `
      <article class="news-card">
        <div class="news-card__image">
          <img src="${news.image}" alt="${news.title}">
          <div class="news-card__category">${news.category}</div>
        </div>
        <div class="news-card__content">
          <h3 class="news-card__title">${news.title}</h3>
          <p class="news-card__excerpt">${news.excerpt}</p>
          <a href="noticia-detalhes.html?id=${news.id}" class="news-card__link">
            Ler mais <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
    `,
      )
      .join("")
  }
}

function showNewsNotFound() {
  const contentContainer = document.getElementById("article-content")
  if (contentContainer) {
    contentContainer.innerHTML = `
      <div style="text-align: center; padding: 4rem 0;">
        <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--secondary-color); margin-bottom: 2rem;"></i>
        <h2>Notícia não encontrada</h2>
        <p>A notícia que você está procurando não existe ou foi removida.</p>
        <a href="noticias.html" class="btn btn--primary" style="margin-top: 2rem;">
          <i class="fas fa-arrow-left"></i>
          Voltar às Notícias
        </a>
      </div>
    `
  }
}
