import React from "react";
import Image from "next/image";
// async function getDog() {
//   const res = await fetch("https://dog.ceo/api/breeds/image/random", {
//     cache: "no-cache",
//   });

//   return res.json();
// }

const getDog = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });
  return res.json();
};

export default async function Dogs() {
  const data = await getDog();
  return (
    <div className=" flex justify-center mb-20">
      <Image src={data.message} width={200} height={200} alt="dog" />
    </div>
  );
}
