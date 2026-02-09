import { Project, TechProject } from './types';

export const professionalProjects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Sales Team Leadership & KPI Excellence',
    year: '2024 - Present',
    company: 'Charter Communications',
    description: 'Led a team of 24 direct reports to top 10 position in the enterprise 14 of the last 16 months and YTD across multiple KPIs in a pool of 380 other people within my role. Multiple agents consistently ranked in the top 50 for the enterprise (out of roughly 8,000) every single month and YTD.',
    tags: ['Sales Leadership', 'Team Management', 'KPI Optimization', 'Performance Coaching'],
    impact: 'Top 10 ranking in enterprise (14 of 16 months), Top 50 enterprise-wide agents monthly'
  },
  {
    id: '2',
    title: 'Sales Strategy Implementation & Compliance Framework',
    year: '2024 - Present',
    company: 'Charter Communications',
    description: 'Championed new sales strategies and coaching platforms up to 100% implementation and adherence. Developed an accountability framework ensuring compliance with all new company initiatives, legal data regulations, and FCC requirements across direct reports and allied teams.',
    tags: ['Strategic Planning', 'Compliance', 'FCC Regulations', 'Training Programs'],
    impact: '100% implementation and adherence to new initiatives'
  },
  {
    id: '3',
    title: 'Cross-Functional Growth Initiatives & SOP Development',
    year: '2024 - Present',
    company: 'Charter Communications',
    description: 'Active member of different growth initiatives and intra-departmental collaborations. Created SOPs and form guidelines for handling various business situations. Developed talk paths that lead customers to the path of least resistance while increasing follow-thru activation rates.',
    tags: ['Process Improvement', 'SOP Development', 'Cross-functional Collaboration', 'Customer Experience'],
    impact: 'Improved activation rates across multiple metrics and market verticals'
  },
  {
    id: '4',
    title: 'Client Retention & Technical Consultation Program',
    year: '2022 - 2024',
    company: 'GasHawk',
    description: 'Owned and expanded relationships with strategic clients through regular technical consultations and solution design. Served as a technical bridge between customers and product teams, translating real-world use cases into actionable requirements.',
    tags: ['Technical Sales', 'Client Retention', 'Solution Design', 'B2B Sales'],
    impact: '30% increase in client retention over two years, expansion into three product wallets'
  },
  {
    id: '5',
    title: 'AI-Driven Sales Tools & Workflow Automation',
    year: '2022 - 2024',
    company: 'GasHawk',
    description: 'Designed and deployed internal AI-driven tools and prompt-engineered workflows to improve sales discovery, technical demonstrations, and customer education. Accelerated decision cycles and improved alignment between client needs and product capabilities.',
    tags: ['AI/ML', 'Automation', 'Prompt Engineering', 'Sales Enablement'],
    impact: 'Accelerated decision cycles, 15% increase in product satisfaction scores'
  },
  {
    id: '6',
    title: 'Proprietary Performance Analysis Framework',
    year: '2018 - 2022',
    company: 'Allstate',
    description: 'Designed and implemented a proprietary 20-point performance and opportunity analysis system. Enabled agencies to identify growth gaps and execution issues through data-driven insights and structured evaluation.',
    tags: ['Data Analysis', 'Performance Metrics', 'Strategic Planning', 'Revenue Growth'],
    impact: 'Agencies added an average of $2.66M in ARR year-over-year'
  },
  {
    id: '7',
    title: 'Sales Training & Coaching Program',
    year: '2018 - 2022',
    company: 'Allstate',
    description: 'Built and delivered targeted sales training and coaching programs to upskill underperforming agents. Developed curriculum focused on practical skills, retention strategies, and production consistency.',
    tags: ['Training & Development', 'Coaching', 'Performance Improvement', 'Retention'],
    impact: '9% improvement in retention, sustained increases in close rates and production'
  },
  {
    id: '8',
    title: 'High-Profile Crisis Management & Revenue Retention',
    year: '2018 - 2022',
    company: 'Allstate',
    description: 'Acted as the primary escalation point for complex, high-risk client and operational issues. Successfully navigated challenging situations requiring diplomacy, problem-solving, and relationship management.',
    tags: ['Crisis Management', 'Client Relations', 'Problem Solving', 'Revenue Protection'],
    impact: 'Resolved 17 high-profile cases, retained over $8M in annual revenue'
  },
  {
    id: '9',
    title: 'Customer-Centric Sales Process Redesign',
    year: '2015 - 2018',
    company: 'Premier Auto',
    description: 'Collaborated with F&I, GMs, and C-level officers to establish a customer-centric sales process. Focused on improving the entire customer journey from initial contact to post-sale follow-up.',
    tags: ['Process Design', 'Customer Experience', 'Cross-functional Leadership', 'Operations'],
    impact: '20% increase in customer satisfaction scores (4.4/5 with 3,361 reviews)'
  },
  {
    id: '10',
    title: 'Sales Performance Excellence Program',
    year: '2015 - 2018',
    company: 'Premier Auto',
    description: 'Maintained consistent high-volume sales performance while establishing new regional records. Focused on efficiency, customer relationships, and sustainable sales practices.',
    tags: ['Sales Excellence', 'Performance Metrics', 'Customer Relations', 'Efficiency'],
    impact: 'Average 17 units/month, peak 28 units/month, 11 Hat Tricks, Capital One regional record twice (6 minutes)'
  }
];

export const techProjects: TechProject[] = [
  {
    id: '1',
    title: 'Going Deep with Morgan',
    year: 2025,
    description: 'A personal introspection project featuring a card-based conversation game designed to facilitate deeper connections and self-reflection.\n\nBuilt with a focus on user experience and meaningful interaction design.',
    technologies: ['JavaScript', 'HTML/CSS', 'UX Design', 'Interactive Media'],
    link: 'https://going-deep.tmcb.tech/',
  },
  {
    id: '2',
    title: 'Square Enix - Realtime Game Database',
    year: 2015,
    description: 'Designed and deployed a realtime database system capable of handling thousands of concurrent requests to pull from a games card data and deploy to Discord. Built for enterprise-scale usage with high availability and performance requirements.',
    technologies: ['Realtime Database', 'Discord API', 'High Availability', 'Node.js', 'Redis'],
  },
  {
    id: '3',
    title: 'Charter Communications - AI Agent Assist',
    year: 2025,
    description: 'AI Powered agent assist tools leveraging custom knowledgebases built with proprietary methodology to train agents to use my "playbook" through repetition and exposure. Agents learn to handle rebuttals effectively without being caught off guard.',
    technologies: ['AI/ML', 'Knowledge Management', 'Training Systems', 'Agent Assist', 'Custom Playbook'],
  },
  {
    id: '4',
    title: 'Portfolio Website',
    year: 2026,
    description: 'This personal portfolio website built with Next.js, Tailwind CSS, and TanStack Table. Features professional project showcases, tech projects, and interactive resume sections with modern responsive design.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Table'],
    link: '#',
    github: '#',
  }
];

export const skills = [
  'Bilingual: Spanish',
  'Excel',
  'Microsoft Office',
  'G Suite',
  'HubSpot',
  'Notion',
  'Slack',
  'Zoom',
  'Adobe Acrobat',
  'Scrum',
  'Psyops',
  'Logistics',
  'Statistical Analysis',
  'Crisis Management',
  'Accounting',
  'P&C',
  'Fiscal Auditing',
  'Project Management',
  'Contract Negotiation',
  'Conflict Resolution',
  'Scheduling',
  'B2B',
  'SaaS',
  'Outbound Sales',
  'Inbound Sales',
  'Account Management',
  'Market Research',
  'Retention'
];

export const summary = `Sales and Operations Leader with a proven record of building high-performing teams, scalable training programs, and disciplined sales systems in competitive, regulated environments.

Raised on a farm, I learned early the importance of consistency, honest work, personal accountability, and serving something bigger than myself—values that continue to shape how I lead.

I believe the strongest results come from cultures built on ownership and genuine care for people — where individuals are developed with intention, supported with clarity, and motivated to Succeed.`;