import { useState } from "react"
import launchLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg"
import launchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg"
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg"
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg"
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg"

const technologies = [
  {
    id: 1,
    name: "LAUNCH VEHICLE",
    description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    portrait: launchPortrait,
    landscape: launchLandscape
  },
  {
    id: 2,
    name: "SPACEPORT",
    description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    portrait: spaceportPortrait,
    landscape: spaceportLandscape
  },
  {
    id: 3,
    name: "SPACE CAPSULE",
    description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    portrait: capsulePortrait,
    landscape: capsuleLandscape
   }
]

export default function Technology() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-full flex flex-col pt-10 md:justify-center items-center gap-10 lg:gap-5 lg:flex-row-reverse lg:pl-25">
        <div className="font-condensed md:absolute top-25 md:left-30 space-x-2">
          <span className="text-gray-400">03</span>
          <span>SPACE LAUNCH 101</span>   
        </div>
        <picture className="w-screen h-70 lg:w-5/8 lg:h-100">
          <source media="(min-width: 1024px)" srcSet={technologies[active].portrait} />
          <img src={technologies[active].landscape} className="w-full h-full" />
        </picture>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-3/4 lg:w-1/2 lg:items-start">
          <div className="flex gap-5 lg:flex-col">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActive(index)}
                className={`size-10 lg:size-15 rounded-full border ${
                  active === index ? "text-black bg-white" : "text-white hover:text-gray-400"
                }`}>
                {tech.id}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-5 justify-center text-center lg:items-start lg:pr-20 lg:text-left">
            <h1 className="font-bellefair text-xl">THE TERMINOLOGY</h1>
            <h1 className="font-bellefair text-2xl">{technologies[active].name}</h1>
            <p className="font-barlow">{technologies[active].description}</p>
          </div>
        </div>
    </div>
  )
}