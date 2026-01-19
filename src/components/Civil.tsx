import { Building2 } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const Civil = () => {
  return (
    <BranchPageLayout
      title="Civil Engineering"
      icon={Building2}
      tagline="Building the infrastructure of tomorrow"
      overview={[
        "Civil Engineering is one of the oldest engineering disciplines, dealing with the design, construction, and maintenance of the physical and naturally built environment. This includes roads, bridges, dams, buildings, airports, water supply systems, and sewage networks.",
        "Civil engineers shape the world around us. They work on infrastructure projects that improve quality of life, from designing earthquake-resistant buildings to planning sustainable cities. The field combines technical expertise with project management and environmental considerations.",
        "With India's massive infrastructure development plans including smart cities, highways, metros, and ports, civil engineering remains crucial for national development and urban transformation.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech / B.E. in Civil Engineering",
        coreSubjects: [
          "Structural Analysis",
          "Reinforced Concrete Design",
          "Geotechnical Engineering",
          "Transportation Engineering",
          "Hydraulics & Water Resources",
          "Surveying",
          "Construction Technology",
          "Environmental Engineering",
          "Earthquake Engineering",
          "Estimation & Costing",
        ],
        electives: [
          "Bridge Engineering",
          "High Rise Structures",
          "Urban Planning",
          "Green Building Design",
          "Traffic Engineering",
          "Remote Sensing & GIS",
          "Disaster Management",
          "Construction Management",
        ],
        practicals: [
          "Surveying Practicals",
          "Material Testing Labs",
          "Structural Analysis Software (STAAD, ETABS)",
          "AutoCAD & Civil 3D",
          "Site Visit Training",
          "Construction Internships",
        ],
      }}
      scope={{
        industries: [
          "Construction & Real Estate",
          "Infrastructure Development",
          "Transportation",
          "Water Resources",
          "Environmental Consulting",
          "Urban Planning",
          "Project Management",
          "Government Projects",
        ],
        companies: [
          "L&T Construction",
          "DLF",
          "Shapoorji Pallonji",
          "Gammon India",
          "Tata Projects",
          "Afcons Infrastructure",
          "HCC",
          "GMR",
          "Godrej Properties",
          "IRB Infrastructure",
          "Dilip Buildcon",
          "NCC Limited",
        ],
        salaryRange: {
          fresher: "₹3-7 LPA",
          experienced: "₹12-35 LPA",
        },
        government: [
          "CPWD - Junior Engineer",
          "State PWD - Assistant Engineer",
          "Indian Railways - SSE Civil",
          "NHAI - Manager",
          "Municipal Corporations",
          "SSC JE - Civil",
        ],
        futureGrowth:
          "India's infrastructure investment is ₹111 lakh crore under National Infrastructure Pipeline (2020-2025). Smart Cities Mission, Bharatmala, Sagarmala, and metro expansion create massive demand for civil engineers. The real estate sector alone is projected to reach $1 trillion by 2030.",
      }}
      strengths={[
        {
          title: "National Development Role",
          description:
            "Civil engineers directly contribute to nation-building through infrastructure projects that transform communities and economies.",
        },
        {
          title: "Excellent Government Jobs",
          description:
            "Among the best opportunities in government through SSC JE, State PSC, CPWD, and public sector organizations.",
        },
        {
          title: "Visible & Tangible Work",
          description:
            "The satisfaction of seeing your designs become real structures - buildings, bridges, roads that serve millions of people.",
        },
        {
          title: "Stable Demand",
          description:
            "As long as infrastructure is needed, civil engineers will be in demand. It's a recession-resistant career choice.",
        },
        {
          title: "Entrepreneurship Options",
          description:
            "Civil engineers can start their own contracting, consulting, or real estate businesses with industry experience.",
        },
        {
          title: "Diverse Specializations",
          description:
            "Can specialize in structures, geotechnical, water resources, transportation, or environmental engineering.",
        },
      ]}
      weaknesses={[
        {
          title: "Lower Private Sector Pay",
          description:
            "Private sector salaries in civil engineering are lower compared to IT and other engineering branches, especially at entry level.",
        },
        {
          title: "Field Work Demands",
          description:
            "Site work in varying weather conditions, remote locations, and physically demanding environments is common.",
        },
        {
          title: "Slow Career Progression",
          description:
            "Promotions in construction and government roles follow traditional hierarchies with slower advancement.",
        },
        {
          title: "Project-Based Uncertainty",
          description:
            "Jobs depend on project availability. Economic slowdowns directly impact construction hiring.",
        },
        {
          title: "Long Working Hours on Site",
          description:
            "Site engineers often work long hours, including weekends, to meet project deadlines.",
        },
        {
          title: "Regulatory Challenges",
          description:
            "Dealing with government approvals, permits, and regulations can be time-consuming and frustrating.",
        },
      ]}
    />
  );
};

export default Civil;