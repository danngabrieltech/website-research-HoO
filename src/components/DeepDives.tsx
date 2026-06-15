import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { competitors } from '../data/competitorData';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all subpage screenshots
import burbeck_home from '../assets/screenshots/burbeck_home.png';
import burbeck_staging from '../assets/screenshots/burbeck_staging.png';
import burbeck_journal from '../assets/screenshots/burbeck_journal.png';
import ljinteriors_home from '../assets/screenshots/ljinteriors_home.png';
import ljinteriors_staging from '../assets/screenshots/ljinteriors_staging.png';
import boxnine7_home from '../assets/screenshots/boxnine7_home.png';
import boxnine7_staging from '../assets/screenshots/boxnine7_staging.png';
import featherington_home from '../assets/screenshots/featherington_home.png';
import featherington_areas from '../assets/screenshots/featherington_areas.png';
import featherington_blog from '../assets/screenshots/featherington_blog.png';
import homestaginglondon_home from '../assets/screenshots/homestaginglondon_home.png';
import homestaginglondon_projects from '../assets/screenshots/homestaginglondon_projects.png';
import dressed2sell_home from '../assets/screenshots/dressed2sell_home.png';
import cullumdesign_home from '../assets/screenshots/cullumdesign_home.png';
import cullumdesign_contact from '../assets/screenshots/cullumdesign_contact.png';
import londonpropertystaging_home from '../assets/screenshots/londonpropertystaging_home.png';
import londonpropertystaging_about from '../assets/screenshots/londonpropertystaging_about.png';
import louisajane_home from '../assets/screenshots/louisajane_home.png';
import louisajane_story from '../assets/screenshots/louisajane_story.png';
import thefinaltouch_home from '../assets/screenshots/thefinaltouch_home.png';
import thefinaltouch_press from '../assets/screenshots/thefinaltouch_press.png';

const screenshotMap: Record<string, string> = {
  burbeck_home,
  burbeck_staging,
  burbeck_journal,
  ljinteriors_home,
  ljinteriors_staging,
  boxnine7_home,
  boxnine7_staging,
  featherington_home,
  featherington_areas,
  featherington_blog,
  homestaginglondon_home,
  homestaginglondon_projects,
  dressed2sell_home,
  cullumdesign_home,
  cullumdesign_contact,
  londonpropertystaging_home,
  londonpropertystaging_about,
  louisajane_home,
  louisajane_story,
  thefinaltouch_home,
  thefinaltouch_press
};

interface PageScreenshot {
  label: string;
  id: string;
  url: string;
}

const competitorPages: Record<string, PageScreenshot[]> = {
  burbeck: [
    { label: "Homepage", id: "burbeck_home", url: "https://burbeckinteriors.com/" },
    { label: "Home Staging", id: "burbeck_staging", url: "https://burbeckinteriors.com/home-staging" },
    { label: "Journal", id: "burbeck_journal", url: "https://burbeckinteriors.com/journal" }
  ],
  ljinteriors: [
    { label: "Homepage", id: "ljinteriors_home", url: "https://ljinteriordesign.co.uk/" },
    { label: "Home Staging", id: "ljinteriors_staging", url: "https://ljinteriordesign.co.uk/home-staging/" }
  ],
  boxnine7: [
    { label: "Homepage", id: "boxnine7_home", url: "https://www.boxnine7.com/" },
    { label: "Home Staging Company", id: "boxnine7_staging", url: "https://www.boxnine7.com/home-staging-company" }
  ],
  featherington: [
    { label: "Homepage", id: "featherington_home", url: "https://www.featheringtoninteriors.com/" },
    { label: "Service Areas", id: "featherington_areas", url: "https://www.featheringtoninteriors.com/home-staging-areas-we-serve" },
    { label: "Blog", id: "featherington_blog", url: "https://www.featheringtoninteriors.com/blog" }
  ],
  homestaginglondon: [
    { label: "Homepage", id: "homestaginglondon_home", url: "https://www.homestaginglondon.co.uk/" },
    { label: "Projects", id: "homestaginglondon_projects", url: "https://www.homestaginglondon.co.uk/projects" }
  ],
  dressed2sell: [
    { label: "Homepage", id: "dressed2sell_home", url: "https://dressed2sell.co.uk/" }
  ],
  cullumdesign: [
    { label: "Homepage", id: "cullumdesign_home", url: "https://cullum-design.com/" },
    { label: "Contact", id: "cullumdesign_contact", url: "https://cullum-design.com/contact/" }
  ],
  londonpropertystaging: [
    { label: "Homepage", id: "londonpropertystaging_home", url: "https://www.londonpropertystaging.com/" },
    { label: "About Us", id: "londonpropertystaging_about", url: "https://www.londonpropertystaging.com/about" }
  ],
  louisajane: [
    { label: "Homepage", id: "louisajane_home", url: "https://louisajaneinteriors.com/" },
    { label: "Our Story", id: "louisajane_story", url: "https://louisajaneinteriors.com/our-story/" }
  ],
  thefinaltouch: [
    { label: "Homepage", id: "thefinaltouch_home", url: "https://www.thefinaltouch.co.uk/" },
    { label: "Press", id: "thefinaltouch_press", url: "https://www.thefinaltouch.co.uk/in-the-press" }
  ]
};

export const DeepDives: React.FC = () => {
  const [activeTab, setActiveTab] = useState(competitors[0].id);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const activeComp = competitors.find(c => c.id === activeTab) || competitors[0];
  const activePages = competitorPages[activeComp.id] || [];
  const currentPage = activePages[activePageIndex] || activePages[0];

  useEffect(() => {
    setActivePageIndex(0);
  }, [activeTab]);

  const handlePrevPage = () => {
    setActivePageIndex(prev => (prev === 0 ? activePages.length - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setActivePageIndex(prev => (prev === activePages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="deepdives" style={{ padding: '4rem 0' }}>
      <span className="label-meta">05 // Audit Profiles</span>
      <h2 className="title-medium" style={{ margin: '1rem 0 2rem 0' }}>Competitor Deep Dives</h2>
      <p style={{ maxWidth: '780px', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Detailed exploration of each competitor's digital experience, visual layout, and ONO's tactical differentiation.
      </p>

      {/* Tabs navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        overflowX: 'auto', 
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border)',
        marginBottom: '3rem',
        whiteSpace: 'nowrap'
      }}>
        {competitors.map(comp => (
          <button
            key={comp.id}
            onClick={() => setActiveTab(comp.id)}
            className={`tab-button ${activeTab === comp.id ? 'active' : ''}`}
            style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
          >
            {comp.rank}. {comp.name}
          </button>
        ))}
      </div>

      {/* Content Layout */}
      <div className="deepdive-grid">
        {/* Browser Mockup with Page Slider */}
        <motion.div
          key={`${activeComp.id}-${activePageIndex}-screenshot`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="browser-mockup" style={{ position: 'relative' }}>
            <div className="browser-header">
              <div className="browser-dot red" />
              <div className="browser-dot yellow" />
              <div className="browser-dot green" />
              <div className="browser-address-bar">
                {currentPage ? currentPage.url : activeComp.website}
              </div>
              <a 
                href={currentPage ? currentPage.url : activeComp.website} 
                target="_blank" 
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
              >
                <ExternalLink size={14} />
              </a>
            </div>
            
            {/* Visual Slider Content */}
            <div className="browser-content" style={{ position: 'relative' }}>
              <img 
                src={currentPage ? screenshotMap[currentPage.id] : ''} 
                alt={`${activeComp.name} ${currentPage ? currentPage.label : 'website'} preview`}
                className="browser-screenshot-img"
              />

              {/* Slide controls (only visible if more than 1 page exists) */}
              {activePages.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handlePrevPage(); }}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(28, 27, 26, 0.75)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 10,
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(28, 27, 26, 0.95)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(28, 27, 26, 0.75)'}
                    title="Previous audited page"
                    aria-label="Previous audited page"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNextPage(); }}
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(28, 27, 26, 0.75)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 10,
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(28, 27, 26, 0.95)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(28, 27, 26, 0.75)'}
                    title="Next audited page"
                    aria-label="Next audited page"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
          </div>
          
          {/* Page Indicator Selector Tabs */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginTop: '1rem',
            alignItems: 'center'
          }}>
            {activePages.length > 1 ? (
              activePages.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => setActivePageIndex(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: activePageIndex === idx ? 600 : 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: activePageIndex === idx ? 'var(--text-primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.25rem 0.5rem',
                    borderBottom: `1.5px solid ${activePageIndex === idx ? 'var(--accent)' : 'transparent'}`,
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {page.label}
                </button>
              ))
            ) : (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Single Page Audited
              </span>
            )}
          </div>
          <span style={{ 
            display: 'block', 
            textAlign: 'center', 
            fontSize: '0.7rem', 
            color: 'var(--text-muted)', 
            marginTop: '0.5rem',
            fontStyle: 'italic'
          }}>
            Hover over the website to auto-scroll the page
          </span>
        </motion.div>

        {/* Text Breakdown */}
        <motion.div
          key={`${activeComp.id}-details`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="label-meta">Competitor Profile // Rank {activeComp.rank}</span>
                <h3 className="title-medium" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>{activeComp.name}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                <span className="badge-threat very-high" style={{ 
                  backgroundColor: activeComp.threat.includes('Very') ? 'rgba(220, 53, 69, 0.1)' : 'rgba(253, 126, 20, 0.1)',
                  color: activeComp.threat.includes('Very') ? '#dc3545' : '#fd7e14'
                }}>
                  {activeComp.threat} Threat
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Audit Score:</span>
                  <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>{activeComp.score}/100</strong>
                </div>
              </div>
            </div>

            {/* Service Tags Boxes */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem 0' }}>
              {activeComp.serviceOverlap.split(',').map((item, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    fontSize: '0.75rem', 
                    backgroundColor: 'var(--accent-light)', 
                    padding: '0.2rem 0.6rem',
                    border: '1px solid var(--accent)',
                    color: 'var(--accent)',
                    borderRadius: '4px',
                    fontWeight: 500
                  }}
                >
                  {item.trim()}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2rem 0' }}>
              <div>
                <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)' }}>Design & Content Language:</strong>
                <p style={{ fontSize: '0.95rem', marginTop: '0.25rem' }}>{activeComp.designApproach}</p>
              </div>

              <div>
                <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)' }}>SEO Footprint:</strong>
                <p style={{ fontSize: '0.95rem', marginTop: '0.25rem' }}>{activeComp.seoImplementation}</p>
              </div>

              <div>
                <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)' }}>Authority proof observed:</strong>
                <p style={{ fontSize: '0.95rem', marginTop: '0.25rem' }}>{activeComp.evidence}</p>
              </div>
            </div>
          </div>

          <div style={{ 
            borderTop: '1px solid var(--border)', 
            paddingTop: '2rem', 
            marginTop: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            padding: '1.75rem',
            borderRadius: '6px',
            border: '1px solid var(--border)'
          }}>
            <span className="label-meta" style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>How ONO Beats Them</span>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, margin: '0.25rem 0 0.75rem 0' }}>Strategic ONO Response</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: '1.6' }}>
              "{activeComp.strategicMove}"
            </p>
          </div>
        </motion.div>
      </div>

      <div className="divider-line" />
    </section>
  );
};
