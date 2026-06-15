import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, AlertCircle } from 'lucide-react';

interface PageConcept {
  concept: string;
  keyword: string;
  audience: string;
  angle: string;
}

const pageConcepts: PageConcept[] = [
  {
    concept: "Home Staging North London",
    keyword: "home staging North London",
    audience: "Private sellers, estate agents, developers",
    angle: "Victorian terraces, mansion flats, period homes, compact flats, family homes."
  },
  {
    concept: "Home Staging East London",
    keyword: "home staging East London",
    audience: "Developers, landlords, sellers",
    angle: "Warehouse conversions, new-build flats, Hackney/Victoria Park style buyer profiles."
  },
  {
    concept: "Home Staging Hackney",
    keyword: "home staging Hackney",
    audience: "Local agents and private sellers",
    angle: "Character properties, design-conscious buyers, compact space planning."
  },
  {
    concept: "Home Staging Islington",
    keyword: "home staging Islington",
    audience: "Premium sellers and agents",
    angle: "Period homes, townhouse proportions, family buyer psychology."
  },
  {
    concept: "Pre-Market Renovation and Home Staging London",
    keyword: "pre-market renovation London; property refresh before sale",
    audience: "Owners with dated listings or stalled properties",
    angle: "Repairs, paint, lighting, styling, photography readiness, time-to-market."
  },
  {
    concept: "Home Staging for Estate Agents London",
    keyword: "home staging for estate agents London",
    audience: "Agents needing reliable staging partners",
    angle: "Speed, portfolio proof, process, floorplan review, photography support."
  },
  {
    concept: "Home Staging for Developers London",
    keyword: "home staging for developers London",
    audience: "Developers and build-to-sell clients",
    angle: "Show flats, buyer demographic, scale, furnishings, install timelines."
  }
];

interface JournalTopic {
  title: string;
  intent: string;
  angle: string;
}

const journalTopics: JournalTopic[] = [
  {
    title: "How Much Does Home Staging Cost in London?",
    intent: "Cost-based searchers",
    angle: "Explain consultation, install, rental period, property size, and why costs vary. Add pricing guide table."
  },
  {
    title: "Home Staging vs Interior Design",
    intent: "Informational, early-stage clients",
    angle: "Explain staging sells property while interior design serves long-term personal living. Use examples."
  },
  {
    title: "Does Home Staging Increase Property Value in London?",
    intent: "ROI-focused sellers and agents",
    angle: "Use credible statistics, before-after examples, and market logic."
  },
  {
    title: "Why Empty Rooms Struggle Online",
    intent: "Owners with vacant properties",
    angle: "Tie staging to listing photos, scale, buyer imagination, and viewing behaviour."
  },
  {
    title: "How to Prepare a London Flat Before Listing Photos",
    intent: "Private sellers",
    angle: "Checklist format with repairs, lighting, clutter, furniture scale, and photo readiness."
  },
  {
    title: "What Estate Agents Should Look for in a Home Staging Partner",
    intent: "Estate agents",
    angle: "Process, speed, photography awareness, furniture quality, responsiveness, and commercial judgement."
  },
  {
    title: "The Rooms That Matter Most When Selling a Home",
    intent: "Sellers with limited budgets",
    angle: "Prioritize living room, kitchen/dining, principal bedroom, entrance, and outdoor spaces."
  },
  {
    title: "How Staging Helps Buyers Understand Scale",
    intent: "Design-aware searchers",
    angle: "Use furniture proportion, circulation routes, and photo composition."
  },
  {
    title: "Pre-Market Refresh: Small Fixes That Change Buyer Perception",
    intent: "Dated or stalled properties",
    angle: "Paint, lighting, hardware, curtains, rugs, styling, and photography."
  },
  {
    title: "How to Stage a Property Without Making It Look Generic",
    intent: "Design-sensitive sellers",
    angle: "House of ONO differentiation piece around sourced furniture and property-specific design."
  }
];

interface OpportunityGap {
  area: string;
  competitors: string;
  rationale: string;
  recommendation: string;
  priority: 'High' | 'Medium';
}

const opportunityGaps: OpportunityGap[] = [
  {
    area: "Location-specific SEO landing pages",
    competitors: "Featherington and other competitors use London area/location pages to target searches by geography.",
    rationale: "Clients often search by location, such as home staging North London or property staging Hackney.",
    recommendation: "Create pages for North London, East London, West London, Central London, Hackney, Islington, Stoke Newington, Hampstead, Kensington, and Chelsea.",
    priority: "High"
  },
  {
    area: "Audience-specific service pages",
    competitors: "Competitors separate language for developers, estate agents, landlords, homeowners, and investors.",
    rationale: "Different clients need different proof points. Developers want ROI and speed, while homeowners want reassurance.",
    recommendation: "Add service pages for Estate Agents, Property Developers, Private Sellers, Landlords, and Pre-Market Renovation.",
    priority: "High"
  },
  {
    area: "Detailed project case studies",
    competitors: "Burbeck, BoxNine7, and LJ use project/service content to explain process, outcome, and market value.",
    rationale: "Projects should not only look beautiful, they should also prove the commercial thinking behind staging decisions.",
    recommendation: "Turn key projects into case studies with property type, challenge, buyer profile, design direction, timeline, result, and gallery.",
    priority: "High"
  },
  {
    area: "Journal or resource hub",
    competitors: "Burbeck and LJ publish journal content around staging terms, value, cost, and luxury property preparation.",
    rationale: "Educational content captures early-stage search traffic and builds trust before enquiry.",
    recommendation: "Launch a Journal with articles such as 'Home Staging vs Interior Design', 'How Much Does Home Staging Cost in London', and 'Why Empty Rooms Struggle Online'.",
    priority: "High"
  },
  {
    area: "FAQ section",
    competitors: "BoxNine7 and other competitors use FAQs to answer process, furniture rental, timeline, and value questions.",
    rationale: "FAQs help users decide faster and can support search visibility for long-tail queries.",
    recommendation: "Add FAQs covering cost, timeline, furniture sourcing, install process, occupied vs vacant staging, and rental duration.",
    priority: "High"
  },
  {
    area: "Clearer proof signals",
    competitors: "Competitors display awards, statistics, years in business, staged-property outcomes, testimonials, and association markers.",
    rationale: "Design-led language is stronger when paired with evidence. Proof reduces hesitation.",
    recommendation: "Add a proof section with project outcomes, testimonials, staged-to-offer timelines, press mentions, and selected statistics where properly sourced.",
    priority: "High"
  },
  {
    area: "Dedicated pre-market renovation page",
    competitors: "Some competitors talk about repair, refresh, project management, and preparation before listing.",
    rationale: "House of ONO already has a valuable pre-market service angle that can differentiate it from furniture-only staging companies.",
    recommendation: "Create a page for Pre-Market Renovation and Property Refresh, including paint, curtains, repairs, styling, furniture, and listing-readiness.",
    priority: "High"
  },
  {
    area: "Stronger conversion journey",
    competitors: "Competitors often use repeated CTAs, quote forms, consultation prompts, and clear 'how it works' sections.",
    rationale: "Users should understand what to do next within seconds.",
    recommendation: "Add 'Book a Consultation', 'Request a Quote', and 'Send Floorplan' CTAs across service and project pages.",
    priority: "Medium"
  },
  {
    area: "Process page / How it works",
    competitors: "Several competitors explain quoting, site visit, proposal, installation, rental period, and collection.",
    rationale: "A clear process makes the service feel lower-risk and more professional.",
    recommendation: "Add a visual process section: 1. Enquiry, 2. Site Review, 3. Design Direction, 4. Sourcing, 5. Installation, 6. Photography Support, 7. Collection.",
    priority: "Medium"
  },
  {
    area: "Search-optimized image alt text system",
    competitors: "Competitors use descriptive image labels and location/service terms in visible image references or search snippets.",
    rationale: "Interior design and staging websites rely heavily on images, so image SEO matters.",
    recommendation: "Create consistent alt text with project type, room, location, and service keyword, without making it feel spammy.",
    priority: "Medium"
  },
  {
    area: "Internal linking between services and projects",
    competitors: "Competitor pages often connect services, blogs, FAQs, and case studies.",
    rationale: "Internal links help users and search engines move through the site logically.",
    recommendation: "Link each project to relevant service pages and each journal article to related projects.",
    priority: "Medium"
  },
  {
    area: "Downloadable lead magnet",
    competitors: "Few competitors do this well, making it a strong opportunity.",
    rationale: "A small guide can capture estate agent/developer leads and support outreach.",
    recommendation: "Create a downloadable 'Pre-Listing Property Styling Checklist' or 'House of ONO Seller Preparation Guide'.",
    priority: "Medium"
  }
];

export const AdditionalImprovements: React.FC = () => {
  return (
    <section id="improvements" style={{ padding: '4rem 0' }}>
      <span className="label-meta">07 // Actionable Roadmap</span>
      <h2 className="title-medium" style={{ margin: '1rem 0 2rem 0' }}>Additional SEO & Site Improvements</h2>
      <p style={{ maxWidth: '780px', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
        A detailed summary of locations, specific audience landing page designs, journal opportunities, and critical gaps identified during competitor reviews to accelerate House of ONO's online growth.
      </p>

      {/* Landing Page Concepts */}
      <h3 className="title-small" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <MapPin size={22} className="icon-accent" /> Priority Landing Page Concepts
      </h3>
      
      <div className="grid-page-concepts" style={{ marginBottom: '5rem' }}>
        {pageConcepts.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            style={{
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '1.75rem',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="label-meta" style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>Concept {idx + 1}</span>
              <h4 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.35rem', 
                fontWeight: 500, 
                margin: '0.4rem 0 1rem 0',
                lineHeight: '1.3'
              }}>
                {item.concept}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                <strong>Audience:</strong> {item.audience}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                <strong>Content Focus:</strong> {item.angle}
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <strong>Primary Keyword:</strong> <code style={{ color: 'var(--accent)', fontFamily: 'monospace' }}>{item.keyword}</code>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="divider-line" />

      {/* Journal Topics */}
      <h3 className="title-small" style={{ margin: '4rem 0 2rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BookOpen size={22} className="icon-accent" /> Recommended SEO Journal Topics
      </h3>
      
      <div className="grid-journal-topics" style={{ marginBottom: '5rem' }}>
        {journalTopics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            style={{
              padding: '1.5rem',
              borderLeft: '2.5px solid var(--accent)',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '0 6px 6px 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div>
              <span className="label-meta" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Intent: {item.intent}</span>
              <h4 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.2rem', 
                fontWeight: 500, 
                margin: '0.3rem 0 0.75rem 0',
                lineHeight: '1.4'
              }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', fontStyle: 'italic' }}>
                "{item.angle}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="divider-line" />

      {/* Opportunity Matrix Table */}
      <h3 className="title-small" style={{ margin: '4rem 0 2rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <AlertCircle size={22} className="icon-accent" /> Strategic Opportunity Audit
      </h3>
      
      <div className="opportunity-table-wrap" style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '6px' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          fontFamily: 'var(--font-sans)', 
          fontSize: '0.9rem',
          textAlign: 'left',
          minWidth: '850px'
        }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1.5px solid var(--border)' }}>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: 600, width: '20%' }}>Opportunity Area</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: 600, width: '25%' }}>Competitor Action</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: 600, width: '25%' }}>Why It Matters</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: 600, width: '20%' }}>ONO Recommendation</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: 600, width: '10%', textAlign: 'center' }}>Priority</th>
            </tr>
          </thead>
          <tbody>
            {opportunityGaps.map((item, idx) => (
              <tr 
                key={idx} 
                style={{ 
                  borderBottom: idx === opportunityGaps.length - 1 ? 'none' : '1px solid var(--border)',
                  backgroundColor: idx % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-primary)'
                }}
              >
                <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.area}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.competitors}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.rationale}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: '1.5' }}>{item.recommendation}</td>
                <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    backgroundColor: item.priority === 'High' ? 'rgba(220, 53, 69, 0.1)' : 'rgba(253, 126, 20, 0.1)',
                    color: item.priority === 'High' ? '#dc3545' : '#fd7e14'
                  }}>
                    {item.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="divider-line" style={{ marginTop: '4rem' }} />
    </section>
  );
};
