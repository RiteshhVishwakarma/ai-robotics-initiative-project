# Quick Start Guide

## 🚀 Running the Project

### First Time Setup
```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

Open browser to: **http://localhost:5173**

That's it! The site should load with all sections visible.

---

## 📱 Testing on Mobile

### Method 1: Browser DevTools
1. Open browser DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select device (iPhone, Galaxy, etc.)
4. Refresh page

### Method 2: On Your Phone
1. Make sure phone and computer are on same WiFi
2. Find your computer's IP address
3. Run: `npm run dev -- --host`
4. Open `http://YOUR-IP:5173` on phone

---

## 🎨 What You're Looking At

### Navigation Bar (Top)
- Logo on left
- Links in middle
- "Join Us" button on right
- **On mobile:** Hamburger menu icon

### Sections (Scroll Down)
1. **Hero** - Big headline + 3 info cards
2. **About** - Philosophy + 6 working approach cards
3. **Domains** - 6 engineering disciplines
4. **Student Benefits** - 10 benefit cards
5. **University Benefits** - 7 benefit cards
6. **Projects** - 10 introductory projects
7. **Team** - Founder + team members by domain
8. **Mentors** - 4 faculty mentor placeholders
9. **Research** - Coming soon state
10. **Open Source** - Future content
11. **Vision** - Long-term goals
12. **Join** - Recruitment process

### Footer (Bottom)
- Initiative info
- Contact details

---

## ✏️ Common Edits

### Change Recruitment Link
**File:** `src/components/sections/Join.jsx`
```javascript
// Line 5: Replace this
const RECRUITMENT_URL = "#recruitment-form-placeholder";

// With your Google Form URL
const RECRUITMENT_URL = "https://forms.google.com/your-form-id";
```

### Add Real Team Members
**File:** `src/data/team.js`

Replace placeholder objects in `teamMembers` array:
```javascript
{
  id: 1,
  name: "Your Name",              // Change this
  branch: "Computer Engineering",  // Change this
  year: "2nd Year",               // Change this
  domain: "AI / ML",              // Must match one of the domains
  role: "ML Developer",           // Change this
  placeholder: false,             // Change to false
  links: {
    github: "https://github.com/yourname",    // Real link
    linkedin: "https://linkedin.com/in/you",  // Real link
    portfolio: "https://yoursite.com"         // Optional
  }
}
```

### Update Founder Links
**File:** `src/data/team.js`
```javascript
export const founder = {
  // ... existing info
  links: {
    linkedin: "https://linkedin.com/in/ritesh",  // Add real links
    github: "https://github.com/ritesh",
    portfolio: "https://ritesh.com"
  }
};
```

### Update Project Status
**File:** `src/data/projects.js`

Change `status` field:
```javascript
{
  id: 1,
  title: "Object Detection",
  // ...
  status: "In Progress",  // or "Completed"
}
```

### Update Faculty Mentors
**File:** `src/data/team.js`

Replace mentor objects in `mentors` array:
```javascript
{
  id: 1,
  name: "Dr. Faculty Name",           // Real name
  designation: "Assistant Professor", // Real designation
  department: "Computer Engineering", // Real department
  area: "Machine Learning",          // Mentorship area
  placeholder: false                 // Change to false
}
```

---

## 🎯 Quick Checks

### ✅ Is it working?
- [ ] Dark background visible
- [ ] Navigation at top
- [ ] Hero section with large title
- [ ] Can scroll through all sections
- [ ] Footer at bottom

### ✅ Mobile working?
- [ ] Hamburger menu appears (resize browser)
- [ ] Menu opens when clicked
- [ ] Single column layout
- [ ] No horizontal scroll
- [ ] Text is readable

### ✅ Navigation working?
- [ ] Click nav links → smooth scroll to sections
- [ ] "Join Us" button → scrolls to recruitment
- [ ] Mobile menu closes after clicking link

### ✅ Placeholders clear?
- [ ] Team cards show "Placeholder" badge
- [ ] Mentors show "To Be Confirmed"
- [ ] Projects show "Planned" status
- [ ] No fake information present

---

## 🔧 Troubleshooting

### Port already in use
```bash
# Kill the process on port 5173
# Then restart: npm run dev
```

### Nothing displays / blank page
1. Check console for errors (F12)
2. Make sure dev server is running
3. Try hard refresh (Ctrl+Shift+R)

### Styles not applying
1. Check if CSS files exist next to JSX files
2. Hard refresh browser
3. Check browser console for CSS errors

### Mobile menu not working
1. Make sure you're testing at < 1024px width
2. Check browser console for JavaScript errors
3. Try clicking the hamburger icon directly

---

## 📦 Production Build

When ready to deploy:
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

Production files will be in `dist/` folder.

---

## 🎨 Customization Tips

### Change Colors
**File:** `src/index.css`

Edit CSS variables in `:root`:
```css
:root {
  --accent-primary: #3b82f6;  /* Change to your color */
  --accent-hover: #2563eb;    /* Darker version */
  --accent-light: #60a5fa;    /* Lighter version */
}
```

### Adjust Spacing
**File:** `src/App.css`

Modify section padding:
```css
.section {
  padding: 4rem 0;  /* Change top/bottom padding */
}
```

### Change Font
**File:** `src/index.css`

Update font-family:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## 📚 Project Structure

```
Your Project/
├── src/
│   ├── components/     ← React components
│   ├── data/          ← Content data (EDIT HERE)
│   ├── App.jsx        ← Main app
│   └── index.css      ← Global styles
├── public/            ← Static assets
├── index.html         ← HTML template
├── package.json       ← Dependencies
└── README.md          ← Documentation
```

**Most edits happen in:** `src/data/` folder

---

## 💡 Common Questions

**Q: How do I add more team members?**  
A: Add objects to `teamMembers` array in `src/data/team.js`

**Q: How do I change the recruitment link?**  
A: Edit `RECRUITMENT_URL` in `src/components/sections/Join.jsx`

**Q: How do I add new projects?**  
A: Add objects to `projects` array in `src/data/projects.js`

**Q: Can I change the blue color?**  
A: Yes, edit `--accent-primary` in `src/index.css`

**Q: How do I deploy this?**  
A: Run `npm run build`, then upload `dist/` folder to hosting

**Q: The navigation isn't scrolling smoothly**  
A: Make sure section IDs match navigation items in `Navigation.jsx`

---

## 🆘 Need Help?

1. Check browser console (F12) for errors
2. Review `PHASE1_COMPLETION.md` for testing checklist
3. See `DESIGN_REFERENCE.md` for design details
4. Read full `README.md` for architecture

---

## ✨ Next Steps

After testing Phase 1:

1. **Replace Placeholders**
   - Add real team member info
   - Confirm faculty mentors
   - Update recruitment URL

2. **Add Real Content**
   - Update founder social links
   - Add project details as they progress
   - Update GitHub/LinkedIn links

3. **Test Thoroughly**
   - Test on real mobile devices
   - Try different browsers
   - Check accessibility

4. **Prepare for Launch**
   - Review all content for accuracy
   - Get faculty approval
   - Set up hosting
   - Share with team

---

**Current Status:** ✅ Phase 1 Complete  
**Dev Server:** http://localhost:5173  
**Ready For:** Testing and content updates
