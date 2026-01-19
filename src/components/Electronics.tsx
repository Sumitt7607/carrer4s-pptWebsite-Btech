import { Cpu } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const Electronics = () => {
  return (
    <BranchPageLayout
      title="Electronics Engineering"
      icon={Cpu}
      tagline="Powering innovation through circuits and signals"
      overview={[
        "Electronics Engineering deals with the study and application of electronic circuits, devices, and systems. It focuses on the design, development, and testing of electronic equipment used in various systems including communications, entertainment, transportation, and computing.",
        "This branch combines principles of physics and electrical engineering to create and improve electronic devices. Students learn about semiconductor devices, integrated circuits, digital systems, signal processing, communication systems, and microprocessors.",
        "Electronics engineers are responsible for creating the components and systems that power modern technology, from smartphones and computers to medical equipment and satellite systems.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech / B.E. in Electronics Engineering",
        coreSubjects: [
          "Electronic Devices & Circuits",
          "Digital Electronics",
          "Analog Electronics",
          "Signals & Systems",
          "Communication Systems",
          "Microprocessors & Microcontrollers",
          "VLSI Design",
          "Electromagnetic Theory",
          "Control Systems",
          "Power Electronics",
        ],
        electives: [
          "Embedded Systems",
          "Wireless Communication",
          "Optical Communication",
          "Antenna Design",
          "RF Circuit Design",
          "Biomedical Electronics",
          "Consumer Electronics",
          "Nanotechnology",
        ],
        practicals: [
          "Electronics Circuit Labs",
          "Digital Logic Design Labs",
          "Microcontroller Programming",
          "PCB Design Projects",
          "Communication System Labs",
          "Industrial Training & Internships",
        ],
      }}
      scope={{
        industries: [
          "Consumer Electronics",
          "Telecommunications",
          "Semiconductor Manufacturing",
          "Aerospace & Defense",
          "Automotive Electronics",
          "Medical Devices",
          "Industrial Automation",
          "IoT & Smart Devices",
        ],
        companies: [
          "Intel",
          "Qualcomm",
          "Samsung",
          "Texas Instruments",
          "NVIDIA",
          "Broadcom",
          "Bosch",
          "Philips",
          "Siemens",
          "ABB",
          "BHEL",
          "BEL",
        ],
        salaryRange: {
          fresher: "₹3-10 LPA",
          experienced: "₹15-50 LPA",
        },
        government: [
          "ISRO - Electronics Engineer",
          "DRDO - Scientist",
          "BEL - Probationary Engineer",
          "ECIL - Graduate Engineer",
          "Indian Railways",
          "Telecom Sector (BSNL, MTNL)",
        ],
        futureGrowth:
          "With 5G rollout, IoT expansion, and India's semiconductor push under 'Make in India', electronics engineering is poised for significant growth. The semiconductor industry alone is projected to reach $63 billion by 2026.",
      }}
      strengths={[
        {
          title: "Core Technology Foundation",
          description:
            "Electronics forms the backbone of all modern technology. Understanding circuits and systems provides a strong foundation for multiple career paths.",
        },
        {
          title: "Hardware + Software Skills",
          description:
            "Electronics engineers develop both hardware and embedded software skills, making them versatile professionals in the tech industry.",
        },
        {
          title: "Diverse Industry Applications",
          description:
            "From smartphones to satellites, automotive to healthcare, electronics engineers find opportunities across virtually every industry.",
        },
        {
          title: "Growing Semiconductor Industry",
          description:
            "India's push for semiconductor manufacturing creates new opportunities. Companies like Micron, Vedanta-Foxconn are setting up fabs in India.",
        },
        {
          title: "Research Opportunities",
          description:
            "Active research areas in quantum electronics, nanotechnology, and photonics offer exciting opportunities for innovation and higher studies.",
        },
        {
          title: "Government Sector Jobs",
          description:
            "Excellent opportunities in defense (DRDO, BEL), space (ISRO), and public sector undertakings with job security and benefits.",
        },
      ]}
      weaknesses={[
        {
          title: "Lower Starting Salaries",
          description:
            "Compared to software roles, core electronics positions often offer lower starting packages, especially in the Indian market.",
        },
        {
          title: "Limited Core Jobs in India",
          description:
            "Most semiconductor and electronics manufacturing happens abroad. Core electronics jobs in India are comparatively fewer.",
        },
        {
          title: "Expensive Equipment & Tools",
          description:
            "Professional electronics development requires expensive equipment, oscilloscopes, and software tools for design and testing.",
        },
        {
          title: "Slower Career Progression",
          description:
            "Unlike software, where rapid promotions are common, electronics careers often follow more traditional, slower growth paths.",
        },
        {
          title: "Many Shift to Software",
          description:
            "Due to better pay in software, many electronics engineers shift to IT roles, not utilizing their core electronics knowledge.",
        },
        {
          title: "Complex Learning Curve",
          description:
            "Electronics involves complex mathematics and physics concepts. Understanding quantum mechanics and advanced electromagnetics can be challenging.",
        },
      ]}
    />
  );
};

export default Electronics;