# מסמך עיצוב - גלריית וידאו

## סקירה כללית

גלריית הוידאו תהיה אפליקציית web מודרנית המציגה אוסף וידאו באופן אטרקטיבי ופונקציונלי. העיצוב יתמקד בחוויית משתמש פשוטה ונעימה עם דגש על ביצועים וגישה נוחה לתוכן.

## ארכיטקטורה

### מבנה כללי
```
Frontend (React/Vue/Vanilla JS)
├── Components
│   ├── VideoGallery (רכיב ראשי)
│   ├── SearchBar (שורת חיפוש)
│   ├── VideoCard (כרטיס וידאו בודד)
│   ├── VideoModal (חלון צפייה)
│   └── LoadingSpinner (אינדיקטור טעינה)
├── Services
│   ├── VideoService (ניהול נתוני וידאו)
│   └── SearchService (לוגיקת חיפוש)
└── Styles
    ├── Global styles
    └── Component-specific styles
```

### טכנולוגיות מומלצות
- **Frontend Framework**: React או Vue.js לניהול state ורכיבים
- **Styling**: CSS Modules או Styled Components
- **Icons**: Feather Icons או Heroicons
- **Animations**: CSS Transitions + Framer Motion (אופציונלי)

## רכיבים וממשקים

### 1. VideoGallery (רכיב ראשי)
```typescript
interface VideoGalleryProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

interface VideoGalleryState {
  filteredVideos: Video[];
  searchTerm: string;
  selectedVideo: Video | null;
  isLoading: boolean;
}
```

### 2. SearchBar (שורת חיפוש)
```typescript
interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder: string;
}
```

### 3. VideoCard (כרטיס וידאו)
```typescript
interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}
```

### 4. VideoModal (חלון צפייה)
```typescript
interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}
```

## מודלי נתונים

### Video Model
```typescript
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: number; // בשניות
  tags: string[];
  uploadDate: Date;
  views: number;
}
```

### SearchResult Model
```typescript
interface SearchResult {
  videos: Video[];
  totalCount: number;
  searchTerm: string;
}
```

## עיצוב ויזואלי

### פלטת צבעים
```css
:root {
  /* צבעים עיקריים */
  --primary-color: #6366f1; /* סגול מודרני */
  --primary-hover: #5855eb;
  --secondary-color: #f59e0b; /* כתום חם */
  
  /* צבעי רקע */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-card: #ffffff;
  --bg-overlay: rgba(0, 0, 0, 0.8);
  
  /* צבעי טקסט */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  
  /* צבעי גבול */
  --border-light: #e5e7eb;
  --border-focus: #6366f1;
  
  /* צללים */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### טיפוגרפיה
```css
/* פונטים */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-heading: 'Poppins', sans-serif;

/* גדלי טקסט */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
```

### Layout ורספונסיביות
```css
/* Grid layout לכרטיסי וידאו */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .video-grid {
    grid-template-columns: 1fr;
    padding: 0.5rem;
  }
}
```

## אנימציות ואינטראקציות

### Hover Effects
```css
.video-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Loading States
```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## טיפול בשגיאות

### סוגי שגיאות
1. **שגיאת טעינת וידאו**: הצגת placeholder עם הודעה
2. **שגיאת חיפוש**: הצגת הודעה "לא נמצאו תוצאות"
3. **שגיאת רשת**: הצגת כפתור "נסה שוב"
4. **שגיאת וידאו לא זמין**: החלפה בהודעת שגיאה

### Error Boundaries
```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class VideoGalleryErrorBoundary extends Component<Props, ErrorBoundaryState> {
  // טיפול בשגיאות React
}
```

## אסטרטגיית בדיקות

### Unit Tests
- בדיקת רכיבי UI בודדים
- בדיקת לוגיקת חיפוש
- בדיקת פונקציות עזר

### Integration Tests
- בדיקת אינטראקציה בין רכיבים
- בדיקת זרימת נתונים
- בדיקת טיפול בשגיאות

### E2E Tests
- בדיקת זרימת משתמש מלאה
- בדיקת חיפוש וסינון
- בדיקת צפייה בוידאו

### Performance Tests
- בדיקת זמני טעינה
- בדיקת Lazy Loading
- בדיקת ביצועים במכשירים שונים

## אופטימיזציה וביצועים

### Lazy Loading
```typescript
const VideoCard = lazy(() => import('./VideoCard'));

// Intersection Observer לטעינת תמונות
const useIntersectionObserver = (ref: RefObject<Element>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  
  return isIntersecting;
};
```

### Caching Strategy
- שמירת תוצאות חיפוש ב-sessionStorage
- Cache של תמונות ממוזערות
- Debouncing לחיפוש (300ms)

### Bundle Optimization
- Code splitting לרכיבים גדולים
- Tree shaking לספריות חיצוניות
- Image optimization (WebP, responsive images)

## נגישות (Accessibility)

### ARIA Labels
```html
<div role="grid" aria-label="גלריית וידאו">
  <div role="gridcell" aria-label="וידאו: {title}">
    <button aria-describedby="video-description-{id}">
      <!-- תוכן כרטיס -->
    </button>
  </div>
</div>
```

### Keyboard Navigation
- Tab navigation בין כרטיסים
- Enter/Space לבחירת וידאו
- Escape לסגירת modal
- Arrow keys לניווט בגריד

### Screen Reader Support
- Alt text לתמונות
- ARIA descriptions לכרטיסים
- Live regions לתוצאות חיפוש
- Focus management במודל