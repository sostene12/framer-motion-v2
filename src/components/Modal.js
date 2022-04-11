import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const modalVariants = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        // this div will represent the background of low opacity that appears
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="initial"
            animate="animate"
          >
            <p>Want to make another Pizza</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
