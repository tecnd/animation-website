import ImageTool from "./ImageTool";
import video from "./videos/rube_goldberg.mp4";
import storyboard from "./images/rube_goldberg_storyboard.png?h=540&format=png;avif;webp&imagetools&meta";
import rube1 from "./images/rube1.png?h=540&format=png;avif;webp&imagetools&meta";
import rube2 from "./images/rube2.png?h=540&format=png;avif;webp&imagetools&meta";
import rube3 from "./images/rube3.png?h=540&format=png;avif;webp&imagetools&meta";
import rube4 from "./images/rube4.png?h=540&format=png;avif;webp&imagetools&meta";
import rube5 from "./images/rube5.png?h=540&format=png;avif;webp&imagetools&meta";

export default function Rube() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Project 3: Bouncing Ball</h1>
      <h2 className="text-xl pb-5">3/24/22</h2>
      <video controls src={video} className="w-full my-3" />
      <h2 className="text-2xl my-3">Storyboard</h2>
      <ImageTool src={storyboard} />
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={rube1} className="md:w-1/2 p-5" />
        <p className="md:w-1/2">
          First, a small ball rolls down a sequence of ramps.
        </p>
      </div>
      <div className="flex justify-center align-center items-center flex-col md:flex-row-reverse">
        <ImageTool src={rube2} className="md:w-1/2 p-5" />
        <p className="md:w-1/2">
          The small ball hits a medium ball, which in turn hits a large ball.
        </p>
      </div>
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={rube3} className="md:w-1/2 p-5" />
        <p className="md:w-1/2">
          The large ball falls on a seesaw, freeing the pendulum.
        </p>
      </div>
      <div className="flex justify-center align-center items-center flex-col md:flex-row-reverse">
        <ImageTool src={rube4} className="md:w-1/2 p-5" />
        <p className="md:w-1/2">
          The pendulum starts a series of hinged blocks.
        </p>
      </div>
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={rube5} className="md:w-1/2 p-5" />
        <p className="md:w-1/2">
          The last hinged block gently pushes over a short line of dominoes.
        </p>
      </div>
    </div>
  );
}
