import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    gsap.to("#footer", {
      scrollTrigger: {
        trigger: "#footer",
      },
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
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
