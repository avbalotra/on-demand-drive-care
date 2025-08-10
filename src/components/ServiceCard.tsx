import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isEmergency?: boolean;
  onBookService: () => void;
}

export const ServiceCard = ({ title, description, icon: Icon, isEmergency = false, onBookService }: ServiceCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-service ${isEmergency ? 'border-emergency/20 bg-gradient-to-br from-background to-emergency/5' : ''}`}>
      <CardHeader className="text-center pb-4">
        <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isEmergency ? 'bg-gradient-emergency shadow-emergency' : 'bg-gradient-primary shadow-service'}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button 
          onClick={onBookService}
          variant={isEmergency ? "emergency" : "service"}
          className="w-full"
          size="lg"
        >
          {isEmergency ? "Emergency Book Now" : "Book Service"}
        </Button>
      </CardFooter>
    </Card>
  );
};