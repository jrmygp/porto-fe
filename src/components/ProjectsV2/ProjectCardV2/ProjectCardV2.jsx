import AnimationWrapper from "@/components/AnimationWrapper";
import { IoMdOpen } from "react-icons/io";

const ProjectCardV2 = ({ id, image, title, description, stacks, url }) => {
  return (
    <AnimationWrapper delay={0.5}>
      <div className={`flex gap-6 ${id % 2 == 0 ? "flex-row-reverse" : "flex-row"}`}>
        <img alt="project-img" src={image} className="w-[450px] rounded-lg object-cover" />

        <div className="flex flex-col gap-2">
          <p className="text-primary font-bold font-ubuntu text-2xl">{title}</p>
          <p className="text-text-primary text-lg font-ubuntu font-bold">{description}</p>

          <div className="flex items-center gap-2 mt-10">
            {stacks.map((stack, idx) => (
              <img key={idx} alt={`${stack.img}-img`} src={stack.img} className="h-8 w-8 object-contain rounded-lg" />
            ))}
          </div>

          <a className="flex items-center gap-2 cursor-pointer mt-2" href={url} target="_blank" rel="noreferrer">
            <IoMdOpen size={28} className="text-text-primary" />
            <p className="font-semibold font-ubuntu text-text-primary text-lg">Live</p>
          </a>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default ProjectCardV2;
