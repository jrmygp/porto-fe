import React from "react";

import reactImg from "../assets/react.png";
import reactNativeImg from "../assets/react_native.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import express from "../assets/express_js.png";
import javascript from "../assets/javascript.png";
import TechStackItem from "./TechStackItem";

function TechStacks() {
  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10">Tech Stacks</h1>

      <section className="flex flex-col gap-10">
        <TechStackItem image={reactImg} name={"React.js"} value={80} />
        <TechStackItem image={reactNativeImg} name={"React Native"} value={70} />
        <TechStackItem image={nextjs} name={"Next.js"} value={75} />
        <TechStackItem image={node} name={"Node.js"} value={70} />
        <TechStackItem image={express} name={"Express.js"} value={65} />
        <TechStackItem image={javascript} name={"Javascript"} value={75} />
      </section>
    </div>
  );
}

export default TechStacks;
