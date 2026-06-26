import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { TopNavBar } from './layouts/TopNavBar';
import { Footer } from './layouts/Footer';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Enterprise } from './pages/Enterprise';
import { Pricing } from './pages/Pricing';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-background text-on-background antialiased selection:bg-primary/20 selection:text-primary">
        <TopNavBar />
        <main className="flex-grow pt-24 md:pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
