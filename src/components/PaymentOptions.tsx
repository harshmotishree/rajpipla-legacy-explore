
import React from "react";
import { CreditCard, Wallet, IndianRupee, Building } from "lucide-react";
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
    if (method !== "upi") {
      form.clearErrors("upiId");
    } 
    if (method !== "netbanking") {
      form.clearErrors("bankName");
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-heritage-navy">Select Payment Method</h3>
      
      {/* UPI Option */}
      <Collapsible 
        className="border rounded-md overflow-hidden"
        open={activeMethod === "upi"}
        onOpenChange={() => handlePaymentMethodChange("upi")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-heritage-cream/20">
          <div className="flex items-center space-x-3">
            <IndianRupee className="h-5 w-5 text-blue-600" />
            <span className="font-medium">UPI</span>
            <div className="flex space-x-2 items-center ml-2">
              <img src="/lovable-uploads/14120503-557c-47c7-bbdf-ead2ef78efca.png" alt="UPI options" className="h-6" />
            </div>
          </div>
          <span className="text-heritage-charcoal">{activeMethod === "upi" ? "▲" : "▼"}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 border-t bg-heritage-cream/10">
          <FormField
            control={form.control}
            name="upiId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UPI ID</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="yourname@upi"
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CollapsibleContent>
      </Collapsible>
      
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
            <div className="flex space-x-1 items-center ml-2">
              <span className="bg-blue-50 text-blue-700 px-1 text-xs font-medium rounded">VISA</span>
              <span className="bg-red-50 text-red-700 px-1 text-xs font-medium rounded">Mastercard</span>
              <span className="bg-indigo-50 text-indigo-700 px-1 text-xs font-medium rounded">RuPay</span>
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
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SBI</div>
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">HD</div>
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">IC</div>
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
      
      {/* EMI Option */}
      <Collapsible 
        className="border rounded-md overflow-hidden"
        open={activeMethod === "emi"}
        onOpenChange={() => handlePaymentMethodChange("emi")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-heritage-cream/20">
          <div className="flex items-center space-x-3">
            <CreditCard className="h-5 w-5 text-blue-600" />
            <span className="font-medium">EMI</span>
            <div className="flex space-x-2 items-center ml-2">
              <span className="bg-green-50 text-green-700 px-1.5 py-0.5 text-xs font-medium rounded">No Cost EMI</span>
            </div>
          </div>
          <span className="text-heritage-charcoal">{activeMethod === "emi" ? "▲" : "▼"}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 border-t bg-heritage-cream/10">
          <p className="text-sm text-heritage-charcoal mb-4">Available on orders above ₹3,000</p>
          <FormField
            control={form.control}
            name="emiOption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choose EMI Option</FormLabel>
                <FormControl>
                  <select 
                    {...field}
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    )}
                  >
                    <option value="">Select EMI option</option>
                    <option value="3">3 months - ₹{Math.ceil(calculateTotal() / 3)}/month</option>
                    <option value="6">6 months - ₹{Math.ceil(calculateTotal() / 6)}/month</option>
                    <option value="9">9 months - ₹{Math.ceil(calculateTotal() / 9)}/month</option>
                    <option value="12">12 months - ₹{Math.ceil(calculateTotal() / 12)}/month</option>
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
