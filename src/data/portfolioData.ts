import { Project, Certification, InterestArea } from '../types';

export const PERSONAL_INFO = {
  name: 'Karishma K C',
  role: 'Computer Science & Engineering Student',
  degree: 'B.Tech in Computer Science & Engineering',
  headline: 'Building Ideas. Solving Problems. Creating with Technology.',
  statement: 'Building technology with curiosity, creativity and purpose.',
  shortBio:
    'Computer Science and Engineering student passionate about building practical technology solutions, exploring AI and IoT, and turning ideas into meaningful digital experiences.',
  detailedBio:
    'As an aspiring engineer, I bridge computational theory with real-world engineering. My academic and project journey centers around building intelligent software architectures, edge-connected IoT sensor ecosystems, and high-performance, accessible web interfaces.',
  location: 'Tirupur, India',
  email: 'karishmachandrasekar43@gmail.com',
  emailDisplay: 'karishmachandrasekar43@gmail.com',
  linkedin: 'https://linkedin.com/in/karishma-kc-01a009347/',
  linkedinDisplay: 'linkedin.com/in/karishma-kc-01a009347/',
  github: 'https://github.com/karishmakc',
  githubDisplay: 'github.com/karishmakc',
  availability: 'Available for Summer Internships & Research Projects',
};

export const HIGHLIGHTS = [
  {
    label: 'CSE Student',
    subtext: 'B.Tech Core Scholar',
    detail: 'Specializing in Algorithms, Distributed Systems & Hardware Interfaces',
  },
  {
    label: 'AI + IoT Enthusiast',
    subtext: 'Edge Tech & ML',
    detail: 'Developing sensor networks, predictive models & embedded nodes',
  },
  {
    label: 'Project Builder',
    subtext: '5+ Deployed Systems',
    detail: 'From CPU schedulers to real-time IoT transit trackers',
  },
];

export const INTEREST_AREAS: InterestArea[] = [
  {
    title: 'Website Creation & Animation',
    subtitle: 'Experienced Creator · Motion & Interactive UI',
    description:
      'An experienced creator crafting fluid, high-impact web experiences brought to life with dynamic motion animations, smooth transitions, and engaging micro-interactions.',
    icon: 'Sparkles',
    skills: ['Web Animation', 'Interactive UI/UX', 'Motion Design', 'Tailwind CSS', 'Micro-Interactions', 'Modern Web Standards'],
  },
  {
    title: 'Artificial Intelligence',
    subtitle: 'Machine Learning & Predictive Systems',
    description:
      'Designing decision models, agricultural risk forecasters, and automated classification algorithms using statistical learning.',
    icon: 'Brain',
    skills: ['Machine Learning', 'Random Forest', 'Python', 'Streamlit', 'Data Modeling'],
  },
  {
    title: 'Internet of Things (IoT)',
    subtitle: 'Edge Computing & Microcontrollers',
    description:
      'Connecting physical sensors, ESP32 microcontrollers, and real-time telemetry streams to cloud dashboards and alert engines.',
    icon: 'Cpu',
    skills: ['ESP32', 'Sensors (Ultrasonic, Temp)', 'Microcontrollers', 'WebSocket', 'FastAPI'],
  },
  {
    title: 'Frontend Architecture',
    subtitle: 'Semantic Standards & Responsive Layouts',
    description:
      'Building performant, semantic, and highly responsive user interfaces utilizing pure CSS3 Grid, Flexbox, and modern client standards.',
    icon: 'Globe',
    skills: ['Semantic HTML5', 'CSS3 Grid / Flexbox', 'JavaScript', 'Responsive UI', 'Tailwind'],
  },
  {
    title: 'Software Development',
    subtitle: 'Algorithms & Modular Design',
    description:
      'Engineering robust applications with clean separation of concerns, algorithmic optimization, and systematic testing.',
    icon: 'Code2',
    skills: ['Data Structures', 'OOP', 'Algorithm Design', 'Git / Version Control'],
  },
  {
    title: 'Data Science',
    subtitle: 'Visualization & Insight Extraction',
    description:
      'Transforming unstructured real-world datasets into clear visual dashboards, correlation studies, and actionable conclusions.',
    icon: 'BarChart3',
    skills: ['Data Analysis', 'Leaflet Mapping', 'Interactive Visuals', 'OpenWeather API'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'CPU Scheduling Visualizer',
    tagline: 'Interactive Operating System Algorithms Demonstrator',
    description:
      'An interactive visualization project that demonstrates CPU scheduling algorithms and helps users understand scheduling behavior through visual representation.',
    detailedDescription:
      'Built to demystify complex OS process scheduling concepts for engineering students. Features step-by-step Gantt chart rendering, process queue simulations (FCFS, Shortest Job First, Round Robin, Priority Scheduling), and dynamic calculation of average turnaround and waiting times.',
    category: 'System Software',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    keyFeatures: [
      'Visual Gantt chart generation with step-by-step playback',
      'Support for FCFS, SJF (Preemptive/Non-preemptive), Round Robin & Priority',
      'Dynamic Turnaround Time (TAT) and Waiting Time (WT) analysis metrics',
      'Custom process arrival and burst time parameter controls',
    ],
    architectureOverview:
      'Pure client-side DOM manipulation engine using HTML5 canvas/flex elements and ES6 state management.',
    iconName: 'Activity',
    accentColor: '#A8422B',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'AI Smart Crop & Climate Risk Advisor',
    tagline: 'Machine Learning Precision Agriculture Assistant',
    description:
      'An AI-powered application designed to provide crop recommendations and climate-related insights to support smarter agricultural decisions.',
    detailedDescription:
      'Integrates meteorological data from OpenWeather API with trained Random Forest classification models. Analyzes soil N-P-K levels, humidity, temperature, and seasonal rainfall patterns to recommend optimal crop yields and mitigate climate hazards.',
    category: 'Artificial Intelligence',
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Random Forest', 'OpenWeather API'],
    keyFeatures: [
      'Multi-variable soil & climate data inference engine',
      'Random Forest classifier with high prediction confidence',
      'Live weather radar & seasonal risk mitigation advisories',
      'Lightweight web GUI built with Streamlit for farmers and agronomists',
    ],
    architectureOverview:
      'Python ML pipeline serving inference via Streamlit UI with live REST API weather feeds.',
    iconName: 'Sparkles',
    accentColor: '#3D5A45',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'Smart Bus Monitoring System',
    tagline: 'Real-Time IoT Transit & Crowd Estimation Platform',
    description:
      'An IoT-based smart transportation system designed for real-time bus monitoring, ETA prediction and passenger/crowd estimation.',
    detailedDescription:
      'End-to-end intelligent transit network. Hardware modules equipped with ESP32 and GPS transceivers transmit live vehicle telemetry over WebSockets to a FastAPI backend. Passengers can track active transit routes on an interactive Leaflet map and check onboard capacity.',
    category: 'Internet of Things',
    technologies: ['ESP32', 'GPS', 'Python', 'FastAPI', 'WebSocket', 'HTML', 'JavaScript', 'Leaflet'],
    keyFeatures: [
      'Live GPS telemetry tracking with sub-second WebSocket updates',
      'Interactive geospatial map interface powered by Leaflet.js',
      'Crowd density estimation for passenger commuter convenience',
      'Real-time automated arrival estimate (ETA) calculations',
    ],
    architectureOverview:
      'ESP32 microcontroller sending NMEA GPS packets to Python FastAPI via WebSockets, visualized on Leaflet client.',
    iconName: 'Bus',
    accentColor: '#2B4A6F',
  },
  {
    id: 'project-04',
    number: '04',
    title: 'Smart Water Tank Monitoring',
    tagline: 'Automated Liquid Level Telemetry & Resource Management',
    description:
      'An IoT-based solution for monitoring water tank levels and providing timely information about water availability.',
    detailedDescription:
      'Addresses urban and campus water management inefficiencies. Utilizes ultrasonic distance sensors coupled with microcontrollers to continuously calculate volumetric percentage, detect overflow hazards, and alert maintenance teams before outages occur.',
    category: 'Internet of Things',
    technologies: ['IoT', 'Sensors', 'Microcontroller'],
    keyFeatures: [
      'Non-contact ultrasonic depth sensing & reservoir volume gauge',
      'Threshold-based visual & audible alert triggers',
      'Consumption rate calculation over daily operational cycles',
      'Low-power microcontroller firmware architecture',
    ],
    architectureOverview:
      'Embedded microcontroller reading HC-SR04 ultrasonic echo pulses with calibration math and visual output.',
    iconName: 'Droplets',
    accentColor: '#1F6B75',
  },
  {
    id: 'project-05',
    number: '05',
    title: 'SafeSteps',
    tagline: 'Child Safety, Hygiene & Social Well-being Awareness Platform',
    description:
      'A digital awareness platform focused on child safety, hygiene and social well-being.',
    detailedDescription:
      'Created to provide interactive, child-friendly educational modules on personal hygiene, cyber safety, emergency contacts, and daily wellness habits. Built with clean responsive design and engaging illustrated visual cards.',
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    keyFeatures: [
      'Interactive modules covering daily hygiene and personal safety tips',
      'Accessible, high-contrast design optimized for young learners and educators',
      'Emergency helpline quick-dial directory and guardian resources',
      'Zero-dependency fast loading frontend structure',
    ],
    architectureOverview:
      'Semantic HTML5 markup with responsive CSS3 modular card layouts and interactive JavaScript filters.',
    iconName: 'ShieldCheck',
    accentColor: '#8C4356',
  },
];

// ============================================================================
// CERTIFICATIONS & ACCREDITATIONS
// Image paths are located in the /public folder (e.g. /certificate-ibm.jpg).
// Easily replace or edit image paths below in VS Code!
// ============================================================================
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-ibm',
    name: 'Getting Started with Artificial Intelligence',
    organization: 'IBM SkillsBuild',
    issueDate: 'March 25, 2026',
    year: '2026',
    badgeCode: 'IBM-AI-2026',
    category: 'Artificial Intelligence',
    verification: 'Credly',
    // ⬇️ Edit your certificate image file path here (placed in /public folder)
    imagePath: '/certificate-ibm.jpg',
    description:
      'Foundational principles of artificial intelligence, machine learning concepts, neural network overview, and real-world ethical AI applications accredited by IBM SkillsBuild.',
    skillsAcquired: [
      'Artificial Intelligence',
      'Machine Learning',
      'AI Ethics',
      'Deep Learning Concepts',
      'Data Pipelines',
    ],
    isPlaceholder: false,
  },
  {
    id: 'cert-oracle',
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    organization: 'Oracle University',
    issueDate: 'March 23, 2026',
    year: '2026',
    badgeCode: 'OCI-AI-FA-2025',
    category: 'Artificial Intelligence / Cloud Computing',
    certificationLevel: 'Foundations Associate',
    verification: 'Oracle University',
    // ⬇️ Edit your certificate image file path here (placed in /public folder)
    imagePath: '/certificate-oracle.jpg',
    description:
      'Official Oracle Cloud Infrastructure accreditation demonstrating proficiency in fundamental AI/ML concepts, OCI AI services, generative AI capabilities, and cloud architecture.',
    skillsAcquired: [
      'Oracle Cloud (OCI)',
      'AI Foundations',
      'Cloud Architecture',
      'OCI AI Services',
      'Generative AI',
    ],
    isPlaceholder: false,
  },
  

];
