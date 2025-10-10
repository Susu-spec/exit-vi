# Form&Fun Portfolio Clone

A pixel-perfect recreation of the [Form&Fun Studio](https://www.formandfun.co/) landing page, built with modern web technologies and animation libraries.

![Form&Fun Clone](./public/screenshot.png)

## 🎯 Project Overview

This project is a faithful clone of the Form&Fun creative studio website, focusing on:
- Smooth scroll-based animations
- Custom cursor interactions
- Video integrations
- Advanced carousel implementations
- Premium UI/UX patterns

## ✨ Features

- **Custom Cursor** - Interactive cursor that adapts to different elements
- **Scroll-Linked Marquees** - Content that moves based on scroll position
- **Smooth Scrolling** - Lenis-powered smooth scroll experience
- **Video Hover Effects** - Videos play on hover with poster fallback
- **Interactive Carousels** - Multiple Splide.js implementations
- **Responsive Design** - Fully responsive across all devices
- **Performance Optimized** - Lazy loading, efficient animations, 60fps

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Chakra UI](https://chakra-ui.com/) + [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/) - React animation library
  - [Lenis](https://lenis.studiofreight.com/) - Smooth scroll
  - [GSAP](https://greensock.com/gsap/) - Advanced animations
- **Carousels**: [Splide.js](https://splidejs.com/) + Auto Scroll extension
- **Video**: Native HTML5 video with CDN support

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/formandfun-clone.git

# Navigate to project directory
cd formandfun-clone

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Project Structure

```
formandfun-clone/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── CustomCursor.tsx    # Interactive cursor
│   │   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   │   ├── ScrollMarquee.tsx   # Scroll-linked marquee
│   │   ├── InteractiveVideo.tsx # Hover-to-play video component
│   │   ├── ExpertiseSlider.tsx # 3-column expertise carousel
│   │   ├── AwardsSlider.tsx    # Awards list carousel
│   │   └── Navigation.tsx      # Site navigation
│   ├── hooks/
│   │   └── useMousePosition.ts # Mouse position tracking
│   └── types/
│       └── index.ts            # TypeScript types
├── public/
│   ├── videos/                 # Video assets
│   └── images/                 # Image assets
├── README.md
├── package.json
└── tsconfig.json
```

## 🎨 Key Components

### Custom Cursor
Interactive cursor that changes state based on context:
```tsx
<CustomCursor />
```
- Default state (small circle)
- Hover state (large circle)
- Text state (displays custom text)
- Drag state (dashed border)

### Scroll Marquee
Content that moves based on scroll position:
```tsx
<ScrollMarquee direction="left">
  {children}
</ScrollMarquee>
```

### Interactive Video
Videos that play on hover and return to poster frame:
```tsx
<InteractiveVideo
  videoUrl="/videos/demo.mp4"
  posterUrl="/images/poster.jpg"
  title="Demo Video"
/>
```

### Expertise Slider
3-column carousel showcasing services:
```tsx
<ExpertiseSlider />
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_CDN_URL=https://your-cdn-url.com
```

### Animation Settings
Adjust animation speeds in component files:
```typescript
// Smooth scroll speed
duration: 1.2

// Cursor spring physics
stiffness: 500
damping: 28

// Carousel speeds
speed: 1
```

## 📱 Responsive Breakpoints

```css
mobile: 320px - 767px
tablet: 768px - 1023px
desktop: 1024px+
```

## 🎯 Performance Optimizations

- ✅ Lazy loading videos (Intersection Observer)
- ✅ `preload="metadata"` for videos
- ✅ Motion values for animations (no re-renders)
- ✅ CSS transforms (GPU-accelerated)
- ✅ Image optimization with Next.js Image
- ✅ Code splitting with dynamic imports

## 🚧 Known Issues

- [ ] Custom cursor not visible on touch devices (by design)
- [ ] Video autoplay may be blocked by browser policies
- [ ] Some animations require `prefers-reduced-motion` handling

## 🎓 Learning Resources

This project demonstrates:
- Advanced Framer Motion patterns
- Scroll-based animation techniques
- Custom cursor implementation
- Video optimization strategies
- Carousel configuration
- Performance best practices

## 📝 License

This is a clone project for educational purposes. Original design by [Form&Fun Studio](https://www.formandfun.co/).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/formandfun-clone](https://github.com/yourusername/formandfun-clone)

## 🙏 Acknowledgments

- [Form&Fun Studio](https://www.formandfun.co/) - Original design inspiration
- [Awwwards](https://www.awwwards.com/) - Design inspiration
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lenis](https://lenis.studiofreight.com/) - Smooth scroll

---

**⚠️ Disclaimer**: This is a clone project created for educational purposes only. All design credit goes to Form&Fun Studio. Not affiliated with or endorsed by Form&Fun.
