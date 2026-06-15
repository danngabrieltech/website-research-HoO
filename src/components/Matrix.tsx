import React, { useState } from 'react';
import { competitors } from '../data/competitorData';
import { Search, SlidersHorizontal } from 'lucide-react';

export const Matrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [threatFilter, setThreatFilter] = useState('All');

  const filteredCompetitors = competitors.filter(comp => {
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          comp.keywords.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesThreat = threatFilter === 'All' || comp.threat === threatFilter;
    return matchesSearch && matchesThreat;
  });

  return (
    <section id="matrix" style={{ padding: '4rem 0' }}>
      <span className="label-meta">04 // Matrix</span>
      <h2 className="title-medium" style={{ margin: '1rem 0 2rem 0' }}>Competitive Snapshot Matrix</h2>
      <p style={{ maxWidth: '780px', marginBottom: '3rem', fontSize: '1.1rem' }}>
        A detailed comparison of SEO architectures, design languages, and credibility evidence across the London market.
      </p>

      {/* Filter and Search Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: '1.5rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {/* Search */}
        <div style={{ 
          position: 'relative', 
          flexGrow: 1, 
          maxWidth: '400px' 
        }}>
          <input 
            type="text" 
            placeholder="Search competitor or keyword..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.5rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem'
            }}
          />
          <Search 
            size={16} 
            style={{ 
              position: 'absolute', 
              left: '0.85rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)' 
            }} 
          />
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em', 
            color: 'var(--text-muted)' 
          }}>
            <SlidersHorizontal size={14} /> Filter threat:
          </span>
          {['All', 'Very high', 'High', 'Medium', 'Medium low', 'Low medium'].map(threat => (
            <button
              key={threat}
              onClick={() => setThreatFilter(threat)}
              className={`tab-button ${threatFilter === threat ? 'active' : ''}`}
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
            >
              {threat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Matrix Layout */}
      <div className="matrix-table-container">
        <table className="matrix-table">
          <thead>
            <tr>
              <th style={{ width: '180px' }}>Competitor</th>
              <th style={{ width: '220px' }}>Keyword Cluster</th>
              <th>SEO Implementation</th>
              <th>Design Approach</th>
              <th>Proof Signals</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompetitors.length > 0 ? (
              filteredCompetitors.map(comp => (
                <tr key={comp.id}>
                  {/* Name and Rank */}
                  <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span>{comp.name}</span>
                      <span className="label-meta" style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>
                        Rank {comp.rank} // {comp.threat}
                      </span>
                    </div>
                  </td>
                  
                  {/* Keywords */}
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {comp.keywords.map((kw, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            fontSize: '0.75rem', 
                            backgroundColor: 'var(--bg-secondary)', 
                            border: '1px solid var(--border)',
                            color: 'var(--text-secondary)',
                            padding: '0.15rem 0.4rem',
                            borderRadius: '3px'
                          }}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </td>
                  
                  {/* SEO Implementation */}
                  <td>{comp.seoImplementation}</td>
                  
                  {/* Design Approach */}
                  <td>{comp.designApproach}</td>
                  
                  {/* Proof */}
                  <td>{comp.evidence}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  No competitors match the search or filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="divider-line" />
    </section>
  );
};
