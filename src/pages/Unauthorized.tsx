// src/pages/Unauthorized.tsx
import React from 'react';
import { Footer, Header } from '../components';

const Unauthorized: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>403 - Forbidden</h1>
      <p>You do not have permission to access this page.</p>
      <Footer/>
    </div>
  );
};

export default Unauthorized;
