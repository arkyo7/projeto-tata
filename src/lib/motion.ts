import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.035 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

export const heroText: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 0.1 * (i as number) },
  }),
};

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.035 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease, delay: 0.15 } },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
