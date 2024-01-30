import Button from "./Button";

function ProjectCard({ title, description, url, image }) {
  const hostName = import.meta.env.VITE_PUBLIC_API;

  return (
    <div className="h-[700px] shadow-[0px_0px_12px_0px_#fff] rounded-xl z-20 flex flex-col items-center gap-7 p-6 bg-primary">
      <img
        className="h-64 w-full object-contain rounded-xl bg-primary"
        src={`${hostName}/${image}`}
        alt={`${title}-img`}
      />

      <h2 className="text-4xl">{title}</h2>

      <div className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] h-1 w-full" />

      <article>
        <p className="text-left text-2xl project-description">{description}</p>
      </article>

      <Button title="Look it up" href={url} />
    </div>
  );
}

export default ProjectCard;
