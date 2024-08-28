const ProjectCardV2 = ({ image, title, description, stacks, url }) => {
  return (
    <a
      className="flex flex-col flex-wrap gap-6 w-[350px] group cursor-pointer h-[500px]"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="overflow-hidden">
        <img
          alt="project-img"
          src={image}
          className="h-[300px] object-contain transform transition-transform duration-700 ease-in-out group-hover:scale-125"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-ubuntu text-2xl text-left uppercase">{title}</p>
        <p className="text-sm font-ubuntu text-left opacity-55 uppercase">{description}</p>

        <div className="flex items-center gap-2 mt-10 justify-start">
          {stacks.map((stack, idx) => (
            <img key={idx} alt={`${stack.img}-img`} src={stack.img} className="h-8 w-8 object-contain rounded-lg" />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCardV2;
