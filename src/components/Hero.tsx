import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { houseOfOnoBaseline } from '../data/competitorData';

export const Hero: React.FC = () => {
  return (
    <section id="overview" className="section-hero" style={{ padding: '4rem 0 2rem 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="label-meta">Strategic Report</span>
        <h1 className="title-large" style={{ margin: '1rem 0 2rem 0' }}>
          HOUSE of ONO
        </h1>
        
        <div className="hero-header-grid">
          <div>
            <h2 className="subtitle-large" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              Competitor Research & SEO Audit
            </h2>
            <p className="font-serif-italic" style={{ fontSize: '1.85rem', lineHeight: '1.35', color: 'var(--text-primary)' }}>
              London Home Staging, Property Styling and Design-Led Staging Competitor Review
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ fontSize: '1.1rem', maxWidth: '480px' }}>
              An editorial audit evaluating direct and indirect London home staging firms. Discovering structural keyword opportunities, design positioning differentiations, and strategic roadmaps to build a searchable, brand-forward digital footprint.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="divider-double" />

      {/* House of ONO Baseline Section */}
      <div style={{ marginTop: '4rem' }}>
        <span className="label-meta">01 // The Baseline</span>
        <h2 className="title-medium" style={{ margin: '1rem 0 3rem 0' }}>Current Brand Audit</h2>
        
        <div className="hero-baseline-grid">
          {/* Defensible Position Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              padding: '3rem', 
              borderRadius: '8px',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="label-meta" style={{ color: 'var(--text-secondary)' }}>Core Strategy</span>
              <h3 className="title-small" style={{ margin: '1.5rem 0 1rem 0' }}>Most Defensible Position</h3>
              <p className="font-serif-italic" style={{ fontSize: '1.45rem', lineHeight: '1.4', color: 'var(--accent)', fontWeight: 500 }}>
                "{houseOfOnoBaseline.defensiblePosition}"
              </p>
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <span className="label-meta" style={{ display: 'block', marginBottom: '0.5rem' }}>Current Positioning</span>
              <p style={{ fontSize: '0.95rem' }}>{houseOfOnoBaseline.positioning}</p>
            </div>
          </motion.div>

          {/* Strengths and Gaps Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ 
                fontFamily: 'var(--font-sans)', 
                textTransform: 'uppercase', 
                fontSize: '0.8rem', 
                letterSpacing: '0.1em', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '1rem',
                color: '#28a745'
              }}>
                <CheckCircle size={16} /> Current SEO Strengths
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {houseOfOnoBaseline.strengths.map((str, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '1rem', 
                    color: 'var(--text-secondary)',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--accent)' }}>—</span>
                    {str}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Gaps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 style={{ 
                fontFamily: 'var(--font-sans)', 
                textTransform: 'uppercase', 
                fontSize: '0.8rem', 
                letterSpacing: '0.1em', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '1rem',
                color: 'var(--accent)'
              }}>
                <AlertCircle size={16} /> Key Growth Opportunities (Gaps)
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {houseOfOnoBaseline.gaps.map((gap, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '1rem', 
                    color: 'var(--text-secondary)',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--accent)' }}>—</span>
                    {gap}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="divider-line" />
    </section>
  );
};
