
export const fadeInAnimationProps = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.04, 0.62, 0.23, 0.98],
    delay: delay,
  },
});

export const scaleInAnimationProps = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.7,
    ease: [0.04, 0.62, 0.23, 0.98],
    delay: delay,
  },
});

export const fadeInLeftAnimationProps = (delay: number = 0) => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.8,
    ease: [0.04, 0.62, 0.23, 0.98],
    delay: delay,
  },
});

export const fadeInRightAnimationProps = (delay: number = 0) => ({
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.8,
    ease: [0.04, 0.62, 0.23, 0.98],
    delay: delay,
  },
});

export function setupScrollReveal() {
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }
  return () => {};
}
