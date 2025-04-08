export const sliderUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-120vh", // Move smoothly upward
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};
