# FitMind.AI - Design System & Brand Guidelines

## 📋 Overview

This document outlines the complete design system for FitMind.AI, including visual language, components, patterns, and accessibility standards.

---

## 🎨 Colour System

### Primary Palette
```
Primary Teal:        #00A9B5 (RGB: 0, 169, 181)
Primary Dark:        #008892 (RGB: 0, 136, 146)
```
**Usage:** Main CTAs, links, highlights, active states

### Secondary Palette
```
Secondary Navy:      #1A3A52 (RGB: 26, 58, 82)
```
**Usage:** Navigation, headers, footer, text emphasis

### Accent Palette
```
Accent Lime:         #D4FF5A (RGB: 212, 255, 90)
Accent Dark:         #B8DB3F (RGB: 184, 219, 63)
```
**Usage:** Badges, highlights, supporting actions

### Neutral Palette
```
Light Ash:           #F5F7FA (RGB: 245, 247, 250)
Off-White:           #FFFFFF (RGB: 255, 255, 255)
```
**Usage:** Backgrounds, cards, surfaces

### Text Palette
```
Text Dark:           #2C3E50 (RGB: 44, 62, 80)  - Primary text
Text Light:          #5A6C7D (RGB: 90, 108, 125) - Secondary text
Border:              #E0E6ED (RGB: 224, 230, 237) - Dividers, borders
```
**Usage:** Body text, labels, secondary information

### Status Colours
```
Success:             #27AE60 (RGB: 39, 174, 96)
Warning:             #F39C12 (RGB: 243, 156, 18)
Error:               #E74C3C (RGB: 231, 76, 60)
```
**Usage:** Form validation, alerts, feedback

---

## 🔡 Typography System

### Font Stack
```css
Display: 'Poppins', sans-serif  /* Headings, brand elements */
Body:    'Inter', sans-serif    /* Body text, UI elements */
```

### Type Scale
```
H1: 48px | 700 weight | 1.2 line-height
H2: 40px | 700 weight | 1.3 line-height
H3: 28px | 600 weight | 1.3 line-height
H4: 20px | 600 weight | 1.3 line-height
H5: 18px | 500 weight | 1.3 line-height
H6: 16px | 500 weight | 1.3 line-height

Body:    16px | 400 weight | 1.6 line-height
Small:   14px | 400 weight | 1.5 line-height
Tiny:    12px | 500 weight | 1.4 line-height
```

### Weight Scale
- 300: Light (rarely used)
- 400: Regular (body text)
- 500: Medium (secondary text, labels)
- 600: Semibold (emphasis, section headers)
- 700: Bold (headings, primary text)

### Line Height
- 1.2: Headings (compact)
- 1.3: Subheadings
- 1.6: Body text (readable)
- 1.8: Long-form content

---

## 📐 Spacing System

All spacing values follow a base unit of 4px:

```
--spacing-xs:   4px   (micro spacing)
--spacing-sm:   8px   (padding in small components)
--spacing-md:   16px  (padding in medium components)
--spacing-lg:   24px  (padding in large components)
--spacing-xl:   32px  (padding in sections)
--spacing-2xl:  48px  (padding between sections)
--spacing-3xl:  64px  (large section padding)
```

### Common Patterns
- **Button padding:** 12px 28px (md horizontal, sm vertical)
- **Card padding:** 24px (lg)
- **Section padding:** 64px vertical, 24px horizontal (responsive)
- **Gap between grid items:** 32px (2xl)

---

## 🔘 Button System

### Button Variants

#### Primary Button
```
Background:  #00A9B5
Text Color:  #FFFFFF
Padding:     12px 28px
Border Radius: 8px
Shadow:      0 4px 12px rgba(0,0,0,0.12)

On Hover:
- Background: #008892
- Transform: translateY(-2px)
- Shadow: 0 8px 24px rgba(0,0,0,0.16)
```

#### Secondary Button
```
Background:  Transparent
Border:      2px solid #00A9B5
Text Color:  #00A9B5
Padding:     12px 28px

On Hover:
- Background: #00A9B5
- Text Color: #FFFFFF
```

#### CTA Button (Accent)
```
Background:  #D4FF5A
Text Color:  #1A3A52
Font Weight: 600
Padding:     10px 20px

On Hover:
- Background: #B8DB3F
- Transform: scale(1.05)
```

### Sizing
- **Small:** 8px 16px
- **Medium:** 12px 28px (default)
- **Large:** 16px 32px
- **Block:** Full width (100%)

### States
- **Default:** Base styling
- **Hover:** Color change, elevation
- **Active/Pressed:** Reduced elevation
- **Disabled:** Opacity 50%, cursor not-allowed
- **Focus:** 2px outline with accent color

---

## 💳 Card Components

### Card Base
```
Background:  #FFFFFF
Border:      2px solid #E0E6ED
Border-Radius: 16px
Padding:     24px
Shadow:      0 2px 4px rgba(0,0,0,0.08)

On Hover:
- Border Color: #00A9B5
- Transform: translateY(-8px)
- Shadow: 0 8px 24px rgba(0,0,0,0.16)
```

### Feature Card
- Icon: 48px emoji/icon
- Title: H3 (28px)
- Description: Body text, secondary color
- Hover effect: Lift up with border highlight

### Pricing Card
- Title: H3 (28px)
- Price: Large display with superscript currency
- Features: Bulleted list with checkmarks
- CTA button: Full width
- Featured variant: Scale 1.05, special badge

---

## 🎯 Component Patterns

### Form Inputs
```css
Padding:         12px 16px
Border:          2px solid #E0E6ED
Border-Radius:   8px
Font Size:       16px
Font Family:     Inter

Focus State:
- Border Color:  #00A9B5
- Box Shadow:    0 0 0 3px rgba(0,169,181,0.1)
- Outline:       None

Invalid State:
- Border Color:  #E74C3C
- Error Message: Red text below field
```

### Form Groups
- Label: Medium weight, dark text
- Input/Textarea: Full width, stacked
- Error: Small red text, shown conditionally
- Spacing: 16px between groups

### Navigation Bar
- Height: Dynamic (fits content)
- Position: Sticky, z-index 1000
- Shadow: Light shadow below
- Mobile: Hamburger menu, slides down
- Links: Dark text, hover to teal

### Footer
- Background: #1A3A52 (navy)
- Text: Light gray/white
- Sections: 4-column grid, responsive to 2-1
- Links: Light text, hover to lime accent

---

## ✨ Animation & Motion

### Transition Timings
```css
--transition-fast:   150ms ease-in-out
--transition-normal: 300ms ease-in-out
--transition-slow:   500ms ease-in-out
```

### Common Animations

#### Slide In
```css
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### Float
```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(10deg);
    }
}
```

#### Fade
```css
opacity: 0 → 1
Duration: 300ms
```

### Animation Principles
- Use GPU-accelerated properties (transform, opacity)
- Avoid animating layout-triggering properties
- Respect prefers-reduced-motion
- Keep animations under 500ms for UI feedback

---

## 📏 Sizing System

### Container Widths
```
Max Content Width: 1200px
Padding (sides):   24px (responsive to 16px on mobile)
```

### Component Sizes

#### Buttons
- Min Height: 48px (touch target)
- Horizontal Padding: 12-28px
- Border Radius: 8px

#### Icons
- Small: 24px
- Medium: 32px
- Large: 48px
- Hero: 96px+

#### Images
- Responsive: 100% width with max-width
- Aspect Ratio: Maintained (no distortion)

---

## ♿ Accessibility Standards

### WCAG 2.1 Level AA Compliance

#### Colour Contrast
- Text on backgrounds: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Graphics/UI components: 3:1 minimum

#### Focus Management
- Visible focus indicator: 2px outline
- Focus order: Logical, left-to-right, top-to-bottom
- Focus trap: Modals trap focus, others allow escape

#### Touch Targets
- Minimum size: 48x48px (mobile)
- Spacing: 8px minimum between targets
- Larger on small screens

#### Keyboard Navigation
- Tab order: Logical flow
- Escape: Closes modals, dropdowns, menus
- Enter: Activates buttons, links
- Arrow keys: Navigation in dropdowns, sliders

#### Screen Reader Support
- Semantic HTML: Proper heading hierarchy
- ARIA Labels: For icons, buttons without text
- ARIA Live Regions: For dynamic content
- Form Labels: Associated with inputs
- Alternative Text: For meaningful images

---

## 🎯 Responsive Design Breakpoints

### Breakpoint Definitions
```css
Mobile Small:     < 480px
Mobile:           480px - 768px
Tablet:           768px - 1200px
Desktop:          1200px+
Large Desktop:    1600px+
```

### Responsive Typography
```
Mobile:  16px base
Tablet:  16px base
Desktop: 16px base (no scaling needed, already optimized)
```

### Responsive Layout
- Mobile: Single column, stacked
- Tablet: 2-column grid
- Desktop: 3-column grid or multi-column layout

---

## 🎭 Dark Mode (Preparation)

### Dark Mode Colours (Future)
```css
--bg-dark:        #1A1A1A
--text-dark-mode: #FFFFFF
--card-dark:      #2A2A2A
--border-dark:    #444444
```

Toggle class: `.dark-mode` on body

---

## 🔧 CSS Architecture

### Organization
1. **Global Styles** - Reset, variables, typography
2. **Components** - Buttons, cards, forms, navigation
3. **Layouts** - Sections, containers, grids
4. **Animations** - Keyframes, transitions
5. **Utilities** - Helpers, accessibility
6. **Responsive** - Media queries organized by breakpoint

### Naming Convention
- BEM-inspired: `.block__element--modifier`
- Classes: Lowercase with hyphens
- Variables: Double dash prefix `--variable-name`

---

## 📱 Mobile-First Strategy

### Approach
1. Design mobile view first
2. Add media queries for larger screens
3. Progressive enhancement
4. Mobile navigation: Hamburger menu
5. Touch-friendly: Larger tap targets

### Responsive Images
- Use `max-width: 100%` for fluidity
- Aspect ratio containers for videos
- Picture elements for art direction (future)

---

## 🚀 Performance Guidelines

### Image Optimization
- JPG: Photos, complex images
- PNG: Icons, simple graphics
- WebP: Modern browsers (fallback to JPG)
- SVG: Logos, icons, simple graphics

### CSS Performance
- Use CSS Grid/Flexbox (avoid floats)
- Minimize specificity (avoid deeply nested selectors)
- Use shorthand properties
- Remove unused styles

### JavaScript Performance
- Defer non-critical scripts
- Cache DOM queries
- Use event delegation
- Debounce scroll/resize handlers

---

## 🎓 Component Documentation

### Button
**Usage:** Call-to-action, navigation, form submission
**Variants:** Primary, Secondary, CTA, Disabled
**Sizing:** Small, Medium, Large, Block

### Card
**Usage:** Content containers, product displays
**Variants:** Feature card, Pricing card, Team member
**Elevation:** Raised on hover

### Form
**Components:** Input, Textarea, Label, Error message
**Validation:** Real-time feedback, error display
**Accessibility:** Labels, ARIA, keyboard support

### Navigation
**Components:** Navbar, Mobile menu, Footer links
**States:** Active, Hover, Focus
**Mobile:** Hamburger menu with smooth animation

---

## 📊 Design Metrics

### Common Sizes
- **Button Height:** 48px
- **Card Padding:** 24px
- **Section Padding:** 64px (vertical), 24px (horizontal)
- **Grid Gap:** 32px
- **Border Radius:** 8px (small), 16px (large)
- **Max Content Width:** 1200px

---

## 🔗 External Resources

- **Fonts:** Google Fonts (Poppins, Inter)
- **Icons:** Unicode/Emoji
- **Animation Library:** CSS animations (vanilla)
- **CDN:** Google Fonts, future image CDN

---

## 📝 Version History

- **v1.0** - Initial design system
  - Color palette defined
  - Typography system established
  - Component patterns documented
  - Accessibility guidelines included

---

## 🎯 Future Enhancements

- [ ] Component library (React/Vue)
- [ ] Interactive design system website
- [ ] Icon set documentation
- [ ] Animation guidelines expansion
- [ ] Dark mode implementation
- [ ] Figma design kit
- [ ] Design tokens export

---

**This design system ensures consistency, accessibility, and scalability across FitMind.AI.**
