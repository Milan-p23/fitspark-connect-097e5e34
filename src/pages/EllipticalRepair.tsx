import ServiceLandingPageTemplate from "@/components/ServiceLandingPageTemplate";
import { SERVICE_DATA } from "@/data/serviceData";

const EllipticalRepair = () => {
  return <ServiceLandingPageTemplate service={SERVICE_DATA["elliptical-repair"]} />;
};

export default EllipticalRepair;
