import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  ClipboardList,
  Crown,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    step: "2",
    icon: FileCheck,
    title: "Basic Counseling Package",
    price: "₹10,000",
    theme: "basic",
    description:
      "Essential support for students who need guidance with applications and documentation for college admissions.",
    features: [
      "Personalized basic counseling session (career & course guidance)",
      "College shortlisting based on rank, category & budget",
      "Application form filling assistance (1–3 colleges)",
      "Document checklist & preparation guidance",
      "Basic document verification (marksheets, ID, certificates)",
      "Guidance on important admission dates & deadlines",
      "Step-by-step submission support",
      "WhatsApp/email support during admission window",
      "General counseling process explanation (JEE / CUET / State)",
      "One revision of submitted application details",
    ],
  },

  {
    step: "3",
    icon: ClipboardList,
    title: "Standard Counseling Package",
    price: "₹30,000",
    theme: "standard",
    description:
      "Comprehensive admission support including counseling strategy, choice filling, and multi-college applications.",
    features: [
      "In-depth career counseling & profile evaluation",
      "Advanced college & branch shortlisting (multiple options)",
      "Cutoff analysis & admission probability mapping",
       "20-30 Zoom sessions.",
      "Choice filling strategy for counseling rounds",
      "Application form filling (up to 10–15 colleges)",
      "Priority document verification & formatting",
      "Guidance for category, domicile & quota benefits",
      "Real-time updates on counseling rounds & seat allotment",
      "Dedicated admission  advisor",
      "WhatsApp + phone call support",
      "Re-submission support in case of rejection/errors",
    ],
  },

  {
    step: "4",
    icon: Crown,
    title: "Premium Counseling Package",
    theme: "premium",
    price: "₹50,000 – ₹5,00,000",
    description:
      "Complete end-to-end admission management with personal mentors, priority handling, and guaranteed best-fit college options.",
    features: [
      "1-on-1 senior counselor & personal admission manager",
      "Detailed psychometric & aptitude assessment",
     
      "Highly personalized college & branch mapping",
      "Rank-wise & budget-wise admission strategy",
      "Unlimited college applications & form filling",
      "Education loan end-to-end support",
      "Hostel & accommodation assistance",
      "Travel & reporting assistance",
      "24×7 priority support (call, WhatsApp, email)",
      "Post-admission support (refunds, upgrades, migration)",
      "Internal transfer & branch upgrade strategy",
      "Emergency seat backup planning",
    ],
  },
];

const themeStyles: Record<string, string> = {
  basic:
    "from-blue-500 to-cyan-500 border-blue-300/40 text-blue-600",
  standard:
    "from-green-500 to-emerald-500 border-green-300/40 text-green-600",
  premium:
    "from-yellow-500 to-orange-500 border-yellow-400/50 text-orange-600",
};

const titleTextStyles: Record<string, string> = {
  basic: "text-blue-700",
  standard: "text-green-700",
  premium: "text-orange-700",
};

const descTextStyles: Record<string, string> = {
  basic: "text-blue-500/90",
  standard: "text-green-500/90",
  premium: "text-orange-500/90",
};

const AdmissionServicesSection: React.FC = () => {
  return (
    <div className="relative py-20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
<div className="text-center mb-16">
  <motion.span
    className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    Our 4-Step Process
  </motion.span>

  <motion.h2
    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
  >
    Career4s <span className="gradient-text">Services</span>
  </motion.h2>

  <motion.p
    className="text-lg text-muted-foreground max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
  >
    Our comprehensive admission support ensures a smooth journey to your
    BTech
  </motion.p>
</div>

        {/* Services Grid */}
  <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">


          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative w-full flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <motion.div
                className={`glass-card rounded-2xl p-8 h-full w-full max-w-sm relative overflow-hidden group
                bg-background/80 backdrop-blur-xl border
                shadow-lg hover:shadow-2xl transition-shadow duration-300
                ${themeStyles[service.theme]}`}
                whileHover={{ scale: 1.04, y: -6 }}
              >
                {/* Step number */}
                <div
                  className="absolute top-4 right-4 w-9 h-9 rounded-full gradient-primary
                  flex items-center justify-center text-primary-foreground
                  font-bold shadow-md"
                >
                  {service.step}
                </div>

                {/* Icon */}
             <motion.div
  className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-lg"
  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.15 }}
  transition={{ duration: 0.5 }}
>
  <service.icon className="w-10 h-10 text-white" />
</motion.div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-1 ${titleTextStyles[service.theme]}`}
                >
                  {service.title}
                </h3>

                {/* Price */}
                <p className="text-lg font-semibold mb-3 text-foreground">
                  {service.price}
                </p>

                {/* Description */}
                <p
                  className={`text-sm mb-5 leading-relaxed ${descTextStyles[service.theme]}`}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/90"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                    >
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 ${titleTextStyles[service.theme]}`}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionServicesSection;
