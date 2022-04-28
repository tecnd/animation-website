import sunflower from "./videos/sunflower.mp4";
import no_u from "./videos/no_u.mp4";

export default function Treasure() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Project 5: Dominos</h1>
      <h2 className="text-xl pb-5">4/28/22</h2>
      <video controls src={sunflower} className="w-full my-3" />
      <video controls src={no_u} className="w-full my-3" />
    </div>
  );
}
