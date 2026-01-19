import { FlaskConical } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const Chemical = () => {
  return (
    <BranchPageLayout
      title="Chemical Engineering"
      icon={FlaskConical}
      tagline="Transforming matter to improve lives"
      overview={[
        "Chemical Engineering is a branch that combines chemistry, physics, mathematics, and engineering principles to design and operate processes that transform raw materials into valuable products. It's the science of scaling up laboratory discoveries to industrial production.",
        "Chemical engineers work in diverse sectors including petrochemicals, pharmaceuticals, food processing, biotechnology, and environmental engineering. They design reactors, separation systems, and process plants while ensuring safety, efficiency, and environmental compliance.",
        "With growing focus on sustainable development, chemical engineers are increasingly working on green chemistry, renewable energy, and environmental remediation, making the field more relevant than ever.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech / B.E. in Chemical Engineering",
        coreSubjects: [
          "Chemical Reaction Engineering",
          "Mass Transfer Operations",
          "Heat Transfer",
          "Fluid Mechanics",
          "Thermodynamics",
          "Process Control",
          "Plant Design & Economics",
          "Transport Phenomena",
          "Chemical Process Calculations",
          "Organic & Inorganic Chemistry",
        ],
        electives: [
          "Petrochemical Engineering",
          "Biochemical Engineering",
          "Environmental Engineering",
          "Polymer Technology",
          "Pharmaceutical Engineering",
          "Nanotechnology",
          "Process Simulation",
          "Energy Engineering",
        ],
        practicals: [
          "Chemistry Laboratories",
          "Unit Operations Lab",
          "Process Simulation (Aspen, HYSYS)",
          "Pilot Plant Operations",
          "Industrial Visits",
          "Plant Design Project",
        ],
      }}
      scope={{
        industries: [
          "Oil & Gas / Refineries",
          "Petrochemicals",
          "Pharmaceuticals",
          "FMCG & Food Processing",
          "Fertilizers & Agrochemicals",
          "Paints & Polymers",
          "Water Treatment",
          "Renewable Energy",
        ],
        companies: [
          "Reliance Industries",
          "IOCL",
          "BPCL",
          "HPCL",
          "ONGC",
          "Sun Pharma",
          "Dr. Reddy's",
          "UPL",
          "Asian Paints",
          "Hindustan Unilever",
          "Nestle",
          "ITC",
        ],
        salaryRange: {
          fresher: "₹4-10 LPA",
          experienced: "₹15-45 LPA",
        },
        government: [
          "IOCL - Graduate Apprentice",
          "BPCL - Management Trainee",
          "ONGC - Graduate Trainee",
          "GAIL - Executive Trainee",
          "NFL - Management Trainee",
          "FACT - Engineer",
        ],
        futureGrowth:
          "Chemical engineering is critical for India's growth in petrochemicals, green hydrogen, and sustainable manufacturing. The pharma and biotech sectors continue to expand. Green energy transition will require chemical engineers for battery technology, hydrogen production, and carbon capture.",
      }}
      strengths={[
        {
          title: "Excellent PSU Opportunities",
          description:
            "Top opportunities in oil & gas PSUs like IOCL, BPCL, ONGC, GAIL with excellent pay packages (₹12-15 LPA for freshers) and benefits.",
        },
        {
          title: "Diverse Industry Options",
          description:
            "Can work in petrochemicals, pharmaceuticals, food & beverage, cosmetics, water treatment, or renewable energy sectors.",
        },
        {
          title: "High Demand Abroad",
          description:
            "Chemical engineers are in high demand in Gulf countries, USA, Europe for oil & gas, petrochemical, and process industries.",
        },
        {
          title: "Research Opportunities",
          description:
            "Active research areas in green chemistry, nanotechnology, biotechnology, and sustainable processes offer exciting career paths.",
        },
        {
          title: "Critical for Sustainability",
          description:
            "Chemical engineers will play a key role in developing sustainable processes, renewable fuels, and environmental solutions.",
        },
        {
          title: "Stable Career Path",
          description:
            "Process industries require specialized knowledge, providing job security and stability compared to rapidly changing tech fields.",
        },
      ]}
      weaknesses={[
        {
          title: "Limited Companies in India",
          description:
            "The number of core chemical engineering companies in India is limited compared to IT or mechanical engineering sectors.",
        },
        {
          title: "Geographic Restrictions",
          description:
            "Chemical plants are typically located in industrial areas or remote locations. Urban job opportunities are limited.",
        },
        {
          title: "Safety Hazards",
          description:
            "Working with chemicals and high-pressure processes involves safety risks. Strict protocols must be followed.",
        },
        {
          title: "Shift Work Common",
          description:
            "Process plants operate 24/7, requiring engineers to work in shifts, including nights and weekends.",
        },
        {
          title: "Environmental Concerns",
          description:
            "Some chemical industries face scrutiny for environmental impact, affecting company reputation and job satisfaction.",
        },
        {
          title: "Limited Work-from-Home",
          description:
            "Unlike IT roles, chemical engineering requires on-site presence in plants and laboratories, limiting flexibility.",
        },
      ]}
    />
  );
};

export default Chemical;