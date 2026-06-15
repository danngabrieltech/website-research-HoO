import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Leaderboard } from './components/Leaderboard';
import { Matrix } from './components/Matrix';
import { DeepDives } from './components/DeepDives';
import { SEOStrategy } from './components/SEOStrategy';
import { Footer } from './components/Footer';
import { Sun, Moon, ArrowUp } from 'lucide-react';

const navItems = [
  { id: 'overview', label: '01. Brand Baseline' },
  { id: 'methodology', label: '02. Methodology' },
  { id: 'ranking', label: '03. Threat Ranking' },
  { id: 'matrix', label: '04. Snapshots Matrix' },
  { id: 'deepdives', label: '05. Competitor Profiles' },
  { id: 'strategy', label: '06. Search Strategy' },
  { id: 'sources', label: '07. References' }
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('ono-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ono-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Scroll progress calculations
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Back to top button visibility
      setShowScrollTop(window.scrollY > 500);

      // Section tracker via intersection approximation
      const scrollPosition = window.scrollY + 300;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="magazine-container">
      {/* Top Banner (Magazine style issue banner) */}
      <header className="magazine-header">
        <div>
          <span className="label-meta" style={{ display: 'block', marginBottom: '0.25rem' }}>
            London Market Intelligence
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Vol. 01 // Research & SEO Audit
          </span>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.25rem', 
            letterSpacing: '0.15em', 
            fontWeight: 600,
            textTransform: 'uppercase'
          }}>
            House of ONO
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Issue: {new Date().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
          </span>
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            title="Toggle color theme"
            aria-label="Toggle color theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </header>

      {/* Progress bar representing magazine reading flow */}
      <div style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        height: '2.5px',
        backgroundColor: 'var(--border)',
        zIndex: 999
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--accent)',
          transition: 'width 0.1s ease-out'
        }} />
      </div>

      {/* Asymmetric Magazine layout grid */}
      <div className="editorial-grid" style={{ marginTop: '3rem' }}>
        {/* Navigation Sidebar */}
        <aside className="sidebar-sticky">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <span className="label-meta" style={{ display: 'block', marginBottom: '1.5rem' }}>Contents</span>
              <ul className="toc-list">
                {navItems.map(item => (
                  <li key={item.id} className="toc-item">
                    <a 
                      href={`#${item.id}`} 
                      className={`toc-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ 
              borderTop: '1px solid var(--border)', 
              paddingTop: '1.5rem', 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)',
              lineHeight: '1.5' 
            }}>
              <span className="label-meta" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.5rem' }}>Config</span>
              Framework: Vite + React + TS<br />
              Design: Custom Vanilla CSS<br />
              Audit scope: 10 Competitors
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ paddingBottom: '4rem' }}>
          <Hero />
          <Methodology />
          <Leaderboard />
          <Matrix />
          <DeepDives />
          <SEOStrategy />
          <Footer />
        </main>
      </div>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-md)',
            zIndex: 99
          }}
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default App;
