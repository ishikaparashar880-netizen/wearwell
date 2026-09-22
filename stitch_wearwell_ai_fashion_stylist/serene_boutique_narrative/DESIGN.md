---
name: Serene Boutique Narrative
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#504348'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#827378'
  outline-variant: '#d4c2c8'
  surface-tint: '#834e68'
  primary: '#431830'
  on-primary: '#ffffff'
  primary-container: '#5d2e46'
  on-primary-container: '#d596b3'
  inverse-primary: '#f6b4d1'
  secondary: '#645e50'
  on-secondary: '#ffffff'
  secondary-container: '#eae2d0'
  on-secondary-container: '#6a6456'
  tertiary: '#1d2b1f'
  on-tertiary: '#ffffff'
  tertiary-container: '#334134'
  on-tertiary-container: '#9dad9c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e7'
  primary-fixed-dim: '#f6b4d1'
  on-primary-fixed: '#350c23'
  on-primary-fixed-variant: '#68374f'
  secondary-fixed: '#eae2d0'
  secondary-fixed-dim: '#cec6b5'
  on-secondary-fixed: '#1f1b10'
  on-secondary-fixed-variant: '#4b4639'
  tertiary-fixed: '#d7e7d5'
  tertiary-fixed-dim: '#bbcbba'
  on-tertiary-fixed: '#111f14'
  on-tertiary-fixed-variant: '#3c4a3d'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is anchored in a philosophy of "Mindful Curation." It serves as a calm, editorial backdrop for a diverse range of fashion styles, from vibrant Indian Ethnic wear to minimal Korean aesthetics. The personality is warm, sophisticated, and inherently welcoming, aiming to reduce the cognitive "noise" often associated with e-commerce.

The visual style is **Soft Minimalism** with a focus on **Tactile Elegance**. It utilizes generous white space to allow product photography to breathe, paired with soft, organic transitions. This approach ensures that the interface feels like a high-end digital concierge rather than a cluttered marketplace.

## Colors

The palette is derived from natural, earthy tones to evoke a sense of quality and longevity.
- **Primary (Deep Plum):** Used sparingly for key actions, brand moments, and high-level navigation. It provides the necessary "anchor" for the lighter tones.
- **Secondary (Cream):** The foundational surface color. It is warmer than pure white, making the interface feel more approachable and premium.
- **Tertiary (Sage):** Used for success states, category highlights, or soft call-to-outs. It represents the "sustainable" and "calm" aspect of the brand.
- **Accent (Blush):** (Defined in implementation as `#EBCBC4`) Used for secondary buttons and hover states to maintain a soft, feminine, yet inclusive energy.
- **Neutral (Muted Beige):** Used for borders, subtle backgrounds, and inactive states.

## Typography

This design system employs a classic Serif-on-Sans pairing. **Playfair Display** provides the editorial authority and elegance required for fashion storytelling, while **Inter** ensures maximum legibility for functional data like pricing, sizing, and descriptions.

Headlines should use high-contrast weights to create a clear visual hierarchy. Labels utilize increased letter spacing and uppercase styling to distinguish functional metadata from narrative body text.

## Layout & Spacing

The layout follows a **Fluid-Fixed Hybrid** model. Content is contained within a 1280px max-width container on desktop, centering itself with generous side margins. 

- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px margins.

The spacing rhythm is intentionally loose ("Airy"). Avoid crowding elements; use `stack-lg` for separating distinct content blocks (e.g., Image Gallery vs. Product Details). Use `section-gap` to define the transition between different logical parts of a page.

## Elevation & Depth

Hierarchy is achieved through **Soft Ambient Shadows** and **Tonal Layering**. 
- **Surface 0 (Background):** The Secondary Cream color.
- **Surface 1 (Cards/Modals):** Pure White with a very soft, diffused shadow (Blur: 30px, Opacity: 4%, Color: Primary).
- **Interactions:** When an element is hovered, the shadow should deepen slightly and the element may scale by 1% to provide a tactile "lift" effect. 

Avoid heavy borders or harsh black shadows. Depth should feel like layers of high-quality paper stacked on a soft surface.

## Shapes

The shape language is consistently **Rounded**, reflecting the approachable and friendly tone of the brand. 
- **Small Components (Buttons, Inputs):** Use `rounded-lg` (1rem/16px) to maintain a soft profile.
- **Large Components (Cards, Image Containers):** Use `rounded-xl` (1.5rem/24px) to create an organic, frame-like feel for photography.
- **Iconography:** Use rounded terminals and a consistent 1.5pt or 2pt stroke weight.

## Components

- **Buttons:** Primary buttons use the Deep Plum background with White text. Secondary buttons use a Sage or Blush background with a 10% opacity tint. All buttons feature a 16px corner radius.
- **Input Fields:** Use a subtle neutral-beige border (1px). Upon focus, the border transitions to Deep Plum with a soft glow. Labels should always be visible above the field in `label-sm`.
- **Cards:** Product cards must have a 24px radius. The image occupies the top portion, with a 12px padding between the image and the text metadata below.
- **Chips/Filters:** Use pill-shaped containers (`rounded-full`) with a Cream background and 1px Sage border.
- **Lists:** Use generous vertical padding (16px-24px) between list items, separated by a very light beige divider line.
- **Special Component: "The Lookbook Tile":** A tall aspect ratio (2:3) card with minimal text overlay at the bottom, used for lifestyle photography and trend discovery.