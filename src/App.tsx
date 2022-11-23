import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "animate.css/animate.min.css";
import { StyledGlobal } from 'theme';

import AppLayout from 'routes';

function App() {
  return (
    <main className='position-relative'>
      <StyledGlobal/>
      <AppLayout/>
    </main>
  );
}

export default App;
