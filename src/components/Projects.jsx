import { memo, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { IoMdClose } from "react-icons/io";

import ProjectCard from "./ProjectCard";
import Nest from "@/assets/project/nest.png";
import KSS from "@/assets/project/kss.png";
import Prezent from "@/assets/project/prezent.jpg";
import SandezaBills from "@/assets/project/sandeza-bills.jpg";
import Healthymed from "@/assets/project/healthymed.png";
import Konekt from "@/assets/project/konekt.png";

function Projects() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
    },
  };

  const projects = [
    {
      id: 1,
      title: "Kolabora Smart System",
      description:
        "Multi function app which includes HRGA, CMS, and accounting modules. On top of that the app also provides built-in project & task management and real time chat feature for internal usage. This app intends to make people’s jobs easier to track and reduce the use of long-winded paper forms. After this application was implemented in this company, there has been a reduction in the use of paper forms for internal administration problems and an increase in ease of work between different divisions.",
      image: KSS,
      url: "https://kolabora.ksshub.com/",
      stacks: [],
    },
    {
      id: 2,
      title: "KSS Nest",
      description:
        "This is the mobile application version for Kolabora Smart System. Light multi functional app where users can be mobile with their work. Developed this application and also deployed it to the app store and play store.",
      image: Nest,
      url: "https://play.google.com/store/apps/details?id=com.kolabora.kssmobileapp&hl=id",
      stacks: [],
    },
    {
      id: 3,
      title: "Prezent",
      description:
        "Prezent offers comprehensive tools for your organization to develop a loyalty program, including point generation systems, campaign administration, digital voucher distribution, and comprehensive analytical reports. Prezent is designed to be incredibly user-friendly, making it simple to use.",
      image: Prezent,
      url: "",
      stacks: [],
    },
    {
      id: 4,
      title: "Sandeza Bills",
      description:
        "Currently, Sprint Asia Technology wants to provide a new Payment Point Online Bank (PPOB) service. Still, the billers available at Sprint Asia Technology are only primary billers without any backup billers. Sandeza Bills is a product that connects all billers into one single product to provide all PPOB at one.",
      image: SandezaBills,
      url: "",
      stacks: [],
    },
    {
      id: 5,
      title: "Healthymed",
      description:
        "An e-commerce based platform for medicine. This project I did for my final project at my bootcamp in Purwadhika School and developed with a team of 3 developers. My role in this project as full stack developer using React, Next, and express with fully working transactional flow from user end to admin end.",
      image: Healthymed,
      url: "",
      stacks: [],
    },
    {
      id: 6,
      title: "Konekt",
      description: "Simple social media platform where user can share their picture with customable caption.",
      image: Konekt,
      url: "",
      stacks: [],
    },
  ];

  const openModal = (description) => {
    setOpen(true);
    setDescription(description);
  };

  const closeModal = () => {
    setOpen(false);
    setDescription("");
  };

  const closeButton = <IoMdClose className="text-primary text-2xl" />;

  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10">Projects</h1>
      <Carousel
        responsive={responsive}
        draggable
        swipeable
        infinite
        showDots
        renderButtonGroupOutside
        keyBoardControl
        itemClass="p-[10px] pb-[40px]"
      >
        {projects?.length > 0 &&
          projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                stacks={project.stacks}
                onClick={openModal}
              />
            );
          })}
      </Carousel>

      <Modal
        open={open}
        onClose={closeModal}
        center
        closeIcon={closeButton}
        classNames={{
          modal: "rounded-xl",
        }}
      >
        <h2 className="text-2xl text-primary py-8 px-2 whitespace-pre-line">{description}</h2>
      </Modal>
    </div>
  );
}

export default memo(Projects);
