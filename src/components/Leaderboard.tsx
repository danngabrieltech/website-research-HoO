import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { competitors } from '../data/competitorData';
import type { Competitor } from '../data/competitorData';
import { ExternalLink, Instagram, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

export const Leaderboard: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const getThreatBadgeClass = (threat: Competitor['threat']) => {
    const t = threat.toLowerCase();
    if (t === 'very high') return 'badge-threat very-high';
    if (t === 'high') return 'badge-threat high';
    if (t === 'medium') return 'badge-threat medium';
    if (t === 'medium low') return 'badge-threat medium-low';
    return 'badge-threat low-medium';
  };

  return (
    <section id="ranking" style={{ padding: '4rem 0' }}>
      <span className="label-meta">03 // Competitors</span>
      <h2 className="title-medium" style={{ margin: '1rem 0 2rem 0' }}>Competitor Threat Ranking</h2>
      <p style={{ maxWidth: '780px', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
        Click on any competitor to view social channels, threat profile, and primary positioning parameters.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)' }}>
        {competitors.map((comp) => {
          const isExpanded = expandedId === comp.id;
          
          return (
            <div 
              key={comp.id} 
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              {/* Row Header */}
              <div 
                onClick={() => toggleExpand(comp.id)}
                className="leaderboard-row leaderboard-row-grid"
                style={{ 
                  alignItems: 'center',
                  padding: '1.75rem 1rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                {/* Rank */}
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.5rem', 
                  color: isExpanded ? 'var(--accent)' : 'var(--text-muted)'
                }}>
                  {comp.rank.toString().padStart(2, '0')}
                </div>
                
                {/* Name */}
                <div style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontWeight: 600, 
                  fontSize: '1.1rem',
                  color: isExpanded ? 'var(--accent)' : 'var(--text-primary)'
                }}>
                  {comp.name}
                </div>

                {/* Score */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Score</span>
                  <div className={`score-circle ${comp.score >= 85 ? 'high-score' : ''}`}>
                    {comp.score}
                  </div>
                </div>

                {/* Threat Badge */}
                <div>
                  <span className={getThreatBadgeClass(comp.threat)}>
                    {comp.threat}
                  </span>
                </div>

                {/* Overlap Summary */}
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                  paddingRight: '1rem'
                }}>
                  {comp.serviceOverlap.split(',').map((item, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        fontSize: '0.7rem', 
                        backgroundColor: 'var(--bg-primary)', 
                        padding: '0.15rem 0.45rem',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>

                {/* Toggle Icon */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--text-muted)' }}>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <div className="leaderboard-expand-content">
                      <div className="leaderboard-expand-grid">
                        <div>
                          <h4 style={{ 
                            fontFamily: 'var(--font-sans)', 
                            textTransform: 'uppercase', 
                            fontSize: '0.75rem', 
                            letterSpacing: '0.1em', 
                            color: 'var(--accent)',
                            marginBottom: '1rem'
                          }}>
                            Direct Threat Summary
                          </h4>
                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Focus areas:</span>
                            {comp.serviceOverlap.split(',').map((item, idx) => (
                              <span 
                                key={idx} 
                                style={{ 
                                  fontSize: '0.75rem', 
                                  backgroundColor: 'var(--accent-light)', 
                                  padding: '0.15rem 0.5rem',
                                  border: '1px solid var(--accent)',
                                  color: 'var(--accent)',
                                  borderRadius: '4px',
                                  fontWeight: 500,
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                {item.trim()}
                              </span>
                            ))}
                          </div>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            <strong>Strategic Position:</strong> {comp.strategicMove}
                          </p>
                        </div>
                        
                        <div className="leaderboard-channels-col">
                          <h4 style={{ 
                            fontFamily: 'var(--font-sans)', 
                            textTransform: 'uppercase', 
                            fontSize: '0.75rem', 
                            letterSpacing: '0.1em', 
                            color: 'var(--accent)',
                            marginBottom: '1rem'
                          }}>
                            Audited Channels
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a 
                              href={comp.website} 
                              target="_blank" 
                              rel="noreferrer"
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                              className="link-hover"
                            >
                              <ExternalLink size={16} /> Verified Website
                            </a>
                            
                            {comp.socials.instagram && (
                              <a 
                                href={`https://instagram.com/${comp.socials.instagram}`} 
                                target="_blank" 
                                rel="noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                                className="link-hover"
                              >
                                <Instagram size={16} /> IG @{comp.socials.instagram}
                              </a>
                            )}
                            
                            {comp.socials.linkedin && (
                              <a 
                                href={comp.socials.linkedin.startsWith('http') ? comp.socials.linkedin : `https://linkedin.com${comp.socials.linkedin}`} 
                                target="_blank" 
                                rel="noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                                className="link-hover"
                              >
                                <Linkedin size={16} /> LinkedIn Profile
                              </a>
                            )}
                          </div>

                          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {comp.keywords.slice(0, 3).map((kw, i) => (
                              <span key={i} style={{ 
                                fontSize: '0.75rem', 
                                backgroundColor: 'var(--bg-primary)', 
                                padding: '0.2rem 0.5rem',
                                border: '1px solid var(--border)',
                                color: 'var(--text-secondary)',
                                borderRadius: '4px'
                              }}>
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="divider-line" />
    </section>
  );
};
