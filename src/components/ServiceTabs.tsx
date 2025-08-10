import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "@/components/ServiceCard";
import { useToast } from "@/hooks/use-toast";
import { 
  Fuel, 
  Zap, 
  Wrench, 
  Truck, 
  Car, 
  Shield, 
  Smartphone, 
  Users, 
  Package,
  Bike,
  Home,
  Plane
} from "lucide-react";

export const ServiceTabs = () => {
  const { toast } = useToast();

  const handleServiceBooking = (serviceName: string) => {
    toast({
      title: "Service Booking",
      description: `Booking ${serviceName} service. Feature coming soon!`,
    });
  };

  const serviceCategories = {
    emergency: [
      {
        title: "Emergency Roadside",
        description: "24/7 emergency towing, breakdown assistance, and accident recovery services.",
        icon: Wrench,
        isEmergency: true,
      },
      {
        title: "Emergency Fuel",
        description: "Urgent fuel delivery when you're stranded. Available within 15 minutes.",
        icon: Fuel,
        isEmergency: true,
      },
      {
        title: "Emergency Charging",
        description: "Mobile EV charging for dead batteries. Quick rescue for electric vehicles.",
        icon: Zap,
        isEmergency: true,
      },
      {
        title: "Accident Support",
        description: "Complete accident assistance including towing and insurance coordination.",
        icon: Shield,
        isEmergency: true,
      },
    ],
    fuel: [
      {
        title: "Petrol Delivery",
        description: "Premium petrol delivered to your location. Multiple grades available.",
        icon: Fuel,
        isEmergency: false,
      },
      {
        title: "Diesel Delivery",
        description: "High-quality diesel for cars, trucks, and commercial vehicles.",
        icon: Truck,
        isEmergency: false,
      },
      {
        title: "Bulk Fuel Orders",
        description: "Large quantity fuel delivery for businesses and fleet operators.",
        icon: Package,
        isEmergency: false,
      },
      {
        title: "Scheduled Delivery",
        description: "Regular fuel delivery subscriptions for homes and businesses.",
        icon: Home,
        isEmergency: false,
      },
    ],
    charging: [
      {
        title: "Mobile EV Charging",
        description: "Professional mobile charging vans with fast charging capabilities.",
        icon: Zap,
        isEmergency: false,
      },
      {
        title: "Station Booking",
        description: "Reserve charging stations in advance. Skip the queue guaranteed.",
        icon: Smartphone,
        isEmergency: false,
      },
      {
        title: "Installation Service",
        description: "Home and office EV charging station installation and maintenance.",
        icon: Home,
        isEmergency: false,
      },
      {
        title: "Fleet Charging",
        description: "Commercial EV fleet charging solutions and management systems.",
        icon: Users,
        isEmergency: false,
      },
    ],
    maintenance: [
      {
        title: "Mobile Mechanic",
        description: "Professional mechanics come to you for repairs and maintenance.",
        icon: Wrench,
        isEmergency: false,
      },
      {
        title: "Tire Services",
        description: "Tire repair, replacement, and mobile tire fitting services.",
        icon: Car,
        isEmergency: false,
      },
      {
        title: "Vehicle Inspection",
        description: "Pre-purchase inspections and safety checks at your location.",
        icon: Shield,
        isEmergency: false,
      },
      {
        title: "Detailing Service",
        description: "Professional car washing and detailing services at your doorstep.",
        icon: Car,
        isEmergency: false,
      },
    ],
    logistics: [
      {
        title: "Personal Moving",
        description: "House moving and personal goods transportation with care.",
        icon: Truck,
        isEmergency: false,
      },
      {
        title: "Business Delivery",
        description: "Commercial goods delivery and supply chain logistics solutions.",
        icon: Package,
        isEmergency: false,
      },
      {
        title: "Bike Transport",
        description: "Motorcycle and bicycle transportation and delivery services.",
        icon: Bike,
        isEmergency: false,
      },
      {
        title: "Airport Transfer",
        description: "Reliable luggage and passenger transfer to and from airports.",
        icon: Plane,
        isEmergency: false,
      },
    ],
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Service Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse our comprehensive range of mobility services organized by category. 
            From emergency assistance to planned maintenance - we've got you covered.
          </p>
        </div>
        
        <Tabs defaultValue="emergency" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 h-auto p-1 bg-gradient-glass backdrop-blur-glass border border-neon-purple/20">
            <TabsTrigger value="emergency" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-emergency data-[state=active]:text-emergency-foreground data-[state=active]:shadow-emergency transition-all duration-300">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-medium">🚨 Emergency</span>
            </TabsTrigger>
            <TabsTrigger value="fuel" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-neon-orange data-[state=active]:to-neon-pink data-[state=active]:text-white transition-all duration-300">
              <Fuel className="w-5 h-5" />
              <span className="text-xs font-medium">⛽ Fuel</span>
            </TabsTrigger>
            <TabsTrigger value="charging" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-success data-[state=active]:text-white transition-all duration-300">
              <Zap className="w-5 h-5" />
              <span className="text-xs font-medium">⚡ EV Charging</span>
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-primary data-[state=active]:text-white transition-all duration-300">
              <Wrench className="w-5 h-5" />
              <span className="text-xs font-medium">🔧 Maintenance</span>
            </TabsTrigger>
            <TabsTrigger value="logistics" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-neon-cyan data-[state=active]:to-neon-purple data-[state=active]:text-white transition-all duration-300">
              <Truck className="w-5 h-5" />
              <span className="text-xs font-medium">📦 Logistics</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(serviceCategories).map(([category, services]) => (
            <TabsContent key={category} value={category} className="mt-8">
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};