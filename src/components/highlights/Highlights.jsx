import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(".link", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);
  return (
    <section
      id="highlights"
      className="bg-zinc w-screen h-full overflow-hidden common-padding"
    >
      <div className="screen-max-width">
        <div className="md:flex justify-between items-end mb-12 w-full">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap gap-5 items=end">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
