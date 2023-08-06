import React from "react";
import Image from "next/image";
// async function getDog() {
//   const res = await fetch("https://dog.ceo/api/breeds/image/random", {
//     cache: "no-cache",
//   });

//   return res.json();
// }
// setTimeout(() => {
//   return res.json();
// }, 3000); // 3 seconds

const getDog = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });
  const data = res.json();

  return data;
};

export default async function Dogs() {
  const data = await getDog();
  console.log("data is here ! ");
  return (
    <div className=" flex justify-center mb-20">
      <Image src={data.message} width={200} height={200} alt="dog" />
    </div>
  );
}
