import { motion } from "framer-motion";
import { type FC, useMemo } from "react";

interface AnimationTitlesProps {
  title: string;
  className?: string;
}

export const AnimationTitles: FC<AnimationTitlesProps> = ({ title, className }) => {
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

  return (
    <motion.h1 variants={hVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={className}>
      {characters.map((char, index) => (
        <motion.span viewport={{ once: true, amount: 0.2 }} variants={spanVariants} key={`${char}_${index}`}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
