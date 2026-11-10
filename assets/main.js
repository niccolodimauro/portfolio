const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const root = document.documentElement;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- Content: roles, meta, Italian translations ---------- */
const roles = {
  en: ["AI Solution Designer", "Copilot agent builder", "PwC GenAI Champion", "Business analyst · BPMN", "Microsoft 365 consultant"],
  it: ["AI Solution Designer", "Creatore di agenti Copilot", "GenAI Champion in PwC", "Business analyst · BPMN", "Consulente Microsoft 365"],
  fr: ["AI Solution Designer", "Créateur d'agents Copilot", "GenAI Champion chez PwC", "Business analyst · BPMN", "Consultant Microsoft 365"],
};
const meta = {
  en: {
    title: "Niccolò Di Mauro — Agentic AI & Microsoft Copilot for Financial Services",
    description:
      "Portfolio of Niccolò Di Mauro, Senior Financial Services Transformation Associate at PwC Luxembourg: agentic AI on the Microsoft stack, Copilot adoption, BPMN process design and Microsoft 365 programmes.",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  it: {
    title: "Niccolò Di Mauro — AI agentica e Microsoft Copilot per i Financial Services",
    description:
      "Portfolio di Niccolò Di Mauro, Senior Financial Services Transformation Associate in PwC Luxembourg: AI agentica sullo stack Microsoft, adozione di Copilot, modellazione BPMN e programmi Microsoft 365.",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },
  fr: {
    title: "Niccolò Di Mauro — IA agentique et Microsoft Copilot pour les Financial Services",
    description:
      "Portfolio de Niccolò Di Mauro, Senior Financial Services Transformation Associate chez PwC Luxembourg : IA agentique sur la stack Microsoft, adoption de Copilot, modélisation BPMN et programmes Microsoft 365.",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
};

const it = {
  skip: "Vai al contenuto",
  toTop: "Torna all'inizio",
  navLabel: "Navigazione principale",
  "nav.about": "Chi sono",
  "nav.skills": "Competenze",
  "nav.projects": "Progetti",
  "nav.journey": "Percorso",
  "nav.certs": "Certificazioni",
  "nav.contact": "Contatti",

  "hero.status": 'Lussemburgo · PwC<span class="hide-sm"> · aperto a progetti AI</span>',
  "hero.roles": "AI Solution Designer, creatore di agenti Copilot, GenAI Champion in PwC e business analyst.",
  "hero.lead":
    "Senior Associate in Financial Services Transformation in PwC Luxembourg. Progetto e realizzo soluzioni di AI agentica sullo stack Microsoft, dall'analisi dei processi e la modellazione BPMN fino a sviluppo, test e adozione.",
  "hero.ctaProjects": "Guarda i progetti",
  "hero.ctaContact": "Contattami",
  "hero.photoAlt": "Ritratto di Niccolò Di Mauro",
  "hero.scrollLabel": "Scorri alla sezione Chi sono",

  "about.index": "01 / chi sono",
  "about.title": "Chi sono",
  "about.big":
    'Trasformo i processi aziendali in <span class="hl">agenti AI</span> che le persone usano davvero, e insegno agli altri a costruirli.',
  "about.p1":
    "Lavoro nel team Modern Workplace and Microsoft di PwC Luxembourg, dove progetto soluzioni agentiche con Copilot Studio, Copilot Cowork, Power Automate e SharePoint. Parto sempre dal processo: lo modello in BPMN, individuo dove un agente porta valore, lo costruisco, lo testo con gli utenti e ne guido l'adozione.",
  "about.p2":
    "Ho seguito programmi Microsoft 365 e Copilot nei settori bancario, fiscale, assicurativo e pubblico: dal PMO e dai target operating model ai workshop di allocazione delle licenze e ai framework di governance.",
  "about.p3":
    "GenAI Champion di PwC dal 2024 e docente principale di un programma di formazione Copilot per circa 400 consulenti. Lavoro in italiano, inglese e francese.",
  "about.statsLabel": "Alcuni numeri",
  "about.stat1": "consulenti nel programma di formazione Copilot",
  "about.stat2": "workshop di allocazione licenze Copilot con le linee di business",
  "about.stat3": "GenAI Champion di PwC dal",
  "about.stat4": "lingue di lavoro: italiano, inglese, francese",

  "skills.index": "02 / competenze",
  "skills.title": "Competenze",
  "skills.lead": "Dove si incontrano AI, processi e financial services.",
  "skills.ai.title": "AI agentica sullo stack Microsoft",
  "skills.ai.text":
    "Soluzioni a uno o più agenti che leggono email, documenti e fatture, propongono azioni e lasciano a una persona l'approvazione finale, con ogni modifica tracciata. Dal workshop di design alla soluzione funzionante.",
  "skills.adoption.title": "Adozione e formazione AI",
  "skills.adoption.text":
    "GenAI Champion: formazioni, sessioni 1:1 con il management e un percorso che porta i consulenti da utenti di Copilot a creatori di agenti.",
  "skills.adoption.tags": "<li>Design del percorso</li><li>Change</li><li>Rete di champion</li>",
  "skills.bpmn.title": "Modellazione dei processi",
  "skills.bpmn.text": "Modelli AS-IS e TO-BE in BPMN, anche dal vivo durante i workshop: il punto di partenza di ogni automazione.",
  "skills.m365.title": "Programmi e governance Microsoft 365",
  "skills.m365.text":
    "PMO su diciannove stream, Target Operating Model, strategia di migrazione e pulizia dei contenuti, gap analysis sull'adozione, KPI DLP, user journey di collaborazione e framework di governance e service management M365.",
  "skills.fs.title": "Financial services e normativa",
  "skills.fs.text":
    "Clienti bancari, fiscali, assicurativi e del settore pubblico. Esperienza diretta su remediation AML e Know Your Transaction, casi d'uso NLP per KYC, due diligence e analisi contrattuale, e valutazioni di conformità GDPR e DORA.",
  "skills.ba.title": "Business analysis",
  "skills.ba.text": "Requisiti, user story, specifiche, UAT con guide e tracker di feedback, report di selezione dei fornitori.",
  "skills.lang.title": "Lingue",
  "skills.lang.text": "Italiano madrelingua, inglese C1–C2 e francese C1: conduco workshop e progetti in tutte e tre.",
  "skills.bd.title": "Business development",
  "skills.bd.text":
    "Competenze AI, casi d'uso e analisi di fattibilità per proposte nei settori asset management, energia e pubblico. Secondo posto al torneo di innovazione interno con un concept bancario per il monitoraggio dei prestiti e del rischio macroeconomico.",
  "skills.bd.tags": "<li>Proposte</li><li>Casi d'uso</li><li>Innovazione</li>",

  "projects.index": "03 / progetti",
  "projects.title": "Progetti",
  "projects.lead": "Una selezione delle soluzioni AI che ho progettato e realizzato.",
  "projects.p1.meta": "2026 · consulenza fiscale",
  "projects.p1.title": "Investment Tax Credit, multi-agente",
  "projects.p1.kicker": "AI Solution Designer · processo end to end",
  "projects.p1.text":
    "Una soluzione multi-agente che copre l'intero processo dell'Investment Tax Credit, dai dossier di ammissibilità ai controlli di conformità e sulle fatture. Ho scritto la logica di smistamento e controllo delle fatture, modellato il processo in BPMN in 15 fasi e validato la soluzione su un caso reale con estrazione OCR, riconciliazione e un flusso di controllo per i documenti mancanti.",
  "projects.p2.meta": "interno · showcase per clienti",
  "projects.p2.title": "Cockpit AI per il project management",
  "projects.p2.kicker": "Human in the loop · tracciato",
  "projects.p2.text":
    "Mantiene aggiornati piani di progetto, RAID log e matrici RACI a partire da email e conversazioni Teams. Un agente AI propone gli aggiornamenti, il project manager li approva in un'app Copilot Studio e ogni modifica viene tracciata. Una versione precedente è stata usata come showcase in una proposta a un cliente.",
  "projects.p3.meta": "distribuito in Teams",
  "projects.p3.title": "Agente di modellazione dei processi",
  "projects.p3.kicker": "Dalla documentazione al BPMN",
  "projects.p3.text":
    "Trasforma la documentazione di processo in modelli BPMN interattivi, direttamente in Microsoft Teams. Fa parte di una famiglia di agenti di business che ho creato, insieme a un coach per la negoziazione e a un agente che seleziona e distribuisce le novità tecnologiche.",
  "projects.p3.tag": "Agenti di business",
  "projects.p4.meta": "ott 2026 · ~400 consulenti",
  "projects.p4.title": "From Copilot User to Agent Builder",
  "projects.p4.kicker": "Docente principale · programma di formazione",
  "projects.p4.text":
    "Ho co-progettato il percorso, la struttura a cluster e il piano di rilascio del programma di formazione Copilot dell'azienda, e tengo il corso con un esercizio pratico di creazione di agenti che ho ideato su un vero caso di gara pubblica. Inoltre formo i nuovi docenti e sono stato nominato trainer di Copilot Cowork per il 2027.",
  "projects.p4.tags": "<li>Formazione</li><li>Creazione di agenti</li><li>Copilot Cowork</li>",

  "journey.index": "04 / percorso",
  "journey.title": "Percorso",
  "journey.lead": "Le tappe che mi hanno portato fin qui, e la prossima.",
  "journey.t1.title": "Laurea triennale in Business and Management · SAA, Torino",
  "journey.t1.text": "Un corso in inglese alla SAA School of Management: le basi di business dietro tutto quello che è venuto dopo.",
  "journey.t2.title": "Master in Digital Transformation and Entrepreneurship · H-FARM",
  "journey.t2.text":
    "University of Chichester presso H-FARM College, concluso con GPA 4.0 e Distinction. Vincitore della borsa HforHuman per un progetto sulla trasformazione digitale nel settore agricolo, con sistemi di supporto alle decisioni per qualità del prodotto, volumi di produzione e pratiche sostenibili.",
  "journey.t3.date": "Mag – Set 2023",
  "journey.t3.title": "Business Analyst · JAKALA, Milano",
  "journey.t3.text":
    "IT advisory su SAS Marketing Automation per clienti retail e industriali: mappatura dei dati AS-IS, riprogettazione TO-BE con privacy by design, business blueprint e aggiornamenti per gli SteerCo.",
  "journey.t4.date": "Ott 2023",
  "journey.t4.title": "PwC Luxembourg · Technology Consulting Trainee",
  "journey.t4.text":
    "I primi progetti su Microsoft 365 e processi per clienti assicurativi, pubblici e dell'acciaio: modelli BPMN, user story, UAT e framework di governance.",
  "journey.t5.date": "Mag 2024",
  "journey.t5.title": "Associate · GenAI Champion",
  "journey.t5.text":
    "Financial Services Transformation Associate. PMO sul programma Microsoft 365 di una banca con diciannove stream, e l'inizio del mio ruolo nella diffusione dell'AI generativa in tutta l'azienda.",
  "journey.t6.date": "Ott 2025",
  "journey.t6.title": "AI Business Analyst · Settore pubblico",
  "journey.t6.text":
    "Workflow Copilot e Power Platform per la gestione di gare e RFP: automazione di email, redazione di documenti, analisi dei requisiti e orchestrazione delle attività.",
  "journey.t7.date": "2026",
  "journey.t7.title": "Senior Associate · AI Solution Designer",
  "journey.t7.text":
    "Promosso a luglio. Soluzione multi-agente per l'Investment Tax Credit, roll-out di Microsoft 365 Copilot in una banca con circa 19 workshop, un Public Sector Hackathon di due giorni e docente principale del corso di formazione Copilot.",
  "journey.t8.title": "Trainer di Copilot Cowork",
  "journey.t8.text":
    "Nominato trainer per Copilot Cowork, per portare competenze AI riutilizzabili ai colleghi di tutta la practice di consulenza.",
  "journey.soon": "in arrivo",

  "certs.index": "05 / certificazioni",
  "certs.title": "Certificazioni",
  "certs.lead": "Formazione continua, dalla strategia AI al service management.",
  "certs.langsLabel": "Lingue",
  "certs.native": "madrelingua",

  "vision.index": "06 / visione",
  "vision.quote":
    'Gli agenti AI dovrebbero essere <span class="accent-text">colleghi</span>, non strumenti: costruiti su processi reali, governati e adottati.',
  "vision.note":
    "La tecnologia è la parte facile. Quello che fa funzionare l'AI nei financial services è capire il processo, lasciare il controllo alle persone e aiutare i team a cambiare il modo in cui lavorano.",

  "contact.index": "07 / contatti",
  "contact.title": 'Costruiamo<br />il tuo prossimo <span class="accent-text">agente</span>.',
  "contact.lead": "Progetti, collaborazioni o semplicemente due chiacchiere su AI, Copilot e financial services: scrivimi.",

  "footer.place": "Lussemburgo · Italia",
  "footer.top": "torna su ↑",
};

const fr = {
  skip: "Aller au contenu",
  toTop: "Retour en haut",
  navLabel: "Navigation principale",
  "nav.about": "À propos",
  "nav.skills": "Compétences",
  "nav.projects": "Projets",
  "nav.journey": "Parcours",
  "nav.certs": "Certifications",
  "nav.contact": "Contact",

  "hero.status": 'Luxembourg · PwC<span class="hide-sm"> · ouvert aux projets IA</span>',
  "hero.roles": "AI Solution Designer, créateur d'agents Copilot, GenAI Champion chez PwC et business analyst.",
  "hero.lead":
    "Senior Associate en Financial Services Transformation chez PwC Luxembourg. Je conçois et je livre des solutions d'IA agentique sur la stack Microsoft, de l'analyse des processus et de la modélisation BPMN jusqu'au développement, aux tests et à l'adoption.",
  "hero.ctaProjects": "Voir les projets",
  "hero.ctaContact": "Me contacter",
  "hero.photoAlt": "Portrait de Niccolò Di Mauro",
  "hero.scrollLabel": "Défiler vers la section À propos",

  "about.index": "01 / à propos",
  "about.title": "À propos",
  "about.big":
    'Je transforme les processus métier en <span class="hl">agents IA</span> que les équipes utilisent vraiment, et j\'apprends aux autres à les construire.',
  "about.p1":
    "Je travaille dans l'équipe Modern Workplace and Microsoft de PwC Luxembourg, où je conçois des solutions agentiques avec Copilot Studio, Copilot Cowork, Power Automate et SharePoint. Je pars toujours du processus : je le modélise en BPMN, j'identifie où un agent apporte de la valeur, je le construis, je le teste avec les utilisateurs et j'accompagne son adoption.",
  "about.p2":
    "J'ai mené des programmes Microsoft 365 et Copilot dans la banque, la fiscalité, l'assurance et le secteur public : du PMO et des target operating models aux ateliers d'attribution des licences et aux cadres de gouvernance.",
  "about.p3":
    "GenAI Champion chez PwC depuis 2024 et formateur principal d'un programme de montée en compétences Copilot pour environ 400 consultants. Je travaille en italien, en anglais et en français.",
  "about.statsLabel": "Quelques chiffres",
  "about.stat1": "consultants dans le programme de formation Copilot",
  "about.stat2": "ateliers d'attribution des licences Copilot avec les métiers",
  "about.stat3": "GenAI Champion chez PwC depuis",
  "about.stat4": "langues de travail : italien, anglais, français",

  "skills.index": "02 / compétences",
  "skills.title": "Compétences",
  "skills.lead": "Là où se rencontrent l'IA, les processus et les financial services.",
  "skills.ai.title": "IA agentique sur la stack Microsoft",
  "skills.ai.text":
    "Des solutions à un ou plusieurs agents qui lisent e-mails, documents et factures, proposent des actions et laissent la validation finale à une personne, avec chaque modification tracée. De l'atelier de conception à la solution opérationnelle.",
  "skills.adoption.title": "Adoption et formation IA",
  "skills.adoption.text":
    "GenAI Champion : formations, sessions individuelles avec la direction et un parcours qui fait passer les consultants d'utilisateurs de Copilot à créateurs d'agents.",
  "skills.adoption.tags": "<li>Conception de parcours</li><li>Conduite du changement</li><li>Réseau de champions</li>",
  "skills.bpmn.title": "Modélisation des processus",
  "skills.bpmn.text": "Modèles AS-IS et TO-BE en BPMN, y compris en direct pendant les ateliers : le point de départ de toute automatisation.",
  "skills.m365.title": "Programmes et gouvernance Microsoft 365",
  "skills.m365.text":
    "PMO sur dix-neuf chantiers, Target Operating Model, stratégie de migration et nettoyage des contenus, analyse des écarts d'adoption, KPI DLP, parcours utilisateurs de collaboration et cadres de gouvernance et de service management M365.",
  "skills.fs.title": "Financial services et réglementation",
  "skills.fs.text":
    "Clients dans la banque, la fiscalité, l'assurance et le secteur public. Expérience concrète de la remédiation AML et Know Your Transaction, de cas d'usage NLP pour le KYC, la due diligence et l'analyse de contrats, et d'évaluations de conformité RGPD et DORA.",
  "skills.ba.title": "Business analysis",
  "skills.ba.text": "Exigences, user stories, spécifications, recette (UAT) avec guides et suivi des retours, rapports de sélection de fournisseurs.",
  "skills.lang.title": "Langues",
  "skills.lang.text": "Italien langue maternelle, anglais C1–C2 et français C1 : j'anime des ateliers et je mène des projets dans les trois langues.",
  "skills.bd.title": "Développement commercial",
  "skills.bd.text":
    "Expertise IA, cas d'usage et analyses de faisabilité pour des propositions en asset management, énergie et secteur public. Deuxième place au tournoi d'innovation interne avec un concept bancaire de suivi des prêts et du risque macroéconomique.",
  "skills.bd.tags": "<li>Propositions</li><li>Cas d'usage</li><li>Innovation</li>",

  "projects.index": "03 / projets",
  "projects.title": "Projets",
  "projects.lead": "Une sélection des solutions IA que j'ai conçues et construites.",
  "projects.p1.meta": "2026 · conseil fiscal",
  "projects.p1.title": "Investment Tax Credit, multi-agents",
  "projects.p1.kicker": "AI Solution Designer · processus de bout en bout",
  "projects.p1.text":
    "Une solution multi-agents qui couvre tout le processus de l'Investment Tax Credit, des dossiers d'éligibilité aux contrôles de conformité et des factures. J'ai rédigé la logique de tri et de contrôle des factures, modélisé le processus en BPMN en 15 phases et validé la solution sur un cas réel avec extraction OCR, rapprochement et un flux de contrôle pour les pièces manquantes.",
  "projects.p2.meta": "interne · vitrine client",
  "projects.p2.title": "Cockpit IA de gestion de projet",
  "projects.p2.kicker": "Human in the loop · tracé",
  "projects.p2.text":
    "Tient à jour les plannings, les RAID logs et les matrices RACI à partir des e-mails et des conversations Teams. Un agent IA propose les mises à jour, le chef de projet les valide dans une application Copilot Studio et chaque modification est tracée. Une version antérieure a servi de vitrine dans une proposition client.",
  "projects.p3.meta": "déployé dans Teams",
  "projects.p3.title": "Agent de modélisation des processus",
  "projects.p3.kicker": "De la documentation au BPMN",
  "projects.p3.text":
    "Transforme la documentation de processus en modèles BPMN interactifs, directement dans Microsoft Teams. Il fait partie d'une famille d'agents métier que j'ai créés, avec un coach de négociation et un agent de veille qui sélectionne et diffuse l'actualité technologique.",
  "projects.p3.tag": "Agents métier",
  "projects.p4.meta": "oct. 2026 · ~400 consultants",
  "projects.p4.title": "From Copilot User to Agent Builder",
  "projects.p4.kicker": "Formateur principal · programme de formation",
  "projects.p4.text":
    "J'ai co-conçu le parcours, la structure par clusters et le plan de déploiement du programme de formation Copilot du cabinet, et j'anime le cours avec un exercice pratique de création d'agent que j'ai conçu sur un vrai cas d'appel d'offres public. J'accompagne aussi les nouveaux formateurs, et j'ai été nommé formateur Copilot Cowork pour 2027.",
  "projects.p4.tags": "<li>Formation</li><li>Création d'agents</li><li>Copilot Cowork</li>",

  "journey.index": "04 / parcours",
  "journey.title": "Parcours",
  "journey.lead": "Les étapes qui m'ont mené jusqu'ici, et la prochaine.",
  "journey.t1.title": "Bachelor en Business and Management · SAA, Turin",
  "journey.t1.text": "Un cursus en anglais à la SAA School of Management : les bases business de tout ce qui a suivi.",
  "journey.t2.title": "Master en Digital Transformation and Entrepreneurship · H-FARM",
  "journey.t2.text":
    "University of Chichester au H-FARM College, diplômé avec un GPA de 4.0 et la mention Distinction. Lauréat de la bourse HforHuman pour un projet sur la transformation numérique du secteur agricole, avec des systèmes d'aide à la décision pour la qualité des produits, les volumes de production et les pratiques durables.",
  "journey.t3.date": "Mai – sept. 2023",
  "journey.t3.title": "Business Analyst · JAKALA, Milan",
  "journey.t3.text":
    "Conseil IT sur SAS Marketing Automation pour des clients retail et industriels : cartographie des données AS-IS, refonte TO-BE avec privacy by design, business blueprint et points d'avancement en SteerCo.",
  "journey.t4.date": "Oct. 2023",
  "journey.t4.title": "PwC Luxembourg · Technology Consulting Trainee",
  "journey.t4.text":
    "Premières missions sur Microsoft 365 et les processus pour des clients de l'assurance, du secteur public et de la sidérurgie : modèles BPMN, user stories, recette et cadres de gouvernance.",
  "journey.t5.date": "Mai 2024",
  "journey.t5.title": "Associate · GenAI Champion",
  "journey.t5.text":
    "Financial Services Transformation Associate. PMO sur le programme Microsoft 365 d'une banque avec dix-neuf chantiers, et début de mon rôle dans la diffusion de l'IA générative dans tout le cabinet.",
  "journey.t6.date": "Oct. 2025",
  "journey.t6.title": "AI Business Analyst · Secteur public",
  "journey.t6.text":
    "Workflows Copilot et Power Platform pour la gestion des appels d'offres : automatisation des e-mails, rédaction de documents, analyse des exigences et orchestration des tâches.",
  "journey.t7.date": "2026",
  "journey.t7.title": "Senior Associate · AI Solution Designer",
  "journey.t7.text":
    "Promu en juillet. Solution multi-agents pour l'Investment Tax Credit, déploiement de Microsoft 365 Copilot dans une banque avec environ 19 ateliers, un Public Sector Hackathon de deux jours et formateur principal du cours Copilot.",
  "journey.t8.title": "Formateur Copilot Cowork",
  "journey.t8.text":
    "Nommé formateur Copilot Cowork, pour diffuser des compétences IA réutilisables auprès des collègues de toute la practice de conseil.",
  "journey.soon": "à venir",

  "certs.index": "05 / certifications",
  "certs.title": "Certifications",
  "certs.lead": "Formation continue, de la stratégie IA au service management.",
  "certs.langsLabel": "Langues",
  "certs.native": "langue maternelle",

  "vision.index": "06 / vision",
  "vision.quote":
    'Les agents IA devraient être des <span class="accent-text">collègues</span>, pas des outils : construits sur des processus réels, gouvernés et adoptés.',
  "vision.note":
    "La technologie est la partie facile. Ce qui fait fonctionner l'IA dans les financial services, c'est comprendre le processus, laisser le contrôle aux personnes et aider les équipes à changer leur façon de travailler.",

  "contact.index": "07 / contact",
  "contact.title": 'Construisons<br />ton prochain <span class="accent-text">agent</span>.',
  "contact.lead": "Projets, collaborations ou simplement un échange sur l'IA, Copilot et les financial services : écris-moi.",

  "footer.place": "Luxembourg · Italie",
  "footer.top": "retour en haut ↑",
};

const dict = { it, fr };

/* ---------- i18n ---------- */
const original = {
  html: new Map($$("[data-i18n]").map((el) => [el, el.innerHTML])),
  aria: new Map($$("[data-i18n-aria]").map((el) => [el, el.getAttribute("aria-label")])),
  alt: new Map($$("[data-i18n-alt]").map((el) => [el, el.getAttribute("alt")])),
};
const LANG_KEY = "lang";
function initialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved in dict || saved === "en") return saved;
  } catch {}
  const nav = (navigator.language || "en").toLowerCase().slice(0, 2);
  return nav in dict ? nav : "en";
}
let lang = initialLang();
let typedRun = 0;

function applyLang(next) {
  lang = next;
  root.lang = next;
  const pick = (key, fallback) => dict[next]?.[key] ?? fallback;
  for (const [el, html] of original.html) {
    const value = pick(el.dataset.i18n, html);
    if (el.hasAttribute("data-scramble")) {
      const text = value.trim();
      el.dataset.text = text;
      el.setAttribute("aria-label", text);
      el.textContent = text;
      if (el.classList.contains("is-visible") && !reduced) scramble(el);
    } else {
      el.innerHTML = value;
    }
  }
  for (const [el, v] of original.aria) el.setAttribute("aria-label", pick(el.dataset.i18nAria, v));
  for (const [el, v] of original.alt) el.setAttribute("alt", pick(el.dataset.i18nAlt, v));
  document.title = meta[next].title;
  $('meta[name="description"]')?.setAttribute("content", meta[next].description);
  $$(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === next)));
  $(".lang")?.setAttribute("data-active", next);
  updateToggleLabel();
  if (root.classList.contains("is-ready")) startTyping();
}
function switchLang(next) {
  if (next === lang) return;
  try { localStorage.setItem(LANG_KEY, next); } catch {}
  if (reduced) return applyLang(next);
  root.classList.add("is-switching");
  setTimeout(() => {
    applyLang(next);
    requestAnimationFrame(() => root.classList.remove("is-switching"));
  }, 260);
}
$$(".lang__btn").forEach((b) => b.addEventListener("click", () => switchLang(b.dataset.lang)));

$$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

/* ---------- Portrait fallback (monogram until a photo exists) ---------- */
const portrait = $(".portrait");
const photo = $(".portrait img");
if (photo) {
  const fail = () => portrait.classList.add("no-photo");
  photo.addEventListener("error", fail, { once: true });
  if (photo.complete && photo.naturalWidth === 0) fail();
}

/* ---------- Typed roles ---------- */
function startTyping() {
  const el = $(".typed");
  if (!el) return;
  const list = roles[lang];
  if (reduced) { el.textContent = list[0]; return; }
  const run = ++typedRun;
  let i = 0, n = 0, deleting = false;
  el.textContent = "";
  const tick = () => {
    if (run !== typedRun) return;
    const word = list[i];
    n += deleting ? -1 : 1;
    el.textContent = word.slice(0, n);
    let delay = deleting ? 35 : 70;
    if (!deleting && n === word.length) { deleting = true; delay = 1800; }
    else if (deleting && n === 0) { deleting = false; i = (i + 1) % list.length; delay = 350; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 500);
}

/* ---------- Scramble + counters ---------- */
const GLYPHS = "!<>-_\\/[]{}=+*^?#01";
function scramble(el) {
  const text = el.dataset.text ?? el.textContent;
  el.dataset.text = text;
  el.setAttribute("aria-label", text);
  const start = performance.now();
  const frame = (now) => {
    const p = Math.min((now - start) / 900, 1);
    const done = Math.floor(p * text.length);
    let out = "";
    for (let k = 0; k < text.length; k++) out += k < done || text[k] === " " ? text[k] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    el.textContent = out;
    if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
  };
  requestAnimationFrame(frame);
}
function countUp(el) {
  const target = Number(el.dataset.count);
  const from = target > 1000 ? target - 25 : 0;
  const start = performance.now();
  const frame = (now) => {
    const p = Math.min((now - start) / 1600, 1);
    el.textContent = Math.round(from + (target - from) * (1 - (1 - p) ** 4));
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* ---------- Reveal on scroll ---------- */
$$("[data-reveal]").forEach((el) => {
  const idx = [...el.parentElement.children].filter((c) => c.hasAttribute("data-reveal")).indexOf(el);
  if (idx > 0) el.style.transitionDelay = `${Math.min(idx * 0.08, 0.5)}s`;
});
if (reduced || !("IntersectionObserver" in window)) {
  $$("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        el.classList.add("is-visible");
        if (el.hasAttribute("data-scramble")) scramble(el);
        $$("[data-count]", el).forEach(countUp);
        el.addEventListener("transitionend", () => (el.style.transitionDelay = ""), { once: true });
        io.unobserve(el);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  $$("[data-reveal]").forEach((el) => io.observe(el));
}

/* ---------- Loader ---------- */
const loader = $(".loader");
const loaderCount = $(".loader__count");
const loaderBar = $(".loader__bar");
document.body.classList.add("is-loading");
function finishLoading() {
  loader.classList.add("is-done");
  document.body.classList.remove("is-loading");
  requestAnimationFrame(() => root.classList.add("is-ready"));
  startTyping();
}
if (reduced) {
  finishLoading();
} else {
  const t0 = performance.now();
  let ready = false;
  Promise.all([
    document.fonts?.ready ?? Promise.resolve(),
    new Promise((r) => (document.readyState === "complete" ? r() : window.addEventListener("load", r, { once: true }))),
  ]).then(() => (ready = true));
  setTimeout(() => (ready = true), 4000);
  const step = (now) => {
    const raw = Math.min((now - t0) / 1300, 1);
    const p = ready ? raw : Math.min(raw, 0.9);
    const eased = 1 - (1 - p) ** 3;
    loaderCount.textContent = String(Math.round(eased * 100)).padStart(3, "0");
    loaderBar.style.setProperty("--p", eased);
    if (p >= 1) setTimeout(finishLoading, 150); else requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Smooth anchors ---------- */
$$('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (ev) => {
    const href = a.getAttribute("href");
    if (href.length < 2) return;
    ev.preventDefault();
    closeMenu();
    if (href === "#top") window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    else $(href)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    if (href !== "#top") history.replaceState(null, "", href);
    const target = $(href === "#top" ? "#main" : href);
    if (target) { target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true }); }
  });
});

/* ---------- Nav + mobile menu ---------- */
const nav = $(".nav");
const toggle = $(".nav__toggle");
const menu = $("#mobile-menu");
const inertTargets = [$("main"), $(".footer")];
let menuTimer;
function updateToggleLabel() {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-label", open ? meta[lang].closeMenu : meta[lang].openMenu);
}
function openMenu() {
  clearTimeout(menuTimer);
  menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add("is-open"));
  toggle.setAttribute("aria-expanded", "true");
  updateToggleLabel();
  inertTargets.forEach((el) => (el.inert = true));
  document.body.style.overflow = "hidden";
  $("a", menu).focus();
}
function closeMenu({ restoreFocus = false } = {}) {
  if (menu.hidden || !menu.classList.contains("is-open")) return;
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  updateToggleLabel();
  inertTargets.forEach((el) => (el.inert = false));
  document.body.style.overflow = "";
  if (restoreFocus) toggle.focus();
  menuTimer = setTimeout(() => (menu.hidden = true), 400);
}
toggle.addEventListener("click", () => (menu.classList.contains("is-open") ? closeMenu() : openMenu()));
document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu({ restoreFocus: true }));
window.matchMedia("(min-width: 961px)").addEventListener("change", (e) => e.matches && closeMenu());

const navLinks = $$("[data-nav]");
const navIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
    }
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
navLinks.forEach((l) => { const t = $(l.getAttribute("href")); if (t) navIO.observe(t); });

/* ---------- Section themes (dark / light) ---------- */
const themeMeta = $('meta[name="theme-color"]');
const themeIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const theme = e.target.dataset.theme;
      root.dataset.theme = theme;
      themeMeta?.setAttribute("content", theme === "light" ? "#f3f3f1" : "#0a0a0a");
      if (!animating) setTimeout(() => draw(0), 50);
    }
  },
  { rootMargin: "-50% 0px -50% 0px" }
);
$$("section[data-theme]").forEach((s) => themeIO.observe(s));

/* ---------- Scroll progress, nav state, timeline fill ---------- */
const timeline = $(".timeline");
let lastY = window.scrollY;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  root.style.setProperty("--progress", max > 0 ? (y / max).toFixed(4) : 0);
  nav.classList.toggle("is-scrolled", y > 40);
  nav.classList.toggle("is-hidden", y > lastY && y > 400 && menu.hidden);
  lastY = y;
  if (timeline) {
    const r = timeline.getBoundingClientRect();
    const f = (window.innerHeight * 0.6 - r.top) / r.height;
    timeline.style.setProperty("--fill", Math.max(0, Math.min(1, f)).toFixed(3));
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Pointer effects ---------- */
const mouse = { x: -9999, y: -9999 };
if (finePointer && !reduced) {
  root.classList.add("has-pointer");
  const glow = $(".cursor-glow");
  let gx = -999, gy = -999, tx = -999, ty = -999;
  window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; mouse.x = e.clientX; mouse.y = e.clientY; });
  const follow = () => {
    gx += (tx - gx) * 0.12;
    gy += (ty - gy) * 0.12;
    glow.style.setProperty("--x", `${gx}px`);
    glow.style.setProperty("--y", `${gy}px`);
    requestAnimationFrame(follow);
  };
  follow();

  $$("[data-spotlight]").forEach((el) =>
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    })
  );

  $$("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * 0.25;
      const dy = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transition = "transform .6s cubic-bezier(.16,1,.3,1), color .4s, box-shadow .4s, border-color .4s";
      el.style.transform = "";
      setTimeout(() => (el.style.transition = ""), 600);
    });
  });

  const tilt = $("[data-tilt]");
  tilt.addEventListener("pointermove", (e) => {
    const r = tilt.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    portrait.style.setProperty("--ry", `${px * 10}deg`);
    portrait.style.setProperty("--rx", `${-py * 10}deg`);
  });
  tilt.addEventListener("pointerleave", () => {
    portrait.style.setProperty("--ry", "0deg");
    portrait.style.setProperty("--rx", "0deg");
  });
}

/* ---------- Background dot grid ---------- */
const canvas = $(".bg-canvas");
const ctx = canvas.getContext("2d");
let dots = [], W = 0, H = 0, animating = !reduced, rafId = 0;
function setupCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const gap = W < 700 ? 34 : 40;
  dots = [];
  for (let x = gap / 2; x < W; x += gap) for (let y = gap / 2; y < H; y += gap) dots.push({ x, y });
}
function textRGB() {
  const m = getComputedStyle(root).getPropertyValue("--text").match(/[\d.]+/g);
  if (m && m.length >= 3) return m.slice(0, 3).join(", ");
  return root.dataset.theme === "light" ? "10, 10, 10" : "245, 245, 244";
}
function hexToRgb(v) {
  const h = v.trim().replace("#", "");
  if (h.length < 6) return null;
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).join(", ");
}
function draw(t) {
  ctx.clearRect(0, 0, W, H);
  const raw = getComputedStyle(root).getPropertyValue("--text");
  const rgb = raw.trim().startsWith("#") ? hexToRgb(raw) ?? textRGB() : textRGB();
  const time = t * 0.001;
  for (const d of dots) {
    const dx = d.x - mouse.x, dy = d.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const near = Math.max(0, 1 - dist / 170);
    const alpha = 0.05 + ((Math.sin(d.x * 0.006 + d.y * 0.004 - time * 0.8) + 1) / 2) * 0.07 + near * 0.55;
    const push = near * 10;
    const x = d.x + (dist > 0 ? (dx / dist) * push : 0);
    const y = d.y + (dist > 0 ? (dy / dist) * push : 0);
    const size = 1 + near * 1.4;
    ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }
}
const loop = (t) => { draw(t); rafId = requestAnimationFrame(loop); };
setupCanvas();
if (animating) {
  rafId = requestAnimationFrame(loop);
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(rafId);
    animating = !document.hidden;
    if (animating) rafId = requestAnimationFrame(loop);
  });
} else {
  draw(0);
}
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth === W && window.innerHeight <= H) return;
    setupCanvas();
    if (!animating) draw(0);
  }, 150);
});

applyLang(lang);
