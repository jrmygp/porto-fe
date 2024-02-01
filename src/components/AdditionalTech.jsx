import { useEffect, useState } from "react";

import axiosInstance from "@/config/api";

const AdditionalTech = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const res = await axiosInstance.get("/skill");
      setSkills(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10 break-words">Additional technologies and skills</h1>

      <div className="flex flex-wrap gap-4">
        {skills.length > 0 &&
          skills.map((skill) => {
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
