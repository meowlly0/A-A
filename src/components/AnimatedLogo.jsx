import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedLogo({ onFinish }) {
  const leftA = useAnimation();
  const rightA = useAnimation();
  const ampControl = useAnimation();
  const [showAmp, setShowAmp] = useState(false);

  useEffect(() => {
    const animate = async () => {
      await Promise.all([
        leftA.start({ x: 0, opacity: 1, transition: { duration: 1.5 } }),
        rightA.start({ x: 0, opacity: 1, transition: { duration: 1.5 } }),
      ]);

      setShowAmp(true);
      await new Promise((res) => setTimeout(res, 1000));

      leftA.start({ y: -300, opacity: 0, transition: { duration: 1 } });
      rightA.start({ y: 300, opacity: 0, transition: { duration: 1 } });
      ampControl.start({ opacity: 0, transition: { duration: 1 } });

      await new Promise((res) => setTimeout(res, 1000));

      if (onFinish) onFinish(); // notify parent that animation finished
    };

    animate();
  }, []);

  return (
    <motion.div
      initial={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 3000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10rem',
        fontWeight: 'bold',
        color: '#0a3d62',
        textShadow: '2px 2px 20px rgba(0,0,0,0.3)',
      }}
    >
      <motion.span
        initial={{ x: -500, opacity: 0 }}
        animate={leftA}
        style={{ transform: 'rotateY(15deg)' }}
      >
        A
      </motion.span>

      {showAmp && (
        <motion.span
          animate={ampControl}
          style={{ margin: '0 0.5rem' }}
        >
          &
        </motion.span>
      )}

      <motion.span
        initial={{ x: 500, opacity: 0 }}
        animate={rightA}
        style={{ transform: 'rotateY(-15deg)' }}
      >
        A
      </motion.span>
    </motion.div>
  );
}
