import ServiceLandingPageTemplate from "@/components/ServiceLandingPageTemplate";
import { SERVICE_DATA } from "@/data/serviceData";

const ExerciseBikeRepair = () => {
  return <ServiceLandingPageTemplate service={SERVICE_DATA["exercise-bike-repair"]} />;
};

export default ExerciseBikeRepair;
