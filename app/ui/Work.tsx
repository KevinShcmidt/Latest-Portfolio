import React, { JSX } from "react";
import * as motion from "motion/react-client";
import Title from "./Title";
import CardWork from "./CardWork";
import Modals from "./Modals";

export default function Work(): JSX.Element {
  const [isActiveModal, setIsActiveModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<{
    title: string;
    description: string;
    images: string[];
  } | null>(null);

  const WorkItems = [
    {
      id: 1,
      image: "/images/CardImage/pride.png",
      title: "Pride",
      description:
        "A mockup for a music platform that I designed with Figma, highlighting design trends adapted to user personas.",
      link: "https://www.figma.com/proto/uPR9ohmQGxSh3GteN8rj3b/Challenge-Daily-UI?node-id=282-23",
      buttonAction: () => {
        null;
      },
      modalContent: {
        title: "Pride",
        description: "A mockup for a music platform that I designed with Figma, highlighting design trends adapted to user personas.",
        images: ["/images/CardImage/pride.png"],
      },
    },
    {
      id: 2,
      image: "/images/CardImage/energie.png",
      title: "Green Future",
      description:
        "A landing page mockup for a company called Green Future, which focuses on green energy.",
      link: "https://www.figma.com/proto/uPR9ohmQGxSh3GteN8rj3b/Challenge-Daily-UI?node-id=282-15&t=z7bTlmOsbQKllSok-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=282%3A15",
      buttonAction: () => {
        null;
      },
      modalContent: {
        title: "Green Future",
        description: "A landing page mockup for a company called Green Future, which focuses on green energy.",
        images: ["/images/CardImage/energie.png"],
      },
    },
    {
      id: 3,
      image: "/images/CardImage/goodVibe.png",
      title: "Good Vibe",
      description:
        "A mobile app mockup for a platform that allows users to listen to music.",
      link: "https://www.figma.com/proto/uPR9ohmQGxSh3GteN8rj3b/Challenge-Daily-UI?node-id=122-123&t=z7bTlmOsbQKllSok-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=121%3A117&show-proto-sidebar=1",
      buttonAction: () => {
        null;
      },
      modalContent: {
        title: "Good Vibe",
        description: "A mobile app mockup for a platform that allows users to listen to music.",
        images: ["/images/CardImage/goodVibe.png"],
      },
    },
    {
      id: 4,
      image: "/images/CardImage/chargeoEv.png",
      title: "Chargeo EV",
      description:
        "An application that allows users to find available electric vehicle chargers and recharge their EV.",
      link: "",
      buttonAction: () => {
        setIsActiveModal(!isActiveModal);
        setSelectedProject({
          title: "Chargeo EV",
          description: "An application that allows users to find available electric vehicle chargers and recharge their EV. Technologies used : Flutter, figma",
          images: ["/images/CardImage/chargeoEv.png"],
        });
      },
    },
    {
      id: 5,
      image: "/images/CardImage/elcdis.png",
      title: "Chargeo EV Dashboard",
      description:
        "Frontend of the Chargeo EV mobile application dashboard, developed with React JS.",
      link: "",
      buttonAction: () => {
        setIsActiveModal(!isActiveModal);
        setSelectedProject({
          title: "Chargeo EV Dashboard",
          description: "Frontend of the Chargeo EV mobile application dashboard, developed with React JS. \n Technologies used: React JS, React hook form, TanStack Query, Rechart , Tailwind CSS, and Figma.", 
          images: ["/images/CardImage/elcdis.png", "/images/CardImage/elcdis.png", "/images/CardImage/elcdis.png"],
        });
      },
    },
    {
      id: 6,
      image: "/images/CardImage/evoyage.png",
      title: "E-Voyage",
      description:
        "The biggest project I've developed since learning to code: a web app for booking seats on land trips.",
      link: "",
      buttonAction: () => {
        setIsActiveModal(!isActiveModal);
        setSelectedProject({
          title: "E-Voyage",
          description: "The biggest project I've developed since learning to code: a web app for booking seats on land trips. Technologies used : Laravel, JavaScript",
          images: ["/images/CardImage/evoyage.png"],
        });
      },
    },
  ];

  return (
    <div className="relative mt-10 md:mt-16 mx-4 md:mx-16 lg:mx-40">
      <Title text="My latest projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {WorkItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <CardWork
              imagePath={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
              buttonAction={item.buttonAction}
            />
          </motion.div>
        ))}
      </div>
      {isActiveModal && selectedProject && (
        <Modals
          onClose={() => setIsActiveModal(!isActiveModal)}
          title={selectedProject.title}
          description={selectedProject.description}
          images={selectedProject.images}
        />
      )}
      <div className="absolute top-[450px] bg-custom-angular-gradient blur-[70px] w-[800px] h-28"></div>
    </div>
  );
}