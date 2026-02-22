import ServiceLandingPageTemplate from "@/components/ServiceLandingPageTemplate";
import { SERVICE_DATA } from "@/data/serviceData";

const FitnessEquipmentRepair = () => {
  return <ServiceLandingPageTemplate service={SERVICE_DATA["fitness-equipment-repair"]} />;
};

export default FitnessEquipmentRepair;
