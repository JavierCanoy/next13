"use client";
import Image from "next/image";
import Users from "./users/page";
import Dogs from "./dog/page";
import { Suspense } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Lottie from "lottie-react";
import animationData from "./assets/animation_ll0al6md.json";
export default function Home() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  // const form = useRef();

  // const sendEmail = (e: any) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_hnu7x0u",
  //       "template_7y8qbag",
  //       form.current,
  //       "BLDAtPUmTlrNgOSm8"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("send ! ");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <main>
      <h1>javier bernadas canoy1 ! </h1>
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>  */}

      <div>
        <div className=" flex justify-center">
          <Lottie animationData={animationData} className=" h-96 w-96" />
        </div>
        <p className=" text-center">javier bernadas canoy ! </p>
        <div>
          <Suspense
            fallback={
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Users />
          </Suspense>
        </div>
        <div className=" flex justify-center">
          <Suspense
            fallback={
              // <div>
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     height="50px"
              //     width="50px"
              //     viewBox="0 0 200 200"
              //     class="pencil"
              //   >
              //     <defs>
              //       <clipPath id="pencil-eraser">
              //         <rect height="30" width="30" ry="5" rx="5"></rect>
              //       </clipPath>
              //     </defs>
              //     <circle
              //       transform="rotate(-113,100,100)"
              //       stroke-linecap="round"
              //       stroke-dashoffset="439.82"
              //       stroke-dasharray="439.82 439.82"
              //       stroke-width="2"
              //       stroke="currentColor"
              //       fill="none"
              //       r="70"
              //       class="pencil__stroke"
              //     ></circle>
              //     <g transform="translate(100,100)" class="pencil__rotate">
              //       <g fill="none">
              //         <circle
              //           transform="rotate(-90)"
              //           stroke-dashoffset="402"
              //           stroke-dasharray="402.12 402.12"
              //           stroke-width="30"
              //           stroke="hsl(223,90%,50%)"
              //           r="64"
              //           class="pencil__body1"
              //         ></circle>
              //         <circle
              //           transform="rotate(-90)"
              //           stroke-dashoffset="465"
              //           stroke-dasharray="464.96 464.96"
              //           stroke-width="10"
              //           stroke="hsl(223,90%,60%)"
              //           r="74"
              //           class="pencil__body2"
              //         ></circle>
              //         <circle
              //           transform="rotate(-90)"
              //           stroke-dashoffset="339"
              //           stroke-dasharray="339.29 339.29"
              //           stroke-width="10"
              //           stroke="hsl(223,90%,40%)"
              //           r="54"
              //           class="pencil__body3"
              //         ></circle>
              //       </g>
              //       <g
              //         transform="rotate(-90) translate(49,0)"
              //         class="pencil__eraser"
              //       >
              //         <g class="pencil__eraser-skew">
              //           <rect
              //             height="30"
              //             width="30"
              //             ry="5"
              //             rx="5"
              //             fill="hsl(223,90%,70%)"
              //           ></rect>
              //           <rect
              //             clip-path="url(#pencil-eraser)"
              //             height="30"
              //             width="5"
              //             fill="hsl(223,90%,60%)"
              //           ></rect>
              //           <rect
              //             height="20"
              //             width="30"
              //             fill="hsl(223,10%,90%)"
              //           ></rect>
              //           <rect
              //             height="20"
              //             width="15"
              //             fill="hsl(223,10%,70%)"
              //           ></rect>
              //           <rect
              //             height="20"
              //             width="5"
              //             fill="hsl(223,10%,80%)"
              //           ></rect>
              //           <rect
              //             height="2"
              //             width="30"
              //             y="6"
              //             fill="hsla(223,10%,10%,0.2)"
              //           ></rect>
              //           <rect
              //             height="2"
              //             width="30"
              //             y="13"
              //             fill="hsla(223,10%,10%,0.2)"
              //           ></rect>
              //         </g>
              //       </g>
              //       <g
              //         transform="rotate(-90) translate(49,-30)"
              //         class="pencil__point"
              //       >
              //         <polygon
              //           points="15 0,30 30,0 30"
              //           fill="hsl(33,90%,70%)"
              //         ></polygon>
              //         <polygon
              //           points="15 0,6 30,0 30"
              //           fill="hsl(33,90%,50%)"
              //         ></polygon>
              //         <polygon
              //           points="15 0,20 10,10 10"
              //           fill="hsl(223,10%,10%)"
              //         ></polygon>
              //       </g>
              //     </g>
              //   </svg>
              // </div>
              <div className=" mb-20 flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>

              //loading-spinner
              // <div>
              //   <ClipLoader
              //     color={color}
              //     loading={loading}
              //     cssOverride={override}
              //     size={150}
              //     aria-label="Loading Spinner"
              //     data-testid="loader"
              //   />
              // </div>
            }
          >
            <Dogs />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
