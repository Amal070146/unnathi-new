import React, { useState } from "react";
import "./ProjectsFunds.css";

const ListProject = () => {
  const [data, setData] = useState(require("./data.json"));
  console.log(data);
  return (
    <>
      {data.map((value) => (
        <div className="SingleProjectComponent">
          <div className="BackgroundCComponent"></div>
          <div className="FrontComponent">
            <h1>{value.projectName}</h1>
            <div>
              <a
                href={value.driveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="KnowMore">
                  Know More&nbsp;
                  <ArrowWhite />
                </button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdw2s6WBlIBHuvTXldp8nNFcEUk7b_Rp5ONksHcxvuFPDEJgA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  Support Us&nbsp;
                  <HeartLogo />
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListProject;

export const ArrowWhite = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="22"
      viewBox="0 0 34 26"
      fill="none"
    >
      <path
        d="M32.7075 14.4214C33.0486 14.0802 33.2402 13.6175 33.2402 13.135C33.2402 12.6525 33.0486 12.1898 32.7075 11.8486L22.4144 1.55548C22.2465 1.3817 22.0458 1.24308 21.8238 1.14772C21.6018 1.05236 21.363 1.00217 21.1214 1.00007C20.8798 0.997969 20.6402 1.04401 20.4166 1.1355C20.193 1.22698 19.9898 1.36209 19.819 1.53293C19.6482 1.70377 19.513 1.90693 19.4216 2.13054C19.3301 2.35416 19.284 2.59375 19.2861 2.83535C19.2882 3.07695 19.3384 3.3157 19.4338 3.5377C19.5291 3.75969 19.6678 3.96046 19.8415 4.12831L27.0287 11.3155L2.93259 11.3155C2.45002 11.3155 1.98721 11.5072 1.64598 11.8484C1.30475 12.1896 1.11305 12.6524 1.11305 13.135C1.11305 13.6176 1.30475 14.0804 1.64598 14.4216C1.98721 14.7629 2.45002 14.9546 2.93259 14.9546L27.0287 14.9546L19.8415 22.1417C19.5101 22.4849 19.3267 22.9445 19.3309 23.4216C19.335 23.8987 19.5264 24.355 19.8637 24.6924C20.2011 25.0297 20.6574 25.2211 21.1345 25.2253C21.6116 25.2294 22.0712 25.046 22.4144 24.7146L32.7075 14.4214Z"
        fill="white"
        stroke="#FBBA16"
        stroke-width="1.45352"
      />
    </svg>
  );
};

export const HeartLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="22"
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        d="M20.812 2C16.3857 2 14.2039 6.36362 14.2039 6.36362C14.2039 6.36362 12.0221 2 7.59571 2C3.99845 2 1.14982 5.00953 1.113 8.60066C1.038 16.0549 7.02639 21.3561 13.5902 25.8111C13.7712 25.9342 13.985 26 14.2039 26C14.4227 26 14.6365 25.9342 14.8175 25.8111C21.3807 21.3561 27.369 16.0549 27.2947 8.60066C27.2579 5.00953 24.4093 2 20.812 2Z"
        stroke="white"
        stroke-width="2.18181"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
