---
name: Serene Nocturne Boutique
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4c2c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8d92'
  outline-variant: '#504348'
  surface-tint: '#f6b4d1'
  primary: '#f6b4d1'
  on-primary: '#4e2139'
  primary-container: '#834e68'
  on-primary-container: '#ffcae1'
  inverse-primary: '#834e68'
  secondary: '#cdc4c7'
  on-secondary: '#342f31'
  secondary-container: '#504a4c'
  on-secondary-container: '#c2b9bc'
  tertiary: '#f6b4d2'
  on-tertiary: '#4e2139'
  tertiary-container: '#834e68'
  on-tertiary-container: '#ffcae1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd8e8'
  primary-fixed-dim: '#f6b4d1'
  on-primary-fixed: '#350c23'
  on-primary-fixed-variant: '#683750'
  secondary-fixed: '#eae0e2'
  secondary-fixed-dim: '#cdc4c7'
  on-secondary-fixed: '#1f1a1c'
  on-secondary-fixed-variant: '#4b4547'
  tertiary-fixed: '#ffd8e8'
  tertiary-fixed-dim: '#f6b4d2'
  on-tertiary-fixed: '#350c23'
  on-tertiary-fixed-variant: '#683750'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  charcoal-deep: '#121212'
  plum-muted: '#2d282a'
  plum-accent: '#834e68'
  lavender-soft: '#d4c2c8'
  off-white: '#fcf9f4'
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

The design system evolves into a "Midnight Sanctuary" aesthetic, pivoting from its original airy light mode to a sophisticated, immersive dark environment. It targets a discerning audience seeking luxury and tranquility in a digital space. The personality remains warm and editorial, but shifts toward a more intimate, high-end evening boutique feel.

The visual style is **Atmospheric Minimalism**. By utilizing deep, tonal layers and a monochromatic base of charcoal and plum, the interface minimizes visual fatigue while allowing high-resolution product photography to "glow" against the dark canvas. The aesthetic draws from **Modern Noir** and **Glassmorphism**, using subtle transparency and soft blurs to maintain a sense of lightness despite the dark palette.

## Colors

The dark mode palette is built on a foundation of "Deep Charcoal" and "Muted Plum" to create depth without the harshness of pure black.

- **Primary (Plum Accent):** Re-tuned for dark mode visibility. This color is used for primary calls to action and critical highlights, providing a warm, jewel-toned focal point.
- **Secondary (Muted Plum):** Used for container surfaces and secondary structural elements. It adds a sophisticated purple undertone to the dark interface.
- **Tertiary (Soft Lavender):** Used for subtle accents, active states, and decorative elements. It serves as the high-contrast bridge between the dark backgrounds and light text.
- **Neutral (Deep Charcoal):** The primary background color. It provides a stable, low-energy canvas that ensures product imagery is the protagonist.
- **Text & UI:** Text is rendered in **Off-White** for primary headers to ensure maximum readability, while **Soft Lavender** is used for secondary information to reduce visual vibration.

## Typography

This system maintains the elegant Serif-on-Sans pairing. **Playfair Display** provides editorial authority, while **Inter** handles functional data. In dark mode, font weights for Inter are slightly increased or tracking is adjusted to ensure the glow of light text on dark backgrounds doesn't cause "thinning" or loss of legibility.

Headlines in Off-White create a clear, high-contrast hierarchy. Labels and metadata utilize Soft Lavender to sit back in the visual hierarchy, creating a layered reading experience that guides the eye toward primary content.

## Layout & Spacing

The layout utilizes a **Fluid-Fixed Hybrid** model. In dark mode, negative space feels more substantial; therefore, the "Airy" philosophy is strictly maintained to prevent the interface from feeling heavy or claustrophobic.

- **Desktop:** 12-column grid with 24px gutters, max-width of 1280px.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px margins.

Spacing units are used to create "islands" of content. Large vertical gaps (`section-gap`) are critical to separate distinct narrative blocks, ensuring the user's focus is never overwhelmed.

## Elevation & Depth

In this dark system, depth is conveyed through **Tonal Layering** rather than traditional shadows, as dark shadows are less effective on dark backgrounds.

- **Surface 0 (Background):** The base Charcoal (#121212).
- **Surface 1 (Cards/Modals):** Muted Plum (#2d282a). This creates a subtle "lift" from the background.
- **Overlays:** Use a semi-transparent blur (Backdrop Filter) with a 10% white tint to create a frosted glass effect for navigation bars and dropdowns.
- **Luminosity:** Instead of shadows, use **Inner Glows** or **Low-Contrast Outlines** in Soft Lavender (10% opacity) to define the edges of elevated components.

## Shapes

The shape language remains consistently **Rounded**, which softens the intensity of the dark mode palette.

- **Small Components:** Buttons and inputs use `rounded-lg` (1rem) for a tactile, inviting feel.
- **Large Components:** Cards and image frames use `rounded-xl` (1.5rem), creating an organic, editorial frame for product photography.
- **Iconography:** Icons should feature rounded terminals and a consistent 1.5pt stroke to match the softness of the UI components.

## Components

- **Buttons:** Primary buttons use the Plum Accent with Off-White text. Secondary buttons are outlined in Soft Lavender with no fill, or a subtle 5% Plum fill on hover.
- **Input Fields:** Backgrounds should be Muted Plum with an Off-White text color. Borders are 1px Soft Lavender (20% opacity), transitioning to a solid Plum Accent border on focus.
- **Cards:** Product cards use the Muted Plum surface. The image should have a subtle inner-shadow to blend seamlessly into the dark card if the image background is light.
- **Chips/Filters:** Pill-shaped (`rounded-full`) with a Muted Plum background and a 1px Lavender border. Active chips switch to a Plum Accent background.
- **Special Component: "The Nocturne Lookbook":** Uses full-bleed imagery with Soft Lavender text overlays and a subtle dark-to-transparent gradient at the base to ensure legibility of bottom-aligned captions.