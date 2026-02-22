import ServiceLandingPageTemplate from "@/components/ServiceLandingPageTemplate";
import { SERVICE_DATA } from "@/data/serviceData";

const TreadmillRepair = () => {
  return <ServiceLandingPageTemplate service={SERVICE_DATA["treadmill-repair"]} />;
};

export default TreadmillRepair;
