"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const { theme } = useTheme();

  return (
    <motion.div className={cn("sticky bottom-0", className)}>
      <motion.div
        style={{
          width: "25px",
          height: "40px",
          border: `2px solid ${theme === "dark" ? "#eee" : "#333"}`,
          borderRadius: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width: "5px",
            height: "5px",
            position: "absolute",
            top: "7px",
            left: "50%",
            translateX: "-50%",
            backgroundColor: theme === "dark" ? "#eee" : "#333",
            borderRadius: "50%",
          }}
          animate={{
            y: [2, 16],
            opacity: [1, 0.8],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
