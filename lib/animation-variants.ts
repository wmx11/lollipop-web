import { Variants } from "framer-motion";

export const transition = {
  type: "spring",
  stiffness: 360,
  damping: 20,
  duration: 0.1,
};

export const popInVariant: Variants = {
  initial: {
    scale: 0,
    transition,
  },
  visible: (i) => ({
    scale: 1,
    transition: {
      ...transition,
      delay: i * 0.05,
    },
  }),
  visibleRotate: {
    scale: 1,
    transition,
    rotate: "12deg",
  },
};
