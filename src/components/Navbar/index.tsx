"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Button from "../Buttons/Button";

const variants: Variants = {
  open: { opacity: 1, height: "100vh" },
  closed: { opacity: 0, height: "0px" },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    if (hamburgerRef.current) {
      const hamburgerElement =
        //@ts-expect-error
        hamburgerRef.current.querySelector(".hamburger-react");
      if (hamburgerElement) {
        hamburgerElement.setAttribute("aria-label", "Toggle menu");
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className="fixed w-screen bg-primary text-text top-0 z-50 lg:hidden"
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        transition={{
          duration: 0.5,
        }}
      >
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className="py-[80px] pl-[10%] flex flex-col gap-10 h-full text-4xl"
        >
          <motion.li variants={itemVariants}>
            <Link
              title="Strona główna"
              href="/"
              className="font-primary font-light mt-10"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Strona główna
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              title="Akredytacje"
              href="/#akredytacje"
              className="font-primary font-light mt-10"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Akredytacje
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              title="Oferta"
              href="/#oferta-przedszkole"
              className="font-primary font-light mt-10"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Oferta
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              title="Galeria"
              href="/galeria"
              className="font-primary font-light mt-10"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Galeria
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              title="Zaproś nas do siebie"
              href="/#kontakt"
              className="font-primary font-light mt-10"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Kontakt
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>

      <header
        className={`padding fixed top-0 z-[999] flex h-[70px] w-full items-center justify-between lg:h-[80px] xl:h-[100px] ultra:h-[140px] ${
          isScrolled && !isOpen ? "bg-[#F1EBEB]" : ""
        }`}
      >
        <Link href="/" aria-label="audycjezbachmanem.pl">
          <Logo
            className={`${
              isOpen && "hidden"
            } w-[40px] lg:w-[47.5px] xl:w-[55px] desktop:w-[70px] ultra:w-[80px]`}
          />
        </Link>
        <div className="lg:hidden" ref={hamburgerRef}>
          <Hamburger
            toggled={isOpen}
            size={17}
            toggle={setIsOpen}
            color="#171717"
          />
        </div>

        <nav className="hidden items-center lg:flex lg:gap-7 xl:gap-10 desktop:gap-12 ultra:gap-[70px]">
          <Link
            title="Akredytacje"
            href="/#akredytacje"
            className="duration-300 hover:opacity-85 lg:text-base xl:text-lg desktop:text-xl"
          >
            Akredytacje
          </Link>
          <Link
            title="Oferta"
            href="/#oferta-przedszkole"
            className="duration-300 hover:opacity-85 lg:text-base xl:text-lg desktop:text-xl"
          >
            Oferta
          </Link>
          <Link
            title="Galeria"
            href="/galeria"
            className="duration-300 hover:opacity-85 lg:text-base xl:text-lg desktop:text-xl"
          >
            Galeria
          </Link>
          <Link
            title="Kontakt"
            href="/#kontakt"
            className="duration-300 hover:opacity-85 lg:text-base xl:text-lg desktop:text-xl"
          >
            <Button
              className="bg-[#8D1A8F] text-black"
              size="LARGE"
              text="Zaproś nas do siebie"
              variant="DEFAULT"
            />
          </Link>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
