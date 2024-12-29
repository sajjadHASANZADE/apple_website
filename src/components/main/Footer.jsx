import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#github-link",
      { x: 0 }, // Start position
      {
        x: "random(-3, 3)", // Random horizontal "shiver" movement
        duration: 0.05, // Short duration for each "shake"
        repeat: 5, // Number of shakes
        yoyo: true, // Reverse the shake for smoothness
        ease: "power1.inOut", // Easing for smooth motion
      }
    );
  });

  useGSAP(() => {
    animateWithGsap("#footer", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      scrub: 1,
    });
  }, []);

  return (
    <section className="flex justify-center items-center bg-gray-300 text-2xl common-padding">
      <div
        id="footer"
        className="bg-gray-100 opacity-0 sm:pt-6 sm:pb-6 rounded-lg text-black common-padding"
      >
        <h3>Build with love, by:</h3>
        <code aria-disabled={true}>
          <p>Kianoush Abedi</p>
        </code>
        <h3>
          GitHub Account: {""}
          <a
            id="github-link"
            src="https://github.com/Lavenderer1375"
            className="hover:text-red-900 underline cursor-pointer"
          >
            Lavenderer1375
          </a>
        </h3>
      </div>
    </section>
  );
};

export default Footer;
