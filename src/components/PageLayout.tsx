import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getRGBColor } from "../../utils";

type Props = {
  _site: any;
  children?: React.ReactNode;
};

const PageLayout = ({ _site, children }: Props) => {

  const primaryColor = getRGBColor(_site.c_styling?.primaryColor ?? "#000000", "primary");
  const secondaryColor = getRGBColor(_site.c_styling?.secondaryColor ?? "#808080", "secondary");

  console.log(primaryColor);
  console.log(_site.c_styling.primaryColor);

  return (
    <>
      <style>:root {`{${primaryColor} ${secondaryColor}}`}</style>
      <div className="min-h-screen">
        <Header _site={_site} />
        {children}
        <Footer _site={_site} />
      </div>
    </>
  );
};

export default PageLayout;
