import { Zap } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const Electrical = () => {
  return (
    <BranchPageLayout
      title="Electrical Engineering"
      icon={Zap}
      tagline="Powering the world with electrical innovation"
      overview={[
        "Electrical Engineering is one of the fundamental engineering disciplines dealing with the study, design, and application of equipment, devices, and systems that use electricity, electronics, and electromagnetism.",
        "Electrical engineers work on power generation, transmission, and distribution systems. They design electrical equipment, control systems, and power electronics used in industries, homes, and transportation. The field spans from power plants to renewable energy systems to electric vehicles.",
        "With the global push towards renewable energy and electrification of transportation, electrical engineering is more relevant than ever, offering exciting opportunities in solar, wind, electric vehicles, and smart grid technologies.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech / B.E. in Electrical Engineering",
        coreSubjects: [
          "Electric Circuits & Networks",
          "Electrical Machines",
          "Power Systems",
          "Control Systems",
          "Power Electronics",
          "Electromagnetic Fields",
          "Electrical Measurements",
          "Switchgear & Protection",
          "High Voltage Engineering",
          "Electrical Drives",
        ],
        electives: [
          "Renewable Energy Systems",
          "Smart Grid Technology",
          "Electric Vehicle Technology",
          "Industrial Automation",
          "HVDC Transmission",
          "Power Quality",
          "Energy Management",
          "PLC & SCADA Systems",
        ],
        practicals: [
          "Electrical Circuits Lab",
          "Machines Laboratory",
          "Power Electronics Lab",
          "Control Systems Lab",
          "Simulation (MATLAB, ETAP)",
          "Industrial Training",
        ],
      }}
      scope={{
        industries: [
          "Power Generation & Distribution",
          "Renewable Energy",
          "Electric Vehicles",
          "Industrial Automation",
          "Transmission & Grid",
          "Railways & Metro",
          "Building Electrical Systems",
          "Manufacturing",
        ],
        companies: [
          "NTPC",
          "Power Grid",
          "Tata Power",
          "Adani Power",
          "L&T Electrical",
          "Siemens",
          "ABB",
          "Schneider Electric",
          "Havells",
          "Crompton",
          "Suzlon",
          "Ola Electric",
        ],
        salaryRange: {
          fresher: "₹3.5-9 LPA",
          experienced: "₹12-40 LPA",
        },
        government: [
          "NTPC - Executive Trainee",
          "Power Grid - Executive Trainee",
          "BHEL - Engineer Trainee",
          "State Electricity Boards",
          "Indian Railways - SSE Electrical",
          "SSC JE Electrical",
        ],
        futureGrowth:
          "India aims for 500 GW renewable energy capacity by 2030. The EV market is projected to reach $150 billion by 2030. Smart grid investments and electrification programs create massive demand for electrical engineers. This is arguably the best time to enter electrical engineering.",
      }}
      strengths={[
        {
          title: "Excellent PSU Opportunities",
          description:
            "Top opportunities in power sector PSUs like NTPC, Power Grid, NHPC, and state electricity boards with ₹10-15 LPA starting packages.",
        },
        {
          title: "Renewable Energy Boom",
          description:
            "Solar, wind, and green hydrogen sectors are growing exponentially, creating new opportunities for electrical engineers.",
        },
        {
          title: "Electric Vehicle Industry",
          description:
            "EV revolution creates demand for electrical engineers in companies like Tata, Ola Electric, Ather, and battery manufacturers.",
        },
        {
          title: "Essential & Evergreen",
          description:
            "Electricity is fundamental to modern life. Electrical engineers will always be needed to design, maintain, and improve power systems.",
        },
        {
          title: "Government Job Security",
          description:
            "Power sector government jobs offer excellent job security, benefits, and work-life balance.",
        },
        {
          title: "Diverse Career Paths",
          description:
            "Can work in power generation, transmission, distribution, automation, renewable energy, or even switch to electronics/IT.",
        },
      ]}
      weaknesses={[
        {
          title: "Safety Hazards",
          description:
            "Working with high voltage systems involves significant safety risks. Strict adherence to safety protocols is essential.",
        },
        {
          title: "Shift Work & On-Call",
          description:
            "Power plants and utilities operate 24/7. Engineers may need to work shifts or respond to emergencies anytime.",
        },
        {
          title: "Remote Locations",
          description:
            "Power plants and transmission projects are often in remote areas, away from major cities and urban amenities.",
        },
        {
          title: "Competitive PSU Exams",
          description:
            "PSU jobs are highly coveted, making entrance exams extremely competitive with thousands applying for limited positions.",
        },
        {
          title: "Lower Private Sector Pay",
          description:
            "Private sector electrical jobs often pay less than IT roles, especially in traditional electrical companies.",
        },
        {
          title: "Physical Work Requirements",
          description:
            "Field work involving climbing poles, working in substations, or plant maintenance can be physically demanding.",
        },
      ]}
    />
  );
};

export default Electrical;  