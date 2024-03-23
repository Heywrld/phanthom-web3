import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}
const LoginStep2 = ({ setActiveForm }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="mt-5">
        <div className="h-[150px] w-[150px] ">
          <MySVGComponent />
        </div>
        <div className="mt-6 mb-3 w-full flex flex-col items-center justify-center ">
          <h1 className="leading-[34px] font-inter text-[28px] font-medium mb-[5px] text-white text-center">
            Import Account
          </h1>
          <p className="text-lightBlack text-center text-base font-normal leading-6 ">
            We found 1 account
          </p>
        </div>
      </div>
      <div className="mt-auto w-full flex flex-col gap-[10px]">
        <Button className="bg-lightGray text-white">View Accounts</Button>
        <Button
          className="text-blackGray"
          onClick={() => setActiveForm((prev) => prev + 1)}
        >
          {" "}
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LoginStep2;

const MySVGComponent = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 250 250"
        width="150"
        height="150"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          height: "100%",
          transform: "translate3d(0px, 0px, 0px)",
          contentVisibility: "visible",
        }}
      >
        <g
          clip-path="url(#__lottie_element_4)"
          transform="matrix(1,0,0,1,0,0)"
          opacity="1"
        >
          <g
            transform="matrix(0.9999651312828064,0,0,0.9999651312828064,150,150)"
            opacity="0.1"
            style={{ display: "block" }}
          >
            <g opacity="1" transform="matrix(2,0,0,2,0,0)">
              <path
                fill="rgb(32,229,111)"
                fill-opacity="1"
                d=" M0,-41 C22.627899169921875,-41 41,-22.627899169921875 41,0 C41,22.627899169921875 22.627899169921875,41 0,41 C-22.627899169921875,41 -41,22.627899169921875 -41,0 C-41,-22.627899169921875 -22.627899169921875,-41 0,-41z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(1,0,0,1,150,150)"
            opacity="0.004935000000014043"
            style={{ display: "none" }}
          >
            <g opacity="1" transform="matrix(2,0,0,2,0,0)">
              <path
                fill="rgb(32,229,111)"
                fill-opacity="1"
                d=" M0,-69.86493682861328 C38.5584602355957,-69.86493682861328 69.86493682861328,-38.5584602355957 69.86493682861328,0 C69.86493682861328,38.5584602355957 38.5584602355957,69.86493682861328 0,69.86493682861328 C-38.5584602355957,69.86493682861328 -69.86493682861328,38.5584602355957 -69.86493682861328,0 C-69.86493682861328,-38.5584602355957 -38.5584602355957,-69.86493682861328 0,-69.86493682861328z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.8999999761581421,0,0,0.8999999761581421,150.1820068359375,138.49600219726562)"
            opacity="1"
            style={{ display: "none" }}
          >
            <g opacity="1" transform="matrix(2,0,0,2,0,0)">
              <path
                stroke-linecap="round"
                stroke-linejoin="miter"
                fill-opacity="0"
                stroke-miterlimit="4"
                stroke="rgb(29,206,99)"
                stroke-opacity="1"
                stroke-width="10"
                d=" M1.2699999809265137,17.704999923706055 C0.8510000109672546,17.735000610351562 0.4269999861717224,17.75 0,17.75 C-5.070000171661377,17.75 -9.647000312805176,15.619000434875488 -12.883000373840332,12.204999923706055"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.9999651312828064,0,0,0.9999651312828064,148.19606018066406,152.430908203125)"
            opacity="1"
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(0.4373300075531006,0,0,0.4373300075531006,0,0)"
            >
              <path
                fill="rgb(32,229,111)"
                fill-opacity="1"
                d=" M55.90399932861328,-58.729000091552734 C55.90399932861328,-58.729000091552734 -16.180999755859375,12.788999557495117 -16.180999755859375,12.788999557495117 C-16.180999755859375,12.788999557495117 -43.12099838256836,-13.9399995803833 -43.12099838256836,-13.9399995803833 C-46.39799880981445,-17.19099998474121 -51.67599868774414,-17.19099998474121 -54.770999908447266,-13.9399995803833 C-54.770999908447266,-13.9399995803833 -64.23699951171875,-4.729000091552734 -64.23699951171875,-4.729000091552734 C-67.33100128173828,-1.4780000448226929 -67.33100128173828,3.759000062942505 -64.23699951171875,6.828999996185303 C-64.23699951171875,6.828999996185303 -22.006000518798828,48.729000091552734 -22.006000518798828,48.729000091552734 C-18.729000091552734,51.97999954223633 -13.451000213623047,51.97999954223633 -10.173999786376953,48.729000091552734 C-10.173999786376953,48.729000091552734 77.0199966430664,-37.959999084472656 77.0199966430664,-37.959999084472656 C80.2969970703125,-41.029998779296875 80.2969970703125,-46.268001556396484 77.0199966430664,-49.51900100708008 C77.0199966430664,-49.51900100708008 67.73600006103516,-58.729000091552734 67.73600006103516,-58.729000091552734 C64.45899963378906,-61.97999954223633 59.180999755859375,-61.97999954223633 55.90399932861328,-58.729000091552734z"
              ></path>
            </g>
          </g>
          <g
            clip-path="url(#__lottie_element_8)"
            style={{ display: "none" }}
            transform="matrix(0.2828427255153656,0.2828427255153656,-0.2828427255153656,0.2828427255153656,197.1916046142578,103.26520538330078)"
            opacity="1"
          >
            <g
              transform="matrix(0,0,0,0,18.5,40.5)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,32.5,-192.5)">
                <path
                  fill="rgb(32,228,111)"
                  fill-opacity="1"
                  d=" M0,-18.5 C10.210149765014648,-18.5 18.5,-10.210149765014648 18.5,0 C18.5,10.210149765014648 10.210149765014648,18.5 0,18.5 C-10.210149765014648,18.5 -18.5,10.210149765014648 -18.5,0 C-18.5,-10.210149765014648 -10.210149765014648,-18.5 0,-18.5z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
