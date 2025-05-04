import {
  HeroSectionLeftText,
  HeroSectionStripOne,
  HeroSectionStripTwo,
  HeroSectionTopLeftText,
  NavBar,
  Button
} from "../components";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 relative ">
      <div className="image-cover bg-no-repeat brightness-50 z-0 top-18 left-20 absolute h-200 w-200 bg-[url(../../public/images/ZyrixcraftLogo.webp)]"></div>
      <Button />
      <NavBar  />
      <div className="space-y-4 text-center z-10  ">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight  ">
          <span className="text-white">We</span>
          <span className="text-white/60"> Transform</span>
          <span className="text-white/60"> Ideas</span>
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
         Into Impactful Digital
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
          Experiences.
        </p>
      </div>
      <HeroSectionTopLeftText />
      <HeroSectionLeftText/>
      <HeroSectionStripOne />
      <HeroSectionStripTwo />
    </div>
  );
};

export default HeroSection;
