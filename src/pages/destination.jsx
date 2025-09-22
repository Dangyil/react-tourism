import { useState } from "react";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const destinations = [
    {
        name: "Moon",
        image: moon,
        title:"MOON",
        description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"384,400 KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"3 DAYS"
    },
    {
        name: "Mars",
        image: mars,
        title:"MARS",
        description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"225 MIL. KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"9 MONTHS"
    },
    {
        name: "Europa",
        image: europa,
        title:"EUROPA",
        description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"628 MIL. KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"3 YEARS"
    },
    {
        name: "Titan",
        image: titan,
        title:"TITAN",
        description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"1.6 BIL. KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"7 YEARS"
    }
]

export default function Destination() {
const [active, setActive] = useState(0);

    return (
        <div className="h-full flex flex-col pt-10 md:justify-center items-center gap-10 lg:pl-15 lg:flex-row lg:gap-20 xl:pl-5 xl:gap-25 ">
            <div className="font-condensed md:absolute top-25 md:left-35 space-x-2">
                <span className="text-gray-400">01</span>
                <span>PICK YOUR DESTINATION</span>
            </div>
            <img src={destinations[active].image} className="size-40 lg:size-80"></img>    
            <div className="flex flex-col w-3/4 lg:w-1/2 justify-center items-center text-center lg:text-left gap-5 lg:items-start lg:pl-10 xl:pl-30">
            <div className="flex justify-center lg:justify-start space-x-6 uppercase tracking-widest text-sm mb-6">
            {destinations.map((dest, index) => (
            <button
              key={dest.name}
              onClick={() => setActive(index)}
              className={`pb-2 border-b-2 ${
                active === index
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:text-white hover:border-gray-500"}`}>
              {dest.name}
            </button>
            ))}
            </div>
            <h1 className="font-bellefair text-6xl lg:text-8xl">{destinations[active].title}</h1>
            <p className="font-barlow w-full md:w-5/8">{destinations[active].description}</p>
            <div className="flex flex-col gap-3">
            <hr className="w-full border-t border-gray-500 opacity-50" />
                <div className="font-condensed flex flex-col gap-3 md:flex-row">
                    <span>{destinations[active].avgdistance}</span>
                    <span>{destinations[active].avgdistancevalue}</span>
                </div>
                <div className="font-condensed flex flex-col gap-3 md:flex-row">
                    <span>{destinations[active].esttraveltime}</span>
                    <span>{destinations[active].esttraveltimevalue}</span>
                </div>
            </div>
            </div>
        </div>
    )
}