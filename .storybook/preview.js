// import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      // ...MINIMAL_VIEWPORTS,
      tablet: {
        name: 'Small Screen',
        styles: {
          width: '800px',
          height: '600px',
        },
      },
    },
  },
};