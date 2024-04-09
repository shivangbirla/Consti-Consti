export const fadeIn = (direction, delay, isSmall) => {
  const animationValues = isSmall
    ? {
        hidden: {
          y: direction === "up" ? 40 : direction === "down" ? -10 : 0,
          opacity: 0,
          x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        show: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            type: "tween",
            duration: 1.2,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        },
      }
    : {
        hidden: {
          y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
          opacity: 0,
          x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
        },
        show: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            type: "tween",
            duration: 1.2,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        },
      };

  return animationValues;
};
