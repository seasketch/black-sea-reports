import React from "react";
import { SizeCard } from "./SizeCard";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { HumanUse } from "./HumanUse";

const ReportPage = () => {
  return (
    <>
      <SizeCard />
      <HumanUse />
      <SketchAttributesCard autoHide />
    </>
  );
};

export default ReportPage;
