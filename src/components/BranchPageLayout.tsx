import { motion } from "framer-motion";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import ParticleBackground from "./animations/ParticleBackground";
// import FloatingShapes from "./animations/FloatingShapes";
// import CursorGlow from "./animations/CursorGlow";

interface CourseInfo {
  duration: string;
  degree: string;
  coreSubjects: string[];
  electives: string[];
  practicals: string[];
}

interface ScopeInfo {
  industries: string[];
  companies: string[];
  salaryRange: { fresher: string; experienced: string };
  government: string[];
  futureGrowth: string;
}

interface BranchPageLayoutProps {
  title: string;
  icon: LucideIcon;
  tagline: string;
  overview: string[];
  courseInfo: CourseInfo;
  scope: ScopeInfo;
  strengths: { title: string; description: string }[];
  weaknesses: { title: string; description: string }[];
}

const SectionTitle = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.h2
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="text-3xl font-bold text-gradient-saffron mb-6 flex items-center gap-3"
  >
    <span className="w-2 h-8 bg-primary rounded-full" />
    {children}
  </motion.h2>
);

const InfoCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-dark rounded-xl p-6 border-glow"
  >
    {children}
  </motion.div>
);

export const BranchPageLayout = ({
  title,
  icon: Icon,
  tagline,
  overview,
  courseInfo,
  scope,
  strengths,
  weaknesses,
}: BranchPageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      {/* <ParticleBackground />
      <FloatingShapes />
      <CursorGlow /> */}

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-glow hover:border-primary transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
        <span className="text-foreground">Back</span>
      </motion.button>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/50 mb-6 glow-saffron"
          >
            <Icon className="w-12 h-12 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gradient-saffron mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {tagline}
          </motion.p>
        </motion.div>

        {/* Overview Section */}
        <section className="mb-20">
          <SectionTitle>Overview</SectionTitle>
          <InfoCard>
            <div className="space-y-4">
              {overview.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-foreground/90 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </InfoCard>
        </section>

        {/* Course Information Section */}
        <section className="mb-20">
          <SectionTitle delay={0.1}>Course Information</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard delay={0.1}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Program Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground font-medium">
                    {courseInfo.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Degree</span>
                  <span className="text-foreground font-medium">
                    {courseInfo.degree}
                  </span>
                </div>
              </div>
            </InfoCard>

            <InfoCard delay={0.2}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Core Subjects
              </h3>
              <div className="flex flex-wrap gap-2">
                {courseInfo.coreSubjects.map((subject, index) => (
                  <motion.span
                    key={subject}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm text-foreground"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </InfoCard>

            <InfoCard delay={0.3}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Electives
              </h3>
              <div className="flex flex-wrap gap-2">
                {courseInfo.electives.map((elective, index) => (
                  <motion.span
                    key={elective}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-sm text-foreground"
                  >
                    {elective}
                  </motion.span>
                ))}
              </div>
            </InfoCard>

            <InfoCard delay={0.4}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Lab & Practical Work
              </h3>
              <ul className="space-y-2">
                {courseInfo.practicals.map((practical, index) => (
                  <motion.li
                    key={practical}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-foreground/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {practical}
                  </motion.li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </section>

        {/* Scope in India Section */}
        <section className="mb-20">
          <SectionTitle delay={0.2}>Scope in India</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard delay={0.1}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Top Industries
              </h3>
              <ul className="space-y-2">
                {scope.industries.map((industry, index) => (
                  <motion.li
                    key={industry}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-foreground/90"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    {industry}
                  </motion.li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard delay={0.2}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Top Recruiters
              </h3>
              <div className="flex flex-wrap gap-2">
                {scope.companies.map((company, index) => (
                  <motion.span
                    key={company}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm text-foreground cursor-default"
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </InfoCard>

            <InfoCard delay={0.3}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Salary Range
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground block mb-1">
                    Fresher
                  </span>
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {scope.salaryRange.fresher}
                  </motion.div>
                </div>
                <div>
                  <span className="text-muted-foreground block mb-1">
                    Experienced (5+ years)
                  </span>
                  <motion.div
                    className="text-2xl font-bold text-secondary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {scope.salaryRange.experienced}
                  </motion.div>
                </div>
              </div>
            </InfoCard>

            <InfoCard delay={0.4}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Government Opportunities
              </h3>
              <ul className="space-y-2">
                {scope.government.map((org, index) => (
                  <motion.li
                    key={org}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-foreground/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {org}
                  </motion.li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard delay={0.5}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Future Growth
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                {scope.futureGrowth}
              </p>
            </InfoCard>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="mb-20">
          <SectionTitle delay={0.3}>Strengths</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-dark rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {strength.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Weaknesses Section */}
        <section className="mb-20">
          <SectionTitle delay={0.4}>Challenges & Considerations</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {weaknesses.map((weakness, index) => (
              <motion.div
                key={weakness.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-dark rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 text-xl">!</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {weakness.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {weakness.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BranchPageLayout;