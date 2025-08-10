import { Fuel, Zap, Wrench, Truck } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { useToast } from "@/hooks/use-toast";

export const ServicesGrid = () => {
  const { toast } = useToast();

  const handleServiceBooking = (serviceName: string) => {
    toast({
      title: "Service Booking",
      description: `Booking ${serviceName} service. Feature coming soon!`,
    });
  };

  const services = [
    {
      title: "Fuel Delivery",
      description: "On-demand petrol and diesel delivery to your location. Never run out of fuel again.",
      icon: Fuel,
      isEmergency: false,
    },
    {
      title: "EV Charging",
      description: "Mobile charging vans and charging station booking for electric vehicles.",
      icon: Zap,
      isEmergency: false,
    },
    {
      title: "Roadside Assistance", 
      description: "Emergency towing, puncture repair, jump-start, and breakdown help available 24/7.",
      icon: Wrench,
      isEmergency: true,
    },
    {
      title: "Logistics Delivery",
      description: "Porter-style goods movement for individuals and businesses. Quick and reliable.",
      icon: Truck,
      isEmergency: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Service Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of mobility and roadside services designed to keep you moving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isEmergency={service.isEmergency}
              onBookService={() => handleServiceBooking(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};