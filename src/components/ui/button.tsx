import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-neon transition-all duration-300 transform hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-neon-purple/30 bg-gradient-glass backdrop-blur-glass text-foreground hover:border-neon-pink/50 hover:shadow-glow transition-all duration-300",
        secondary:
          "bg-gradient-card text-secondary-foreground hover:shadow-service transition-all duration-300",
        ghost: "hover:bg-gradient-glass hover:text-accent-foreground backdrop-blur-glass transition-all duration-300",
        link: "text-neon-cyan underline-offset-4 hover:underline hover:text-neon-pink transition-colors duration-300",
        hero: "bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1",
        emergency: "bg-gradient-emergency text-emergency-foreground hover:shadow-emergency transition-all duration-300 transform hover:scale-105 animate-pulse",
        service: "bg-gradient-glass backdrop-blur-glass text-foreground border border-neon-purple/20 hover:shadow-neon hover:border-neon-cyan/40 transition-all duration-300 transform hover:scale-102",
        neon: "bg-gradient-to-r from-neon-pink to-neon-purple text-primary-foreground hover:from-neon-cyan hover:to-neon-pink hover:shadow-neon transition-all duration-500 transform hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
