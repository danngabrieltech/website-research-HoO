import React from 'react';
import { ExternalLink } from 'lucide-react';

const sources = [
  { id: "S1", name: "House of ONO Homepage", url: "https://www.houseofono.com/" },
  { id: "S2", name: "House of ONO Projects", url: "https://www.houseofono.com/projects" },
  { id: "S3", name: "Burbeck Home Staging", url: "https://burbeckinteriors.com/home-staging" },
  { id: "S4", name: "Burbeck Journal", url: "https://burbeckinteriors.com/journal" },
  { id: "S5", name: "LJ Interiors Homepage", url: "https://ljinteriordesign.co.uk/" },
  { id: "S6", name: "LJ Home Staging", url: "https://ljinteriordesign.co.uk/home-staging/" },
  { id: "S7", name: "LJ LinkedIn", url: "https://uk.linkedin.com/company/ljinteriordesign" },
  { id: "S8", name: "BoxNine7 Homepage", url: "https://www.boxnine7.com/" },
  { id: "S9", name: "BoxNine7 Home Staging Company", url: "https://www.boxnine7.com/home-staging-company" },
  { id: "S10", name: "BoxNine7 LinkedIn", url: "https://uk.linkedin.com/company/boxnine-7" },
  { id: "S11", name: "Featherington Homepage", url: "https://www.featheringtoninteriors.com/" },
  { id: "S12", name: "Featherington Service Areas", url: "https://www.featheringtoninteriors.com/home-staging-areas-we-serve" },
  { id: "S13", name: "Featherington Blog", url: "https://www.featheringtoninteriors.com/blog" },
  { id: "S14", name: "Home Staging London Homepage", url: "https://www.homestaginglondon.co.uk/" },
  { id: "S15", name: "Home Staging London Projects", url: "https://www.homestaginglondon.co.uk/projects" },
  { id: "S16", name: "Home Staging London LinkedIn", url: "https://uk.linkedin.com/company/home-staging-london" },
  { id: "S17", name: "Dressed2Sell Homepage", url: "https://dressed2sell.co.uk/" },
  { id: "S18", name: "Dressed2Sell LinkedIn", url: "https://uk.linkedin.com/company/dressed2sell" },
  { id: "S19", name: "Cullum Design Homepage", url: "https://cullum-design.com/" },
  { id: "S20", name: "Cullum Design Contact", url: "https://cullum-design.com/contact/" },
  { id: "S21", name: "London Property Staging Homepage", url: "https://www.londonpropertystaging.com/" },
  { id: "S22", name: "London Property Staging About", url: "https://www.londonpropertystaging.com/about" },
  { id: "S23", name: "London Property Staging Instagram", url: "https://www.instagram.com/londonpropertystaging/" },
  { id: "S24", name: "Louisa Jane Story", url: "https://louisajaneinteriors.com/our-story/" },
  { id: "S25", name: "Louisa Jane Instagram", url: "https://www.instagram.com/louisajaneinteriors/" },
  { id: "S26", name: "Louisa Jane Pinterest", url: "https://uk.pinterest.com/louisajaneinteriors/" },
  { id: "S27", name: "The Final Touch Homepage", url: "https://www.thefinaltouch.co.uk/" },
  { id: "S28", name: "The Final Touch Press", url: "https://www.thefinaltouch.co.uk/in-the-press" }
];

export const Footer: React.FC = () => {
  return (
    <footer id="sources" style={{ padding: '6rem 0 4rem 0', borderTop: '1px solid var(--border)', marginTop: '4rem' }}>
      <div className="footer-grid">
        <div>
          <span className="label-meta">References</span>
          <h3 className="title-small" style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Audit Source List</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            The public webpages and digital properties that informed this research. Click any link to inspect the source material directly.
          </p>
          <div style={{ marginTop: '3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            HOUSE of ONO Competitor Analysis &copy; {new Date().getFullYear()}
          </div>
        </div>

        <div>
          <div className="grid-footer-sources">
            {sources.map(src => (
              <a 
                key={src.id}
                href={src.url} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(0,0,0,0.03)',
                  fontSize: '0.85rem'
                }}
                className="link-hover"
              >
                <span style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontWeight: 600, 
                  color: 'var(--accent)', 
                  fontSize: '0.8rem',
                  width: '30px'
                }}>
                  {src.id}
                </span>
                <span style={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {src.name}
                </span>
                <ExternalLink size={12} style={{ opacity: 0.5, flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
