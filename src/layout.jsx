import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "./assets/shared/logo.svg";
import hamburger from "./assets/shared/icon-hamburger.svg";
import close from "./assets/shared/icon-close.svg";

import homeMobile from "./assets/home/background-home-mobile.jpg";
import homeTablet from "./assets/home/background-home-tablet.jpg";
import homeDesktop from "./assets/home/background-home-desktop.jpg";

import destinationMobile from "./assets/destination/background-destination-mobile.jpg";
import destinationTablet from "./assets/destination/background-destination-tablet.jpg";
import destinationDesktop from "./assets/destination/background-destination-desktop.jpg";

import crewMobile from "./assets/crew/background-crew-mobile.jpg";
import crewTablet from "./assets/crew/background-crew-tablet.jpg";
import crewDesktop from "./assets/crew/background-crew-desktop.jpg";

import technologyMobile from "./assets/technology/background-technology-mobile.jpg";
import technologyTablet from "./assets/technology/background-technology-tablet.jpg";
import technologyDesktop from "./assets/technology/background-technology-desktop.jpg";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const getBackground = () => {
    let mobile, tablet, desktop;

    switch (location.pathname) {
      case "/destination":
        mobile = destinationMobile;
        tablet = destinationTablet;
        desktop = destinationDesktop;
        break;
      case "/crew":
        mobile = crewMobile;
        tablet = crewTablet;
        desktop = crewDesktop;
        break;
      case "/technology":
        mobile = technologyMobile;
        tablet = technologyTablet;
        desktop = technologyDesktop;
        break;
      default: // home
        mobile = homeMobile;
        tablet = homeTablet;
        desktop = homeDesktop;
    }

    if (isDesktop) return `url(${desktop})`;
    if (isTablet) return `url(${tablet})`;
    return `url(${mobile})`;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.div variants={container}
      initial="hidden"
      animate="show" className="w-screen h-screen bg-cover bg-center bg-no-repeat text-white md:pt-4"
      style={{ backgroundImage: getBackground() }}>
      {/*Header*/}
      <header className="w-screen h-1/12 flex justify-between items-center pl-6">
        <img src={logo} alt="Logo" className="size-7 mr-6" />
        {/*Horizontal line*/}
        <div className="lg:w-3/8">
          <hr className="hidden md:block border-t border-gray-500 opacity-50" />
        </div>
        {/*Desktop Nav Menu*/}
        <nav className="w-9/10 lg:w-5/8">
          <ul className="hidden font-condensed md:flex md:w-full md:space-x-8 md:justify-center lg:space-x-12 backdrop-blur-2xl p-4">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2 hover:pb-4 hover:border-b-2 hover:border-gray-500")}>
                <span className="text-gray-400">00</span><span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2 hover:pb-4 hover:border-b-2 hover:border-gray-500")}>
                <span className="text-gray-400">01</span><span>Destination</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2 hover:pb-4 hover:border-b-2 hover:border-gray-500")}>
                <span className="text-gray-400">02</span><span>Crew</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2 hover:pb-4 hover:border-b-2 hover:border-gray-500")}>
                <span className="text-gray-400">03</span><span>Technology</span>
              </NavLink>
            </li>
          </ul>
          {/*Mobile Nav Menu*/}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul variants={container}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.5 }}
                onClick={() => setMenuOpen(false)} className="md:hidden space-y-6 absolute top-0 right-0 w-3/4 h-screen text-xl backdrop-blur-2xl pl-6 pt-40">
                <motion.li variants={item} className="w-full">
                  <NavLink to="/" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2  hover:border-r-4 hover:border-gray-500'}`}>
                    <span className="text-gray-400">00</span><span>Home</span>
                  </NavLink>
                </motion.li>
                <motion.li variants={item} className="w-full">
                  <NavLink to="/destination" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2 hover:border-r-4 hover:border-gray-500'}`}>
                    <span className="text-gray-400">01</span><span>Destination</span>
                  </NavLink>
                </motion.li>
                <motion.li variants={item} className="w-full">
                  <NavLink to="/crew" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2 hover:border-r-4 hover:border-gray-500'}`}>
                    <span className="text-gray-400">02</span><span>Crew</span>
                  </NavLink>
                </motion.li>
                <motion.li variants={item} className="w-full">
                  <NavLink to="/technology" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2 hover:border-r-4 hover:border-gray-500'}`}>
                    <span className="text-gray-400">03</span><span>Technology</span>
                  </NavLink>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
        {/*Hamburger Icon*/}
        <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer z-50 mr-6">
          {menuOpen ? <img src={close} alt="Close Menu" className="w-5" /> : <img src={hamburger} alt="Open Menu" className="w-5" />}
        </div>
      </header>
      {/*Main content*/}
      <main className="w-screen h-11/12">
        <Outlet />
      </main>
    </motion.div>
  );
}