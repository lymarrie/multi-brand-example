import * as React from "react";
import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
} from "@yext/pages";
import { isProduction } from "@yext/pages/util";
import "../../styles/tacos.yext.com/index.css";
import Favicon from "../../assets/images/taco-favicon.ico";
import About from "../../components/About";
import Banner from "../../components/BannerBrand1";
import Details from "../../components/Details";
import Hours from "../../components/Hours";
import PageLayout from "../../components/PageLayout";
import EditTool from "../../components/EditTool";
import BreadCrumbs from "../../components/Breadcrumbs";

export const config: TemplateConfig = {
  stream: {
    $id: "location-stream",
    filter: {
      savedFilterIds: ["1189183740"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "photoGallery",
      "paymentOptions",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
    transform: {
      replaceOptionValuesWithDisplayNames: ["paymentOptions"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};


export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
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


const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const {
    _site,
    name,
    address,
    hours,
    mainPhone,
    services,
    description,
    siteDomain,
    dm_directoryParents,
  } = document;

  return (
    <>
      <PageLayout _site={_site}>
      <Banner name={name} address={address} />
        <div className="centered-container">
          {dm_directoryParents && <BreadCrumbs
            breadcrumbs={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
          />}
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            <Details address={address} phone={mainPhone} services={services} />
            {hours && <Hours title={"Restaurant Hours"} hours={hours} />}
            {description && <About name={name} description={description} />}
          </div>
        </div>
      </PageLayout>
      {/* This component displays a link to the entity that represents the given page in the Knowledge Graph*/}
      {!isProduction(siteDomain) && <EditTool data={document} />}
    </>
  );
};

export default Location;