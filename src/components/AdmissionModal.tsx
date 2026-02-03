import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, FileText, UserCheck } from "lucide-react";
import { AdmissionType } from "./AdmissionProcessSection";

interface AdmissionModalProps {
  admission: AdmissionType | null;
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionModal = ({ admission, isOpen, onClose }: AdmissionModalProps) => {
  if (!admission) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-2xl relative"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {admission.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {admission.detailedInfo}
            </p>

            {/* Steps */}
            <h3 className="font-semibold mb-2 text-gray-800">Steps</h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {admission.steps.map((s) => (
                <span
                  key={s}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Eligibility */}
            <h3 className="font-semibold mb-2 text-gray-800 flex gap-2">
              <UserCheck className="w-5 h-5 text-orange-500" /> Eligibility
            </h3>
            <ul className="mb-5 space-y-2">
              {admission.eligibility.map((e) => (
                <li key={e} className="flex gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                  {e}
                </li>
              ))}
            </ul>

            {/* Documents */}
            <h3 className="font-semibold mb-2 text-gray-800 flex gap-2">
              <FileText className="w-5 h-5 text-orange-500" /> Documents
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {admission.documents.map((d) => (
                <li
                  key={d}
                  className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700"
                >
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;
