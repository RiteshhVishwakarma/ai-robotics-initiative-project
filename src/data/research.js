// Research & Experiments Data Structure
// Add real projects here as they are completed

export const researchProjects = [
  {
    id: 1,
    slug: "campus-hub",
    title: "Campus Hub",
    status: "Completed",
    domain: "Full Stack",
    summary: "A Django-based student community platform for discovering roommates, flats, internships, events, and marketplace listings.",
    objective: "Create a centralized platform to help students find roommates, accommodation, internships, campus events, and buy/sell items within the college community.",
    approach: "Developed a full-stack web application using Django framework with a focus on user experience, security, and real-world campus needs. Implemented proper authentication, database design, and responsive UI.",
    technologies: [
      "Django 6.0.7",
      "Python",
      "PostgreSQL",
      "SQLite",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Pillow",
      "Cloudinary",
      "Gunicorn"
    ],
    implementation: "Built a production-ready Django application with user authentication and profile management system. Implemented 5 post categories (Roommate, Flat/PG, Events, Internship, Buy & Sell) with full CRUD operations. Added search and filtering functionality, pagination (15 posts per page), automatic post expiry system (30 days), image upload support with Cloudinary integration, and responsive mobile-first design using Tailwind CSS. Configured environment-based settings for development and production with proper security measures.",
    results: "Successfully deployed production-ready application with complete user authentication, profile system, post management across 5 categories, search and filter capabilities, and automatic post expiry. Includes realistic seed data generation (30 users + 100 posts) for testing and development.",
    futureWork: "Plan to add real-time notifications, mobile app version, direct messaging between users, advanced search filters, user verification system, and integration with university systems.",
    features: [
      "User registration and authentication",
      "Profile management with photos and bio",
      "5 post categories (Roommate, Flat/PG, Events, Internship, Buy & Sell)",
      "Create, read, update, delete posts",
      "Search by title and description",
      "Filter by category and location",
      "Pagination with filter preservation",
      "Automatic 30-day post expiry",
      "Image uploads with Cloudinary",
      "Responsive mobile-first design",
      "Report system for inappropriate content",
      "Production security headers"
    ],
    images: [],
    videos: [],
    demoUrl: "https://campushub-wy3v.onrender.com/",
    githubUrl: "https://github.com/RiteshhVishwakarma/campushub",
    contributors: [
      {
        name: "Ritesh Vishwakarma",
        branch: "BCA",
        year: "Student",
        contribution: "Full Stack Development - Designed and built the complete application including backend architecture, database design, frontend UI, authentication system, and production deployment configuration",
        github: "https://github.com/RiteshhVishwakarma",
        linkedin: "https://www.linkedin.com/in/ritesh-vishwakarma-272907229/"
      }
    ]
  },
  {
    id: 2,
    slug: "ai-robotics-initiative-website",
    title: "AI × Robotics Initiative Website",
    status: "Completed",
    domain: "Full Stack",
    summary: "A professional student-led initiative website showcasing the AI and Robotics engineering program at Ajeenkya DY Patil University with research documentation and team management.",
    objective: "Create a credible, professional website to present the AI × Robotics Initiative to students, faculty, and external stakeholders. Showcase actual completed projects, facilitate recruitment, and maintain a research portfolio.",
    approach: "Built a modern React-based single-page application with focus on performance, accessibility, and honest representation. Implemented research project showcase system with contributor credits, responsive design, and clean dark-themed UI matching engineering documentation aesthetics.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "HTML5",
      "CSS Custom Properties"
    ],
    implementation: "Developed a complete frontend application with 12 major sections including hero, research showcase, team management, and recruitment. Built reusable component architecture with proper data separation. Implemented responsive navigation with mobile hamburger menu, smooth scrolling, and accessibility features (ARIA labels, keyboard navigation, focus states). Created research project detail pages with contributor credit system. Added Phase 2 enhancements including improved responsive behavior, accessibility improvements, and UI consistency polish.",
    results: "Successfully delivered production-ready website with complete frontend structure, research documentation infrastructure, and recruitment integration. Achieved responsive design across all devices, enhanced accessibility with keyboard and screen reader support, and proper SEO optimization. Website effectively showcases Campus Hub as the first completed project with proper technical documentation.",
    futureWork: "Add more completed research projects as they are developed, implement analytics tracking, add image optimization, integrate with university systems if needed, and potentially add content management capabilities for easier updates.",
    features: [
      "Professional dark-themed UI",
      "Research & Experiments showcase",
      "Project detail pages with contributor credits",
      "Responsive mobile-first design",
      "Smooth scrolling navigation",
      "Mobile hamburger menu",
      "Team member management",
      "Faculty mentor section",
      "Student recruitment integration",
      "Accessibility features (ARIA, keyboard nav)",
      "Focus states and reduced motion support",
      "SEO optimized structure"
    ],
    images: [],
    videos: [],
    demoUrl: "https://myteamportfolioadypu.netlify.app",
    githubUrl: "https://github.com/RiteshhVishwakarma/ai-robotics-initiative-project",
    contributors: [
      {
        name: "Ritesh Vishwakarma",
        branch: "BCA",
        year: "Student",
        contribution: "Full Stack Development - Designed and built the complete website including component architecture, responsive design, research showcase system, accessibility features, and deployment configuration",
        github: "https://github.com/RiteshhVishwakarma",
        linkedin: "https://www.linkedin.com/in/ritesh-vishwakarma-272907229/"
      }
    ]
  }
];

export const researchDomains = {
  "AI / ML": "#3b82f6",
  "Robotics": "#8b5cf6",
  "Mechanical": "#10b981",
  "Electronics": "#f59e0b",
  "Full Stack": "#ec4899",
  "Interdisciplinary": "#06b6d4"
};

export const researchStatuses = {
  "Completed": "#10b981",
  "In Progress": "#3b82f6",
  "Experimental": "#f59e0b",
  "Prototype": "#8b5cf6"
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return researchProjects.find(project => project.slug === slug);
};

// Helper function to get projects by status
export const getProjectsByStatus = (status) => {
  return researchProjects.filter(project => project.status === status);
};

// Helper function to get projects by domain
export const getProjectsByDomain = (domain) => {
  return researchProjects.filter(project => project.domain === domain);
};
