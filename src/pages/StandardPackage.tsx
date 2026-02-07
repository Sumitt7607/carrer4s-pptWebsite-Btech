import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  FileText,
  PhoneCall,
  Mail,
  BarChart3,
  GitBranch,
  ClipboardList,
  Star,
} from "lucide-react";

const inclusions = [
  {
    text: "Personalized college shortlisting",
    icon: GraduationCap,
  },
  {
    text: "Entrance exam guidance",
    icon: Target,
  },
  {
    text: "Application form filling ",
    icon: FileText,
  },
  {
    text: "Colleges Comparison Analysis",
    icon: BarChart3,
  },
  {
    text: "Email support throughout admission",
    icon: Mail,
  },
  {
    text: "Merit-based college recommendations",
    icon: ClipboardList,
  },
  {
    text: "Cutoff & previous year analysis",
    icon: BarChart3,
  },
  {
    text: "Branch selection guidance",
    icon: GitBranch,
  },
   {
    text: "Up to 30 Online support sessions for 6 months ",
    icon: PhoneCall,
  },
    {
    text: "Choice filling assistance",
    icon: ClipboardList,
  },
     {
    text: "All india Official Links",
    icon: Star,
  },
    {
    text: "Direct Management connection",
    icon: Mail,
  },
  {
    text: "Back Up Plan",
    icon: Target,
  },
  {
    text: "Special Round Counselling Support",
    icon: PhoneCall,
  },
  {
    text:"Working And Update",
    icon: BarChart3,
  },
  {
    text: "Registration Assistance",
    icon: FileText,
  },
  {
    text: "All India Admission Process Guidance",
    icon: GraduationCap,  
  },
  {
    text: "Unlimited Counselling Support for 6 Months",
    icon: PhoneCall,
  }
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function StandardPackage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
     <div
  className="mx-auto max-w-5xl px-4 py-3"
  style={{
    background:
      "linear-gradient(135deg, hsl(30 100% 50%), hsl(25 100% 42%))",
  }}
>
  <div className="flex items-center justify-between text-white">
    {/* Left */}
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
        <Star className="h-5 w-5" />
      </div>
      <h1 className="text-lg md:text-xl font-bold">
        Standard Counselling
      </h1>
    </div>

    {/* Right */}
    <p className="text-xl md:text-2xl font-extrabold">₹30,000</p>
  </div>
</div>


      {/* INCLUSIONS - ROW GRID */}
      <div className="mx-auto max-w-6xl px-4 py-16">
 <h2 className="mb-10 text-3xl font-bold text-foreground">
  What’s Included
  <span className="ml-20 text-saffron font-semibold">
    Career4s Services
  </span>
</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {inclusions.map((item, index) => {
            const Icon = item.icon;

            return (
          <motion.div
  key={index}
  variants={card}
  className="
    group rounded-xl border border-saffron/20
    bg-saffron/5 p-4
    transition-all duration-300
    hover:border-saffron/50
    hover:bg-saffron/10
    hover:-translate-y-0.5
  "
>
  <div className="
    mb-3 flex h-10 w-10 items-center justify-center
    rounded-lg bg-saffron/20 text-saffron
    group-hover:bg-saffron group-hover:text-white
    transition-colors
  ">
    <Icon className="h-5 w-5" />
  </div>

  <p className="text-sm font-medium text-foreground leading-snug">
    {item.text}
  </p>
</motion.div>

            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
