# AI × Robotics Initiative - Ajeenkya DY Patil University

A professional website for the student-led AI and Robotics engineering initiative at Ajeenkya DY Patil University, Pune.

## Overview

This website presents a serious student engineering initiative focused on building the next generation of AI and Robotics engineers through practical, interdisciplinary project work.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling with CSS custom properties for theming

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx/css   - Responsive navigation with mobile menu
│   │   └── Footer.jsx/css       - Site footer
│   └── sections/
│       ├── Hero.jsx/css         - Hero section with vision and next steps
│       ├── About.jsx/css        - Initiative philosophy
│       ├── Domains.jsx/css      - Interdisciplinary structure
│       ├── Benefits.jsx/css     - Student and university benefits
│       ├── Projects.jsx/css     - Introductory projects
│       ├── Team.jsx/css         - Team members by domain
│       ├── Mentors.jsx/css      - Faculty mentors
│       ├── Research.jsx/css     - R&D and open source
│       ├── Vision.jsx/css       - Long-term vision
│       └── Join.jsx/css         - Recruitment section
├── data/
│   ├── content.js              - Domains, benefits, recruitment info
│   ├── projects.js             - Project data
│   └── team.js                 - Team members and mentors
├── App.jsx                     - Main app component
├── App.css                     - Global utilities
└── index.css                   - CSS variables and base styles
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Design Principles

- **Dark Mode**: Professional dark UI with high contrast
- **Minimal**: Clean, restrained design without excessive animations
- **Responsive**: Fully responsive from mobile to desktop
- **Technical**: Engineering-focused, not startup marketing
- **Honest**: Clear distinction between planned and completed work

## Content Guidelines

### Current Placeholders

The following content uses placeholders and should be replaced with real data:

- **Team Members**: Currently showing placeholder team member cards
- **Faculty Mentors**: All mentor cards marked "To Be Confirmed"
- **Recruitment URL**: Placeholder link in Join section (#recruitment-form-placeholder)

### Updating Content

1. **Team Members**: Edit `src/data/team.js` → `teamMembers` array
2. **Faculty Mentors**: Edit `src/data/team.js` → `mentors` array
3. **Projects**: Edit `src/data/projects.js` → `projects` array
4. **Recruitment URL**: Edit `src/components/sections/Join.jsx` → `RECRUITMENT_URL` constant

## Key Features

### Navigation
- Smooth scrolling to sections
- Sticky header
- Responsive mobile hamburger menu
- Clear Join Us CTA

### Sections

1. **Hero** - Vision, immediate next step, expected mentor support
2. **About** - Working philosophy and learning approach
3. **Interdisciplinary Structure** - How different branches contribute
4. **Student Benefits** - 10 key benefits for students
5. **University Benefits** - 7 benefits for the university
6. **Projects** - 10 introductory domain-specific projects
7. **Team** - Founder profile + team members by domain
8. **Faculty Mentors** - Faculty mentorship areas
9. **Research & Development** - Placeholder for future R&D content
10. **Open Source** - Future open-source contributions
11. **Vision** - Long-term direction vs current reality
12. **Join** - Selection process, criteria, and application CTA

### Responsive Design
- Mobile-first approach
- Tested breakpoint: 768px
- Grid layouts adapt from multi-column to single-column
- Navigation transforms to hamburger menu on mobile
- All text remains readable on small screens

## Phase 1 Status

✅ Complete frontend structure
✅ All sections implemented
✅ Responsive design
✅ Dark mode styling
✅ Navigation with smooth scrolling
✅ Reusable components
✅ Separated data from presentation
✅ Professional engineering-focused design
✅ Clear placeholder identification
✅ Mobile responsive

## Next Steps (Phase 2)

- Replace placeholder content with real data
- Add actual recruitment form URL
- Update team member information
- Confirm faculty mentors
- Responsive testing across devices
- Accessibility improvements
- Performance optimization
- Final UI consistency review

## Browser Compatibility

Tested and works in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This is a student initiative project for Ajeenkya DY Patil University, Pune.
