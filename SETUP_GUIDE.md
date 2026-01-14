# FitMind.AI - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Option 1: With Live Server (Recommended)
```bash
cd FitMind.AI
npm install
npm start
```
Opens automatically at `http://localhost:8080`

### Option 2: Without npm
Simply double-click `index.html` to open in your browser.

---

## 📁 Project Files

| File | Purpose |
|------|---------|
| `index.html` | Main webpage with all sections |
| `css/styles.css` | Styling with colour palette |
| `js/app.js` | Interactivity and features |
| `package.json` | Dependencies and scripts |
| `.gitignore` | Git configuration |

---

## 🎨 Design Features

### Colour Scheme
- **Teal (#00A9B5)** - Primary buttons, links
- **Navy (#1A3A52)** - Navigation, footer
- **Electric Lime (#D4FF5A)** - Accents, badges
- **Light Ash (#F5F7FA)** - Card backgrounds

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1200px
- Mobile: 480px - 768px
- Small Mobile: < 480px

---

## 💻 JavaScript Features Included

✅ Mobile hamburger menu
✅ Form validation with real-time feedback
✅ Smooth scroll navigation
✅ Event tracking & analytics
✅ LocalStorage for user preferences
✅ Intersection Observer animations
✅ Keyboard navigation (Escape, Ctrl+/)
✅ Performance monitoring

---

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on all interactive elements
- 48px+ touch targets
- Respects prefers-reduced-motion

---

## 📊 Available npm Scripts

```bash
npm start          # Start Live Server with auto-reload
npm run dev        # Dev server on port 3000
npm run serve      # HTTP server alternative
npm run lint       # Check code quality
npm run format     # Format code with Prettier
npm run build      # Build process (placeholder)
npm run test       # Run tests (placeholder)
```

---

## 📱 Mobile Navigation

Click the hamburger icon (☰) to toggle mobile menu. 
Menu auto-closes when you click a link.

---

## 📝 Form Validation

Contact form validates:
- **Name** - 2+ characters
- **Email** - Valid email format
- **Message** - 10+ characters

Real-time feedback as you type.

---

## 🔍 Browser DevTools Tips

### Check Analytics
```javascript
// In browser console:
JSON.parse(localStorage.getItem('fitmind_events'))
```

### View Preferences
```javascript
JSON.parse(localStorage.getItem('fitmind_preferences'))
```

### Log Performance
```javascript
performance.timing
```

---

## 🎯 Key Sections

1. **Hero** - Bold value proposition
2. **Features** - 6 main capabilities
3. **Pricing** - 3 pricing tiers
4. **About** - Social proof & stats
5. **Contact** - Lead generation form
6. **Footer** - Links and info

---

## 📈 Analytics Events

Tracked events:
- `page_load` - Page initialization
- `cta_click` - Call-to-action clicks
- `preferences_saved` - Settings changes
- `form_submit` - Contact form submission

---

## 🔐 Git Setup

Repository initialized with:
- Initial commit with all files
- `.gitignore` for node_modules, .DS_Store
- Ready for GitHub deployment

---

## 🎨 CSS Architecture

### Structure
- Global styles and variables
- Component styles (buttons, cards, forms)
- Layout & responsive sections
- Animations & transitions
- Dark mode preparation

### Custom Properties (Variables)
```css
:root {
  --primary: #00A9B5;
  --secondary: #1A3A52;
  --accent: #D4FF5A;
  /* ...and more */
}
```

Change colors globally by updating variables!

---

## 📚 JavaScript Organization

### AppState
Centralized state management for:
- Mobile menu status
- User preferences
- Form data

### DOM Cache
Pre-cached DOM elements for performance

### Utility Functions
- `debounce()` - Delay function execution
- `throttle()` - Limit function calls

---

## 🚀 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)
Just push files - no build needed!

### Steps
1. Push to GitHub
2. Connect to Netlify/Vercel
3. Deploy automatically on push

---

## 🤔 FAQ

**Q: Do I need npm?**
A: No, but it's recommended for Live Server. You can open index.html directly.

**Q: Can I use frameworks?**
A: Yes! Files are framework-agnostic. Add React, Vue, etc. as needed.

**Q: How do I add more sections?**
A: Copy a section, add unique IDs, add to navigation menu.

**Q: Is it mobile responsive?**
A: Yes! Tested on all screen sizes.

---

## 📞 Support

Need help? Check:
1. Browser console for errors
2. Network tab for failed requests
3. README.md for detailed documentation
4. Code comments in HTML/CSS/JS

---

**Happy coding! 🚀**
