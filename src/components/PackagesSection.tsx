import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Star, Crown, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const standardHighlights = [
  "Personalized college shortlisting",
  "Entrance exam guidance (JEE / State-level)",
  "Application form assistance",
  
];

const premiumHighlights = [
  "Unlimited counselling sessions",
  "Dedicated counsellor assigned",
  "Complete end-to-end admission management",
  "NRI / Management quota guidance",
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function PackagesSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden py-20 px-4" style={{
      background: "linear-gradient(135deg, hsl(30 100% 50%), hsl(25 100% 42%), hsl(35 90% 45%))",
    }}>
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
<h2 className="mb-4 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-lg md:text-6xl">
  Career4s Services
</h2>



          <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-6xl">
            Our Counselling Packages
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
            Expert guidance for your B.Tech college admission journey
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Standard Card */}
            <div className="flex justify-center md:col-span-2">
    <motion.div
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 50px hsl(43 100% 50% / 0.35)" }}
      className="group relative cursor-pointer rounded-2xl border-2 border-gold/50 bg-white p-8 shadow-2xl transition-colors hover:border-gold max-w-md w-full"
      onClick={() => navigate("/packages/standard")}
    >
  <div className="mb-4 flex items-center gap-3">
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl"
      style={{
        background:
          "linear-gradient(135deg, hsl(30 100% 50%), hsl(43 100% 50%))",
      }}
    >
      <Star className="h-6 w-6 text-white" />
    </div>

    <h3 className="text-2xl font-bold text-saffron-dark md:text-3xl">
      Service Charges starts from 
    </h3>
  </div>

  <p className="mb-1 text-4xl font-extrabold text-saffron-dark">
    ₹30,000-/  Onwards
  </p>

  <p className="mb-6 text-black">
    Perfect for students who need focused guidance for B.Tech admissions.
  </p>

  <ul className="mb-8 space-y-3">
    {standardHighlights.map((item) => (
      <li key={item} className="flex items-start gap-2 text-black">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
        <span>{item}</span>
      </li>
    ))}
  </ul>

  <Button
    size="lg"
    className="w-full font-bold text-lg text-white"
    style={{
      background:
        "linear-gradient(135deg, hsl(30 100% 50%), hsl(43 100% 50%))",
    }}
    onClick={(e) => {
      e.stopPropagation();
      navigate("/packages/standard");
    }}
  >
    View Details <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</motion.div>
</div>

          {/* <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 50px hsl(43 100% 50% / 0.5)" }}
            className="group relative cursor-pointer rounded-2xl border-2 border-gold/50 bg-white p-8 shadow-2xl transition-colors hover:border-gold"
            onClick={() => navigate("/packages/premium")}
          >


            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{
                background: "linear-gradient(135deg, hsl(30 100% 50%), hsl(43 100% 50%))"
              }}>
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-saffron-dark md:text-3xl">Premium Counselling</h3>
            </div>
            <p className="mb-1 text-4xl font-extrabold text-saffron-dark">
              ₹50,000 – ₹5,00,000
            </p>
       <p className="mb-6 text-sm text-black">
  Based on college tier & services selected
</p>

<p className="mb-6 text-black">
  Complete end-to-end admission management with a dedicated counsellor.
</p>

   <ul className="mb-8 space-y-3">
  {premiumHighlights.map((item) => (
    <li
      key={item}
      className="flex items-start gap-2 text-black"
    >
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
      <span>{item}</span>
    </li>
  ))}
</ul>

            <Button
              size="lg"
              className="w-full font-bold text-lg text-white"
              style={{ background: "linear-gradient(135deg, hsl(30 100% 50%), hsl(43 100% 50%))" }}
              onClick={(e) => { e.stopPropagation(); navigate("/packages/premium"); }}
            >
              View Details <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
