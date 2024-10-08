/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const AnimationWrapper = ({ children, delay, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay || 0.25 }}
        className={`h-full flex ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationWrapper;
