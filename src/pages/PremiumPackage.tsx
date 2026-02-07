import { motion } from "framer-motion";
import {
  Crown,
  Video,
  Users,
  UserCheck,
  Layers,
  Globe,
  BarChart3,
  PhoneCall,
  Shuffle,
  Home,
  BadgePercent,
} from "lucide-react";

const inclusions = [
  { text: "Everything in Standard Counselling", icon: Crown },
  { text: "30–40 Zoom Sessions", icon: Video },
  { text: "Unlimited 1-on-1 Counselling Sessions", icon: Users },
  {
    text: "Dedicated Personal Counsellor for Complete Guidance",
    icon: UserCheck,
  },
  { text: "Complete Admission Management (End-to-End)", icon: Layers },
  { text: "NRI / Management Quota Guidance & Seat Booking", icon: Globe },
  { text: "Branch & College Comparison Analysis Report", icon: BarChart3 },
  { text: "Priority Support via Phone & WhatsApp", icon: PhoneCall },
  { text: "Lateral Entry & Spot Round Counselling", icon: Shuffle },
  { text: "Post-Admission Support (Hostel, Docs, Orientation)", icon: Home },
  { text: "Scholarship & Fee Negotiation Support", icon: BadgePercent },
];

export default function PremiumPackage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <div
        className="relative overflow-hidden py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, hsl(30 100% 50%), hsl(43 100% 50%), hsl(25 100% 42%))",
        }}
      >
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl">
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

              <h1 className="text-4xl font-extrabold text-white md:text-5xl">
                Premium Counselling
              </h1>
            </div>

            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-bold text-white"
            >
              🔥 Most Popular
            </motion.span>

            <p className="mt-4 text-5xl font-black text-white md:text-7xl">
              ₹50,000 – ₹5,00,000
            </p>

            <p className="mt-2 text-lg text-white/80">
              Based on college tier & services selected
            </p>

            <p className="mt-1 text-xl text-white/90">
              Complete end-to-end admission management
            </p>
          </motion.div>
        </div>
      </div>

      {/* INCLUSIONS (SMALL PREMIUM CARDS) */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-3xl font-bold text-foreground"
        >
          What’s Included
          <span className="ml-4 text-saffron font-semibold">
            Career4s Services
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid gap-5
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="
                  group rounded-lg
                  border border-saffron/25
                  bg-saffron/10
                  p-3
                  transition-all duration-300
                  hover:border-saffron
                  hover:bg-saffron/20
                  hover:-translate-y-0.5
                "
              >
                <div
                  className="
                    mb-2 flex h-9 w-9 items-center justify-center
                    rounded-md bg-saffron/30 text-saffron-dark
                    group-hover:bg-saffron
                    group-hover:text-white
                    transition-colors
                  "
                >
                  <Icon className="h-4 w-4" />
                </div>

                <p className="text-xs font-semibold text-foreground leading-snug">
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
