import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AdmissionType } from "./AdmissionProcessSection";

interface AdmissionCardProps {
  admission: AdmissionType;
  index: number;
  onClick: () => void;
}

const AdmissionCard = ({ admission, index, onClick }: AdmissionCardProps) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        boxShadow: "0 25px 60px rgba(0,0,0,0.2)"
      }}
      onClick={onClick}
      className="bg-white rounded-2xl p-7 border border-gray-200 shadow-lg cursor-pointer transition-all"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center text-white mb-4 shadow">
        {admission.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {admission.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {admission.description}
      </p>

      {/* Steps */}
      <div className="flex flex-wrap gap-2 mb-5">
        {admission.steps.map((step) => (
          <span
            key={step}
            className="text-xs font-medium bg-orange-50 text-orange-700 px-3 py-1 rounded-full"
          >
            {step}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-orange-600 font-semibold">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

export default AdmissionCard;
