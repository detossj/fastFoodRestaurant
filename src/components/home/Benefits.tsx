import React from "react";
import { Bike, Store, ShieldCheck, Star, type LucideIcon  } from "lucide-react";

// Tipado estricto para los elementos de beneficios
interface BenefitItem {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const Benefits = () => {
  const items: BenefitItem[] = [
    { 
      Icon: Bike, 
      title: "Delivery rápido", 
      text: "Recibe tu pedido en minutos." 
    },
    { 
      Icon: Store, 
      title: "Retiro en tienda", 
      text: "Pasa a buscar tu pedido sin esperas." 
    },
    { 
      Icon: ShieldCheck, 
      title: "Pagos seguros", 
      text: "Aceptamos tarjetas y billeteras digitales." 
    },
    { 
      Icon: Star, 
      title: "Calidad", 
      text: "Ingredientes frescos y chefs expertos." 
    },
  ];

  return (
    <div className="py-12 md:py-20 mt-12 md:mt-20 bg-[#f0f0f0] px-4">
      <div className="container mx-auto max-w-6xl">
        
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8 text-foreground">
          ¿Por qué elegirnos?
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {items.map((item, i) => {
            const Icon = item.Icon;
            return (
              <div 
                key={i} 
                className="p-4 md:p-6 shadow-sm bg-card rounded-2xl flex flex-col items-center justify-start h-full border border-border/50 transition-transform duration-300 hover:-translate-y-1"
              >

                <div className="mb-3 md:mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#f97c2f]" />
                </div>
                
                <h6 className="font-bold text-base md:text-xl mb-2 text-card-foreground">
                  {item.title}
                </h6>
                
                <p className="mb-0 text-sm md:text-base text-muted-foreground leading-snug">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Benefits;