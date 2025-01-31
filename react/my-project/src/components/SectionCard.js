import { motion } from "framer-motion";

export default function SectionCard({ title, content }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </motion.div>
  );
}
