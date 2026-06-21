export type CapabilityId = "design-build" | "modernization" | "assessment";

export interface Capability {
  id: CapabilityId;
  title: string;
  tagline: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  contractType: string;
  description: string;
  image: string;
  category: CapabilityId;
}

export const capabilities: Capability[] = [
  {
    id: "design-build",
    title: "Design-Build",
    tagline: "Integrated design and construction delivery from concept through completion.",
    items: ["Architecture", "Engineering", "Design-Build", "Construction Management"],
  },
  {
    id: "modernization",
    title: "Facility Modernization & Infrastructure Upgrades",
    tagline: "Renewing aging facilities and critical building systems.",
    items: [
      "HVAC Systems",
      "Building Renovations",
      "Infrastructure Improvements",
      "Critical Facility Upgrades",
    ],
  },
  {
    id: "assessment",
    title: "Facility Assessment & Capital Planning",
    tagline: "Evaluating existing assets to guide planning and investment.",
    items: [
      "Property Condition Assessments",
      "Facility Evaluations",
      "Construction Monitoring",
      "Capital Planning",
      "Due Diligence",
    ],
  },
];

export const projects: Project[] = [
  // Design-Build
  {
    id: "mrap-egress-trainer",
    title: "MRAP Egress Trainer Facility",
    client: "Marine Corps Air Station Yuma (MCAS Yuma)",
    location: "Yuma, Arizona",
    year: "2010",
    contractType: "Design-Build",
    description:
      "Design-build delivery of a pre-engineered training facility to house a Mine Resistant Ambush Protected (MRAP) Egress Trainer, including structural design, reinforced concrete foundations, utility connections, security fencing, electrical systems, and supporting site improvements.",
    image: "/images/project-1.jpg",
    category: "design-build",
  },
  {
    id: "calexico-fueling-station",
    title: "Calexico Border Patrol Fueling Station",
    client: "U.S. Army Corps of Engineers (USACE)",
    location: "Calexico, California",
    year: "2013",
    contractType: "Design-Build – Infrastructure Development",
    description:
      "Design-build construction of a new fueling station featuring a 12,000-gallon above-ground fuel storage tank, fueling equipment, concrete fueling aprons, shade canopy, and associated site improvements.",
    image: "/images/project-2.jpg",
    category: "design-build",
  },
  {
    id: "grand-canyon-ranger-quarters",
    title: "Grand Canyon Ranger Station Living Quarters",
    client: "Federal Aviation Administration (FAA)",
    location: "Tusayan, Arizona",
    year: "2016",
    contractType: "Design-Build – Housing Development",
    description:
      "Design-build construction of six permanent residential units for FAA personnel within Grand Canyon National Park, including ADA-accessible housing accommodations and supporting site improvements.",
    image: "/images/project-3.jpg",
    category: "design-build",
  },
  {
    id: "usfs-payson-helibase",
    title: "USFS Tonto National Forest Payson Helibase",
    client: "USDA Forest Service (USFS)",
    location: "Payson, Arizona",
    year: "2023",
    contractType: "Design-Build – Aviation Support Facility",
    description:
      "Design-build delivery of a new helibase facility supporting U.S. Forest Service wildfire operations, including site development, helicopter landing areas, administrative facilities, maintenance buildings, utilities, and supporting infrastructure.",
    image: "/images/project-4.jpg",
    category: "design-build",
  },

  // Facility Modernization & Infrastructure Upgrades
  {
    id: "davis-monthan-hangar",
    title: "Davis-Monthan AFB Hangar Renovations",
    client: "U.S. Army Corps of Engineers (USACE)",
    location: "Davis-Monthan Air Force Base, Arizona",
    year: "2014",
    contractType: "Building Modernization",
    description:
      "Renovated aircraft hangar and administrative facilities, including HVAC modifications, electrical upgrades, communications infrastructure improvements, life-safety enhancements, interior renovations, and building system modernization.",
    image: "/images/project-5.jpg",
    category: "modernization",
  },
  {
    id: "nps-facilities-rehab",
    title: "NPS National Park Facilities Rehabilitation",
    client: "National Park Service (NPS)",
    location: "Multiple NPS Facilities, Arizona",
    year: "Ongoing",
    contractType: "Facility Rehabilitation & Infrastructure Improvements",
    description:
      "Provided rehabilitation and infrastructure improvement services at multiple National Park Service facilities, including visitor center renovations, employee housing upgrades, maintenance facility improvements, utility infrastructure enhancements, and pavement preservation projects.",
    image: "/images/project-6.jpg",
    category: "modernization",
  },
  {
    id: "nps-organ-pipe-hvac",
    title: "NPS Organ Pipe Cactus National Monument HVAC Modernization",
    client: "National Park Service (NPS)",
    location: "Organ Pipe Cactus National Monument, Arizona",
    year: "2023",
    contractType: "HVAC Modernization",
    description:
      "Modernized HVAC systems serving 16 staff housing units and a maintenance facility, including replacement of aging mechanical equipment, controls integration, ductwork improvements, and associated building system upgrades to improve reliability, energy efficiency, and occupant comfort.",
    image: "/images/project-7.jpg",
    category: "modernization",
  },
  {
    id: "fws-san-luis-hvac",
    title: "U.S. Fish & Wildlife Service San Luis Administrative Building HVAC Replacement",
    client: "U.S. Fish & Wildlife Service (FWS)",
    location: "San Luis, California",
    year: "2026",
    contractType: "Design-Build HVAC Modernization",
    description:
      "Design-build replacement of aging HVAC equipment serving an administrative facility, including installation of new mechanical systems, controls upgrades, and associated building improvements to enhance reliability, energy efficiency, and occupant comfort.",
    image: "/images/project-1.jpg",
    category: "modernization",
  },

  // Facility Assessment & Capital Planning
  {
    id: "pca-astm-e2018",
    title: "Property Condition Assessments (ASTM E2018)",
    client: "AEI Consultants, BBG, EBI Consulting, Partner Engineering & Science, NV5, and Nova Group",
    location: "Western United States",
    year: "2019–Present",
    contractType: "Property Condition Assessment (PCA)",
    description:
      "Completed hundreds of Property Condition Assessments in accordance with ASTM E2018 standards for multifamily, commercial, industrial, hospitality, healthcare, and institutional properties, supporting due diligence, lending, acquisition, capital planning, and asset management decisions.",
    image: "/images/project-2.jpg",
    category: "assessment",
  },
  {
    id: "hud-multifamily-inspection",
    title: "HUD Multifamily Housing Construction Inspection",
    client: "U.S. Department of Housing and Urban Development (HUD)",
    location: "Arizona & Nevada",
    year: "2011–2018",
    contractType: "Construction Monitoring & Quality Assurance Inspection",
    description:
      "Provided construction monitoring, contract administration, ADA compliance reviews, and quality assurance inspections for HUD-funded multifamily housing rehabilitation and new construction projects, including senior housing developments, apartment complexes, and more than 1,000 project site inspections.",
    image: "/images/project-3.jpg",
    category: "assessment",
  },
  {
    id: "luke-afb-f35",
    title: "Luke AFB Civil Squadron F-35 Program Support",
    client: "U.S. Air Force",
    location: "Luke Air Force Base, Arizona",
    year: "2015–2017",
    contractType: "Construction Management & Quality Assurance Inspection",
    description:
      "Provided construction management, quality assurance inspections, and owner support services for facility improvement projects supporting the F-35 program, including fire protection upgrades, fuel infrastructure improvements, building system modernization, and interior renovations.",
    image: "/images/project-4.jpg",
    category: "assessment",
  },
  {
    id: "htha-winslow-apartments",
    title: "HTHA Winslow Apartment Complex",
    client: "Hopi Tribal Housing Authority (HTHA)",
    location: "Winslow, Arizona",
    year: "2025–2027",
    contractType: "Construction Monitoring & Quality Assurance Inspection",
    description:
      "Provided construction monitoring, quality assurance inspections, design review support, and contract administration services for a new multifamily housing development, including site development, utility infrastructure, building construction observations, and occupancy certification support.",
    image: "/images/project-5.jpg",
    category: "assessment",
  },
];
