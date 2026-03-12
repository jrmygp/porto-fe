import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import ProjectCardV2 from "./ProjectCardV2/ProjectCardV2";
import Nest from "@/assets/project/nest.png";
import KSS from "@/assets/project/kss.png";
import Prezent from "@/assets/project/prezent.png";
import PWA from "@/assets/project/pwa.png";
import Healthymed from "@/assets/project/healthymed.png";
import Konekt from "@/assets/project/konekt.png";
import Radix from "@/assets/project/radix.png";
import ScentLab from "@/assets/project/scentlab.png";

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
import firebase from "@/assets/firebase.png";

import AnimationWrapper from "../AnimationWrapper";

const ProjectsV2 = () => {
  const swiperRef = useRef(null);
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const randomId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const projects = [
    {
      id: randomId(),
      title: "Prezent Loyalty",
      description: "Admin dashboard for Sandeza's digital campaign product",
      image: Prezent,
      url: "https://sandeza.id/prezent/campaign",
      stacks: [{ img: React }, { img: redux }, { img: tailwind }, { img: golang }, { img: gin }, { img: mysql }],
    },
    {
      id: randomId(),
      title: "Prezent Loyalty PWA",
      description:
        "Application for users to participate in Sandeza's digital campaign and redeem their points to get rewards from the campaign",
      image: PWA,
      url: "https://my-prezent.sandeza.id/sprint_asia/login/whatsapp",
      stacks: [{ img: React }, { img: redux }, { img: tailwind }, { img: golang }, { img: gin }, { img: mysql }],
    },
    {
      id: randomId(),
      title: "Kolabora Smart System",
      description: "Multi function productivity app",
      image: KSS,
      url: "",
      stacks: [{ img: React }, { img: Next }, { img: redux }, { img: mui }, { img: css }],
    },
    {
      id: randomId(),
      title: "KSS Nest",
      description: "Mobile app version of Kolabora Smart System",
      image: Nest,
      url: "https://play.google.com/store/apps/details?id=com.kolabora.kssmobileapp&hl=id",
      stacks: [{ img: reactNative }, { img: expo }, { img: redux }],
    },
    {
      id: randomId(),
      title: "Radix Dashboard App",
      description: "Dashboard app to track quotation, invoicement, and shipment for freight forwarders company.",
      image: Radix,
      url: "http://54.227.49.219:4173/",
      stacks: [{ img: React }, { img: redux }, { img: tailwind }, { img: golang }, { img: gin }, { img: mysql }],
    },
    {
      id: randomId(),
      title: "The Scent Lab",
      description: "Scent personality generator based on quiz",
      image: ScentLab,
      url: "https://thescentlab.id/",
      stacks: [{ img: React }, { img: mui }, { img: firebase }],
    },
    {
      id: randomId(),
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
      id: randomId(),
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

  const handleSlideChange = (swiper) => {
    setIsAtBeginning(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };

  return (
    <div className="flex flex-col gap-10 px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-[300px] font-ubuntu">
      <AnimationWrapper delay={1}>
        <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="opacity-80">FEATURED PROJECTS</p>
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              type="button"
              aria-label="Show previous project"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isAtBeginning}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <MdArrowBack size={18} />
            </button>
            <p className="text-center">SLIDE TO SEE MORE</p>
            <button
              type="button"
              aria-label="Show next project"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isAtEnd}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <MdArrowForward size={18} />
            </button>
          </div>
        </div>
      </AnimationWrapper>

      <AnimationWrapper delay={1.25}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            handleSlideChange(swiper);
          }}
          onSlideChange={handleSlideChange}
          onReachBeginning={handleSlideChange}
          onReachEnd={handleSlideChange}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination]}
          spaceBetween={24}
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
