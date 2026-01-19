import { Code2 } from "lucide-react";
import BranchPageLayout from "./BranchPageLayout";

const ComputerScience = () => {
  return (
    <BranchPageLayout
      title="Computer Science Engineering"
      icon={Code2}
      tagline="Building the digital world, one line of code at a time"
      overview={[
        "Computer Science Engineering (CSE) is one of the most sought-after engineering disciplines that deals with the design, development, and application of computer systems and software. It combines principles of electrical engineering and computer science to create computing solutions.",
        "CSE covers a broad spectrum of topics including programming languages, algorithms, data structures, artificial intelligence, machine learning, database systems, computer networks, cybersecurity, and software engineering. Students learn to develop software applications, design computer hardware, and solve complex computational problems.",
        "With the digital transformation accelerating across industries, computer science engineers are at the forefront of innovation, creating technologies that shape how we live, work, and communicate.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech / B.E. in Computer Science Engineering",
        coreSubjects: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Database Management Systems",
          "Computer Networks",
          "Object-Oriented Programming",
          "Compiler Design",
          "Software Engineering",
          "Theory of Computation",
          "Computer Architecture",
          "Discrete Mathematics",
        ],
        electives: [
          "Machine Learning",
          "Artificial Intelligence",
          "Cloud Computing",
          "Blockchain Technology",
          "Cybersecurity",
          "Big Data Analytics",
          "Internet of Things",
          "Mobile App Development",
        ],
        practicals: [
          "Programming Labs (C, C++, Java, Python)",
          "Database Design Projects",
          "Web Development Projects",
          "Network Configuration Labs",
          "Software Development Internships",
          "Final Year Major Project",
        ],
      }}
      scope={{
        industries: [
          "Software Development",
          "IT Services & Consulting",
          "E-commerce & Fintech",
          "Healthcare Technology",
          "Gaming Industry",
          "Cybersecurity",
          "Cloud Services",
          "Artificial Intelligence",
        ],
        companies: [
          "Google",
          "Microsoft",
          "Amazon",
          "Apple",
          "Meta",
          "TCS",
          "Infosys",
          "Wipro",
          "Flipkart",
          "Paytm",
          "Swiggy",
          "Zomato",
        ],
        salaryRange: {
          fresher: "₹4-15 LPA",
          experienced: "₹20-80+ LPA",
        },
        government: [
          "ISRO - Scientific/Engineer",
          "DRDO - Scientist 'B'",
          "BARC - Scientific Officer",
          "Indian Railways - IT Cadre",
          "Public Sector Banks - IT Officers",
          "SSC CGL - Various Ministries",
        ],
        futureGrowth:
          "Computer Science remains the top engineering branch with exponential growth. With AI, ML, Cloud Computing, and Digital India initiatives, demand for skilled CSE professionals is projected to grow by 25% annually. India is expected to have 1 million+ job openings in tech by 2025.",
      }}
      strengths={[
        {
          title: "Highest Salary Packages",
          description:
            "CSE graduates command the highest salary packages among all engineering branches, with top companies offering ₹50 LPA+ for exceptional candidates.",
        },
        {
          title: "Abundant Job Opportunities",
          description:
            "Every industry needs software solutions, creating unlimited job opportunities across sectors from healthcare to finance to entertainment.",
        },
        {
          title: "Remote Work Flexibility",
          description:
            "Software development offers excellent work-from-home opportunities, providing better work-life balance and global job accessibility.",
        },
        {
          title: "Entrepreneurship Potential",
          description:
            "Low startup costs and high demand for tech solutions make CSE ideal for launching your own startup or freelancing business.",
        },
        {
          title: "Continuous Learning & Growth",
          description:
            "The field constantly evolves with new technologies, ensuring continuous learning opportunities and skill development throughout your career.",
        },
        {
          title: "Global Career Opportunities",
          description:
            "Programming skills are universally valued, opening doors to international careers in tech hubs like Silicon Valley, London, and Singapore.",
        },
      ]}
      weaknesses={[
        {
          title: "Intense Competition",
          description:
            "Being the most popular branch, competition for top positions is fierce. You need to continuously upskill to stay relevant.",
        },
        {
          title: "Rapidly Changing Technology",
          description:
            "Technologies become obsolete quickly. Skills learned today may need updating within 2-3 years, requiring lifelong learning commitment.",
        },
        {
          title: "Sedentary Lifestyle",
          description:
            "Long hours at computers can lead to health issues like eye strain, back problems, and a sedentary lifestyle if not managed properly.",
        },
        {
          title: "High-Pressure Deadlines",
          description:
            "Software projects often come with tight deadlines and high client expectations, leading to work pressure and occasional burnout.",
        },
        {
          title: "Job Security Concerns",
          description:
            "Automation and AI tools are increasingly capable of handling routine coding tasks, requiring engineers to focus on higher-level skills.",
        },
        {
          title: "Outsourcing Threat",
          description:
            "Companies may outsource work to lower-cost regions, affecting job stability in certain segments of the industry.",
        },
      ]}
    />
  );
};

export default ComputerScience;