export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  client: string;
  year: number;
  image: string;
  description: string;
  category: "federal" | "hud";
}

export const services: Service[] = [
  {
    id: "architecture-design",
    title: "Architecture & Design",
    description:
      "Full architectural design services from schematic design through construction documents, tailored for commercial, government, and residential projects.",
  },
  {
    id: "design-build",
    title: "Design-Build",
    description:
      "Integrated design and construction delivery under a single contract, streamlining communication and reducing project risk for owners.",
  },
  {
    id: "construction-management",
    title: "Construction Management",
    description:
      "On-site and program-level construction management ensuring quality control, schedule adherence, and budget accountability.",
  },
  {
    id: "icc-plan-review",
    title: "ICC Plan Review",
    description:
      "International Code Council certified plan review for code compliance across building, mechanical, plumbing, and electrical disciplines.",
  },
  {
    id: "icc-inspections",
    title: "ICC Building Inspections",
    description:
      "Certified building inspections for new construction, additions, and alterations to verify code compliance at every project phase.",
  },
  {
    id: "hud-inspections",
    title: "HUD Inspection Services",
    description:
      "Federally compliant inspections for HUD-financed multifamily housing, including payment monitoring, prevailing wage compliance, and final inspections.",
  },
];

export const projects: Project[] = [
  {
    id: "hangar-renovation",
    title: "Hangar Renovation",
    location: "Tucson, AZ",
    client: "U.S. Army Corps of Engineers",
    year: 2023,
    image: "/images/project-1.jpg",
    description: "Comprehensive renovation of a military aircraft hangar facility.",
    category: "federal",
  },
  {
    id: "marin-mrap",
    title: "Marin MRAP Egress Trainer Building",
    location: "Yuma, AZ",
    client: "U.S. Department of the Navy",
    year: 2022,
    image: "/images/project-2.jpg",
    description: "Pre-engineered building for Mine-Resistant Ambush Protected vehicle egress training operations.",
    category: "federal",
  },
  {
    id: "hud-mortgage-housing",
    title: "Mortgage-Insured Housing",
    location: "Nevada & Arizona",
    client: "HUD — Federally Financed",
    year: 2024,
    image: "/images/project-3.jpg",
    description:
      "Construction monitoring and inspection services for HUD mortgage-insured multifamily housing. Scope includes reviewing payment requests, change orders, and conducting final inspections.",
    category: "hud",
  },
  {
    id: "hud-refinanced-apartments",
    title: "Refinanced Apartment Communities",
    location: "Nevada & Arizona",
    client: "HUD — Federally Financed",
    year: 2023,
    image: "/images/project-4.jpg",
    description:
      "Construction management and inspection services for refinanced multifamily apartment projects, ensuring compliance with HUD requirements throughout.",
    category: "hud",
  },
  {
    id: "hud-nursing-homes",
    title: "Nursing Home Facilities",
    location: "Nevada & Arizona",
    client: "HUD — Federally Financed",
    year: 2022,
    image: "/images/project-5.jpg",
    description:
      "HUD inspection services for nursing home construction, including schedule tracking, prevailing wage compliance verification, and final inspections.",
    category: "hud",
  },
  {
    id: "hud-senior-housing",
    title: "Senior Housing Development",
    location: "Nevada & Arizona",
    client: "HUD — Federally Financed",
    year: 2021,
    image: "/images/project-6.jpg",
    description:
      "Full construction monitoring for federally financed senior housing from groundbreaking through occupancy, including payment request review and change order tracking.",
    category: "hud",
  },
  {
    id: "hud-accessible-housing",
    title: "Accessible Housing",
    location: "Nevada & Arizona",
    client: "HUD — Federally Financed",
    year: 2020,
    image: "/images/project-7.jpg",
    description:
      "HUD construction management for ADA-compliant residential projects serving people with disabilities. Ensured prevailing wage compliance and thorough payment review.",
    category: "hud",
  },
];
