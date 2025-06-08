# Pure CSS Setup for Quran Kareem Project

## Overview
This project now uses a custom pure CSS framework instead of Bootstrap, specifically designed for the Quran Kareem application with Islamic theming and Arabic text support.

## File Structure
```
src/
├── index.css              # Main CSS with variables, reset, and base styles
├── App.css               # App component specific styles
├── styles/
│   └── utilities.css     # Utility classes (Bootstrap-like helpers)
└── components/
    └── Navbar.css        # Navbar component styles
```

## CSS Architecture

### 1. CSS Variables (Custom Properties)
All colors, spacing, typography, and other design tokens are defined as CSS variables in `src/index.css`:

```css
:root {
  /* Colors */
  --primary-color: #2c5530;      /* Islamic green */
  --secondary-color: #4a7c59;
  --accent-color: #d4af37;       /* Gold accent */
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --text-light: #ffffff;
  
  /* Typography */
  --font-family-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-arabic: 'Amiri', 'Traditional Arabic', 'Times New Roman', serif;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

### 2. Component-Based CSS
Each React component has its own CSS file:
- `Navbar.css` - Navigation bar styles
- `App.css` - Main application and Quran-specific styles

### 3. Utility Classes
The `utilities.css` file provides Bootstrap-like utility classes:

#### Layout Utilities
- `.d-flex`, `.d-block`, `.d-none` - Display utilities
- `.justify-content-center`, `.align-items-center` - Flexbox utilities
- `.container`, `.container-fluid` - Container classes

#### Spacing Utilities
- `.m-0` to `.m-5` - Margin utilities
- `.p-0` to `.p-5` - Padding utilities
- `.mt-1`, `.mb-2`, `.px-3`, `.py-4` - Directional spacing

#### Typography Utilities
- `.text-center`, `.text-left`, `.text-right` - Text alignment
- `.text-primary`, `.text-secondary` - Text colors
- `.fs-1` to `.fs-6` - Font sizes
- `.fw-bold`, `.fw-normal` - Font weights

#### Arabic Text Utilities
- `.arabic-text` - Applies Arabic font family and RTL direction
- `.arabic-large`, `.arabic-medium`, `.arabic-small` - Arabic text sizes

## Usage Examples

### Basic Layout
```jsx
function App() {
  return (
    <div className="container">
      <h1 className="text-center mb-4 arabic-text">القرآن الكريم</h1>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary">Button 1</button>
        <button className="btn btn-secondary">Button 2</button>
      </div>
    </div>
  );
}
```

### Verse Display
```jsx
function Verse({ arabic, translation, number }) {
  return (
    <div className="verse-container">
      <div className="verse-arabic arabic-text arabic-large">
        {arabic}
      </div>
      <div className="verse-translation">
        {translation}
      </div>
      <span className="verse-number">{number}</span>
    </div>
  );
}
```

### Cards and Components
```jsx
function SurahCard({ title, verses }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="arabic-text arabic-medium">{title}</h3>
      </div>
      <div className="card-body">
        <p className="text-secondary">{verses} آيات</p>
      </div>
    </div>
  );
}
```

## Theme Customization

### Changing Colors
To change the color scheme, modify the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #your-new-color;
  --secondary-color: #your-secondary-color;
  --accent-color: #your-accent-color;
}
```

### Adding Dark Mode
You can add dark mode support by creating a separate set of variables:

```css
.dark-theme {
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --background-primary: #1a1a1a;
  --background-secondary: #2a2a2a;
}
```

### Custom Fonts
To add Google Fonts or custom Arabic fonts:

1. Add the font link to `index.html`
2. Update the CSS variable:
```css
:root {
  --font-family-arabic: 'Your Custom Font', 'Amiri', serif;
}
```

## Responsive Design

The CSS includes responsive breakpoints:
- Mobile: max-width: 480px
- Tablet: max-width: 768px
- Desktop: 769px and above

Use responsive utility classes:
- `.d-md-none` - Hide on medium screens and up
- `.text-sm-center` - Center text on small screens
- `.flex-md-row` - Flex row on medium screens and up

## Components Available

### Buttons
- `.btn` - Base button class
- `.btn-primary` - Primary button (Islamic green)
- `.btn-secondary` - Secondary button

### Cards
- `.card` - Base card container
- `.card-header` - Card header section
- `.card-body` - Card main content
- `.card-footer` - Card footer section

### Navigation
- `.navbar` - Navigation bar
- `.navbar-brand` - Brand/logo area
- `.navbar-nav` - Navigation menu
- `.nav-link` - Navigation links

### Quran-Specific Classes
- `.verse-container` - Container for individual verses
- `.verse-arabic` - Arabic text styling
- `.verse-translation` - Translation text styling
- `.verse-number` - Verse number badge
- `.quran-container` - Main content container

## Performance Considerations

1. **No external dependencies** - All CSS is custom, reducing bundle size
2. **CSS variables** - Easy theming without JavaScript
3. **Modular approach** - Only load CSS for components you use
4. **Optimized for Arabic** - Proper RTL support and Arabic typography

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS Variables support required
- RTL text support

## Migration from Bootstrap

If you were using Bootstrap classes, here are the equivalents:

| Bootstrap | Pure CSS Equivalent |
|-----------|-------------------|
| `.container` | `.container` |
| `.row` | `.d-flex` or `.grid` |
| `.col-*` | `.flex-1` or grid utilities |
| `.btn btn-primary` | `.btn btn-primary` |
| `.card` | `.card` |
| `.navbar` | `.navbar` |
| `.text-center` | `.text-center` |
| `.mb-3` | `.mb-3` |
| `.d-flex` | `.d-flex` |

The migration is mostly seamless due to similar class naming conventions. 