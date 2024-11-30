import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { animate, delay } from "motion";

const initialLoading = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,

    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
  whileHover: {
    color: "var(--primary-color)",
    scale: 1.2,
  },
};

const Navbar = () => {
  return (
    <>
      <header className=" w-full px-20 py-4 flex justify-between">
        <NavLink to={"/"}>
          <motion.p
            variants={initialLoading}
            whileHover={"whileHover"}
            initial="initial"
            animate="animate"
            className="text-current text-2xl font-bold"

          >
            Milan.
          </motion.p>
        </NavLink>

        <div className=" flex gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-[var(--primary-color)]"
                : "font-bold  "
            }
          >
            <motion.p
              variants={initialLoading}
              whileHover={"whileHover"}
              initial="initial"
              animate="animate"
              className="text-current"
            >
              Home
            </motion.p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-[var(--primary-color)]"
                : "font-semibold  "
            }
          >
            <motion.p
              variants={initialLoading}
              whileHover={"whileHover"}
              initial="initial"
              animate="animate"
            >
              {" "}
              About Me
            </motion.p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-[var(--primary-color)]"
                : "font-semibold  "
            }
          >
            <motion.p
              variants={initialLoading}
              whileHover={"whileHover"}
              initial="initial"
              animate="animate"
            >
              Projects
            </motion.p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-[var(--primary-color)]"
                : "font-semibold  "
            }
          >
            <motion.p
              variants={initialLoading}
              whileHover={"whileHover"}
              initial="initial"
              animate="animate"
            >
              Skills
            </motion.p>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
