import ReactJS from "@/assets/react.png";
import NextJS from "@/assets/nextjs.png";
import NodeJS from "@/assets/node.png";
import ExpressJS from "@/assets/express_js.png";
import ReactNative from "@/assets/react_native.png";
import Golang from "@/assets/go.png";
import Docker from "@/assets/docker.jpg";
import AWS from "@/assets/aws.png";
import Gorm from "@/assets/gorm.png";
import Gin from "@/assets/gin.png";
import Redux from "@/assets/redux.png";
import MySQL from "@/assets/mysql.png";
import Expo from "@/assets/expo.png";
import Firebase from "@/assets/firebase.png";

const AdditionalTech = () => {
  const skills = [
    {
      id: 1,
      title: "React",
      image: ReactJS,
    },
    {
      id: 2,
      title: "Next",
      image: NextJS,
    },
    {
      id: 3,
      title: "Node",
      image: NodeJS,
    },
    {
      id: 4,
      title: "Express",
      image: ExpressJS,
    },
    {
      id: 5,
      title: "React Native",
      image: ReactNative,
    },
    {
      id: 6,
      title: "Golang",
      image: Golang,
    },
    {
      id: 7,
      title: "AWS",
      image: AWS,
    },
    {
      id: 8,
      title: "Docker",
      image: Docker,
    },
    {
      id: 9,
      title: "Expo",
      image: Expo,
    },
    {
      id: 10,
      title: "Firebase",
      image: Firebase,
    },
    {
      id: 11,
      title: "Gin",
      image: Gin,
    },
    {
      id: 12,
      title: "GORM",
      image: Gorm,
    },
    {
      id: 13,
      title: "MySQL",
      image: MySQL,
    },
    {
      id: 14,
      title: "Redux",
      image: Redux,
    },
  ];

  const excludedSkills = ["React", "React Native", "Next", "Express", "Node", "Golang"];

  const filteredSkills = skills.filter((skill) => !excludedSkills.includes(skill.title));

  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10 break-words">Additional technologies and skills</h1>

      <div className="flex flex-wrap gap-4">
        {filteredSkills.length > 0 &&
          filteredSkills.map((skill) => {
            return (
              <li key={skill.id} className="text-white text-3xl">
                <span>{skill.title}</span>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default AdditionalTech;
