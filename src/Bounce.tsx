import bounce from "./videos/bounce.mp4";

export default function Bounce() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Project 3: Bouncing Ball</h1>
      <h2 className="text-xl pb-5">3/24/22</h2>
      <video controls src={bounce} className="w-full my-3" />
    </div>
  );
}
