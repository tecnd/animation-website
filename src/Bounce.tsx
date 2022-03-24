import ImageTool from "./ImageTool";
import bounce from "./videos/bounce.mp4";
import storyboard from "./images/storyboard.png?h=540&format=png;avif;webp&imagetools&meta";
import ballSquash from "./images/ballSquash.png?h=540&format=png;avif;webp&imagetools&meta";
import ballStretch from "./images/ballStretch.png?h=540&format=png;avif;webp&imagetools&meta";
import cannonSquash from "./images/cannonSquash.png?h=540&format=png;avif;webp&imagetools&meta";
import cannonStretch from "./images/cannonStretch.png?h=540&format=png;avif;webp&imagetools&meta";
import arc from "./images/arc.png?h=540&format=png;avif;webp&imagetools&meta";

export default function Bounce() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Project 3: Bouncing Ball</h1>
      <h2 className="text-xl pb-5">3/24/22</h2>
      <video controls src={bounce} className="w-full my-3" />
      <h2 className="text-2xl my-3">Storyboard</h2>
      <ImageTool src={storyboard} />
      <h2 className="text-2xl my-3">Squash and Stretch</h2>
      <p>
        The cannonball squashes and stretches in its movement to make it more
        dynamic and interesting to watch. The cannon also squashes and stretches
        when firing.
      </p>
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={ballSquash} className="md:w-1/2" />
        <ImageTool src={ballStretch} className="md:w-1/2" />
      </div>
      <h2 className="text-2xl my-3">Anticipation</h2>
      <p>The cannon squashes and stretches to anticipate the firing.</p>
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={cannonSquash} className="md:w-1/2" />
        <ImageTool src={cannonStretch} className="md:w-1/2" />
      </div>
      <h2 className="text-2xl my-3">Arcs</h2>
      <p>The ball moves in arcs to look more natural and realistic.</p>
      <div className="flex justify-center align-center items-center flex-col md:flex-row">
        <ImageTool src={arc} className="md:w-1/2" />
      </div>
    </div>
  );
}
