import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Loader from "@/components/Loader";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the time as per your requirement

    return () => clearTimeout(timer); // This will clear Timeout when component unmount like in willComponentUnmount
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader /> // Replace this with your custom loader
      ) : (
        <motion.div key={router.pathname}>
          <Component {...pageProps} />
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
