import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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

    return (
        <div className="w-screen h-screen bg-cover bg-center bg-no-repeat text-white md:pt-4"
        style={{ backgroundImage: getBackground() }}>
            {/*Header*/}
            <header className="w-screen h-1/12 flex justify-between items-center pl-6">
                <img src={logo} alt="Logo" className="size-7 mr-6" />
                {/*Horizontal line*/}
                <div className="lg:w-3/8">
                <hr className="hidden md:block border-t border-gray-500 opacity-50" />
                </div>
                {/*Desktop Nav Menu*/}
                <nav className="font-barlow w-9/10 lg:w-5/8">
                <ul className="hidden md:flex md:w-full md:space-x-8 md:justify-center lg:space-x-12 backdrop-blur-2xl    p-4">
                    <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2")}>
                        <span>00</span><span>Home</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/destination" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2")}>
                        <span>01</span><span>Destination</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/crew" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2")}>
                        <span>02</span><span>Crew</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/technology" className={({ isActive }) => (isActive ? "font-bold pb-4 border-b-2 space-x-2" : "space-x-2")}>
                        <span>03</span><span>Technology</span>
                    </NavLink>
                    </li>
                </ul>
                {/*Mobile Nav Menu*/}
                {menuOpen && (
                <ul onClick={() => setMenuOpen(false)} className="md:hidden space-y-6 absolute top-0 right-0 w-3/4 h-screen text-xl backdrop-blur-2xl pl-6 pt-40">
                    <li className="w-full">
                    <NavLink to="/" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2'}`}>
                        <span>00</span><span>Home</span>
                    </NavLink>
                    </li>
                    <li className="w-full">
                    <NavLink to="/destination" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2'}`}>
                        <span>01</span><span>Destination</span>
                    </NavLink>
                    </li>
                    <li className="w-full">
                    <NavLink to="/crew" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2'}`}>
                        <span>02</span><span>Crew</span>
                    </NavLink>
                    </li>
                    <li className="w-full">
                    <NavLink to="/technology" className={({ isActive }) => `block ${isActive ? 'border-r-4 space-x-2' : 'space-x-2'}`}>
                        <span>03</span><span>Technology</span>
                    </NavLink>
                    </li>
                </ul>
                )}
                </nav>
                {/*Hamburger Icon*/}
                <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer z-50 mr-6">
                {menuOpen ? <img src={close} alt="Close Menu" className="size-5" /> : <img src={hamburger} alt="Open Menu" className="size-5" />}
                </div>
            </header>
        {/*Main content*/}
        <main className="w-screen h-11/12">
            <Outlet />
        </main>
    </div>
  );
}