const MantineTheme = {
  focusRing: 'auto',
  scale: 1,
  fontSmoothing: true,
  white: '#ffffff',
  black: '#000000',
  colors: {
    blue: ['#0000ff', '#0000ee', '#0000dd', '#0000cc', '#0000bb', '#0000aa', '#000099', '#000088', '#000077', '#000066']
  },
  primaryShade: { light: 6, dark: 8 },
  primaryColor: 'blue',
  variantColorResolver: null,
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: 'Roboto',
  fontFamilyMonospace: 'Roboto',
  headings: {
    fontFamily: 'Roboto',
    fontWeight: 'auto',
    textWrap: 'wrap',
    sizes: {
      h1: 96,
      h2: 60,
      h3: 48,
      h4: 34,
      h5: 24,
      h6: 20,
    }
  },
  radius: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
  defaultRadius: 'md',
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
  fontSizes: { xs: 10, sm: 12, md: 14, lg: 16, xl: 18 },
  lineHeights: { xs: 1, sm: 1.2, md: 1.4, lg: 1.6, xl: 1.8 },
  breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  shadows: { xs: '0 1px 2px rgba(0, 0, 0, 0.1)', sm: '0 2px 4px rgba(0, 0, 0, 0.1)', md: '0 4px 8px rgba(0, 0, 0, 0.1)', lg: '0 8px 16px rgba(0, 0, 0, 0.1)', xl: '0 16px 32px rgba(0, 0, 0, 0.1)' },
  respectReducedMotion: false,
  cursorType: 'default',
  defaultGradient: null,
  activeClassName: 'mantine-active',
  focusClassName: 'mantine-focus',
  components: {},
  other: {}
};

export { MantineTheme };
