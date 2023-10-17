"use client";
import Users from "./users/page";
import Dogs from "./dog/page";
import { Suspense } from "react";
import React, { useRef } from "react";
import { useState, CSSProperties } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/animation_ll0al6md.json";
import Link from "next/link";
export default function Home() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <main>
      <div>
        <div className=" flex justify-center border-2 border-red-500 rounded-md">
          <Lottie animationData={animationData} className=" h-96 w-96" />
        </div>
    <div className=" my-10">
    <Link  className=" bg-blue-300 hover:bg-blue-600 border-2 bor p-3 rounded-lg  mx-10  border-green-600"href="/components/user"> user Dashboard ! </Link>
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
            }
          >
            <Dogs />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
