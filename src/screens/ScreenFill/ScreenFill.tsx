import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const ScreenFill = (): JSX.Element => {
  return (
    <main
      className="bg-black w-screen h-screen relative overflow-hidden"
      data-model-id="86:2"
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Bombsupply web"
        src="https://c.animaapp.com/mlmuzdx9E8U9lj/img/bombsupply-web-2.png"
      />

      {/* Object Group Container 
          Positioned using % to stay relative to the image.
          Using vw for width to scale with the screen.
      */}
      <div 
        className="absolute flex flex-col items-end z-10"
        style={{
          top: '60%',
          left: '34%', 
          width: '28vw',
          // We don't use transform translate here to keep the left edge predictable
        }}
      >
        {/* Top Text */}
        <div className="text-right mb-[1.5vw] w-full">
          <p className="[font-family:'Courier_Prime',monospace] font-bold text-white text-[1vw] leading-[1.4] tracking-tight">
            i'm working on other projects
          </p>
        </div>


        {/* Bottom Text */}
        <div className="text-right w-full">
          <p className="[font-family:'Courier_Prime',monospace] font-bold text-[1vw] leading-[1.5] tracking-tight">
            <span className="text-white">for available work email</span>
            <br />
            <span className="text-white">steven</span>
            <span className="text-[#e91735]">@</span>
            <span className="text-white">bombsupply.com</span>
            <br />
            <span className="text-white">in the meantime check out </span>
            <a 
              href="https://open.spotify.com/artist/53Vg9tuYpTSlrrWH9CLTN4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#e91735] underline decoration-[#e91735] cursor-pointer hover:text-red-400 transition-colors"
            >
              saturn will not
              <br />
              sleep
            </a>
            <span className="text-white"> my audio project</span>
          </p>
        </div>
      </div>
    </main>
  );
};
