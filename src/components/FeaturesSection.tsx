import { MapPin, Clock, Shield, Phone, Star, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your service provider in real-time with accurate location updates and ETA.",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Average 5-minute response time for emergency services and quick booking for planned services.",
    },
    {
      icon: Shield,
      title: "Verified Providers",
      description: "All service providers are verified, licensed, and insured for your peace of mind.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency assistance whenever you need it.",
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Rated and reviewed services ensuring you get the best quality every time.",
    },
    {
      icon: Users,
      title: "Trusted Network",
      description: "Growing network of 1000+ service partners across the region for comprehensive coverage.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for reliability, speed, and trust - everything you need for complete peace of mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-service transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};