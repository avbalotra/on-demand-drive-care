import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mobile-services.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-background/80 to-neon-pink/20 backdrop-blur-sm" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-neon-pink/20 to-neon-orange/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Complete Mobility <br />
          <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-pulse">
            & Roadside Services
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          From fuel delivery to emergency assistance, EV charging to logistics - 
          all your vehicle service needs in one <span className="text-neon-cyan font-semibold">powerful platform</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 animate-bounce">
            🚀 Book Service Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            ✨ Learn More
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
            <div className="text-2xl md:text-3xl font-bold text-neon-pink animate-pulse">24/7</div>
            <div className="text-sm text-muted-foreground group-hover:text-neon-pink transition-colors">Emergency Support</div>
          </div>
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 delay-100">
            <div className="text-2xl md:text-3xl font-bold text-neon-cyan animate-pulse">5min</div>
            <div className="text-sm text-muted-foreground group-hover:text-neon-cyan transition-colors">Response Time</div>
          </div>
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 delay-200">
            <div className="text-2xl md:text-3xl font-bold text-neon-purple animate-pulse">1000+</div>
            <div className="text-sm text-muted-foreground group-hover:text-neon-purple transition-colors">Service Partners</div>
          </div>
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 delay-300">
            <div className="text-2xl md:text-3xl font-bold text-neon-green animate-pulse">50k+</div>
            <div className="text-sm text-muted-foreground group-hover:text-neon-green transition-colors">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};