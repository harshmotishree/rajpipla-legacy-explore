import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Check, CalendarIcon, Clock, Users, Info, CreditCard, Send } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import TicketCard from "@/components/TicketCard";

const ticketTypes = [
  {
    id: "adult",
    name: "Adult",
    description: "Ages 18+",
    price: 1500,
    access: ["Palace Tour", "Garden Access", "Museum Entry"]
  },
  {
    id: "child",
    name: "Child",
    description: "Ages 6-17",
    price: 800,
    access: ["Palace Tour", "Garden Access", "Museum Entry"]
  },
  {
    id: "senior",
    name: "Senior",
    description: "Ages 65+",
    price: 1000,
    access: ["Palace Tour", "Garden Access", "Museum Entry"]
  },
  {
    id: "royal",
    name: "Royal Experience",
    description: "Premium tour",
    price: 3500,
    access: ["Palace Tour", "Garden Access", "Museum Entry", "Special Quarters", "Dinner Experience", "Cultural Show"]
  }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const bookingSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot",
  }),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  cardNumber: z.string().min(16, "Please enter a valid card number"),
  cardExpiry: z.string().min(5, "Please enter a valid expiry date (MM/YY)"),
  cardCVC: z.string().min(3, "Please enter a valid CVC")
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const TicketBooking = () => {
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState("select");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: undefined,
      timeSlot: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVC: ""
    }
  });

  const handleTicketChange = (ticketId: string, count: number) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketId]: count
    }));
  };

  const calculateTotal = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, count]) => {
      const ticket = ticketTypes.find(t => t.id === ticketId);
      return total + (ticket?.price || 0) * count;
    }, 0);
  };

  const getTicketCount = () => {
    return Object.values(selectedTickets).reduce((total, count) => total + count, 0);
  };

  const canProceed = getTicketCount() > 0;

  const handleProceedToDetails = () => {
    if (canProceed) {
      setActiveTab("details");
    }
  };

  const validateDetailsAndProceed = async () => {
    const fieldsToValidate = ["date", "timeSlot", "firstName", "lastName", "email", "phone"];
    
    const result = await form.trigger(fieldsToValidate);
    
    if (result) {
      setActiveTab("payment");
    } else {
      toast.error("Please fill all required fields", {
        description: "All fields must be completed before proceeding to payment."
      });
      
      const firstErrorField = fieldsToValidate.find(field => form.formState.errors[field as keyof BookingFormValues]);
      if (firstErrorField) {
        form.setFocus(firstErrorField as keyof BookingFormValues);
      }
    }
  };

  const onSubmit = (data: BookingFormValues) => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      
      toast.success("Booking successful!", {
        description: "Your tickets have been booked. Check your email for details.",
      });
      
      form.reset();
      setSelectedTickets({});
      setActiveTab("select");
      
      setTimeout(() => navigate("/"), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative bg-heritage-cream/30">
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h6 className="text-heritage-burgundy font-medium mb-3 uppercase tracking-wider text-sm">Immersive Experience</h6>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-heritage-navy mb-4">Book Your Palace Visit</h1>
            <p className="text-heritage-charcoal/80 max-w-2xl mx-auto">
              Experience the royal heritage of Rajvant Palace with our curated tour experiences. 
              Select your tickets, choose your date and time, and immerse yourself in centuries of history.
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-heritage-gold/20">
            <div className="p-1">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-heritage-cream/50">
                  <TabsTrigger value="select" className="data-[state=active]:bg-white">
                    1. Select Tickets
                  </TabsTrigger>
                  <TabsTrigger 
                    value="details" 
                    disabled={!canProceed} 
                    className="data-[state=active]:bg-white"
                  >
                    2. Your Details
                  </TabsTrigger>
                  <TabsTrigger 
                    value="payment" 
                    disabled={activeTab !== "details"} 
                    className="data-[state=active]:bg-white"
                  >
                    3. Payment
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="select" className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {ticketTypes.map((ticket) => (
                        <TicketCard 
                          key={ticket.id}
                          ticket={ticket}
                          count={selectedTickets[ticket.id] || 0}
                          onChange={(count) => handleTicketChange(ticket.id, count)}
                        />
                      ))}
                    </div>
                    
                    <div className="border-t border-heritage-gold/20 pt-6 mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-heritage-charcoal">
                          <span className="font-medium">Total Tickets:</span> {getTicketCount()}
                        </div>
                        <div className="text-heritage-navy font-medium text-xl">
                          ₹{calculateTotal().toLocaleString()}
                        </div>
                      </div>
                      
                      <Button 
                        onClick={handleProceedToDetails} 
                        disabled={!canProceed}
                        className="w-full bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-navy"
                      >
                        Continue to Select Date & Time
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="p-6">
                  <Form {...form}>
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-heritage-navy">Select Date & Time</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Visit Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Select a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => date < new Date()}
                                      initialFocus
                                      className="p-3 pointer-events-auto"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="timeSlot"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Time Slot</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a time slot" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {timeSlots.map((slot) => (
                                      <SelectItem key={slot} value={slot}>
                                        {slot}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-heritage-navy">Your Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between space-x-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab("select")}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={validateDetailsAndProceed}
                          className="bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-navy"
                        >
                          Continue to Payment
                        </Button>
                      </div>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="payment" className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-heritage-navy">Payment Details</h3>
                        
                        <div className="p-4 bg-heritage-cream/50 rounded-md mb-6">
                          <div className="flex justify-between mb-2">
                            <span className="text-heritage-charcoal">Total Tickets:</span>
                            <span>{getTicketCount()}</span>
                          </div>
                          {Object.entries(selectedTickets).map(([ticketId, count]) => {
                            if (count > 0) {
                              const ticket = ticketTypes.find(t => t.id === ticketId);
                              if (ticket) {
                                return (
                                  <div key={ticketId} className="flex justify-between text-sm">
                                    <span>{ticket.name} x {count}</span>
                                    <span>₹{(ticket.price * count).toLocaleString()}</span>
                                  </div>
                                );
                              }
                            }
                            return null;
                          })}
                          <div className="border-t border-heritage-gold/20 mt-3 pt-3 flex justify-between font-medium">
                            <span>Total Amount:</span>
                            <span className="text-heritage-navy">₹{calculateTotal().toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-6">
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
                                      className="pl-10"
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
                                    <Input {...field} placeholder="MM/YY" />
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
                                    <Input {...field} placeholder="123" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative px-4 py-3 border border-heritage-gold/30 rounded-md bg-heritage-gold/5 text-heritage-charcoal/80 text-sm flex items-start space-x-3">
                        <Info className="h-5 w-5 text-heritage-gold flex-shrink-0 mt-0.5" />
                        <p>
                          This is a demonstration payment form. No actual payment will be processed.
                          Your information is not stored or transmitted to any payment processor.
                        </p>
                      </div>
                      
                      <div className="flex justify-between space-x-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab("details")}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-navy"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <>Processing...</>
                          ) : (
                            <>Complete Booking</>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="mt-8 p-5 border border-heritage-gold/20 rounded-lg bg-white/95 backdrop-blur-sm shadow-sm">
            <h3 className="text-lg font-medium text-heritage-navy mb-3">Important Information</h3>
            <ul className="space-y-2 text-heritage-charcoal/80">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-heritage-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Tickets must be booked at least 24 hours in advance</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-heritage-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Please arrive 15 minutes before your scheduled time</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-heritage-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Children under 5 years enter free with a paying adult</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-heritage-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Cancellations must be made 48 hours before scheduled visit for full refund</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TicketBooking;
