export interface Competitor {
  rank: number;
  name: string;
  id: string;
  website: string;
  score: number;
  threat: 'Very high' | 'High' | 'Medium high' | 'Medium' | 'Medium low' | 'Low medium' | 'Low';
  serviceOverlap: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    pinterest?: string;
    other?: string;
  };
  keywords: string[];
  seoImplementation: string;
  designApproach: string;
  evidence: string;
  strategicMove: string;
}

export interface KeywordGroup {
  groupName: string;
  keywords: string[];
  note: string;
}

export interface SEORecommendation {
  priority: number;
  action: string;
  why: string;
  how: string;
  reference: string;
}

export const houseOfOnoBaseline = {
  positioning: "Design-led home staging in London, with services for pre-market renovation, staging and full-service support.",
  strengths: [
    "Project gallery with useful alt text and clear staging-specific descriptions.",
    "Founder-led positioning and strong design vocabulary (boucle, period features, industrial, mid-century, compact square footage).",
    "London market relevance and clear service names.",
    "Strong basis for visual case studies showing bespoke styled staging."
  ],
  gaps: [
    "Limited dedicated borough/neighborhood pages.",
    "Limited long-form educational content or FAQs.",
    "Limited sector pages for developers, landlords, or estate agents.",
    "Fewer proof-led case studies compared to top competitors."
  ],
  defensiblePosition: "Boutique London home staging for properties that need buyer-ready design with character, not generic rental furniture."
};

export const rankingCriteria = [
  {
    name: "Website and SEO footprint",
    weight: 30,
    description: "Service-page depth, local landing pages, blog/journal content, keyword coverage, FAQs, calculators, internal linking, and search intent capture."
  },
  {
    name: "Brand and design differentiation",
    weight: 20,
    description: "Distinctive visual approach, design language, premium positioning, recognisable style, and ability to be remembered."
  },
  {
    name: "Proof and authority",
    weight: 20,
    description: "Awards, statistics, client evidence, reviews, press, partner logos, memberships, and team credibility."
  },
  {
    name: "Social visibility",
    weight: 15,
    description: "Public Instagram/LinkedIn presence, accessible profile previews, follower visibility where available, and social content clarity."
  },
  {
    name: "Service overlap and direct threat",
    weight: 15,
    description: "How directly the company competes with House of ONO for London staging, developers, estate agents, private sellers, and design-led staging briefs."
  }
];

export const competitors: Competitor[] = [
  {
    rank: 1,
    name: "Burbeck Interiors",
    id: "burbeck",
    website: "https://burbeckinteriors.com/",
    score: 96,
    threat: "Very high",
    serviceOverlap: "Direct luxury staging, Show homes, Furniture packs, FF&E",
    socials: {
      instagram: "burbeckinteriors",
      linkedin: "/company/burbeck-group"
    },
    keywords: [
      "home staging",
      "property staging",
      "luxury home staging London",
      "dress to sell",
      "show home styling",
      "bespoke interior design",
      "furniture packs",
      "interior architecture",
      "target demographic",
      "maximise value"
    ],
    seoImplementation: "Strong service architecture, journal hub, award articles, market report positioning, statistics, FAQ/resource sections and keyword-led pages for luxury home staging.",
    designApproach: "Premium, commercial, award-led and developer-facing. Uses highly polished interiors, bespoke items, art, lighting and target-demographic language.",
    evidence: "Service page claims 85% of staged properties go under offer within 4 weeks and presents UK and European award recognition.",
    strategicMove: "Do not copy the corporate luxury tone. Build a more boutique, founder-led and editorial staging identity, then add proof and borough SEO around it."
  },
  {
    rank: 2,
    name: "LJ Interiors",
    id: "ljinteriors",
    website: "https://ljinteriordesign.co.uk/",
    score: 91,
    threat: "Very high",
    serviceOverlap: "Luxury staging, Bespoke furniture packages, Property concierge",
    socials: {
      instagram: "lj.interiors",
      linkedin: "/company/ljinteriordesign"
    },
    keywords: [
      "luxury home staging",
      "London and Surrey",
      "bespoke furniture packages",
      "property concierge",
      "home staging insights",
      "selling property in London",
      "developers",
      "landlords",
      "private clients"
    ],
    seoImplementation: "Strong homepage service language, home staging page, About page, team and awards content, journal targeting staging and London property search intent.",
    designApproach: "Soft luxury, neutral, polished and team-led. The visual system feels broad, premium and highly serviceable for developers and private clients.",
    evidence: "Public pages cite 10,000+ inventory items, 78% of staging receiving offers within 4 weeks and 50 years of combined team experience.",
    strategicMove: "Compete through sharper project voice, more visual specificity and a clearer statement that ONO sources for the property rather than relying on generic stock."
  },
  {
    rank: 3,
    name: "BoxNine7",
    id: "boxnine7",
    website: "https://www.boxnine7.com/",
    score: 89,
    threat: "High",
    serviceOverlap: "Direct staging, Curated furniture packages, Rental-to-live services, Turnkey furnishing",
    socials: {
      instagram: "boxnine7",
      linkedin: "/company/boxnine-7",
      facebook: "/BNine7"
    },
    keywords: [
      "curated furniture packages",
      "interior design",
      "home staging",
      "rental to live with",
      "landlords",
      "developers",
      "investors",
      "B Corp",
      "turnkey furnishing",
      "London home stager"
    ],
    seoImplementation: "Strong service pages for home staging London and home staging company, portfolio navigation, sustainability/B Corp pages, FAQs and process-led copy.",
    designApproach: "Modern, commercially polished and systems-led. Strong for landlords, investors, developers and build-to-rent style clients.",
    evidence: "Homepage and service pages position the brand around curated furniture packages, interior design, home staging and rental services, with B Corp collective messaging.",
    strategicMove: "ONO should avoid becoming too operational in tone. Use BoxNine7 as the benchmark for service clarity, not visual personality."
  },
  {
    rank: 4,
    name: "Featherington Interiors",
    id: "featherington",
    website: "https://www.featheringtoninteriors.com/",
    score: 87,
    threat: "High",
    serviceOverlap: "Direct staging, Furniture packs, Estate agent partnerships, Show home staging",
    socials: {
      instagram: "featherington_interiors",
      other: "Facebook/LinkedIn linked from footer"
    },
    keywords: [
      "home staging London",
      "home staging Central London",
      "home staging North London",
      "estate agent partnerships",
      "rental property staging",
      "show home staging",
      "property developers",
      "furniture packs",
      "HMO",
      "serviced accommodation",
      "ROI calculator"
    ],
    seoImplementation: "Very strong local SEO buildout with service-area pages, borough pages, blog categories, pricing pages, FAQ and calculator-style lead magnets.",
    designApproach: "Practical, family-run, approachable and search-led. Less editorial, but highly structured for Google visibility and lead capture.",
    evidence: "Public pages include London, Essex and Hertfordshire services, service areas, blog categories, calculator, pricing and partner proof signals.",
    strategicMove: "This is the SEO template to study. Build borough pages, but make the writing less generic and more House of ONO."
  },
  {
    rank: 5,
    name: "Home Staging London",
    id: "homestaginglondon",
    website: "https://www.homestaginglondon.co.uk/",
    score: 77,
    threat: "Medium high",
    serviceOverlap: "Direct staging, Complete interior design, Furniture packages, Refurbishment",
    socials: {
      instagram: "homestaginglondon",
      linkedin: "/company/home-staging-london"
    },
    keywords: [
      "home staging London",
      "property staging",
      "show homes",
      "complete interior design",
      "furniture packages",
      "refurbishment",
      "maintenance",
      "photo styling",
      "custom artwork"
    ],
    seoImplementation: "Strong exact-match name/domain and a large projects page with many London neighbourhoods. Less deep content than Burbeck, LJ or Featherington.",
    designApproach: "Bespoke and tailored, with in-house custom artwork and carefully sourced furniture as major claims.",
    evidence: "Website states every design is tailored to the property, client and target market, and its projects page lists extensive London neighbourhood coverage.",
    strategicMove: "Own a more literary and taste-led version of bespoke staging. ONO can sound more distinctive while adding similar project-area signals."
  },
  {
    rank: 6,
    name: "Dressed2Sell",
    id: "dressed2sell",
    website: "https://dressed2sell.co.uk/",
    score: 68,
    threat: "Medium",
    serviceOverlap: "Direct staging, Show homes, Decluttering, Holiday let prep",
    socials: {
      instagram: "dressed2sell",
      linkedin: "/company/dressed2sell",
      facebook: "Dressed2Sell.co.uk"
    },
    keywords: [
      "London home staging company",
      "bespoke home staging",
      "property staging",
      "sell and rent faster",
      "show homes",
      "decluttering",
      "holiday let preparation",
      "estate agents",
      "property developers"
    ],
    seoImplementation: "Clear homepage, proof via Houzz badges, testimonials and service links. Less content depth than SEO-heavy competitors.",
    designApproach: "Established, practical and approachable. Strong credibility through longevity rather than contemporary digital identity.",
    evidence: "Homepage states the company has provided home staging services in and around London since 2003 and works with homeowners, landlords, developers and estate agents.",
    strategicMove: "ONO can overtake digitally through stronger photography-led case studies, fresh captions and richer local search pages."
  },
  {
    rank: 7,
    name: "Cullum Design",
    id: "cullumdesign",
    website: "https://cullum-design.com/",
    score: 68,
    threat: "Medium",
    serviceOverlap: "Direct staging, Interior design, Designer furniture hire, Property advisory",
    socials: {
      instagram: "CullumDesign",
      linkedin: "@cullumdesign",
      other: "Houzz reviews linked from site"
    },
    keywords: [
      "home staging London",
      "interior design London",
      "original home staging company",
      "designer furniture",
      "property advisory",
      "furniture hire for tenants",
      "staging in Hackney",
      "Kensington",
      "Kensal Rise",
      "Battersea Power Station"
    ],
    seoImplementation: "Portfolio-led SEO with strong location project proof and alt text. Less journal/resource depth than Burbeck, LJ and Featherington.",
    designApproach: "Classic, designer-stock-led and heritage-aware. More established than social-first.",
    evidence: "Homepage states Cullum is one of London's original home staging companies and references designer furniture, competitive pricing and recent London staging projects.",
    strategicMove: "Convert ONO projects into deeper searchable case studies, because Cullum currently has useful local project proof but limited narrative depth."
  },
  {
    rank: 8,
    name: "London Property Staging",
    id: "londonpropertystaging",
    website: "https://www.londonpropertystaging.com/",
    score: 64,
    threat: "Medium",
    serviceOverlap: "Direct staging, Empty property staging, Buyer visualization",
    socials: {
      instagram: "londonpropertystaging",
      other: "Trustpilot profile live"
    },
    keywords: [
      "London property staging",
      "property staging",
      "home staging",
      "online views",
      "offers",
      "highest price",
      "empty property",
      "buyer visualisation",
      "London market",
      "Surrey",
      "Kent"
    ],
    seoImplementation: "Simple but clear homepage education sections: what, when, why, and why use London Property Staging. Exact-match business name is a strong advantage.",
    designApproach: "Straightforward, accessible and results-led. More practical than editorial.",
    evidence: "Homepage explains staging as furniture, soft furnishings, artwork and accessories installed before online advertising to attract views and offers.",
    strategicMove: "Use their simplicity as a reminder: every ONO page should make the commercial value obvious before the editorial polish begins."
  },
  {
    rank: 9,
    name: "Louisa Jane Interiors",
    id: "louisajane",
    website: "https://louisajaneinteriors.com/",
    score: 58,
    threat: "Medium low",
    serviceOverlap: "Interior design, Garden design, Restorative staging, Sustainable design",
    socials: {
      instagram: "louisajaneinteriors",
      pinterest: "louisajaneinteriors",
      linkedin: "founder profile"
    },
    keywords: [
      "interior design London",
      "restorative homes and gardens",
      "holistic design",
      "home staging",
      "styling London property for sale",
      "project management",
      "sustainable design"
    ],
    seoImplementation: "Strong lifestyle and design positioning, but less aggressively focused on staging search intent than direct staging firms.",
    designApproach: "Holistic, elegant, lifestyle-led and garden-aware. More residential design than property-sales staging.",
    evidence: "Public pages position the brand around elegant timeless homes, restorative homes and gardens, and sustainable interior design.",
    strategicMove: "ONO should stay more property-market-specific. Louisa Jane sells lifestyle design; ONO should sell buyer-ready design with character."
  },
  {
    rank: 10,
    name: "The Final Touch",
    id: "thefinaltouch",
    website: "https://www.thefinaltouch.co.uk/",
    score: 52,
    threat: "Low medium",
    serviceOverlap: "Direct staging, Renovation consultancy, Before-and-after support",
    socials: {
      instagram: "thefinaltouch_homestaging",
      pinterest: "linked in footer",
      facebook: "linked in footer"
    },
    keywords: [
      "home staging London",
      "home staging Surrey",
      "home staging Hampshire",
      "maximise appeal",
      "maximise value",
      "renovation",
      "consultancy",
      "before and after",
      "press coverage"
    ],
    seoImplementation: "Live website with service pages, before-and-after and press. Less advanced content architecture than the highest-ranking competitors.",
    designApproach: "Traditional, practical and homeowner-friendly. Stronger on service reassurance than digital distinction.",
    evidence: "Homepage positions the business around professional home staging in London and Surrey and emphasizes return from practical improvements before sale or rent.",
    strategicMove: "ONO can outperform through a more current visual system, clearer project results and stronger social SEO."
  }
];

export const keywordOpportunities: KeywordGroup[] = [
  {
    groupName: "Core commercial",
    keywords: ["home staging London", "property staging London", "London home staging", "home staging company London", "professional home staging London", "property styling London"],
    note: "Create or improve a primary Home Staging London page, then add internal links from the homepage, projects and footer."
  },
  {
    groupName: "Premium and design-led",
    keywords: ["luxury home staging London", "design-led home staging London", "boutique home staging London", "editorial home staging London", "sourced furniture home staging London"],
    note: "Use these phrases in service pages and case studies where they match ONO's actual positioning. Avoid generic luxury claims without evidence."
  },
  {
    groupName: "Local SEO",
    keywords: ["home staging Hackney", "home staging Islington", "home staging North London", "home staging East London", "home staging Stoke Newington", "home staging Hampstead", "home staging Kensington"],
    note: "Build borough/service-area pages with local property types, buyer profiles, ONO examples, FAQs and galleries."
  },
  {
    groupName: "Audience-specific",
    keywords: ["home staging for estate agents London", "home staging for developers London", "property staging for private sellers London", "home staging for landlords London"],
    note: "Create separate landing pages for each audience with relevant problems, proof and call-to-action."
  },
  {
    groupName: "Pre-market preparation",
    keywords: ["pre-market renovation London", "property refresh before sale London", "home staging and renovation London", "prepare property for sale London"],
    note: "Own this space more strongly because ONO already offers pre-market renovation and full-service support."
  },
  {
    groupName: "Educational content",
    keywords: ["does home staging increase property value", "home staging cost London", "vacant property staging", "home staging vs interior design", "rooms that matter most when selling"],
    note: "Publish journal articles that answer practical questions while keeping the writing visually specific and brand-aware."
  }
];

export const seoRoadmap: SEORecommendation[] = [
  {
    priority: 1,
    action: "Build local landing pages",
    why: "Capture high-intent searchers looking for services in specific London areas.",
    how: "Start with Hackney, Islington, North London, East London, West London and Central London. Create 600-1000 word landing pages featuring local property types, typical buyer profiles, ONO project maps, FAQs, and a distinct CTA.",
    reference: "Featherington Interiors"
  },
  {
    priority: 2,
    action: "Turn projects into case studies",
    why: "Prove staging efficacy with real data and story-driven transformations.",
    how: "Instead of raw photo galleries, write project case studies describing: the property type, target buyer profile, design decisions, timeline, commercial results (e.g. days on market/offers), and a full gallery with SEO alt text.",
    reference: "Burbeck, Cullum, Home Staging London"
  },
  {
    priority: 3,
    action: "Create audience-specific pages",
    why: "Developers, landlords, private sellers, and estate agents look for very different outcomes.",
    how: "Build structured landing pages for each sector. Developers want fast sales and demographic alignment; estate agents want simple referrals; landlords want durable, cost-effective layouts; private sellers want emotional wow-factors.",
    reference: "BoxNine7, Featherington, Dressed2Sell"
  },
  {
    priority: 4,
    action: "Launch a Journal/Blog",
    why: "Target informational keywords and demonstrate design expertise.",
    how: "Publish 2 to 4 articles monthly. Focus on educational keywords: cost guides, styling tips, ROI calculations, and differences between staging and standard interior design.",
    reference: "Burbeck, LJ, Featherington"
  },
  {
    priority: 5,
    action: "Improve proof architecture",
    why: "Build trust through statistics, testimonials, and clear outcomes.",
    how: "Add outcome boxes to all case studies and service pages, stating: percentage of listings under offer within X weeks, ROI indicators, and verified client testimonials.",
    reference: "Burbeck, LJ, London Property Staging"
  },
  {
    priority: 6,
    action: "Social SEO alignment",
    why: "Reinforce organic web traffic through discoverability on visual search engines.",
    how: "Optimize Instagram, Pinterest, and LinkedIn: use clear brand/location keywords in profiles, add descriptive alt text to visual pins/posts, and use educational carousel templates.",
    reference: "All Competitors"
  }
];
