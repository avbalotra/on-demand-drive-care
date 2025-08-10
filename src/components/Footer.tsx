import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MobilityHub</h3>
            <p className="text-primary-foreground/80">
              Your complete mobility and roadside service platform. 
              Available 24/7 for all your vehicle service needs.
            </p>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>Fuel Delivery</div>
              <div>EV Charging</div>
              <div>Roadside Assistance</div>
              <div>Logistics Delivery</div>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>help@mobilityhub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
          
          {/* Emergency */}
          <div className="space-y-4">
            <h4 className="font-semibold">Emergency</h4>
            <p className="text-primary-foreground/80 text-sm">
              Need immediate assistance? Our emergency services are available 24/7.
            </p>
            <Button variant="emergency" size="sm">
              Emergency Help
            </Button>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <div>
            © 2024 MobilityHub. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};