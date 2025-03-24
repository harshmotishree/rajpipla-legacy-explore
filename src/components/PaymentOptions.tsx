
import React from "react";
import { CreditCard, Wallet, Building } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PaymentOptionsProps {
  form: any;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ form }) => {
  const [activeMethod, setActiveMethod] = React.useState<string>("card");

  const handlePaymentMethodChange = (method: string) => {
    // If the current active method is the same as the clicked one, close it
    if (activeMethod === method) {
      setActiveMethod("");
    } else {
      setActiveMethod(method);
    }
    
    // Clear validation errors for the previous payment method
    if (method !== "card") {
      form.clearErrors("cardNumber");
      form.clearErrors("cardExpiry");
      form.clearErrors("cardCVC");
    } 
    if (method !== "netbanking") {
      form.clearErrors("bankName");
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-heritage-navy">Select Payment Method</h3>
      
      {/* Cards Option */}
      <Collapsible 
        className="border rounded-md overflow-hidden"
        open={activeMethod === "card"}
        onOpenChange={() => handlePaymentMethodChange("card")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-heritage-cream/20">
          <div className="flex items-center space-x-3">
            <CreditCard className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Cards</span>
            <div className="flex space-x-2 items-center ml-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/RuPay.svg/1200px-RuPay.svg.png" alt="RuPay" className="h-5 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-5 object-contain" />
            </div>
          </div>
          <span className="text-heritage-charcoal">{activeMethod === "card" ? "▲" : "▼"}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 border-t bg-heritage-cream/10">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        {...field} 
                        placeholder="1234 5678 9012 3456"
                        className="pl-10 bg-white"
                      />
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-heritage-charcoal/60" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cardExpiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="MM/YY" className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cardCVC"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="123" className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      {/* Netbanking Option */}
      <Collapsible 
        className="border rounded-md overflow-hidden"
        open={activeMethod === "netbanking"}
        onOpenChange={() => handlePaymentMethodChange("netbanking")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-heritage-cream/20">
          <div className="flex items-center space-x-3">
            <Building className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Netbanking</span>
            <div className="flex space-x-2 items-center ml-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png" alt="SBI" className="h-5 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/1200px-HDFC_Bank_Logo.svg.png" alt="HDFC" className="h-5 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/ICICI_Bank_Logo.svg/1200px-ICICI_Bank_Logo.svg.png" alt="ICICI" className="h-5 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Axis_Bank_logo.svg/1200px-Axis_Bank_logo.svg.png" alt="Axis" className="h-5 object-contain" />
            </div>
          </div>
          <span className="text-heritage-charcoal">{activeMethod === "netbanking" ? "▲" : "▼"}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 border-t bg-heritage-cream/10">
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Bank</FormLabel>
                <FormControl>
                  <select 
                    {...field}
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    )}
                  >
                    <option value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CollapsibleContent>
      </Collapsible>
      
      {/* Wallet Option */}
      <Collapsible 
        className="border rounded-md overflow-hidden"
        open={activeMethod === "wallet"}
        onOpenChange={() => handlePaymentMethodChange("wallet")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-heritage-cream/20">
          <div className="flex items-center space-x-3">
            <Wallet className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Wallet</span>
            <div className="flex space-x-2 items-center ml-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                <img 
                  src="https://www.logo.wine/a/logo/Google_Pay/Google_Pay-Logo.wine.svg" 
                  alt="Google Pay" 
                  className="h-5 w-5 object-contain"
                />
              </div>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                <img 
                  src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg" 
                  alt="PhonePe" 
                  className="h-5 w-5 object-contain"
                />
              </div>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png" 
                  alt="Paytm" 
                  className="h-5 w-5 object-contain"
                />
              </div>
            </div>
          </div>
          <span className="text-heritage-charcoal">{activeMethod === "wallet" ? "▲" : "▼"}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 border-t bg-heritage-cream/10">
          <FormField
            control={form.control}
            name="walletType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Wallet</FormLabel>
                <FormControl>
                  <select 
                    {...field}
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    )}
                  >
                    <option value="">Select wallet</option>
                    <option value="paytm">Paytm</option>
                    <option value="phonepe">PhonePe</option>
                    <option value="googlepay">Google Pay</option>
                    <option value="mobikwik">MobiKwik</option>
                    <option value="amazonpay">Amazon Pay</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Helper function to calculate total amount
function calculateTotal() {
  // Default to a minimum amount to enable EMI
  return 3500;
}

export default PaymentOptions;
