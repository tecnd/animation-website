import treasure from "./videos/treasure.mp4";
import wireframe from "./videos/treasureWireframe.mp4";
import amazon from "./images/treasureAmazon.jpg";
import ss from "./images/ss.png";
import ss10 from "./images/ss10.png";
import wf from "./images/wf.png";
import wf10 from "./images/wf10.png";

export default function Treasure() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Project 2: Treasure Chest</h1>
      <h2 className="text-xl pb-5">3/3/22</h2>
      <video controls src={wireframe} className="w-full my-3" />
      <video controls src={treasure} className="w-full my-3" />
      <div className="flex justify-center align-center items-center flex-col md:flex-row pb-3">
        <img src={amazon} className="md:w-1/2 pr-5" />
        <p className="md:w-1/2">
          I referenced this chest I found on{" "}
          <a
            className="underline"
            href="https://www.amazon.com/Leather-Treasure-Decorative-Storage-Handcrafted/dp/B089XK326V/?_encoding=UTF8&pd_rd_w=kcO6L&pf_rd_p=6571d503-3939-4d29-87b5-6a8ea95c783b&pf_rd_r=PVWD0SVP9RW37BX4RG1Q&pd_rd_r=ada6c253-ba7f-424f-a810-c18bf1b2c818&pd_rd_wg=fRU6B&ref_=pd_gw_ci_mcx_mi/"
          >
            Amazon
          </a>
          . I created a cube primitive and used the dimensions from the store
          page to get the right size. I got the graphics model from{" "}
          <a className="underline" href="https://skfb.ly/6UOoF">
            https://skfb.ly/6UOoF
          </a>
          .
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        <img src={ss} />
        <img src={ss10} />
        <img src={wf} />
        <img src={wf10} />
      </div>
    </div>
  );
}
