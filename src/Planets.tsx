import ImageTool from "./ImageTool";
import planets1 from "./videos/planets1.mp4";
import planets2 from "./videos/planets2.mp4";
import textured from "./images/textured.png?h=540&format=png;avif;webp&imagetools&meta";
import inclinations from "./images/inclinations.png?h=540&format=png;avif;webp&imagetools&meta";
import supernova from "./images/supernova.png?h=540&format=png;avif;webp&imagetools&meta";
import lighted from "./images/lighted.png?h=540&format=png;avif;webp&imagetools&meta";

export default function Planets() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Project 1: Solar System</h1>
      <h2 className="text-xl pb-5">2/17/22</h2>
      <video controls src={planets1} className="w-full my-3" />
      <video controls src={planets2} className="w-full my-3" />
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={textured} className="md:w-1/2" />
        <p className="md:w-1/2">
          The first change I made was to texture all of the objects. That
          includes all the planets, Pluto, the moons, and the Sun. I used
          textures from{" "}
          <a
            className="underline"
            href="https://www.solarsystemscope.com/textures/"
          >
            https://www.solarsystemscope.com/textures/
          </a>
          .
        </p>
      </div>
      <div className="flex justify-center align-center items-center flex-col md:flex-row-reverse">
        <ImageTool src={inclinations} className="md:w-1/2" />
        <p className="md:w-1/2">
          I also inclined the planet orbits. The inclinations are exaggerated
          from their true values for visual effect by 2-5x.
        </p>
      </div>
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={supernova} className="md:w-1/2" />
        <p className="md:w-1/2">
          For fun, I made the Sun supernova and expand to consume the solar
          system at the end.
        </p>
      </div>
      <div className="flex justify-center align-center items-center flex-col md:flex-row-reverse">
        <ImageTool src={lighted} className="md:w-1/2" />
        <p className="md:w-1/2">
          Last, I added a point light to the middle of the Sun and used the
          software renderer to render the final result.
        </p>
      </div>
    </div>
  );
}
