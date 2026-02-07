"use client";
import { Link, useNavigate } from "react-router-dom";
import TopUniversitiesSection from "@/components/TopUniversitiesSection"; 
import { motion, Variants } from "framer-motion";
import { MythsSection } from "@/components/MythsSection";
import HeroSection from "@/components/HeroSection";
import TopicsSection from "@/components/TopicsSection";
import AdmissionServicesSection from "@/components/AdmissionServicesSection";
import PackagesSection from "@/components/PackagesSection";
import AdmissionCard from "@/components/AdmissionCard";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      delay: 0.1,
    },
  },
};


import { 
  GraduationCap, 
  CheckCircle2, 
  Code, 
  Cpu, 
  Wrench, 
  Building, 
  Zap, 
  Database,
  ArrowRight,
  Clock,
  Award,
  BookOpen,
  Building2,
  Users,
  Badge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Testimonial } from "@/components/TestimonialCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { DocumentationSection } from "@/components/DocumentationSection";
import  AdmissionProcessSection  from "@/components/AdmissionProcessSection";
import { CommonMistakesSection } from "@/components/CommonMistakesSection";
import { CareersSection } from "@/components/CareersSection";
import { FakeAlertSection } from "@/components/FakeAlertSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { CounsellingsSection } from "@/components/CounsellingsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { counselingData, getIconComponent } from "@/components/data/counselingData";
import AdmissionCards from "@/components/AdmissionCards";

const specializations = [
  {
    id: "cse",
    icon: Code,
    title: "Computer Science Engineering",
    description: "Master programming, AI, machine learning, cybersecurity, and software development with industry-relevant skills.",
    highlights: ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Full Stack Development"],
  },
  {
    id: "ece",
    icon: Cpu,
    title: "Electronics & Communication",
    description: "Explore embedded systems, VLSI design, signal processing, and telecommunications for the digital age.",
    highlights: ["VLSI Design", "Embedded Systems", "Signal Processing", "IoT"],
  },
  {
    id: "me",
    icon: Wrench,
    title: "Mechanical Engineering",
    description: "Learn design, manufacturing, robotics, and thermal engineering with hands-on practical experience.",
    highlights: ["CAD/CAM", "Robotics", "Thermal Engineering", "Manufacturing"],
  },
  {
    id: "ce",
    icon: Building,
    title: "Civil Engineering",
    description: "Build the future with structural design, construction management, and sustainable infrastructure.",
    highlights: ["Structural Design", "Construction Management", "Sustainability", "Urban Planning"],
  },
  {
    id: "ee",
    icon: Zap,
    title: "Electrical Engineering",
    description: "Power systems, renewable energy, and smart grid technologies for tomorrow's energy solutions.",
    highlights: ["Power Systems", "Renewable Energy", "Smart Grids", "Control Systems"],
  },
  {
    id: "it",
    icon: Database,
    title: "Information Technology",
    description: "Cloud computing, database management, networking, and enterprise IT solutions.",
    highlights: ["Cloud Computing", "Database Systems", "Networking", "DevOps"],
  },
];

const eligibilityCriteria = [
  "10+2 with Physics, Chemistry, and Mathematics",
  "Minimum 50% aggregate in qualifying examination",
  "Valid JEE Main /VITEEE/ BITSAT/WBJEE/ MHT CET And Many More",
  "Age limit: 17 to 25 years as on 1st July",
  
];



const BTech = () => {
   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
       <HeroSection/>
       <TopicsSection/>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              🎓 BTech Program
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Bachelor of{" "}
              <span className="text-gradient-saffron">Technology</span>
            </h1>
          

            {/* Program Highlights */}
       
          </motion.div>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-200 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Course <span className="text-gradient-saffron">Introduction</span>
              </h2>
  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
  <li>B.Tech is a 4-year degree for students who want to become engineers.</li>
  <li>It offers branches like Computer Science, Mechanical, Civil, and Electronics.</li>
  <li>The course teaches basic and advanced engineering subjects.</li>

  <li>It helps students build technical and problem-solving skills.</li>
  <li>The program prepares students for jobs and higher studies.</li>
<li>After BTech, students can go for MBA, PGDM, MTech, etc.</li>

</ul>




              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {/* <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-6 glow-saffron">
                    Download Brochure
                  </Button> */}
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {/* <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Contact Admissions
                  </Button> */}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Visual element */}
              <div className="relative aspect-square max-w-md mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-accent/30"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 40px hsl(30 100% 50% / 0.3)",
                        "0 0 80px hsl(30 100% 50% / 0.5)",
                        "0 0 40px hsl(30 100% 50% / 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  >
                    <GraduationCap className="h-20 w-20 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Orbiting icons */}
                {[Code, Cpu, Wrench, Building].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-14 h-14 bg-card rounded-xl border border-primary/30 flex items-center justify-center"
                    style={{
                      top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                      left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.5,
                      repeat: Infinity,
                    }}
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Eligibility <span className="text-gradient-saffron">Criteria</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check if you meet the requirements to join our BTech program
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl border border-border p-8"
          >
            <div className="space-y-4">
              {eligibilityCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{criterion}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30"
            >
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Note:</span> Relaxation in
                eligibility criteria may be applicable for reserved categories as per
                government norms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    <CareersSection/>

<TopUniversitiesSection />

     <motion.div
  className="relative z-20 text-center mb-20 px-4"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  <h2 className="text-4xl md:text-5xl font-bold mb-5 text-foreground drop-shadow-lg">
   Central And State {" "}
    <span className="text-gradient-saffron">
      Counselings
    </span>
  </h2>

  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
    Explore comprehensive information about major engineering counselings in India.
    Click on any card to view detailed admission process, seat matrix, and more.
  </p>
</motion.div>
{/* <motion.h2
  initial={{ opacity: 1, y: 0 }}   // 🔥 do NOT start hidden
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="relative z-30 text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
>
  Central{" "}
  <span className="text-gradient-saffron">
    Counseling
  </span>
</motion.h2> */}


      <section className="py-5 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            
          </motion.div>
        </div>
      </section>
<motion.div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    gap-4
  "
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>

          {counselingData.map((counseling, index) => {
            const IconComponent = getIconComponent(counseling.icon);
            return (
              <motion.div key={counseling.id} variants={cardVariants}>
                <Link to={`/counseling/${counseling.id}`}>
                  <Card className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 h-full cursor-pointer">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge
                        className={`${
                          counseling.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : counseling.status === "Upcoming"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        } animate-pulse`}
                      >
                        {counseling.status}
                      </Badge>
                    </div>

               <CardHeader className="relative pb-1 pt-4 px-4">
  <motion.div
    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2 group-hover:scale-105 transition-transform"
  >
    <IconComponent className="h-6 w-6 text-primary-foreground" />
  </motion.div>

  <CardTitle className="text-base font-semibold leading-tight group-hover:text-primary">
    {counseling.name}
  </CardTitle>

  <p className="text-xs text-muted-foreground line-clamp-1">
    {counseling.fullName}
  </p>
</CardHeader>


         <CardContent className="px-4 pb-4 pt-2 space-y-2">
  <div className="flex justify-between text-xs">
    <div className="flex items-center gap-1">
      <Users className="h-3 w-3 text-primary" />
      <span>{counseling.totalSeats.toLocaleString()}</span>
    </div>

    <div className="flex items-center gap-1">
      <Building2 className="h-3 w-3 text-primary" />
      <span>{counseling.participatingColleges}</span>
    </div>
  </div>

  <p className="text-xs text-muted-foreground line-clamp-2">
    {counseling.description}
  </p>

  <div className="flex items-center gap-1 text-primary text-xs font-medium">
    View Details
    <ArrowRight className="h-3 w-3" />
  </div>
</CardContent>

                  </Card>
                </Link>
              </motion.div>
            );
          })}



</motion.div>









      
      {/* <CounsellingsSection /> */}
      <DocumentationSection/>
      <AdmissionCards/>
      {/* <AdmissionProcessSection/> */}
      <CommonMistakesSection/>
      <FakeAlertSection/>
      <MythsSection/>
          {/* <AdmissionServicesSection/> */}
        <PackagesSection/>
      <TestimonialsCarousel />


      <WhyChooseUs/>
          
    </div>
  );
};

export default BTech;
