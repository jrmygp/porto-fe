import TechStackItem from "./TechStackItem";
import ReactJS from "@/assets/react.png";
import NextJS from "@/assets/nextjs.png";
import NodeJS from "@/assets/node.png";
import ExpressJS from "@/assets/express_js.png";
import ReactNative from "@/assets/react_native.png";
import Golang from "@/assets/go.png";

function TechStacks() {
  const techs = [
    {
      id: 1,
      title: "React",
      image: ReactJS,
      percentage: 85,
    },
    {
      id: 2,
      title: "Next",
      image: NextJS,
      percentage: 80,
    },
    {
      id: 3,
      title: "Node",
      image: NodeJS,
      percentage: 75,
    },
    {
      id: 4,
      title: "Express",
      image: ExpressJS,
      percentage: 75,
    },
    {
      id: 5,
      title: "React Native",
      image: ReactNative,
      percentage: 80,
    },
    {
      id: 6,
      title: "Golang",
      image: Golang,
      percentage: 70,
    },
  ];

  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10">Tech Stacks</h1>

      <section className="flex flex-col gap-10">
        {techs.length > 0 &&
          techs.map((tech) => {
            return <TechStackItem key={tech.id} image={tech.image} name={tech.title} value={tech.percentage} />;
          })}
      </section>
    </div>
  );
}

export default TechStacks;
