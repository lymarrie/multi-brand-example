import * as React from "react";
import { fetch } from "@yext/pages/util";
import "../../styles/tacos.yext.com/index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../../components/PageLayout";
import Card from "../../components/Card";
import { ExternalImage } from "../../types/ExternalImage";
import Favicon from "../../assets/images/taco-favicon.ico";
import Banner from "../../components/BannerBrand1";


export const config: TemplateConfig = {
  name: "taco-galaxy",
};


export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: Favicon,
        },
      },
    ],
  };
};


const Static: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;  
  return (
    <>
      <PageLayout _site={_site}>
        <Banner name={"Taco Galaxy"} />
        <div className="centered-container">
          <div className="section space-y-14 px-10">
            <h1 className="text-3xl font-semibold">Hello world!</h1>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Static;
