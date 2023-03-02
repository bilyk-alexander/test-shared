import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    textPrimary: string;
    textSecondary: string;
    divider: string;
    border: string;
    bodySecondary: string;
    textSelected: string;
    inputBackground: string;
    inputBorder: string;
    buttonSecondary: string;
    buttonDisabled: string;
    buttonTextDisabled: string;
  }
}
