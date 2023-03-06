import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/DefaultTheme';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { TransactionsContextProvider } from './contexts/TransactionsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TransactionsContextProvider>
          <Router />
        </TransactionsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
