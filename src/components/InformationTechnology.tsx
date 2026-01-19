import { Monitor } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const InformationTechnology = () => {
  return (
    <BranchPageLayout
      title="Information Technology"
      icon={Monitor}
      tagline="Connecting the world through digital solutions"
      overview={[
        "Information Technology (IT) Engineering focuses on the application of computers and software to store, process, transmit, and retrieve information. It deals with the use, development, and management of computer-based information systems.",
        "IT engineers work on software development, database management, networking, cybersecurity, cloud computing, and IT infrastructure. While overlapping with Computer Science, IT has a stronger focus on practical applications and enterprise systems.",
        "With digital transformation accelerating across all industries, IT professionals are essential for building and maintaining the technology infrastructure that modern businesses rely on.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech / B.E. in Information Technology",
        coreSubjects: [
          "Programming Languages",
          "Data Structures",
          "Database Management",
          "Computer Networks",
          "Web Technologies",
          "Software Engineering",
          "Operating Systems",
          "Information Security",
          "System Analysis & Design",
          "IT Infrastructure",
        ],
        electives: [
          "Cloud Computing",
          "DevOps",
          "Mobile Application Development",
          "Big Data Technologies",
          "Cybersecurity",
          "Enterprise Systems (SAP, Oracle)",
          "Business Intelligence",
          "IT Service Management",
        ],
        practicals: [
          "Programming Labs",
          "Web Development Projects",
          "Database Design Labs",
          "Networking Configuration",
          "System Administration",
          "Industry Internships",
        ],
      }}
      scope={{
        industries: [
          "IT Services & Consulting",
          "Software Product Companies",
          "E-commerce",
          "Banking & Finance (BFSI)",
          "Healthcare IT",
          "Telecom",
          "Government IT Projects",
          "EdTech & Startups",
        ],
        companies: [
          "TCS",
          "Infosys",
          "Wipro",
          "HCL",
          "Tech Mahindra",
          "Cognizant",
          "Accenture",
          "Capgemini",
          "IBM",
          "Oracle",
          "SAP",
          "Microsoft",
        ],
        salaryRange: {
          fresher: "₹3.5-12 LPA",
          experienced: "₹15-60 LPA",
        },
        government: [
          "NIC - Scientist 'B'",
          "IBPS IT Officers",
          "SSC CGL - IT Cadre",
          "Indian Railways - IT",
          "State Government IT Depts",
          "UIDAI - Technical Officers",
        ],
        futureGrowth:
          "India's IT industry is projected to reach $350 billion by 2026. Digital India initiatives, cloud adoption, and cybersecurity needs drive continuous growth. IT professionals will remain in high demand as every industry undergoes digital transformation.",
      }}
      strengths={[
        {
          title: "Abundant Job Opportunities",
          description:
            "India's IT sector employs 5+ million people directly. IT graduates have among the highest employability rates.",
        },
        {
          title: "Competitive Salaries",
          description:
            "IT companies offer competitive packages. Top performers in product companies can earn ₹20-50 LPA even as freshers.",
        },
        {
          title: "Work Flexibility",
          description:
            "IT jobs offer excellent work-from-home opportunities, flexible hours, and modern workplace cultures.",
        },
        {
          title: "Quick Career Growth",
          description:
            "IT industry offers faster promotions based on skills rather than tenure. Talented professionals can reach leadership roles quickly.",
        },
        {
          title: "Global Exposure",
          description:
            "IT companies serve global clients, providing opportunities to work on international projects and travel abroad.",
        },
        {
          title: "Entrepreneurship Friendly",
          description:
            "IT skills enable freelancing, consulting, and starting your own tech business with minimal capital investment.",
        },
      ]}
      weaknesses={[
        {
          title: "Intense Competition",
          description:
            "IT is the most popular choice, leading to high competition for jobs, especially at top companies.",
        },
        {
          title: "Job Security Concerns",
          description:
            "IT industry is susceptible to layoffs during economic downturns, as seen in recent tech sector corrections.",
        },
        {
          title: "Work Pressure & Burnout",
          description:
            "Client deadlines, long hours, and constant pressure to deliver can lead to stress and burnout.",
        },
        {
          title: "Skill Obsolescence",
          description:
            "Technologies change rapidly. Skills learned today may become outdated in a few years, requiring constant upskilling.",
        },
        {
          title: "Monotonous Work",
          description:
            "Many entry-level IT jobs involve repetitive tasks like maintenance, support, or testing, which can be mundane.",
        },
        {
          title: "AI Automation Threat",
          description:
            "Routine IT tasks are increasingly being automated. Low-level coding and testing jobs face displacement risk.",
        },
      ]}
    />
  );
};

export default InformationTechnology;