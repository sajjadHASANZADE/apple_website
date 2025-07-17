import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react';

import {
  explore1Img,
  explore2Img,
  exploreVideo,
} from '../../utils';
import { animateWithGsap } from '../../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        // toggleActions attributes: "(enter the first time) (exit the first time) (reEnter) (reExit))"
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 }
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="relative bg-zinc h-full overflow-hidden common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the Full Story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="font-semibold text-5xl lg:text-7xl">iPhone.</h2>
            <h2 className="font-semibold text-5xl lg:text-7xl">
              Forged in Titanium.
            </h2>
          </div>
          <div className="flex-col flex-center sm:px-10">
            <div className="relative flex items-center mb-5 w-full h-[50vh]">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-center object-cover"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
              <p>kianush khare</p>
            </div>
            <div className="relative flex flex-col w-full">
              <div className="sm:flex gap-5 features-video-container">
                <div className="flex-1 h-[50vh] overflow-hidden">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="flex-1 h-[50vh] overflow-hidden">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
            </div>
            <div className="feature-text-container">
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  iPhone 15 Prop is{" "}
                  <span className="text-white">
                    the first iPhone to feature an aerospace-grade titanium
                    design
                  </span>
                  , using the same alloy that spacecrafts use for missions to
                  Mars.
                </p>
              </div>

              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  Titanium has one of the best strength-to-weight ratios of any
                  metal, making these our{" "}
                  <span className="text-white">
                    lightest Pro models ever. {""}
                  </span>
                  You'll notice the difference the moment you pick one up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
