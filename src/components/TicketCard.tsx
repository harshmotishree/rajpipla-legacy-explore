
import React from "react";
import { Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TicketType {
  id: string;
  name: string;
  description: string;
  price: number;
  access: string[];
}

interface TicketCardProps {
  ticket: TicketType;
  count: number;
  onChange: (count: number) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket, count, onChange }) => {
  const handleIncrement = () => {
    onChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      onChange(count - 1);
    }
  };

  return (
    <div className={`border rounded-lg overflow-hidden transition-all duration-300 ${
      count > 0 ? 'border-heritage-gold shadow-md' : 'border-gray-200'
    }`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium text-heritage-navy text-lg">{ticket.name}</h3>
            <p className="text-heritage-charcoal/70 text-sm">{ticket.description}</p>
          </div>
          <div className="text-right">
            <div className="text-heritage-navy font-medium text-lg">₹{ticket.price.toLocaleString()}</div>
            <div className="text-heritage-charcoal/70 text-xs">per person</div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          {ticket.access.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 text-heritage-gold mr-2 flex-shrink-0" />
              <span className="text-heritage-charcoal/80">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0 rounded-full"
              onClick={handleDecrement}
              disabled={count === 0}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease</span>
            </Button>
            
            <span className="w-6 text-center font-medium">{count}</span>
            
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0 rounded-full"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          
          <div className="text-right font-medium text-heritage-navy">
            {count > 0 && `₹${(ticket.price * count).toLocaleString()}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
