import { Brain } from "lucide-react";
import BranchPageLayout from "@/components/BranchPageLayout";

const ArtificialIntelligence = () => {
  return (
    <BranchPageLayout
      title="Artificial Intelligence"
      icon={Brain}
      tagline="Creating machines that think, learn, and evolve"
      overview={[
        "Artificial Intelligence (AI) Engineering focuses on designing and developing intelligent systems that can perform tasks typically requiring human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding.",
        "AI engineers work on developing algorithms and models that enable machines to make decisions, recognize patterns, understand natural language, and even create content. The field encompasses machine learning, deep learning, neural networks, robotics, and cognitive computing.",
        "With AI transforming every industry from healthcare to transportation, AI engineering has become one of the most important and fastest-growing fields in technology, driving innovations like self-driving cars, virtual assistants, and medical diagnosis systems.",
      ]}
      courseInfo={{
        duration: "4 Years (8 Semesters)",
        degree: "B.Tech in Artificial Intelligence / AI & ML",
        coreSubjects: [
          "Machine Learning",
          "Deep Learning",
          "Neural Networks",
          "Natural Language Processing",
          "Computer Vision",
          "Robotics",
          "Reinforcement Learning",
          "Probability & Statistics",
          "Linear Algebra",
          "Cognitive Science",
        ],
        electives: [
          "Generative AI",
          "Autonomous Systems",
          "Speech Recognition",
          "Expert Systems",
          "Knowledge Representation",
          "Multi-Agent Systems",
          "AI Ethics & Policy",
          "Edge AI & TinyML",
        ],
        practicals: [
          "Python & TensorFlow Labs",
          "Neural Network Projects",
          "NLP Application Development",
          "Computer Vision Projects",
          "Robotics Programming",
          "Industry AI Internships",
        ],
      }}
      scope={{
        industries: [
          "Technology & Software",
          "Healthcare & Pharma",
          "Autonomous Vehicles",
          "Finance & Banking",
          "E-commerce",
          "Gaming & Entertainment",
          "Manufacturing (Industry 4.0)",
          "Agriculture Technology",
        ],
        companies: [
          "OpenAI",
          "DeepMind",
          "Google AI",
          "Microsoft Research",
          "NVIDIA",
          "Tesla",
          "Meta AI",
          "Amazon AI",
          "Anthropic",
          "Wadhwani AI",
          "Ola Krutrim",
          "Sarvam AI",
        ],
        salaryRange: {
          fresher: "₹8-20 LPA",
          experienced: "₹35-100+ LPA",
        },
        government: [
          "NITI Aayog - AI Division",
          "Ministry of Electronics & IT",
          "DRDO - AI Research",
          "ISRO - AI Applications",
          "C-DAC - AI Development",
          "IITs & IISc Research",
        ],
        futureGrowth:
          "AI is projected to add $15.7 trillion to the global economy by 2030. India's National AI Strategy aims to become an AI powerhouse. The AI market in India is expected to reach $7.8 billion by 2025, creating 500,000+ new jobs.",
      }}
      strengths={[
        {
          title: "Cutting-Edge Technology",
          description:
            "Work on the most advanced technology of our time. AI engineers are at the forefront of technological innovation and breakthroughs.",
        },
        {
          title: "Highest Compensation",
          description:
            "AI specialists are among the highest-paid professionals globally. Top AI researchers can earn $500K+ annually in leading tech companies.",
        },
        {
          title: "Revolutionary Impact",
          description:
            "AI has the potential to solve humanity's biggest challenges - from disease diagnosis to climate modeling to accessibility solutions.",
        },
        {
          title: "Global Demand",
          description:
            "AI skills are in critical shortage worldwide. Organizations across all sectors are competing for AI talent.",
        },
        {
          title: "Research Opportunities",
          description:
            "Active research frontiers in AGI, multimodal AI, and AI safety offer opportunities for groundbreaking discoveries.",
        },
        {
          title: "Entrepreneurship Potential",
          description:
            "AI startups are attracting massive funding. Many successful unicorns have been built on AI technology.",
        },
      ]}
      weaknesses={[
        {
          title: "Extremely Competitive",
          description:
            "The field attracts the brightest minds globally. Standing out requires exceptional skills, research publications, or unique achievements.",
        },
        {
          title: "Requires Advanced Math",
          description:
            "Deep understanding of calculus, linear algebra, statistics, and optimization is essential. Not suitable for those who struggle with mathematics.",
        },
        {
          title: "Rapid Obsolescence",
          description:
            "AI techniques evolve faster than any other field. What's state-of-the-art today may be outdated in 6 months.",
        },
        {
          title: "Compute Resource Intensive",
          description:
            "Training large AI models requires expensive GPUs and cloud computing resources, creating barriers to experimentation.",
        },
        {
          title: "Ethical Concerns",
          description:
            "AI raises significant ethical issues around bias, privacy, job displacement, and potential misuse that professionals must navigate.",
        },
        {
          title: "High Expectations & Pressure",
          description:
            "Organizations often have unrealistic expectations about AI capabilities, leading to pressure and potential project failures.",
        },
      ]}
    />
  );
};

export default ArtificialIntelligence;