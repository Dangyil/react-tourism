import { useState } from "react";
import commander from "../assets/crew/image-douglas-hurley.png"
import specialist from "../assets/crew/image-mark-shuttleworth.png"
import pilot from "../assets/crew/image-victor-glover.png"
import engineer from "../assets/crew/image-anousheh-ansari.png"

const crew = [
    {
        member:"",
        title:"COMMANDER",
        Name:"DOUGLAS HURLEY",
        bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image:commander
    }
    ,
    {
        member:"",
        title:"MISSION SPECIALIST",
        Name:"MARK SHUTTLEWORTH",
        bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image:specialist
    },
    {
        member:"",
        title:"PILOT",
        Name:"VICTOR GLOVER",
        bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        image:pilot
    },
    {
        member:"",
        title:"FLIGHT ENGINEER",
        Name:"ANOUSHEH ANSARI",
        bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        image:engineer
    }
]
export default function Crew() {
    const [crewMember, setCrewMember] = useState(0);

    return (
        <div className="h-full flex flex-col pt-10 md:justify-center items-center gap-10 lg:gap-5 lg:pl-15 xl:pl-2 xl:gap-30 lg:flex-row">
            <div className="font-condensed md:absolute top-25 md:left-30 space-x-2">
                <span className="text-gray-400">02</span>
                <span>MEET YOUR CREW</span>   
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:text-left gap-5 w-3/4 lg:w-1/2 xl:w-3/8 lg:items-start">
                <h1 className="font-bellefair text-2xl">{crew[crewMember].title}</h1>
                <h1 className="font-bellefair text-3xl">{crew[crewMember].Name}</h1>
                <p className="font-barlow">{crew[crewMember].bio}</p>
                <div className="flex space-x-5">
                    {crew.map((crew, index) => (
                        <button
                            key={crew.member}
                            onClick={() => setCrewMember(index)}
                            className={`p-2 rounded-full ${index === crewMember ? 'bg-white' : 'bg-blue-200'} hover:bg-gray-100`}>
                            {crew.member}
                        </button>
                    ))}
                </div>
            </div>
            <div className="lg:w-3/8">            
                <img src={crew[crewMember].image} className="h-70 w-50 md:w-70 md:h-90 lg:w-100 lg:h-110"></img>
            </div>    
        </div>
    )
}