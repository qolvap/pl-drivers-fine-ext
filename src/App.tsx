import React from 'react';
import ResultsPage from './components/Results/ResultsPage';
import Footer from './components/Footer/Footer';
import 'tailwindcss/tailwind.css';

function App() {
  return (
        <div className="App flex flex-col min-h-screen">
          <div className="flex-grow flex-shrink-0">
              <ResultsPage />
          </div>
          <Footer />
        </div>
  );
}

export default App;



