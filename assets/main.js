const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const root = document.documentElement;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- Content: roles, meta, Italian translations ---------- */
const roles = {
  "en": [
    "Senior Associate · PwC Luxembourg",
    "AI Solution Designer",
    "Microsoft Copilot & Copilot Studio",
    "PwC GenAI Champion",
    "Financial Services Transformation"
  ],
  "it": [
    "Senior Associate · PwC Luxembourg",
    "AI Solution Designer",
    "Microsoft Copilot e Copilot Studio",
    "GenAI Champion di PwC",
    "Financial Services Transformation"
  ],
  "fr": [
    "Senior Associate · PwC Luxembourg",
    "AI Solution Designer",
    "Microsoft Copilot et Copilot Studio",
    "GenAI Champion PwC",
    "Financial Services Transformation"
  ]
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
  "skip": "Vai al contenuto",
  "toTop": "Torna all'inizio",
  "navLabel": "Navigazione principale",
  "nav.about": "Profilo",
  "nav.skills": "Competenze",
  "nav.projects": "Progetti",
  "nav.journey": "Carriera",
  "nav.certs": "Certificazioni",
  "nav.contact": "Contatti",
  "hero.status": "PwC Luxembourg<span class=\"hide-sm\"> · Advisory · Financial Services</span>",
  "hero.roles": "Senior Associate in PwC Luxembourg, AI Solution Designer, specialista Microsoft Copilot e GenAI Champion di PwC.",
  "hero.lead": "Senior Associate, Financial Services Transformation. Aiuto banche, studi fiscali, assicurazioni e istituzioni pubbliche a introdurre l'AI agentica sullo stack Microsoft, dalla progettazione dei processi all'adozione su larga scala.",
  "hero.ctaProjects": "Progetti selezionati",
  "hero.ctaContact": "Contatti",
  "hero.photoAlt": "Ritratto di Niccolò Di Mauro",
  "hero.scrollLabel": "Scorri al profilo",
  "about.index": "PwC Luxembourg · Advisory",
  "about.title": "Profilo",
  "about.big": "Progetto <span class=\"hl\">soluzioni di AI agentica</span> ancorate ai processi reali, governate fin dall'inizio e adottate dal business.",
  "about.p1": "Sono Senior Associate nel team Modern Workplace and Microsoft di PwC Luxembourg. Seguo l'intero ciclo di delivery delle soluzioni AI su Copilot Studio, Copilot Cowork, Power Automate e SharePoint: analisi e modellazione BPMN dei processi, design della soluzione, sviluppo, user acceptance testing e adozione.",
  "about.p2": "Affianco alla delivery AI il supporto a programmi Microsoft 365 e Copilot per clienti nei settori bancario, fiscale, assicurativo e pubblico: gestione del programma, target operating model, allocazione delle licenze e framework di governance.",
  "about.p3": "GenAI Champion di PwC dal 2024, guido il programma di formazione Copilot dell'azienda per circa 400 consulenti, supporto il management nell'adozione dei casi d'uso e presento soluzioni AI a eventi per clienti e di settore. Lavoro in inglese, francese e italiano.",
  "about.statsLabel": "Dati principali",
  "about.stat1": "consulenti nel programma di formazione Copilot che ho co-progettato e che guido",
  "about.stat2": "workshop di allocazione licenze per il roll-out di Microsoft 365 Copilot in una banca",
  "about.stat3": "GenAI Champion di PwC dal",
  "about.stat4": "lingue di lavoro: inglese, francese, italiano",
  "skills.index": "Ambiti",
  "skills.title": "Competenze",
  "skills.lead": "Competenze all'incrocio tra AI, processi e financial services.",
  "skills.ai.title": "AI agentica sullo stack Microsoft",
  "skills.ai.text": "Progettazione e realizzazione di soluzioni a uno o più agenti che elaborano email, documenti e fatture, propongono azioni da approvare e mantengono una tracciabilità completa.",
  "skills.adoption.title": "Adozione e formazione AI",
  "skills.adoption.text": "Percorsi formativi, sessioni dedicate al management e reti di champion che portano i team da utenti di Copilot a creatori di agenti.",
  "skills.adoption.tags": "<li>Design dei percorsi</li><li>Change management</li><li>Reti di champion</li>",
  "skills.bpmn.title": "Progettazione dei processi",
  "skills.bpmn.text": "Modellazione AS-IS e TO-BE in BPMN, condivisa con gli stakeholder, come base di ogni decisione di automazione.",
  "skills.m365.title": "Programmi e governance Microsoft 365",
  "skills.m365.text": "Gestione di programmi su più stream, target operating model, strategia di migrazione, gap analysis sull'adozione, KPI DLP e framework di governance e service management Microsoft 365.",
  "skills.fs.title": "Financial services e normativa",
  "skills.fs.text": "Esperienza nei settori bancario, fiscale, assicurativo e pubblico, tra cui remediation AML e Know Your Transaction, casi d'uso NLP per KYC, due diligence e analisi contrattuale, e valutazioni di conformità GDPR e DORA.",
  "skills.ba.title": "Business analysis",
  "skills.ba.text": "Requisiti, user story, specifiche funzionali, user acceptance testing e selezione dei fornitori.",
  "skills.lang.title": "Lingue",
  "skills.lang.text": "Delivery e conduzione di workshop in inglese, francese e italiano.",
  "skills.bd.title": "Business development",
  "skills.bd.text": "Competenze AI, casi d'uso e analisi di fattibilità per proposte nei settori asset management, energia e pubblico, e ricerche su NLP e fornitori di pagamenti istantanei per clienti bancari.",
  "skills.bd.tags": "<li>Proposte</li><li>Design dei casi d'uso</li><li>Innovazione</li>",
  "projects.index": "Casi studio",
  "projects.title": "Progetti selezionati",
  "projects.lead": "Incarichi e soluzioni interne rappresentativi. I nomi dei clienti sono riservati.",
  "projects.p1.meta": "2026 · Consulenza fiscale",
  "projects.p1.title": "Automazione dell'Investment Tax Credit",
  "projects.p1.kicker": "Soluzione multi-agente · processo end to end",
  "projects.p1.text": "Progettazione e sviluppo di una soluzione multi-agente che copre l'intero processo dell'Investment Tax Credit, dai dossier di ammissibilità ai controlli di conformità e sulle fatture. Definizione della logica di smistamento e controllo delle fatture, modellazione BPMN in 15 fasi e validazione su un caso reale con estrazione OCR, riconciliazione e controlli sui documenti mancanti. Gestione dello user acceptance testing e migrazione del registro del cliente su SharePoint.",
  "projects.p2.meta": "Interno · usato in una proposta",
  "projects.p2.title": "Cockpit AI per il project management",
  "projects.p2.kicker": "Human in the loop · tracciato",
  "projects.p2.text": "Una soluzione che mantiene aggiornati piani di progetto, RAID log e matrici RACI a partire da email e conversazioni Teams. Un agente AI propone gli aggiornamenti, il project manager li approva in un'applicazione Copilot Studio e ogni modifica viene registrata. Una versione precedente è stata presentata in una proposta a un cliente.",
  "projects.p3.meta": "Interno · Microsoft Teams",
  "projects.p3.title": "Agente di modellazione dei processi",
  "projects.p3.kicker": "Dalla documentazione al BPMN",
  "projects.p3.text": "Un agente distribuito in Microsoft Teams che converte la documentazione di processo in modelli BPMN interattivi. Fa parte di un insieme di agenti di business che comprende anche un agente di coaching per la negoziazione e uno di monitoraggio tecnologico.",
  "projects.p3.tag": "Agenti di business",
  "projects.p4.meta": "2026 · ~400 consulenti",
  "projects.p4.title": "Programma di formazione Copilot",
  "projects.p4.kicker": "Co-progettista e docente principale",
  "projects.p4.text": "Co-progettazione del percorso, della struttura a cluster e del piano di rilascio del programma di formazione Copilot di PwC Luxembourg. Docente principale del corso \"From Copilot User to Agent Builder\", costruito su un esercizio di creazione di agenti basato su una gara pubblica reale. Responsabile dell'onboarding dei nuovi formatori; nominato trainer di Copilot Cowork per il 2027.",
  "projects.p4.tags": "<li>Formazione</li><li>Creazione di agenti</li><li>Copilot Cowork</li>",
  "journey.index": "2019 – oggi",
  "journey.title": "Carriera",
  "journey.lead": "Esperienza professionale e formazione.",
  "journey.t1.title": "Laurea in Business and Management · SAA School of Management, Torino",
  "journey.t1.text": "Corso di laurea in inglese in economia e management, concluso con 104/110. Tesi sulle applicazioni di business della blockchain nella formazione e nel change management.",
  "journey.t2.title": "MSc in Digital Transformation and Entrepreneurship · University of Chichester, H-FARM College",
  "journey.t2.text": "Conseguito con GPA 4.0 e Distinction. Vincitore della borsa HforHuman per un progetto su sistemi di supporto alle decisioni per qualità, volumi di produzione e sostenibilità nel settore agricolo.",
  "journey.t3.date": "Mag – Set 2023",
  "journey.t3.title": "Business Analyst · JAKALA, Milano",
  "journey.t3.text": "IT advisory per clienti retail e logistici: PMO e piani di governance, monitoraggio dei rischi, materiali per gli SteerCo, sessioni di UAT e riprogettazione funzionale di un portale web logistico.",
  "journey.t4.date": "Ott 2023",
  "journey.t4.title": "Technology Consulting Trainee · PwC Luxembourg",
  "journey.t4.text": "Incarichi Microsoft 365, di processo e bancari: user story e flussi documentali BPMN per un cliente industriale, configurazione core banking e data mapping per la migrazione di una banca privata, e ricerche di business development su pagamenti istantanei e NLP.",
  "journey.t5.date": "Mag 2024",
  "journey.t5.title": "Financial Services Transformation Associate · PwC Luxembourg",
  "journey.t5.text": "PMO per il programma Microsoft 365 di una banca su diciannove stream, remediation AML e Know Your Transaction, e nomina a GenAI Champion di PwC.",
  "journey.t6.date": "Ott 2025",
  "journey.t6.title": "AI Business Analyst · Settore pubblico",
  "journey.t6.text": "Workflow Copilot e Power Platform per la gestione di gare e RFP: gestione delle email, redazione di documenti, analisi dei requisiti e orchestrazione delle attività.",
  "journey.t7.date": "Lug 2026",
  "journey.t7.title": "Senior Financial Services Transformation Associate · PwC Luxembourg",
  "journey.t7.text": "AI Solution Designer sull'incarico Investment Tax Credit, consulente per il roll-out di Copilot in una banca, facilitatore al Public Sector Hackathon e docente principale del programma di formazione Copilot.",
  "journey.t8.title": "Trainer di Copilot Cowork",
  "journey.t8.text": "Nominato trainer di Copilot Cowork per l'intera practice di consulenza.",
  "journey.soon": "Prossimo",
  "certs.index": "Formazione continua",
  "certs.title": "Certificazioni",
  "certs.lead": "Certificazioni professionali in AI, project e service management.",
  "certs.langsLabel": "Lingue",
  "certs.native": "madrelingua",
  "vision.index": "Approccio",
  "vision.quote": "L'AI crea valore nei financial services quando è <span class=\"accent-text\">ancorata al processo</span>, governata fin dal design e adottata dal business.",
  "vision.note": "Ogni incarico parte da come il lavoro viene svolto davvero. Gli agenti vengono introdotti dove riducono sforzo o rischio, le persone restano responsabili delle decisioni e l'adozione viene pianificata con lo stesso rigore dello sviluppo.",
  "contact.index": "Contatti",
  "contact.title": "Parliamo della<br />vostra <span class=\"accent-text\">strategia AI</span>.",
  "contact.lead": "Per incarichi, interventi o collaborazioni su AI e Microsoft Copilot nei financial services, non esitate a contattarmi.",
  "footer.place": "Lussemburgo",
  "footer.top": "Torna su",
  "journey.tf.date": "Mar – Mag 2022",
  "journey.tf.title": "Credit Methodologies Trainee · FCA Bank, Torino",
  "journey.tf.text": "Revisione delle richieste di credito in SAP CRM, analisi di dati finanziari e report creditizi, e preparazione di materiali decisionali per il senior management.",
  "events.index": "Interventi ed eventi",
  "events.title": "In evidenza",
  "events.lead": "Hackathon, conferenze e competizioni in cui ho rappresentato PwC Luxembourg.",
  "events.e1.meta": "Ott 2026 · Con Microsoft",
  "events.e1.title": "Agentic AI Hackathon per il settore pubblico lussemburghese",
  "events.e1.text": "Due giorni, tre enti pubblici, tre prototipi di agenti funzionanti. Ho facilitato il team di un servizio di emergenza, modellato dal vivo il processo AS-IS in BPMN e realizzato un assistente per circa 300 corsi di formazione.",
  "events.e2.meta": "2026 · NEXUS Luxembourg",
  "events.e2.title": "Demo live di Copilot a NEXUS 2026",
  "events.e2.text": "Presentazione di casi d'uso reali di Copilot allo stand di PwC Luxembourg: cosa usano davvero i team, dove crea valore e dove non ancora.",
  "events.e3.meta": "PwC Luxembourg Alternatives Day",
  "events.e3.title": "PwC Q&A Launcher",
  "events.e3.text": "Co-presentazione di uno strumento GenAI che accelera due diligence, risk reporting e revisioni di compliance per i clienti dei fondi alternativi.",
  "events.e4.meta": "PwC Luxembourg",
  "events.e4.title": "Dragons Innovation Tournament",
  "events.e4.text": "Secondo posto e premio del pubblico con un concept di trasformazione digitale per il monitoraggio dei prestiti e l'analisi del rischio macroeconomico nel settore bancario, presentato a una giuria di partner.",
  "certs.ielts": "IELTS 8.0 · C1 Advanced",
};

const fr = {
  "skip": "Aller au contenu",
  "toTop": "Retour en haut",
  "navLabel": "Navigation principale",
  "nav.about": "Profil",
  "nav.skills": "Expertise",
  "nav.projects": "Réalisations",
  "nav.journey": "Parcours",
  "nav.certs": "Certifications",
  "nav.contact": "Contact",
  "hero.status": "PwC Luxembourg<span class=\"hide-sm\"> · Advisory · Financial Services</span>",
  "hero.roles": "Senior Associate chez PwC Luxembourg, AI Solution Designer, spécialiste Microsoft Copilot et GenAI Champion PwC.",
  "hero.lead": "Senior Associate, Financial Services Transformation. J'accompagne banques, cabinets fiscaux, assureurs et institutions publiques dans la mise en œuvre de l'IA agentique sur la stack Microsoft, de la conception des processus à l'adoption à grande échelle.",
  "hero.ctaProjects": "Voir les réalisations",
  "hero.ctaContact": "Contact",
  "hero.photoAlt": "Portrait de Niccolò Di Mauro",
  "hero.scrollLabel": "Aller au profil",
  "about.index": "PwC Luxembourg · Advisory",
  "about.title": "Profil",
  "about.big": "Je conçois des <span class=\"hl\">solutions d'IA agentique</span> ancrées dans les processus réels, gouvernées dès le départ et adoptées par les métiers.",
  "about.p1": "Je suis Senior Associate au sein de l'équipe Modern Workplace and Microsoft de PwC Luxembourg. J'interviens sur l'ensemble du cycle de livraison des solutions IA sur Copilot Studio, Copilot Cowork, Power Automate et SharePoint : analyse et modélisation BPMN des processus, conception, développement, recette utilisateur et adoption.",
  "about.p2": "En parallèle, j'accompagne des programmes Microsoft 365 et Copilot pour des clients de la banque, de la fiscalité, de l'assurance et du secteur public : pilotage de programme, target operating models, attribution des licences et cadres de gouvernance.",
  "about.p3": "GenAI Champion PwC depuis 2024, je pilote le programme de montée en compétences Copilot du cabinet pour environ 400 consultants, conseille la direction sur l'adoption des cas d'usage et présente des solutions IA lors d'événements clients et sectoriels. Je travaille en anglais, en français et en italien.",
  "about.statsLabel": "Chiffres clés",
  "about.stat1": "consultants dans le programme de formation Copilot que j'ai co-conçu et que je pilote",
  "about.stat2": "ateliers d'attribution des licences pour le déploiement de Microsoft 365 Copilot dans une banque",
  "about.stat3": "GenAI Champion PwC depuis",
  "about.stat4": "langues de travail : anglais, français, italien",
  "skills.index": "Domaines",
  "skills.title": "Expertise",
  "skills.lead": "Des compétences à la croisée de l'IA, des processus et des financial services.",
  "skills.ai.title": "IA agentique sur la stack Microsoft",
  "skills.ai.text": "Conception et livraison de solutions mono et multi-agents qui traitent e-mails, documents et factures, proposent des actions soumises à validation et assurent une traçabilité complète.",
  "skills.adoption.title": "Adoption et formation IA",
  "skills.adoption.text": "Parcours de formation, sessions dédiées à la direction et réseaux de champions qui font passer les équipes d'utilisateurs de Copilot à créateurs d'agents.",
  "skills.adoption.tags": "<li>Conception de parcours</li><li>Conduite du changement</li><li>Réseaux de champions</li>",
  "skills.bpmn.title": "Conception des processus",
  "skills.bpmn.text": "Modélisation AS-IS et TO-BE en BPMN, animée avec les parties prenantes, comme base de toute décision d'automatisation.",
  "skills.m365.title": "Programmes et gouvernance Microsoft 365",
  "skills.m365.text": "Pilotage de programmes multi-chantiers, target operating models, stratégie de migration, analyse des écarts d'adoption, KPI DLP et cadres de gouvernance et de service management Microsoft 365.",
  "skills.fs.title": "Financial services et réglementation",
  "skills.fs.text": "Expérience dans la banque, la fiscalité, l'assurance et le secteur public, notamment en remédiation AML et Know Your Transaction, cas d'usage NLP pour le KYC, la due diligence et l'analyse de contrats, et évaluations de conformité RGPD et DORA.",
  "skills.ba.title": "Business analysis",
  "skills.ba.text": "Exigences, user stories, spécifications fonctionnelles, recette utilisateur et sélection de fournisseurs.",
  "skills.lang.title": "Langues",
  "skills.lang.text": "Livraison de missions et animation d'ateliers en anglais, en français et en italien.",
  "skills.bd.title": "Développement commercial",
  "skills.bd.text": "Expertise IA, cas d'usage et études de faisabilité pour des propositions en asset management, énergie et secteur public, et recherches sur le NLP et les prestataires de paiement instantané pour des clients bancaires.",
  "skills.bd.tags": "<li>Propositions</li><li>Conception de cas d'usage</li><li>Innovation</li>",
  "projects.index": "Études de cas",
  "projects.title": "Réalisations",
  "projects.lead": "Missions et solutions internes représentatives. Les noms des clients ne sont pas communiqués.",
  "projects.p1.meta": "2026 · Conseil fiscal",
  "projects.p1.title": "Automatisation de l'Investment Tax Credit",
  "projects.p1.kicker": "Solution multi-agents · processus de bout en bout",
  "projects.p1.text": "Conception et développement d'une solution multi-agents couvrant l'ensemble du processus de l'Investment Tax Credit, des dossiers d'éligibilité aux contrôles de conformité et des factures. Définition de la logique de tri et de contrôle des factures, modélisation BPMN en 15 phases et validation sur un cas réel avec extraction OCR, rapprochement et contrôle des pièces manquantes. Pilotage de la recette utilisateur et migration du registre client vers SharePoint.",
  "projects.p2.meta": "Interne · présenté dans une proposition",
  "projects.p2.title": "Cockpit IA de gestion de projet",
  "projects.p2.kicker": "Human in the loop · tracé",
  "projects.p2.text": "Une solution qui tient à jour plannings, RAID logs et matrices RACI à partir des e-mails et des conversations Teams. Un agent IA propose les mises à jour, le chef de projet les valide dans une application Copilot Studio et chaque modification est journalisée. Une version antérieure a été présentée dans une proposition client.",
  "projects.p3.meta": "Interne · Microsoft Teams",
  "projects.p3.title": "Agent de modélisation des processus",
  "projects.p3.kicker": "De la documentation au BPMN",
  "projects.p3.text": "Un agent déployé dans Microsoft Teams qui convertit la documentation de processus en modèles BPMN interactifs. Il fait partie d'un ensemble d'agents métier comprenant également un agent de coaching en négociation et un agent de veille technologique.",
  "projects.p3.tag": "Agents métier",
  "projects.p4.meta": "2026 · ~400 consultants",
  "projects.p4.title": "Programme de formation Copilot",
  "projects.p4.kicker": "Co-concepteur et formateur principal",
  "projects.p4.text": "Co-conception du parcours, de la structure par clusters et du plan de déploiement du programme de formation Copilot de PwC Luxembourg. Formateur principal du cours \"From Copilot User to Agent Builder\", construit autour d'un exercice de création d'agent basé sur un véritable appel d'offres public. Responsable de l'intégration des nouveaux formateurs ; nommé formateur Copilot Cowork pour 2027.",
  "projects.p4.tags": "<li>Formation</li><li>Création d'agents</li><li>Copilot Cowork</li>",
  "journey.index": "2019 – aujourd'hui",
  "journey.title": "Parcours",
  "journey.lead": "Expérience professionnelle et formation.",
  "journey.t1.title": "Bachelor en Business and Management · SAA School of Management, Turin",
  "journey.t1.text": "Programme en anglais en gestion et management, diplômé avec 104/110. Mémoire sur les applications métier de la blockchain dans la formation et la conduite du changement.",
  "journey.t2.title": "MSc in Digital Transformation and Entrepreneurship · University of Chichester, H-FARM College",
  "journey.t2.text": "Diplômé avec un GPA de 4.0 et la mention Distinction. Lauréat de la bourse HforHuman pour un projet sur les systèmes d'aide à la décision pour la qualité, les volumes de production et la durabilité dans le secteur agricole.",
  "journey.t3.date": "Mai – sept. 2023",
  "journey.t3.title": "Business Analyst · JAKALA, Milan",
  "journey.t3.text": "Conseil IT pour des clients retail et logistique : PMO et plans de gouvernance, suivi des risques, supports de SteerCo, sessions de recette et refonte fonctionnelle d'un portail web logistique.",
  "journey.t4.date": "Oct. 2023",
  "journey.t4.title": "Technology Consulting Trainee · PwC Luxembourg",
  "journey.t4.text": "Missions Microsoft 365, processus et banque : user stories et flux documentaires BPMN pour un client industriel, paramétrage core banking et data mapping pour la migration d'une banque privée, et recherches de développement commercial sur le paiement instantané et le NLP.",
  "journey.t5.date": "Mai 2024",
  "journey.t5.title": "Financial Services Transformation Associate · PwC Luxembourg",
  "journey.t5.text": "PMO du programme Microsoft 365 d'une banque sur dix-neuf chantiers, remédiation AML et Know Your Transaction, et nomination comme GenAI Champion PwC.",
  "journey.t6.date": "Oct. 2025",
  "journey.t6.title": "AI Business Analyst · Secteur public",
  "journey.t6.text": "Workflows Copilot et Power Platform pour la gestion des appels d'offres : traitement des e-mails, rédaction de documents, analyse des exigences et orchestration des tâches.",
  "journey.t7.date": "Juil. 2026",
  "journey.t7.title": "Senior Financial Services Transformation Associate · PwC Luxembourg",
  "journey.t7.text": "AI Solution Designer sur la mission Investment Tax Credit, consultant pour le déploiement de Copilot dans une banque, facilitateur au Public Sector Hackathon et formateur principal du programme de formation Copilot.",
  "journey.t8.title": "Formateur Copilot Cowork",
  "journey.t8.text": "Nommé formateur Copilot Cowork pour l'ensemble de la practice de conseil.",
  "journey.soon": "À venir",
  "certs.index": "Formation continue",
  "certs.title": "Certifications",
  "certs.lead": "Certifications professionnelles en IA, gestion de projet et service management.",
  "certs.langsLabel": "Langues",
  "certs.native": "langue maternelle",
  "vision.index": "Approche",
  "vision.quote": "L'IA crée de la valeur dans les financial services lorsqu'elle est <span class=\"accent-text\">ancrée dans le processus</span>, gouvernée dès la conception et adoptée par les métiers.",
  "vision.note": "Chaque mission part de la réalité du travail. Les agents sont introduits là où ils réduisent l'effort ou le risque, les personnes restent responsables des décisions et l'adoption est planifiée avec la même rigueur que le développement.",
  "contact.index": "Contact",
  "contact.title": "Échangeons sur<br />votre <span class=\"accent-text\">stratégie IA</span>.",
  "contact.lead": "Pour une mission, une intervention ou une collaboration autour de l'IA et de Microsoft Copilot dans les financial services, n'hésitez pas à me contacter.",
  "footer.place": "Luxembourg",
  "footer.top": "Retour en haut",
  "journey.tf.date": "Mars – mai 2022",
  "journey.tf.title": "Credit Methodologies Trainee · FCA Bank, Turin",
  "journey.tf.text": "Revue des demandes de crédit dans SAP CRM, analyse de données financières et de rapports de crédit, et préparation de supports de décision pour la direction.",
  "events.index": "Interventions et événements",
  "events.title": "Temps forts",
  "events.lead": "Hackathons, conférences et compétitions où j'ai représenté PwC Luxembourg.",
  "events.e1.meta": "Oct. 2026 · Avec Microsoft",
  "events.e1.title": "Hackathon IA agentique pour le secteur public luxembourgeois",
  "events.e1.text": "Deux jours, trois entités publiques, trois prototypes d'agents opérationnels. J'ai accompagné l'équipe d'un service d'urgence, modélisé en direct le processus AS-IS en BPMN et construit un assistant couvrant environ 300 formations.",
  "events.e2.meta": "2026 · NEXUS Luxembourg",
  "events.e2.title": "Démonstrations Copilot à NEXUS 2026",
  "events.e2.text": "Présentation de cas d'usage Copilot concrets sur le stand de PwC Luxembourg : ce que les équipes utilisent vraiment, où il crée de la valeur et où pas encore.",
  "events.e3.meta": "PwC Luxembourg Alternatives Day",
  "events.e3.title": "PwC Q&A Launcher",
  "events.e3.text": "Co-présentation d'un outil GenAI qui accélère la due diligence, le reporting des risques et les revues de conformité pour les clients des fonds alternatifs.",
  "events.e4.meta": "PwC Luxembourg",
  "events.e4.title": "Dragons Innovation Tournament",
  "events.e4.text": "Deuxième place et prix du public avec un concept de transformation digitale pour le suivi des prêts et l'analyse du risque macroéconomique dans la banque, présenté à un jury d'associés.",
  "certs.ielts": "IELTS 8.0 · C1 Advanced",
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
