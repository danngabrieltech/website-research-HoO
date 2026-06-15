import React from 'react';
import { motion } from 'framer-motion';
import { keywordOpportunities, seoRoadmap } from '../data/competitorData';
import { Target, Milestone, CornerDownRight } from 'lucide-react';

export const SEOStrategy: React.FC = () => {
  return (
    <section id="strategy" style={{ padding: '4rem 0' }}>
      <span className="label-meta">06 // Strategy</span>
      <h2 className="title-medium" style={{ margin: '1rem 0 2rem 0' }}>Keyword & Implementation Strategy</h2>
      <p style={{ maxWidth: '780px', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
        A structured overview of core search opportunities and a step-by-step roadmap to scale House of ONO's organic visibility.
      </p>

      {/* Keyword Grid */}
      <h3 className="title-small" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Target size={22} className="icon-accent" /> Keyword Opportunity Matrix
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {keywordOpportunities.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            style={{
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '2rem',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="label-meta" style={{ fontSize: '0.65rem' }}>Cluster {index + 1}</span>
              <h4 style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.05rem', 
                fontWeight: 600, 
                margin: '0.5rem 0 1.25rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {group.groupName}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {group.keywords.map((kw, i) => (
                  <span key={i} style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.25rem 0.6rem', 
                    backgroundColor: 'var(--bg-secondary)', 
                    border: '1px solid var(--border)', 
                    color: 'var(--text-primary)',
                    borderRadius: '4px'
                  }}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CornerDownRight size={14} style={{ color: 'var(--accent)', marginTop: '0.2rem', flexShrink: 0 }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {group.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="divider-line" />

      {/* Roadmap Roadmap Timeline */}
      <h3 className="title-small" style={{ margin: '4rem 0 2.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Milestone size={22} className="icon-accent" /> Recommended Action Roadmap
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {seoRoadmap.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="roadmap-step-grid roadmap-step"
          >
            {/* Timeline Number */}
            <div style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2.8rem', 
              lineHeight: 1, 
              color: 'var(--accent)',
              fontWeight: 300
            }}>
              P{step.priority}
            </div>

            {/* Action Title */}
            <div>
              <h4 style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.1rem', 
                fontWeight: 600, 
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem'
              }}>
                {step.action}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {step.why}
              </p>
            </div>

            {/* Implementation Details */}
            <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
              <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                How to execute
              </strong>
              {step.how}
            </div>

            {/* Competitor Benchmark */}
            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="label-meta" style={{ fontSize: '0.6rem', display: 'block', marginBottom: '0.25rem' }}>Benchmark</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{step.reference}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="divider-line" />
    </section>
  );
};
