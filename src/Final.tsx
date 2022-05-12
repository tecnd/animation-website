import ImageTool from "./ImageTool";
import video from "./videos/final.webm";
import storyboard from "./images/finalStoryboard.png?h=540&format=png;avif;webp&imagetools&meta";
import final1 from "./images/finalSky.png?h=540&format=png;avif;webp&imagetools&meta";
import final2 from "./images/finalOpen.png?h=540&format=png;avif;webp&imagetools&meta";
import final3 from "./images/finalDocking.png?h=540&format=png;avif;webp&imagetools&meta";

export default function Final() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Final Project</h1>
      <h2 className="text-xl pb-5">5/11/22</h2>
      <video controls src={video} className="w-full my-3" />
      <h2 className="text-2xl my-3">Storyboard</h2>
      <ImageTool src={storyboard} />
      <h2 className="text-2xl my-3">Stills</h2>
      <ImageTool src={final1} className="p-3" />
      <ImageTool src={final2} className="p-3" />
      <ImageTool src={final3} className="p-3" />
    </div>
  );
}
