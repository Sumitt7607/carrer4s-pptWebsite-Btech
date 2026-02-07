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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, delay: index * 0.06 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -2,
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
      }}
      onClick={onClick}
      className="
        bg-white
        rounded-lg
        p-3
        border border-gray-200
        shadow-sm
        cursor-pointer
        transition-all
      "
    >
      {/* Top row */}
      <div className="flex items-center gap-2 mb-2">
        {/* Icon */}
        <div className="w-9 h-9 rounded-md bg-orange-500 flex items-center justify-center text-white">
          <div className="scale-75">{admission.icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {admission.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
        {admission.description}
      </p>

      {/* Steps */}
      <div className="flex flex-wrap gap-1 mb-2">
        {admission.steps.slice(0, 2).map((step) => (
          <span
            key={step}
            className="text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full"
          >
            {step}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-1 text-orange-600 text-xs font-semibold">
        Details
        <ArrowRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
};

export default AdmissionCard;
