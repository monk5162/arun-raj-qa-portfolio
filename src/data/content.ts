// ─────────────────────────────────────────────────────────
// Central content store — edit this file to update site copy
// ─────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Arun Raj N.P',
  roles: ['QA Tester', 'Software Tester', 'Junior QA Engineer', 'Future Automation Engineer'],
  location: 'Palakkad, Kerala, India',
  email: 'arunrajnp924@gmail.com',
  phone: '+91 90741 07381',
  tagline: 'Ensuring Quality. Delivering Reliability.',
  intro:
    'Detail-oriented QA Tester with hands-on experience in manual testing of mobile and web applications. Passionate about delivering reliable software through rigorous testing practices and continuously advancing toward automation excellence.',
  resumeUrl: '/arun-raj-qa-portfolio/resume/Arun_Raj_NP_Resume.pdf',
  github: 'https://github.com/your-github-username',
  linkedin: 'https://linkedin.com/in/your-linkedin-username',
}

export const aboutTimeline = [
  {
    year: '2020 — 2024',
    title: 'B.Tech in Computer Science',
    org: 'Sreepathy Institute of Management and Technology, Vavanoor, Palakkad',
    description:
      'Built a strong foundation in software engineering principles, databases, and development workflows — the launchpad for a career in software quality.',
  },
  {
    year: '2024 — 2025',
    title: 'Software Tester Internship',
    org: 'One Team Solution Pvt. Ltd.',
    description:
      'First hands-on exposure to professional QA cycles — exploratory testing, defect tracking, and Agile collaboration on a live warehouse management system.',
  },
  {
    year: '2026',
    title: 'QA Internship & Continuous Growth',
    org: 'Buffer Bytes',
    description:
      'Deepened functional and regression testing expertise on mobile applications, while building toward automation testing with Selenium and Java.',
  },
  {
    year: 'Now → Next',
    title: 'Automation Testing Journey',
    org: 'Self-driven growth',
    description:
      'Actively building skills in Selenium, API automation, and CI/CD integration — aiming to become a highly skilled, well-rounded QA Engineer.',
  },
]

export const skillCategories = [
  {
    title: 'Manual Testing',
    skills: [
      'Functional Testing',
      'Regression Testing',
      'Exploratory Testing',
      'Usability Testing',
      'Mobile Testing',
      'Web Testing',
      'Integration Testing',
    ],
  },
  {
    title: 'QA Practices',
    skills: [
      'Test Case Design',
      'Test Execution',
      'Bug Reporting',
      'Defect Tracking',
      'Verification & Validation',
      'Root Cause Analysis',
      'SDLC',
      'STLC',
    ],
  },
  {
    title: 'Tools',
    skills: ['Selenium (Java)', 'Postman', 'MySQL', 'Apache JMeter', 'Git', 'Agile/Scrum'],
  },
  {
    title: 'Languages',
    skills: ['English', 'Malayalam', 'Kannada', 'Hindi'],
  },
]

export const commandCenterStats = [
  { label: 'Projects Tested', value: 4, suffix: '' },
  { label: 'Internships', value: 2, suffix: '' },
  { label: 'Testing Domains', value: 2, suffix: '', display: 'Mobile + Web' },
  { label: 'Automation Journey', value: 0, suffix: '', display: 'In Progress' },
]

export const experience = [
  {
    company: 'Buffer Bytes',
    role: 'QA Intern',
    location: 'Ramanattukara',
    period: 'Feb 13, 2026 – Apr 13, 2026',
    highlights: [
      'Mobile application testing',
      'Functional testing',
      'Regression testing',
      'Bug reporting',
      'Agile collaboration',
    ],
  },
  {
    company: 'One Team Solution Pvt. Ltd.',
    role: 'Software Tester Intern',
    location: 'Kochi',
    period: 'Aug 27, 2024 – Jan 27, 2025',
    highlights: [
      'Warehouse web testing',
      'Exploratory testing',
      'Test documentation',
      'Defect tracking',
      'Regression testing',
    ],
  },
]

export const projects = [
  {
    id: 'swa-app',
    title: 'SWA App',
    subtitle: 'Jewellery Inventory Mobile Application',
    overview:
      'A jewellery inventory management mobile application built around fast, accurate SKU-based search and barcode scanning for retail stock operations.',
    scope:
      'End-to-end functional testing across Android devices, covering SKU-based search, barcode scanning, and inventory lookup workflows.',
    contributions: [
      'Led manual testing efforts and designed comprehensive test cases for SKU retrieval',
      'Validated barcode scanning integration across multiple devices and OS versions',
      'Logged and prioritized defects, driving retesting cycles to a bug-free release',
    ],
    challenges:
      'Barcode scans occasionally returned mismatched SKUs under poor lighting — isolated the root cause to camera focus thresholds and verified the fix across device models.',
    lessons:
      'Device fragmentation testing is critical for hardware-dependent features like camera-based scanning.',
    tags: ['Mobile Testing', 'Functional Testing', 'Barcode QA'],
  },
  {
    id: 'mirror-app',
    title: 'Mirror App',
    subtitle: 'Jewellery Inventory Mobile Application',
    overview:
      'A companion jewellery data management application focused on inventory accuracy, UI usability, and reliable scanning workflows.',
    scope:
      'Manual, functional, and exploratory testing of SKU-based inventory retrieval, UI usability, and barcode scanning integration.',
    contributions: [
      'Developed structured test cases validating data accuracy and UI flows',
      'Performed verification & validation cycles against functional specs',
      'Identified defects via exploratory testing and tracked them through resolution',
    ],
    challenges:
      'Post-fix regression revealed UI usability gaps that masked underlying data sync issues — coordinated with developers across multiple test cycles.',
    lessons:
      'Reduced post-deployment issues by 15% through disciplined regression testing post-fix.',
    tags: ['Regression Testing', 'Exploratory Testing', 'V&V'],
  },
  {
    id: 'upstock',
    title: 'Upstock',
    subtitle: 'Warehouse Management Web Application',
    overview:
      'A web-based warehouse management system handling product filtering, inventory addition/deletion, and user profile management.',
    scope:
      'End-to-end QA across core warehouse workflows including filtering, CRUD operations, and profile management.',
    contributions: [
      'Developed and executed manual test cases for core warehouse features',
      'Validated data integrity and workflow efficiency across modules',
      'Identified systematic defect patterns through targeted reporting',
    ],
    challenges:
      'Edge cases in product filtering produced inconsistent result sets — traced to query logic and confirmed through repeated validation cycles.',
    lessons:
      'Reduced potential application errors by 20% through systematic bug identification.',
    tags: ['Web Testing', 'Data Integrity', 'Workflow QA'],
  },
  {
    id: 'local-labour-link',
    title: 'Local Labour Link',
    subtitle: 'Academic MERN Application',
    overview:
      'A full-stack labour hiring platform built with MongoDB, Express.js, React.js, Node.js, and Firebase — covering job search, bookings, ratings, and real-time chat.',
    scope:
      'Manual and integration testing across authentication, real-time features, booking management, and user profiles.',
    contributions: [
      'Validated backend scalability and authentication security',
      'Designed test cases for Firebase real-time integrations',
      'Tested job search, advanced filters, and ratings workflows end-to-end',
    ],
    challenges:
      'Real-time chat occasionally desynced under concurrent sessions — verified Firebase listener behavior and confirmed stability after fixes.',
    lessons:
      'Full-stack exposure deepened understanding of how integration testing protects real-world usability.',
    tags: ['Integration Testing', 'Firebase', 'MERN'],
  },
]

export const bugTrackerEntries = [
  {
    level: 'CRITICAL',
    title: 'Barcode scan failure',
    description: 'Camera focus threshold caused mismatched SKU reads under low light.',
  },
  {
    level: 'HIGH',
    title: 'SKU retrieval mismatch',
    description: 'Inventory lookup returned stale records after rapid successive scans.',
  },
  {
    level: 'MEDIUM',
    title: 'Product filtering issue',
    description: 'Combined filter queries occasionally returned inconsistent result sets.',
  },
  {
    level: 'RESOLVED',
    title: 'Authentication validation',
    description: 'Session token edge case fixed and verified across login flows.',
  },
]

export const automationRoadmap = [
  { label: 'Manual Testing', status: 'complete', detail: 'Strong foundation across mobile & web' },
  { label: 'Selenium + Java', status: 'in-progress', detail: 'Building automation fundamentals' },
  { label: 'Framework Development', status: 'upcoming', detail: 'POM, hybrid frameworks' },
  { label: 'API Automation', status: 'upcoming', detail: 'Postman → automated test suites' },
  { label: 'CI/CD Integration', status: 'upcoming', detail: 'Jenkins / GitHub Actions pipelines' },
]

export const apiTestingCards = [
  {
    method: 'GET',
    name: 'Fetch Inventory List',
    status: 200,
    description: 'Validates response schema and pagination for inventory endpoints.',
  },
  {
    method: 'POST',
    name: 'Create Test Case Record',
    status: 201,
    description: 'Verifies payload validation and successful resource creation.',
  },
  {
    method: 'GET',
    name: 'SKU Lookup',
    status: 200,
    description: 'Asserts correct SKU match and response time under load.',
  },
  {
    method: 'POST',
    name: 'Defect Submission',
    status: 201,
    description: 'Checks required fields, status codes, and error handling for malformed input.',
  },
]

export const qaArtifacts = [
  {
    title: 'Test Cases',
    description: 'Structured test case suites covering functional and regression scenarios.',
    status: 'Placeholder — upload coming soon',
  },
  {
    title: 'Bug Reports',
    description: 'Detailed defect reports with severity, steps to reproduce, and resolution status.',
    status: 'Placeholder — upload coming soon',
  },
  {
    title: 'QA Documentation',
    description: 'Test plans, strategy docs, and process documentation from real projects.',
    status: 'Placeholder — upload coming soon',
  },
]

export const certifications = [
  {
    title: 'Cybersecurity Job Simulation',
    issuer: 'Deloitte Australia · Forage Platform',
    date: 'December 2025',
    highlights: [
      'Web activity log analysis',
      'Suspicious activity identification',
      'Incident investigation support',
    ],
  },
]
