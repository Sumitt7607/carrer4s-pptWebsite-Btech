import { Cog } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const Mechanical = () => {
  return (
    <BranchPageLayout
      title="Mechanical Engineering"
      icon={Cog}
      tagline="Engineering the machines that power our world"
      overview={[
        "Mechanical Engineering is one of the oldest and broadest engineering disciplines. It applies principles of physics, mathematics, and materials science to design, analyze, manufacture, and maintain mechanical systems.",
        "Mechanical engineers work on everything from tiny components to large systems - automobiles, aircraft, robots, power plants, manufacturing equipment, and biomedical devices. The field combines creativity with analytical thinking to solve complex problems.",
        "Despite being a traditional branch, mechanical engineering continues to evolve with new areas like mechatronics, robotics, additive manufacturing, and sustainable energy systems, making it relevant for the modern industrial landscape.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech / B.E. in Mechanical Engineering",
        coreSubjects: [
          "Engineering Mechanics",
          "Thermodynamics",
          "Fluid Mechanics",
          "Strength of Materials",
          "Machine Design",
          "Manufacturing Processes",
          "Heat Transfer",
          "Dynamics of Machines",
          "CAD/CAM",
          "Automobile Engineering",
        ],
        electives: [
          "Robotics",
          "Mechatronics",
          "Finite Element Analysis",
          "Renewable Energy Systems",
          "Refrigeration & Air Conditioning",
          "Industrial Automation",
          "Additive Manufacturing",
          "Aerospace Engineering",
        ],
        practicals: [
          "Workshop Practice",
          "Thermodynamics & Fluid Labs",
          "CAD Modeling Projects",
          "CNC Programming",
          "Material Testing Labs",
          "Industrial Internships",
        ],
      }}
      scope={{
        industries: [
          "Automotive Industry",
          "Aerospace & Defense",
          "Manufacturing & Production",
          "Power & Energy",
          "Oil & Gas",
          "HVAC & Refrigeration",
          "Robotics & Automation",
          "Construction Equipment",
        ],
        companies: [
          "Tata Motors",
          "Mahindra",
          "L&T",
          "Maruti Suzuki",
          "BHEL",
          "Ashok Leyland",
          "Toyota",
          "Honda",
          "Caterpillar",
          "Siemens",
          "Bosch",
          "GE",
        ],
        salaryRange: {
          fresher: "₹3-8 LPA",
          experienced: "₹12-40 LPA",
        },
        government: [
          "ISRO - Mechanical Engineer",
          "DRDO - Scientist 'B'",
          "Indian Railways - SSE",
          "BHEL - Engineer Trainee",
          "NTPC - Executive Trainee",
          "HAL - Graduate Engineer",
        ],
        futureGrowth:
          "Mechanical engineering is evolving with Industry 4.0, electric vehicles, and sustainable manufacturing. India's 'Make in India' initiative and PLI schemes for manufacturing are creating new opportunities. The EV market alone needs 100,000+ mechanical engineers by 2030.",
      }}
      strengths={[
        {
          title: "Evergreen Demand",
          description:
            "As long as machines exist, mechanical engineers will be needed. It's one of the most stable career choices with consistent demand.",
        },
        {
          title: "Diverse Career Options",
          description:
            "Can work in automotive, aerospace, energy, manufacturing, consulting, or even shift to management and sales roles.",
        },
        {
          title: "Excellent Government Jobs",
          description:
            "Among the best opportunities in PSUs like BHEL, NTPC, ONGC, and defense organizations with good pay and job security.",
        },
        {
          title: "Tangible Work Output",
          description:
            "Unlike software, mechanical engineers create physical products they can see and touch, providing job satisfaction.",
        },
        {
          title: "Global Opportunities",
          description:
            "Manufacturing industries worldwide need mechanical engineers. Countries like Germany, Japan, and USA offer excellent opportunities.",
        },
        {
          title: "Foundation for Higher Studies",
          description:
            "Mechanical engineering provides a strong foundation for MBA, MS in various specializations, or research in emerging fields.",
        },
      ]}
      weaknesses={[
        {
          title: "Lower Starting Salaries",
          description:
            "Compared to IT/Software, mechanical engineering starting salaries are significantly lower, especially in core industries.",
        },
        {
          title: "Location Constraints",
          description:
            "Core mechanical jobs are often in industrial areas or manufacturing plants, not in major cities. Remote work is rarely possible.",
        },
        {
          title: "Slower Career Growth",
          description:
            "Promotion cycles in traditional industries are longer compared to the fast-paced IT sector.",
        },
        {
          title: "Physical Work Environment",
          description:
            "Work often involves factory floors, site visits, and exposure to industrial environments which may not suit everyone.",
        },
        {
          title: "Limited Core Jobs in India",
          description:
            "Due to automation and outsourcing, the number of core mechanical jobs in India has not grown proportionally.",
        },
        {
          title: "Many Shift to IT/Management",
          description:
            "Due to pay gap, many mechanical engineers take up software or MBA, not utilizing their core engineering education.",
        },
      ]}
    />
  );
};

export default Mechanical;