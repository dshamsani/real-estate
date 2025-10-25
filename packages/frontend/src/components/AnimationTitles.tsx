import { motion } from "framer-motion";
import { type FC, useMemo } from "react";

interface AnimationTitlesProps {
  title: string;
  className?: string;
  trigger?: "viewport" | "mount";
}

export const AnimationTitles: FC<AnimationTitlesProps> = ({ title, className, trigger = "viewport" }) => {
  const characters = useMemo(() => title.split(""), [title]);

  const hVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const headingMotionProps =
    trigger === "viewport"
      ? { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
      : { animate: "visible" };

  return (
    <motion.h1 variants={hVariants} initial="hidden" {...headingMotionProps} className={className}>
      {characters.map((char, index) => (
        <motion.span variants={spanVariants} key={`${char}_${index}`}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
