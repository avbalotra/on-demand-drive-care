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
    <Card className={`group cursor-pointer transition-all duration-500 hover:shadow-neon hover:-translate-y-2 transform bg-gradient-glass backdrop-blur-glass border-neon-purple/20 hover:border-neon-cyan/40 ${isEmergency ? 'border-emergency/30 bg-gradient-to-br from-gradient-glass to-emergency/5 hover:border-emergency/50' : ''}`}>
      <CardHeader className="text-center pb-4">
        <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${isEmergency ? 'bg-gradient-emergency shadow-emergency animate-pulse' : 'bg-gradient-primary shadow-neon'}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button 
          onClick={onBookService}
          variant={isEmergency ? "emergency" : "neon"}
          className="w-full"
          size="lg"
        >
          {isEmergency ? "🚨 Emergency Book" : "✨ Book Service"}
        </Button>
      </CardFooter>
    </Card>
  );
};