export default {
  useColorSchemeMediaQuery: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#609',
    secondary: '#306',
    muted: '#f6f6f6',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#609',
      },
      cyber: {
        text: '#00ff2b',
        background: '#000',
        primary: '#ff0000',
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
  styles: {
    root: {
      fontWeight: '400',
      a: {
        color: 'text',
        '&:hover': {
          color: 'primary',
        },
        textDecorationColor: 'var(--theme-ui-colors-primary)',
        textDecorationThickness: '.125em',
        textUnderlineOffset: '1.5px',
      },
    },
  },
};
