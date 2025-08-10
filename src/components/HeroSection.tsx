import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mobile-services.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Complete Mobility <br />
          <span className="bg-gradient-to-r from-emergency to-success bg-clip-text text-transparent">
            & Roadside Services
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          From fuel delivery to emergency assistance, EV charging to logistics - 
          all your vehicle service needs in one powerful platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Book Service Now
          </Button>
          <Button variant="service" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-emergency">24/7</div>
            <div className="text-sm text-primary-foreground/80">Emergency Support</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-success">5min</div>
            <div className="text-sm text-primary-foreground/80">Response Time</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-emergency">1000+</div>
            <div className="text-sm text-primary-foreground/80">Service Partners</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-success">50k+</div>
            <div className="text-sm text-primary-foreground/80">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};