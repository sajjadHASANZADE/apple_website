import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";

const Footer = () => {
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
        className="bg-gray-100 opacity-0 rounded-lg text-black common-padding"
      >
        <h3>Build with love, by:</h3>
        <code aria-disabled={true}>
          <p>Kianoush Abedi</p>
        </code>
      </div>
    </section>
  );
};

export default Footer;
