import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const inclusions = [
  "Everything in Standard Counselling",
  "30-40 Zoom Sessions",  
  "Unlimited one-to-one counselling sessions",
  "Dedicated  perosnal counsellor will be  assigned to  you for personalized guidance and  support",
  "Complete admission management (end-to-end)",
  "NRI / Management quota guidance & seat booking",
  
  "Branch & college comparison analysis report",
  "Priority support via phone & WhatsApp",
  "Lateral entry & spot round counselling",
  "Post-admission support    (hostel, documents, orientation)",
  "Scholarship guidance & fee negotiation support",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function PremiumPackage() {
  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 px-4" style={{
        background: "linear-gradient(135deg, hsl(30 100% 50%), hsl(43 100% 50%), hsl(25 100% 42%))",
      }}>
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
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
            <div className="mb-2 flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20"
              >
                <Crown className="h-7 w-7 text-white" />
              </motion.div>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl">Premium Counselling</h1>
            </div>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-bold text-white"
            >
              🔥 Most Populard 
            </motion.span>
            <p className="mt-4 text-5xl font-black text-white drop-shadow-lg md:text-7xl">₹50,000 – ₹5,00,000</p>
            <p className="mt-2 text-lg text-white/80">Based on college tier & services selected</p>
            <p className="mt-1 text-xl text-white/90">Complete end-to-end admission management</p>
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
          {inclusions.map((item, i) => (
            <motion.li
              key={item}
              variants={itemVariant}
              className={`flex items-start gap-4 rounded-xl border p-5 ${
                i === 0
                  ? "border-saffron/40 bg-saffron/10 font-semibold"
                  : "border-saffron/20 bg-saffron/5"
              }`}
            >
              <CheckCircle className={`mt-0.5 h-6 w-6 shrink-0 ${i === 0 ? "text-saffron-dark" : "text-saffron"}`} />
              <span className="text-lg text-foreground">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
