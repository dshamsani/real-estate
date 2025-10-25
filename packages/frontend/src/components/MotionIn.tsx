import { motion, type MotionProps } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

type MotionInProps = PropsWithChildren<{
  from?: "left" | "right" | "top" | "bottom" | "fade";
  duration?: number;
  className?: string;
}> &
  Omit<MotionProps, "initial" | "animate" | "transition">;

export const MotionIn: FC<MotionInProps> = ({ from = "fade", duration = 0.8, className, children, ...rest }) => {
  const delta = 400;

  const map = {
    left: { initial: { x: -delta, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: delta, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    top: { initial: { y: -delta, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    bottom: { initial: { y: delta, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  }[from];

  return (
    <motion.div {...map} transition={{ duration, ease: "easeOut" }} className={className} {...rest}>
      {children}
    </motion.div>
  );
};
