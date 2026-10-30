document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        const isActive = mobileMenu.classList.contains('active');
        
        // Change icon based on state
        if (isActive) {
            mobileMenuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileMenuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            document.body.style.overflow = '';
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Scroll Animation Observer (Fade In Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine if there is a delay specific to element
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    entry.target.style.transitionDelay = delay;
                }
                
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    // Subtle Parallax for hero background
    const heroBg = document.querySelector('.hero-background');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight && heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Account for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Language Toggle Logic
    const translations = {
        en: {
            "nav-about": "About",
            "nav-services": "Services",
            "nav-portfolio": "Portfolio",
            "nav-lets-talk": "Let's Talk",
            "nav-contact": "Contact",
            "hero-badge": "Sino-Pakistani Corporate Law Expert",
            "hero-title": "Ahmad Hassan Adv",
            "hero-sub": "Corporate and commercial lawyer specializing in Sino-Pakistani transactions, foreign investment, capital markets, SECP and PSX regulatory compliance, cross-border deals, and Chinese company legal matters in Pakistan.",
            "hero-cta1": "View My Work",
            "hero-cta2": "Contact Me",
            "scroll-down": "Scroll Down",
            "about-badge-title": "Managing Partner",
            "about-badge-org": "The Law Nexus",
            "about-title": "Fully Covered, Professional Expertise",
            "about-p1": "As a leading corporate and commercial lawyer, I specialize in navigating the complex legal landscape connecting Pakistani and Chinese markets. My expertise covers high-stakes transactions, strategic foreign investment structuring, and comprehensive capital market operations.",
            "about-p2": "I provide authoritative counsel on SECP and PSX regulatory compliance, orchestrate seamless cross-border deals, and serve as the definitive legal partner for Chinese companies establishing and expanding their footprint in Pakistan.",
            "about-edu-title": "Background & Credentials",
            "about-edu-deg": "LLB (Hons)",
            "about-edu-uni": "Punjab University",
            "services-title": "The Nexus: Core Offerings",
            "services-sub": "Specialist legal advisory, regulatory compliance, and transactional services.",
            "srv1-title": "Mines & Minerals Legal Services",
            "srv1-desc": "Advisory on Pakistan's mining regulatory framework, exploration licenses, joint venture agreements, and strategic support for Chinese mining investors entering Pakistan's sector.",
            "srv2-title": "Fertilizer Registration",
            "srv2-desc": "End-to-end legal support for product registration, import permits, and regulatory compliance for Chinese and foreign manufacturers in Pakistan's agricultural inputs sector.",
            "srv3-title": "Electric Vehicles & Lithium-Ion",
            "srv3-desc": "Specialist advisory on EV import structuring, customs compliance, EDB deletion programs, and distribution agreements for the evolving electric mobility ecosystem.",
            "srv4-title": "Energy & Power Sector",
            "srv4-desc": "Legal support for IPPs, renewable energy (CPEC projects), Power Purchase Agreements (PPAs), and regulatory licensing with NEPRA, OGRA, and AEDB.",
            "srv5-title": "Customs Compliance & Litigation",
            "srv5-desc": "Advising on Customs Act, duty structuring, HS code classification, SRO exemptions, and representing clients before the Customs Appellate Tribunal and High Courts.",
            "srv6-title": "FBR Compliance & Tax Litigation",
            "srv6-desc": "Comprehensive tax advisory, transfer pricing for cross-border transactions, and representation in complex tax disputes before the Appellate Tribunal Inland Revenue.",
            "srv7-title": "Trademark Registration",
            "srv7-desc": "Protecting intellectual property through IPO-Pakistan filings, opposition proceedings, and enforcing trademark rights for domestic and foreign enterprises.",
            "srv8-title": "PSX Listing & Registration",
            "srv8-desc": "Guiding issuers and foreign investors through the Pakistan Stock Exchange listing process, prospectus preparation, and post-listing corporate governance compliance.",
            "srv9-title": "Company & Corporate Litigation",
            "srv9-desc": "Representing corporates in high-stakes disputes, shareholder conflicts, SECP proceedings, and complete end-to-end company incorporation services.",
            "port-title": "My Featured Showcases",
            "port-sub": "Explore some of my recent work and see how I help clients achieve their goals.",
            "port1-cat": "Capital Markets • Cross-Border",
            "port1-title": "Automotive Sector IPO — Pakistani Legal Counsel",
            "port1-sub": "Pakistan Stock Exchange Listing | Sino-Pakistani Capital Markets Transaction",
            "client-label": "Client:",
            "scope-label": "Scope:",
            "port1-client": "A leading Chinese international law firm, on behalf of a major Chinese state-owned automotive manufacturer.",
            "port1-scope": "Delivery of a comprehensive Pakistani legal opinion and associated advisory covering capital markets regulations, corporate governance, and PSR regulatory compliance.",
            "port2-cat": "Mines & Minerals • Foreign Investment",
            "port2-title": "Sino-Pakistani Mining Joint Venture",
            "port2-sub": "Balochistan Minerals Extraction & Processing Facility Setup",
            "port2-client": "Multi-national consortium of private Chinese equity investors and local extraction firms.",
            "port2-scope": "Structured corporate joint venture, navigated provincial leasing permits, and resolved title due diligence for a high-yield exploration project.",
            "port3-cat": "Electric Vehicles • Regulatory",
            "port3-title": "Special Economic Zone EV Assembly Plant",
            "port3-sub": "Foreign Direct Investment & SEZ Registration Legal Counsel",
            "port3-client": "Prominent East-Asian Lithium-Ion Battery and EV parts manufacturer.",
            "port3-scope": "Led the successful SEZ registration and secured essential EDB manufacturing licenses and concessionary import tariff rulings.",
            "port4-cat": "Energy & Power • Infrastructure",
            "port4-title": "CPEC Renewable Energy IPP Financial Close",
            "port4-sub": "Wind Power Generation Facility NEPRA Tariff Determination",
            "port4-client": "Independent Power Producer (IPP) backed by state-level project financing.",
            "port4-scope": "Successfully petitioned NEPRA for favorable baseline tariff determination and drafted the core Energy Purchase Agreement (EPA).",
            "ftr-title": "Let's build something great together.",
            "ftr-sub": "I am available for consultation on cross-border legal frameworks, corporate structuring, and high-value transactions.",
            "ftr-btn": "Get in Touch",
            "ftr-rights": "All Rights Reserved."
        },
        zh: {
            "nav-about": "关于",
            "nav-services": "服务",
            "nav-portfolio": "案例",
            "nav-lets-talk": "联系我们",
            "nav-contact": "联系我们",
            "hero-badge": "中巴企业法专家",
            "hero-title": "艾哈迈德·哈桑 律师",
            "hero-sub": "专注于中巴交易、外商投资、资本市场、SECP和PSX合规、跨境交易以及中国企业在巴法律事务。",
            "hero-cta1": "查看项目",
            "hero-cta2": "联系我",
            "scroll-down": "向下滚动",
            "about-badge-title": "执行合伙人",
            "about-badge-org": "The Law Nexus",
            "about-title": "全覆盖的专业法律服务",
            "about-p1": "作为顶尖的企业和商业律师，我专注于处理连接巴基斯坦和中国市场的复杂法律架构。我的业务涵盖高风险交易、外商投资战略性结构调整以及资本市场的全方位运作。",
            "about-p2": "我在SECP和PSX合规领域提供权威建议，主导无缝的跨境交易，是众多中国企业在巴基斯坦设立和扩大投资版图的指定法律商业伙伴。",
            "about-edu-title": "教育与资质",
            "about-edu-deg": "法学学士 (荣誉)",
            "about-edu-uni": "旁遮普大学",
            "services-title": "核心业务 / 服务节点",
            "services-sub": "专业的法律顾问、合规管理以及交易服务。",
            "srv1-title": "矿业与矿产法律服务",
            "srv1-desc": "为有意向进入巴基斯坦矿业部门的中国投资者提供关于巴基斯坦采矿合规体系、勘探执照、合资协议等方面的咨询与战略支持。",
            "srv2-title": "农资与肥料注册",
            "srv2-desc": "协助中国和国际制造商在巴基斯坦农业投入物资领域进行产品注册、获取进口许可及进行全程合规操作。",
            "srv3-title": "电动汽车与锂电池",
            "srv3-desc": "为快速发展的电动出行产业提供专业的电动汽车进口架构设计、海关合规、EDB部件本地化及独家分销协议咨询。",
            "srv4-title": "能源与电力部门",
            "srv4-desc": "为独立发电商、可再生能源(中巴经济走廊项目)及电力采购协议(PPAs)提供法律支持，并代为获取NEPRA等政府部门的执照许可。",
            "srv5-title": "海关合规与税务诉讼",
            "srv5-desc": "针对巴基斯坦海关法、关税减免、HS编码分类及SRO政策提供咨询，并在海关上诉法庭与高等法院代理相关诉讼案件。",
            "srv6-title": "FBR合规与税务争议",
            "srv6-desc": "提供全面的税务咨询及跨境交易转移定价合规服务，代表客户处理国家税务局法庭内的复杂税务争议事件。",
            "srv7-title": "商标注册与维权",
            "srv7-desc": "在巴基斯坦知识产权组织进行商标注册备案和异议抗辩，为本国和外资公司建立起有效的品牌保护屏障。",
            "srv8-title": "PSX上市及券商注册",
            "srv8-desc": "引导发行商与外国投资者通过巴基斯坦证券交易所（PSX）的上市流程，起草招股说明书，以满足上市后的公司管治合规审查。",
            "srv9-title": "公司组建与商业诉讼",
            "srv9-desc": "从一站式处理全流程企业注册，到代表企业介入高额赔偿争议、股东矛盾及应对证券交易委员会（SECP）的纠纷案件。",
            "port-title": "精选案例",
            "port-sub": "在这里，您可以浏览我最近的一些重大项目，了解我是如何协助客户达成商业目标的。",
            "port1-cat": "资本市场 • 跨境贸易",
            "port1-title": "巴基斯坦某汽车制造巨头首发上市（IPO）",
            "port1-sub": "巴基斯坦证券交易所(PSX)上市 | 中巴资本市场大型交易",
            "client-label": "客户:",
            "scope-label": "范围:",
            "port1-client": "通过中国的一家国际性律师事务所，代表这家知名的中国国有汽车制造企业在巴基斯坦的经营分支机构。",
            "port1-scope": "提供全面深度的巴基斯坦法律意见，内容涉及投资银行承销阶段的资本市场披露要求、公司监管架构及合规运作。",
            "port2-cat": "矿业开采 • 外商投资",
            "port2-title": "中巴矿业合资公司构建",
            "port2-sub": "俾路支省大规模矿产开采与加工基地设计",
            "port2-client": "由中国民营股权投资机构和巴基斯坦地方勘探企业组成的跨国实业财团。",
            "port2-scope": "主导完成中巴跨国合资结构设计，顺利获批极为复杂的地方租赁证照，针对这一高回报勘探工程成功通过所有权方面的深入调查。",
            "port3-cat": "电动汽车 • 政府许可",
            "port3-title": "经济特区电动汽车整车组装厂设立",
            "port3-sub": "FDI外国直接投资与巴基斯坦特区政策入驻支持",
            "port3-client": "实力强劲的东亚地区锂电池与新能源电动车备件设备顶级生产商。",
            "port3-scope": "成功负责推动企业获得了国家特区（SEZ）正式登记，拿下了对于投资至关重要的核心生产许可证及进口关税下调优惠政策。",
            "port4-cat": "能源电力 • 基础架构",
            "port4-title": "中巴经济走廊新能源IPP资金交割",
            "port4-sub": "风力发电网络关于国家电力监管局(NEPRA)购电费率敲定",
            "port4-client": "具备大型国有政府项目资金背景与建设体量的独立发电商(IPP)。",
            "port4-scope": "通过数次沟通向主管当局申请锁定最有利的基本准购电费率水平，并为之负责起草了全部的核心电力购置协议(EPA)和商业法律文件。",
            "ftr-title": "让我们携手合作，共创卓越成果。",
            "ftr-sub": "如果您期望在跨境法规、跨国企业组织结构，以及高净值商业谈判领域获得帮助，请随时联络我。",
            "ftr-btn": "立即联系",
            "ftr-rights": "保留所有权利。"
        }
    };

    let currentLang = 'en';
    const langToggleDesktop = document.getElementById('langToggleDesktop');
    const langToggleMobile = document.getElementById('langToggleMobile');

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        
        // Update button text
        const btnText = currentLang === 'en' ? '中文' : 'EN';
        langToggleDesktop.innerText = btnText;
        langToggleMobile.innerText = currentLang === 'en' ? '中文 / EN' : 'EN / 中文';
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });
    }

    langToggleDesktop.addEventListener('click', toggleLanguage);
    langToggleMobile.addEventListener('click', toggleLanguage);
});
