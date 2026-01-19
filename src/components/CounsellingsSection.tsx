import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Building, Calendar, ExternalLink, ChevronRight } from "lucide-react";

const centralCounsellings = [
  { name: "JoSAA", fullName: "Joint Seat Allocation Authority", colleges: "IITs, NITs, IIITs, GFTIs", rounds: "6 Rounds" },
  { name: "CSAB", fullName: "Central Seat Allocation Board", colleges: "NITs, IIITs, GFTIs", rounds: "Special Round" },
  // { name: "JAC Delhi", fullName: "Joint Admission Counselling", colleges: "DTU, NSUT, IIITD, IGDTUW", rounds: "3 Rounds" },
];

const stateCounsellings = [
  { state: "Delhi", name: "JEE Main / JoSAA / JAC Delhi", colleges: "DTU, NSUT, IIIT-D & Other Colleges" },

  { state: "Haryana", name: "JEE Main / HSTES Counseling", colleges: "State Govt. & Private Colleges" },

  { state: "Tamil Nadu", name: "TNEA / VITEEE / SRMJEEE", colleges: "Anna University & Private Universities" },

  { state: "Uttar Pradesh", name: "JEE Main / AKTU Counseling", colleges: "AKTU Affiliated Colleges" },

  { state: "Karnataka", name: "KCET / COMEDK / MET", colleges: "State Govt. & Private Colleges" },

  { state: "Rajasthan", name: "JEE Main / REAP Counseling", colleges: "RTU & Other State Colleges" },

  { state: "Uttarakhand", name: "JEE Main / UTU Counseling", colleges: "State Govt. & Private Colleges" },

  { state: "Madhya Pradesh", name: "JEE Main / MP DTE Counseling", colleges: "State Govt. & Private Colleges" },
];


const CentralCard = ({ counselling, index }: { counselling: typeof centralCounsellings[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -20 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ scale: 1.03, y: -5 }}
    className="group perspective-1000"
  >
    <div className="glass rounded-2xl p-6 h-full border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent hover:glow-saffron transition-all duration-300">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {counselling.name.slice(0, 2)}
      </motion.div>
      
      <h3 className="text-xl font-bold text-foreground mb-1">{counselling.name}</h3>
      <p className="text-sm text-primary mb-3">{counselling.fullName}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Building className="w-4 h-4 text-primary" />
          <span>{counselling.colleges}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{counselling.rounds}</span>
        </div>
      </div>

      <motion.div
        className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ x: 5 }}
      >
      
      
      </motion.div>
    </div>
  </motion.div>
);
const StateCard = ({
  item,
  index,
}: {
  item: typeof stateCounsellings[0];
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="perspective-1000 h-32"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden glass rounded-xl p-4 flex flex-col justify-center items-center text-center border border-border hover:border-primary/50 transition-colors">
          <MapPin className="w-6 h-6 text-primary mb-2" />
          <h4 className="font-bold text-foreground">
            {item.state}
          </h4>
          <p className="text-xs text-primary">
            {item.name}
          </p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-xl p-4 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/50">
          <h4 className="font-bold text-foreground text-sm mb-2">
            {item.name}
          </h4>
          <p className="text-xs text-muted-foreground">
            {item.colleges}
          </p>
          <ExternalLink className="w-4 h-4 text-primary mt-2" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CounsellingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="counsellings" className="py-24 px-4 relative overflow-hidden bg-secondary/30">
      {/* Animated map dots background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            🗺️ All India Counsellings
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">State & Central </span>
            <span className="text-gradient-saffron">Counsellings</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore all counselling options available across India. Don't limit yourself to just one!
          </p>
        </motion.div>

        {/* Central Counsellings */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Building className="w-5 h-5 text-primary-foreground" />
            </div>
            Central Counsellings
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {centralCounsellings.map((counselling, index) => (
              <CentralCard key={counselling.name} counselling={counselling} index={index} />
            ))}
          </div>
        </div>

        {/* State Counsellings */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            State Counsellings
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
{stateCounsellings.map((item, index) => (
  <StateCard key={item.state} item={item} index={index} />
))}


          </div>
        </div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 border-l-4 border-accent"
        >
          <p className="text-foreground font-medium flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>Pro Strategy: Register for multiple counsellings to maximize your options. You can always withdraw later!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
