import React from 'react';

import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hello from '@components/Hello';
import ProjectSlider from '@components/ProjectSlider';
import Services from '@components/Services';

import { PROJECTS } from '@utils/consts';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Hello />
        <Services />
        <About />
        <ProjectSlider
          description={PROJECTS.description}
          images={PROJECTS.images}
          title={PROJECTS.title}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
