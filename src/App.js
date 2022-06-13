import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
} from 'react-router-dom';
import useTheme from './hooks/useTheme';
import FormContainer from './components/formContainer';
import SignUpForm from './pages/signUp';
import Logo from './components/logo';
import Button from './components/button';
import GlobalStyles, { themes } from './globalStyles';


const MoreInfo = React.lazy(() => import('./pages/moreInfo'));
const UserInfo = React.lazy(() => import('./pages/userInfo'));
const Confirmation = React.lazy(() => import('./pages/confirmation'));
const Error = React.lazy(() => import('./pages/error'));
const Success = React.lazy(() => import('./pages/success'));

const App = () => {
  const [currentTheme, setCurrentTheme] = useTheme();
  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <header>
        <Logo />
      </header>
      <main>
        <React.Suspense fallback={<div>Loading...</div>}>
          <FormContainer>
            <Routes>
              <Route path="/" element={<SignUpForm />}>
                <Route index element={<UserInfo />} />
                <Route path="more-info" element={<MoreInfo />} />
                <Route path="confirmation" element={<Confirmation />} />
                <Route path="error" element={<Error />} />
                <Route path="success" element={<Success />} />
              </Route>
            </Routes>
          </FormContainer>
        </React.Suspense>
      </main>
      <footer>
        <div onClick={toggleTheme}>
          <Button variant="secondary" size="small">
            Toggle {currentTheme === 'light' ? 'dark' : 'light'} mode
          </Button>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default App;
