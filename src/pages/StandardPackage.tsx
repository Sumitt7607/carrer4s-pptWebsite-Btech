import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const inclusions = [
  "Personalized college shortlisting based on rank & preference",
  "Entrance exam guidance (JEE Main, JEE Advanced, State-level CETs)",
  "Application form filling assistance for up to 10 colleges",
  "2 one-on-one counselling sessions (video/phone)",
  "Email support throughout the admission cycle",
  "Basic merit-based college recommendations",
  "Cutoff analysis & previous year trends report",
  "Branch selection guidance based on career goals",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function StandardPackage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 px-4" style={{
        background: "linear-gradient(135deg, hsl(30 100% 50%), hsl(25 100% 42%))",
      }}>
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Packages
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                <Star className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl">Standard Counselling</h1>
            </div>
            <p className="mt-4 text-6xl font-black text-white drop-shadow-lg md:text-7xl">₹30,000</p>
            <p className="mt-3 text-xl text-white/80">Focused guidance for your B.Tech admission journey</p>
          </motion.div>
        </div>
      </div>

      {/* Inclusions */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-3xl font-bold text-foreground"
        >
          What's Included
        </motion.h2>
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {inclusions.map((item) => (
            <motion.li key={item} variants={itemVariant} className="flex items-start gap-4 rounded-xl border border-saffron/20 bg-saffron/5 p-5">
              <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-saffron" />
              <span className="text-lg text-foreground">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
