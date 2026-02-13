# Anuel Energy — Technical Specification

## 1. Component Inventory

### shadcn/ui Components (built-in)
- **Button** — CTAs (primary accent + outline variants)
- **Input** — contact form fields
- **Textarea** — contact form message
- **Card** — article cards in Insights section
- **Sheet** — mobile navigation drawer
- **Separator** — subtle dividers

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `PinnedSection` | Wrapper for 100vh pinned sections with z-index stacking | `src/components/PinnedSection.tsx` |
| `HeroHeadline` | Large uppercase headline with accent word support | `src/components/HeroHeadline.tsx` |
| `ServiceChip` | Outlined pill button for Design/Install/Maintain | `src/components/ServiceChip.tsx` |
| `StatItem` | Mono label + bold value for stats row | `src/components/StatItem.tsx` |
| `ArticleCard` | Thumbnail + meta + title + excerpt card | `src/components/ArticleCard.tsx` |
| `GrainOverlay` | Global film grain overlay (fixed) | `src/components/GrainOverlay.tsx` |
| `Navigation` | Header with logo + nav + mobile menu | `src/components/Navigation.tsx` |

---

## 2. Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero load animation (bg scale, headline reveal) | GSAP | Timeline on mount: bg scale 1.08→1, headline clip-path + y stagger | Medium |
| Pinned section entrance (text from off-screen) | GSAP ScrollTrigger | `fromTo()` with scrub, translateX ±60-70vw, opacity 0→1 | Medium |
| Pinned section settle hold | GSAP ScrollTrigger | No animation 30%-70% range | Low |
| Pinned section exit (text drift + fade) | GSAP ScrollTrigger | `fromTo()` 70%-100%, keep opacity >0.25 until 95% | Medium |
| Background parallax (scale + translate) | GSAP ScrollTrigger | Subtle scale 1→1.12 + translateY on exit | Low |
| Service chips stagger entrance | GSAP ScrollTrigger | Stagger 0.06, y +6vh, scale 0.92→1 | Low |
| Stats row stagger entrance | GSAP ScrollTrigger | Stagger 0.07, y +8vh | Low |
| Insights cards scroll reveal | GSAP ScrollTrigger | Flowing section, each card y +40px, opacity 0→1 at top 85%→60% | Low |
| Card hover lift | CSS/Framer Motion | `transform: translateY(-6px)` on hover | Low |
| Card thumbnail hover scale | CSS | `transform: scale(1.04)` on card hover | Low |
| Contact form reveal | GSAP ScrollTrigger | Flowing section, y +30px stagger | Low |
| Global scroll snap | GSAP ScrollTrigger | Custom snap derived from pinned ranges, settleRatio 0.5 | High |
| Grain overlay | CSS | Fixed pseudo-element with noise PNG, pointer-events none | Low |

---

## 3. Animation Library Choices

### Primary: GSAP + ScrollTrigger
- **Rationale**: Best performance for scrubbed scroll animations, precise control over pinned sections, bidirectional playback
- **Use for**: All pinned section animations, scroll snap, timeline sequencing

### Secondary: CSS Transitions
- **Rationale**: Simple hover states don't need JS
- **Use for**: Card hovers, button hovers, nav underlines

### Optional: Framer Motion (if preferred for React)
- **Rationale**: Good React integration, but ScrollTrigger more precise for pinned sections
- **Decision**: Use GSAP for pinned sections; Framer Motion acceptable for flowing sections if team prefers

---

## 4. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero_solar_field.jpg
│   │   ├── powering_nation_sunset.jpg
│   │   ├── panel_texture_closeup.jpg
│   │   ├── technician_installation.jpg
│   │   ├── inverter_hardware_closeup.jpg
│   │   ├── uganda_solar_landscape.jpg
│   │   ├── golden_hour_field.jpg
│   │   ├── insights_thumb_01.jpg
│   │   ├── insights_thumb_02.jpg
│   │   ├── insights_thumb_03.jpg
│   │   └── uganda_map_graphic.png
│   └── grain.png
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   ├── PinnedSection.tsx
│   │   ├── HeroHeadline.tsx
│   │   ├── ServiceChip.tsx
│   │   ├── StatItem.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── GrainOverlay.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Section01Hero.tsx
│   │   ├── Section02Powering.tsx
│   │   ├── Section03BuiltForScale.tsx
│   │   ├── Section04EndToEnd.tsx
│   │   ├── Section05DesignedToLast.tsx
│   │   ├── Section06ProvenAcross.tsx
│   │   ├── Section07ReadyWhen.tsx
│   │   ├── Section08Insights.tsx
│   │   └── Section09Contact.tsx
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   └── useReducedMotion.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Dependencies to Install

### Core (from webapp-building skill)
- React + TypeScript + Vite (already included)
- Tailwind CSS (already included)
- shadcn/ui components (already included)

### Animation
```bash
npm install gsap @gsap/react
```

### Optional
```bash
npm install lenis  # smooth scrolling (optional)
```

### Fonts
- Space Grotesk (Google Fonts)
- Inter (Google Fonts)
- IBM Plex Mono (Google Fonts)

Load via Google Fonts CDN in index.html or use @fontsource packages.

---

## 6. Key Implementation Details

### Pinned Section Pattern

```tsx
// PinnedSection.tsx wrapper
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedSectionProps {
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
  id?: string;
}

export function PinnedSection({ children, className = '', zIndex = 10, id }: PinnedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-screen h-screen overflow-hidden ${className}`}
      style={{ zIndex }}
    >
      {children}
    </section>
  );
}
```

### Global Scroll Snap

```tsx
// In App.tsx or a dedicated hook
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Wait for all ScrollTriggers to be created
    const pinned = ScrollTrigger.getAll()
      .filter(st => st.vars.pin)
      .sort((a, b) => a.start - b.start);
    
    const maxScroll = ScrollTrigger.maxScroll(window);
    if (!maxScroll || pinned.length === 0) return;

    const pinnedRanges = pinned.map(st => ({
      start: st.start / maxScroll,
      end: (st.end ?? st.start) / maxScroll,
      center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
    }));

    ScrollTrigger.create({
      snap: {
        snapTo: (value: number) => {
          const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
          if (!inPinned) return value; // flowing section: free scroll

          const target = pinnedRanges.reduce((closest, r) =>
            Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
            pinnedRanges[0]?.center ?? 0
          );
          return target;
        },
        duration: { min: 0.15, max: 0.35 },
        delay: 0,
        ease: 'power2.out',
      },
    });
  });

  return () => ctx.revert();
}, []);
```

### Hero Load Animation

```tsx
// Section01Hero.tsx
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Background entrance
    tl.fromTo('.hero-bg', 
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );

    // Headline staggered reveal
    tl.fromTo('.hero-line',
      { y: 40, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
      { y: 0, opacity: 1, clipPath: 'inset(0 0 0 0)', duration: 0.7, stagger: 0.08 },
      '-=0.6'
    );

    // Subheadline + CTAs
    tl.fromTo('.hero-sub',
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.3'
    );

    tl.fromTo('.hero-cta',
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      '-=0.3'
    );
  });

  return () => ctx.revert();
}, []);
```

### Section Animation Pattern (Entrance/Settle/Exit)

```tsx
// Inside each section component
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ENTRANCE (0% - 30%)
    gsap.fromTo('.headline',
      { x: '-70vw', opacity: 0 },
      { x: 0, opacity: 1, ease: 'none', scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=39%', // 30% of 130%
        scrub: 0.6,
      }}
    );

    gsap.fromTo('.body-text',
      { y: '12vh', opacity: 0 },
      { y: 0, opacity: 1, ease: 'none', scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=39%',
        scrub: 0.6,
      }}
    );

    // EXIT (70% - 100%)
    gsap.fromTo('.headline',
      { x: 0, opacity: 1 },
      { x: '-45vw', opacity: 0, ease: 'none', scrollTrigger: {
        trigger: section,
        start: '+=91%', // 70% of 130%
        end: '+=39%', // to 100%
        scrub: 0.6,
      }}
    );

    // Background parallax
    gsap.fromTo('.section-bg',
      { scale: 1, y: 0 },
      { scale: 1.12, y: '-6vh', ease: 'none', scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=130%',
        scrub: 0.6,
      }}
    );
  }, section);

  return () => ctx.revert();
}, []);
```

---

## 7. Performance Checklist

- [ ] Use `transform` and `opacity` only (no layout properties)
- [ ] No animated blur/backdrop-filter
- [ ] No heavy box-shadow animations
- [ ] Use `will-change: transform` on animated elements
- [ ] Lazy load images below fold
- [ ] Use `loading="lazy"` for Insights thumbnails
- [ ] Optimize images to WebP where possible
- [ ] Grain overlay is static PNG with low opacity
- [ ] Test with 6x CPU throttling
- [ ] Implement `prefers-reduced-motion` support

---

## 8. Responsive Breakpoints

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
```

### Mobile Adjustments
- Headlines: `clamp(32px, 8vw, 72px)`
- Reduce parallax ranges by ~40%
- Right-aligned blocks become left-aligned
- Navigation becomes hamburger menu
- Pinned sections remain but with simplified animations

---

## 9. Accessibility

- Semantic HTML (section, nav, main, footer)
- ARIA labels on interactive elements
- Focus visible states on buttons/links
- Color contrast ratio ≥ 4.5:1
- `prefers-reduced-motion` media query support
- Skip to content link
- Alt text on all images
