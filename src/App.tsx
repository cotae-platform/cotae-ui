import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import HomePage from '@src/pages/Home';
import DesignExamplePage from '@src/pages/DesignExample';

import { resetStyle } from '@src/styles/reset';
import { globalTheme } from '@src/styles/themes/globalTheme';

function App() {
  return (
    <BrowserRouter>
      <Global styles={resetStyle} />
      <ThemeProvider theme={globalTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design-example" element={<DesignExamplePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
