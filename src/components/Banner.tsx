import * as React from "react";
import { Address } from "../types/Address";
import Cta from "./Cta";

export interface BannerProps {
  name?: string;
  address?: Address;
}

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: BannerProps) => {
  const { name, address } = props;

  const primaryColor = {
    background: "rgb(var(--color-primary))",
  }
  const secondaryColor = {
    background: "rgb(var(--color-secondary))",
    color: "white",

  }


  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center h-96 bg-[url(/src/assets/images/tacos-1.avif)] `}
      >
        <div className="absolute left-0 right-0 flex flex-col items-center">
          <div className="w-96 my-8 rounded-xl bg-amber-500 border-8 shadow-xl border-amber-600 px-4 py-2 text-center" style={primaryColor}>
            <div>
              <h1 className="text-white text-3xl font-semibold">{name}</h1>
              <p className="text-lg pt-2 text-white font-semibold">
                {renderPrettyAddress(address)}
              </p>
            </div>
            <div className="flex py-3 justify-around">
              {/* <Cta
                buttonText="Order Pickup"
                url="#"
                style="text-orange bg-white"
              ></Cta>
              <Cta
                buttonText="Order Delivery"
                url="#"
                style="text-orange bg-white"
              ></Cta> */}
                  <div className="py-4 px-6 text-base font-bold rounded-lg hover:cursor-pointer hover:scale-[1.02] duration-250 shadow-md" style={secondaryColor}>
                    <div>CTA 1</div>
                  </div>
                  <div className="py-4 px-6 text-base font-bold rounded-lg hover:cursor-pointer hover:scale-[1.02] duration-250 shadow-md" style={secondaryColor}>
                    <div>CTA 2</div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
