import React from 'react';
import { motion } from 'framer-motion';
import { rankingCriteria } from '../data/competitorData';
import { ShieldAlert, Award, Hash, HeartHandshake, Eye } from 'lucide-react';

export const Methodology: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('SEO')) return <Hash className="icon-accent" size={24} />;
    if (name.includes('Brand')) return <Eye className="icon-accent" size={24} />;
    if (name.includes('Proof')) return <Award className="icon-accent" size={24} />;
    if (name.includes('Social')) return <ShieldAlert className="icon-accent" size={24} />;
    return <HeartHandshake className="icon-accent" size={24} />;
  };

  return (
    <section id="methodology" style={{ padding: '4rem 0' }}>
      <span className="label-meta">02 // Framework</span>
      <h2 className="title-medium" style={{ margin: '1rem 0 2rem 0' }}>Ranking Methodology</h2>
      <p style={{ maxWidth: '780px', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
        Competitors were evaluated by directional threat level to House of ONO, combining technical search visibility, brand differentiation, visual authority, social media presence, and direct service overlap.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
        {rankingCriteria.map((criterion, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '2rem',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
          >
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '6px', 
                  backgroundColor: 'var(--bg-secondary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  {getIcon(criterion.name)}
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '1.35rem',
                  color: 'var(--accent)'
                }}>
                  {criterion.weight}%
                </div>
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1rem', 
                fontWeight: 600, 
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {criterion.name}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                {criterion.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="divider-line" />
    </section>
  );
};
