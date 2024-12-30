import { footerLinks } from "../../constants";

const Footer2 = () => {
  return (
    <footer className="px-5 sm:px-10 py-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="text-blue underline"> Find an Apple Store </span>{" "}
            or <span className="text-blue underline">other retailer </span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or <br /> call 1-800-MY-APPLE.
          </p>
        </div>
        <div className="bg-neutral-700 my-5 w-full h-[1px]" />
        <div className="flex md:flex-row flex-col justify-between md:items-center">
          <p className="font-semibold text-gray text-xs">
            Copyright © 2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
