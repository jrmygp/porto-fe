import React, { memo } from "react";

import image from "../assets/hero_img.png";
import Button from "./Button";

function Hero() {
  return (
    <div className="flex flex-col gap-8 relative">
      <h1 className="text-6xl z-10">Hello, Jeremy here!</h1>
      <article className="flex flex-col gap-16 z-10">
        <h2 className="text-4xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta harum quisquam corporis cum minus laboriosam
          iusto veritatis, culpa vel quod!
        </h2>

        <Button title="Let's begin" />
      </article>

      <img src={image} className="object-cover h-auto max-w-full absolute right-0" alt="hero-img" />
    </div>
  );
}

export default memo(Hero);
