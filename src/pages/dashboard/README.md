# Dashboard Component Structure

## Overview

The Members/Dashboard page has been refactored into a modular, reusable component architecture with improved UI/UX, responsive design, and accessibility.

## Directory Structure

```bash
src/pages/
  Members.jsx (Main dashboard container)
  dashboard/
    ├── DashboardHeader.jsx (Sticky header with notifications)
    ├── MobileNav.jsx (Mobile-specific navigation menu)
    ├── HeroSection.jsx (Welcome banner)
    ├── MetricCard.jsx (Statistics card component)
    ├── SectionHeader.jsx (Section title with navigation)
    ├── CourseCard.jsx (Course card with progress)
    ├── ActivityRow.jsx (Activity list item)
    ├── RecommendCard.jsx (Recommendation card)
    ├── BadgeCard.jsx (Achievement badge)
    ├── SkeletonLoader.jsx (Loading skeleton UI)
    ├── Toast.jsx (Notification toast)
    ├── constants.js (Static data and color maps)
    ├── responsive.js (Responsive utilities)
    ├── animations.js (Animation and transition definitions)
    └── a11y.js (Accessibility utilities)
```

## Component Details

### DashboardHeader

Sticky header component with:

- Logo and branding
- Search bar (desktop only)
- Streak counter
- Notifications button
- User avatar
- Responsive design with fallback for mobile

**Props:** `stats` (object with streak data)

### MobileNav

Mobile-specific navigation with:

- Collapsible menu
- Quick stats summary
- Quick navigation links
- Search bar for mobile

**Props:** `stats` (object with metrics)

### HeroSection

Welcome banner with:

- Dynamic greeting based on time of day
- User stats display
- Call-to-action button
- Responsive sizing with clamp()

**Props:** `greeting` (string), `stats` (object)

### MetricCard

Statistics card component with:

- Icon display
- Hover animations
- Color-coded variants
- Accessible labels

**Props:** `label`, `value`, `icon`, `color`

### CourseCard

Course display card with:

- Progress bar visualization
- Instructor information
- Last watched tracking
- Hover lift animation

**Props:** `course` (object)

### ActivityRow

Activity list item with:

- Status badge
- Course and time info
- Hover highlight effect

**Props:** `item` (object)

### RecommendCard

Recommendation display with:

- Rating and student count
- Tag badge
- Price display
- Hover slide animation

**Props:** `rec` (object)

### BadgeCard

Achievement badge with:

- Earned/locked states
- Color variants
- Lock icon for unavailable badges
- Hover effects

**Props:** `badge` (object), `icon` (lucide icon)

### SkeletonLoader

Loading placeholder with pulse animation.

**Props:** `type` (metric|course|activity|card), `count` (number)

### Toast

Notification component with multiple types (success, error, warning, info).

**Props:** `message`, `type`, `duration`, `onClose`

## Key Features

### 1. **Responsive Design**

- Mobile-first approach with `clamp()` for fluid sizing
- Breakpoints: xs(0), sm(640px), md(768px), lg(1024px), xl(1280px)
- Mobile navigation with hamburger menu
- Adaptive grid layouts

### 2. **Animations & Transitions**

- Smooth slide-in and fade-in effects
- Hover lift animations on cards
- Pulse animations for loading states
- Shimmer effect for skeleton loaders
- Reduced motion support for accessibility

### 3. **Accessibility**

- ARIA labels and live regions
- Semantic HTML structure
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Focus management utilities

### 4. **Color System**

Eight color variants (indigo, cyan, emerald, orange, purple, blue, violet, amber) with:

- Background color with transparency
- Text color for contrast
- Border color for definition

### 5. **Hover Effects**

- Lift animation (translateY transform)
- Color transitions
- Box shadow effects
- Smooth transitions on all properties

## Usage Example

```jsx
import Members from "./pages/Members";

export default function App() {
	return <Members />;
}
```

## Data Structure

### Course Object

```javascript
{
  id: number,
  title: string,
  instructor: string,
  progress: number (0-100),
  totalLessons: number,
  completedLessons: number,
  lastWatched: string,
  thumbnail: string|null,
  category: string,
  accentColor: string (hex)
}
```

### Activity Object

```javascript
{
  title: string,
  course: string,
  type: "Video"|"Quiz"|"Assignment",
  status: "Completed"|"Passed"|"In Progress"|"Pending",
  time: string,
  duration?: string,
  score?: string
}
```

### Badge Object

```javascript
{
  label: string,
  color: string,
  earned: boolean
}
```

## Customization

### Changing Colors

Edit color values in `constants.js` colorMap object.

### Adding New Metrics

Add to the stats grid in `Members.jsx` main component.

### Updating Static Data

Modify arrays in `constants.js`:

- enrolledCourses
- recentActivity
- recommendations
- achievements

### Animation Speed

Adjust animation durations in `animations.js`.

## Performance Considerations

- Components use inline styles for faster rendering
- No external CSS files to reduce bundle size
- Memoization can be added for expensive computations
- Skeleton loaders prevent layout shift

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Future Enhancements

1. Connect to real API endpoints
2. Add data pagination for large lists
3. Implement filters and sorting
4. Add dark/light mode toggle
5. Export functionality for stats
6. User preference storage
7. Real-time notifications
8. Analytics integration
