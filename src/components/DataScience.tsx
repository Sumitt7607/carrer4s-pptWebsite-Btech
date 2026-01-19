import { Database } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const DataScience = () => {
  return (
    <BranchPageLayout
      title="Data Science"
      icon={Database}
      tagline="Transforming data into actionable intelligence"
      overview={[
        "Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, mathematics, and computer science to analyze and interpret complex data.",
        "Data Scientists work with big data technologies, machine learning algorithms, and statistical models to solve real-world problems. They help organizations make data-driven decisions by identifying patterns, trends, and correlations in large datasets.",
        "As the world generates exponentially more data, data science has become one of the most in-demand fields, with applications ranging from personalized recommendations to fraud detection to medical diagnosis.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech in Data Science / B.Sc in Data Science",
        coreSubjects: [
          "Statistics & Probability",
          "Linear Algebra",
          "Python Programming",
          "R Programming",
          "Machine Learning",
          "Database Management Systems",
          "Big Data Analytics",
          "Data Visualization",
          "Natural Language Processing",
          "Deep Learning",
        ],
        electives: [
          "Computer Vision",
          "Reinforcement Learning",
          "Time Series Analysis",
          "Recommendation Systems",
          "A/B Testing",
          "Data Engineering",
          "Business Intelligence",
          "Cloud Computing for Data",
        ],
        practicals: [
          "Python & R Programming Labs",
          "Machine Learning Projects",
          "Data Analysis with Real Datasets",
          "Kaggle Competitions",
          "Industry Internships",
          "Capstone Data Science Project",
        ],
      }}
      scope={{
        industries: [
          "E-commerce & Retail",
          "Banking & Finance",
          "Healthcare & Pharma",
          "Telecommunications",
          "Social Media",
          "Marketing & Advertising",
          "Insurance",
          "Government Analytics",
        ],
        companies: [
          "Google",
          "Amazon",
          "Microsoft",
          "Netflix",
          "Uber",
          "Airbnb",
          "Flipkart",
          "Zomato",
          "Fractal Analytics",
          "Mu Sigma",
          "Tiger Analytics",
          "Latent View",
        ],
        salaryRange: {
          fresher: "₹6-15 LPA",
          experienced: "₹25-70+ LPA",
        },
        government: [
          "NITI Aayog - Data Analyst",
          "Ministry of Statistics",
          "Election Commission - Analytics",
          "UIDAI (Aadhaar)",
          "Smart City Projects",
          "Public Health Data Analysis",
        ],
        futureGrowth:
          "Data Science is projected to grow 27% annually through 2026. India needs 11 lakh+ data science professionals by 2026. With AI integration expanding, data scientists will be crucial for every organization's digital transformation.",
      }}
      strengths={[
        {
          title: "Exceptionally High Demand",
          description:
            "Ranked as the 'Sexiest Job of the 21st Century' by Harvard Business Review. Every organization needs data professionals, creating unprecedented demand.",
        },
        {
          title: "Lucrative Salaries",
          description:
            "Data scientists command premium salaries, with experienced professionals earning ₹30-70 LPA in India and $150-200K+ in the US.",
        },
        {
          title: "Industry Agnostic Skills",
          description:
            "Data science skills are applicable across every industry - healthcare, finance, retail, entertainment - providing immense career flexibility.",
        },
        {
          title: "Impactful Work",
          description:
            "Data scientists directly influence business decisions, product development, and organizational strategy through their insights.",
        },
        {
          title: "Continuous Innovation",
          description:
            "The field is constantly evolving with new algorithms, tools, and techniques, keeping work intellectually stimulating.",
        },
        {
          title: "Remote Work Friendly",
          description:
            "Data science work is highly conducive to remote work, offering flexibility and access to global job markets.",
        },
      ]}
      weaknesses={[
        {
          title: "Steep Learning Curve",
          description:
            "Requires strong foundation in statistics, mathematics, and programming. Mastering all aspects takes significant time and effort.",
        },
        {
          title: "Rapidly Evolving Tools",
          description:
            "New frameworks, libraries, and tools emerge constantly. Staying updated requires continuous learning commitment.",
        },
        {
          title: "Data Quality Challenges",
          description:
            "Much of a data scientist's time is spent cleaning and preparing data rather than actual analysis and modeling.",
        },
        {
          title: "Job Title Confusion",
          description:
            "Terms like Data Analyst, Data Scientist, ML Engineer are often used interchangeably, creating role ambiguity.",
        },
        {
          title: "Unrealistic Expectations",
          description:
            "Organizations sometimes expect magic from data science without understanding its limitations and requirements.",
        },
        {
          title: "Automation Concerns",
          description:
            "AutoML tools and AI are automating parts of data science work, requiring professionals to focus on higher-level thinking.",
        },
      ]}
    />
  );
};

export default DataScience;