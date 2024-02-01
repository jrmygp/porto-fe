/* eslint-disable no-unused-vars */
import Button from "./Button";

function ProjectCard({ title, description, url, image, stacks = [] }) {
  const hostName = import.meta.env.VITE_PUBLIC_API;

  return (
    <div className="h-[550px] shadow-[0px_0px_12px_0px_#fff] rounded-xl z-20 flex flex-col items-center gap-7 p-6 bg-primary">
      <img
        className="h-64 w-full object-contain rounded-xl bg-primary"
        src={`${hostName}/${image}`}
        alt={`${title}-img`}
      />

      <h2 className="text-4xl text-center">{title}</h2>

      <div className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] h-1 w-full" />

      {/* <article>
        <p className="text-left text-2xl project-description">{description}</p>
      </article> */}

      <section className="w-full flex flex-col gap-2">
        <p className="text-white text-2xl">Tech used :</p>
        <div className="flex flex-wrap gap-2">
          {stacks?.length > 0 &&
            stacks.map((stack) => {
              return <img key={stack.id} src={`${hostName}/${stack.image}`} className="h-10 w-10 object-contain" />;
            })}
        </div>
      </section>

      <Button title="Look it up" href={url} />
    </div>
  );
}

export default ProjectCard;
