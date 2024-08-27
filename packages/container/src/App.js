import React from 'react';

import MarketingApp from './components/MarketingApp';

import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

export default () => {
    return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
        
    </div>
    </BrowserRouter>
    );
};