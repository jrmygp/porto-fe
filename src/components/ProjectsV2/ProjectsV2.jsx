import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowForward } from "react-icons/md";

import ProjectCardV2 from "./ProjectCardV2/ProjectCardV2";
import Nest from "@/assets/project/nest.png";
import KSS from "@/assets/project/kss.png";
import Prezent from "@/assets/project/prezent.jpg";
import SandezaBills from "@/assets/project/sandeza-bills.jpg";
import Healthymed from "@/assets/project/healthymed.png";
import Konekt from "@/assets/project/konekt.png";

import React from "@/assets/react.png";
import Next from "@/assets/nextjs.png";
import redux from "@/assets/redux.png";
import mui from "@/assets/mui.png";
import css from "@/assets/css.png";
import reactNative from "@/assets/react_native.png";
import expo from "@/assets/expo.png";
import tailwind from "@/assets/tailwind.png";
import node from "@/assets/node.png";
import express from "@/assets/express_js.png";
import mysql from "@/assets/mysql.png";
import chakra from "@/assets/chakra.png";
import golang from "@/assets/go.png";
import gin from "@/assets/gin.png";

import AnimationWrapper from "../AnimationWrapper";

const ProjectsV2 = () => {
  const projects = [
    {
      id: 1,
      title: "Kolabora Smart System",
      description: "Multi function productivity app",
      image: KSS,
      url: "https://kolabora.ksshub.com/",
      stacks: [{ img: React }, { img: Next }, { img: redux }, { img: mui }, { img: css }],
    },
    {
      id: 2,
      title: "KSS Nest",
      description: "Mobile app version of Kolabora Smart System",
      image: Nest,
      url: "https://play.google.com/store/apps/details?id=com.kolabora.kssmobileapp&hl=id",
      stacks: [{ img: reactNative }, { img: expo }, { img: redux }],
    },
    {
      id: 3,
      title: "Prezent",
      description: "Digital voucher management app",
      image: Prezent,
      url: "https://www.prezent.id/login",
      stacks: [{ img: React }, { img: redux }, { img: tailwind }, { img: golang }, { img: gin }, { img: mysql }],
    },
    {
      id: 4,
      title: "Sandeza Bills",
      description:
        "Sandeza Bills is a product that connects all billers into one single product to provide all PPOB at one.",
      image: SandezaBills,
      url: "https://sandeza.id/login",
      stacks: [{ img: React }, { img: redux }, { img: tailwind }, { img: golang }, { img: gin }, { img: mysql }],
    },
    {
      id: 5,
      title: "Healthymed",
      description: "An e-commerce based platform for medicine",
      image: Healthymed,
      url: "https://github.com/purwadhikafullstack/jcwd-2002-02-fe",
      stacks: [
        { img: React },
        { img: Next },
        { img: redux },
        { img: mui },
        { img: node },
        { img: express },
        { img: mysql },
      ],
    },
    {
      id: 6,
      title: "Konekt",
      description: "Social media app",
      image: Konekt,
      url: "https://github.com/jrmygp/project-next.git",
      stacks: [
        { img: React },
        { img: Next },
        { img: redux },
        { img: chakra },
        { img: node },
        { img: express },
        { img: mysql },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 px-2 md:px-[100px] lg:px-[400px] font-ubuntu">
      <AnimationWrapper delay={1}>
        <div className="w-full flex items-center justify-between">
          <p className="opacity-80">FEATURED PROJECTS</p>
          <div className="flex items-center gap-2">
            <p>SLIDE TO SEE MORE</p>
            <MdArrowForward size={16} className="mb-0.5" />
          </div>
        </div>
      </AnimationWrapper>

      <AnimationWrapper delay={1.25}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            310: {
              slidesPerView: 1,
            },
            756: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          className="w-full"
        >
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <ProjectCardV2
                  description={project.description}
                  image={project.image}
                  stacks={project.stacks}
                  title={project.title}
                  url={project.url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </AnimationWrapper>
    </div>
  );
};

export default ProjectsV2;
