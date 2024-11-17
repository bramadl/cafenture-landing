import * as motion from "framer-motion/client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ filter: "blur(8px)", y: 16, opacity: 0 }}
      animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
