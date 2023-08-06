import React from "react";

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
export default async function Users() {
  const data = await getData();
  return (
    <div>
      <h1 className=" font-bold text-center">Users ! </h1>
      {data.map((user: any) => {
        return (
          <p key={user.id} className=" my-2 text-center">
            {user.name}
          </p>
        );
      })}
    </div>
  );
}
