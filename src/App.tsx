import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import HomePage from '@src/pages/Home';
import DesignExamplePage from '@src/pages/DesignExample';

import { globalStyle } from '@src/styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design-example" element={<DesignExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
