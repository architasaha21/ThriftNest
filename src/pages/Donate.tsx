
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-thrift-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-lora mb-6">Give Your Items a Second Life</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Your donations help reduce waste and support our sustainable fashion mission.
              Plus, you'll get store credit for eligible items!
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-thrift-orange hover:bg-thrift-orange/90 text-white px-8 py-6 text-lg">
                Schedule Pickup
              </Button>
              <Button variant="outline" className="border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-thrift-beige/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-lora text-center mb-12">How Donation Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-thrift-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-thrift-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Schedule</h3>
                  <p className="text-gray-600">
                    Book a pickup time or arrange to drop off your items at our store using our simple form.
                  </p>
                </CardContent>
              </Card>
              
              {/* Step 2 */}
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-thrift-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-thrift-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Evaluation</h3>
                  <p className="text-gray-600">
                    Our team will assess your items for quality and condition to determine eligibility and value.
                  </p>
                </CardContent>
              </Card>
              
              {/* Step 3 */}
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-thrift-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-thrift-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Get Rewarded</h3>
                  <p className="text-gray-600">
                    Receive store credit for accepted items that you can use on future purchases at ThriftNest.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Accept */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-lora text-center mb-12">What We Accept</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center text-thrift-green">
                  <CheckCircle className="mr-2 h-5 w-5" /> 
                  Items We Accept
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-thrift-green/10 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-thrift-green" />
                    </span>
                    <span>Gently used clothing (clean and in good condition)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-thrift-green/10 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-thrift-green" />
                    </span>
                    <span>Shoes and accessories (bags, belts, scarves, jewelry)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-thrift-green/10 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-thrift-green" />
                    </span>
                    <span>Vintage and designer items (even with minor flaws)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-thrift-green/10 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-thrift-green" />
                    </span>
                    <span>Small home décor items and books</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-thrift-green/10 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-thrift-green" />
                    </span>
                    <span>Sustainable and eco-friendly items</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                  <X className="mr-2 h-5 w-5" /> 
                  Items We Cannot Accept
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                    <span>Damaged, stained, or heavily worn clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                    <span>Undergarments and swimwear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                    <span>Large furniture or appliances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                    <span>Electronic devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                    <span>Items with strong odors or requiring specialty cleaning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 bg-thrift-beige/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-lora text-center mb-8">Schedule a Donation</h2>
            
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" type="date" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <select id="time" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select a time</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 4PM)</option>
                          <option value="evening">Evening (4PM - 7PM)</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="items">Number of Items (approx.)</Label>
                        <Input id="items" type="number" min="1" placeholder="Number of items" />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="description">Item Description</Label>
                        <textarea 
                          id="description" 
                          placeholder="Brief description of items you're donating" 
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        ></textarea>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Pickup Address (if requesting pickup)</Label>
                        <Input id="address" placeholder="Your address for pickup" />
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button className="bg-thrift-green hover:bg-thrift-green/90 text-white px-8 py-6">
                        Schedule Donation
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Store Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-lora text-center mb-12">Drop Off Locations</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Location 1 */}
              <Card className="bg-white overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Replace with actual store image */}
                  <div className="w-full h-full flex items-center justify-center bg-thrift-green/20">
                    <MapPin size={32} className="text-thrift-green" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Downtown Store</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <MapPin size={18} className="mr-2 text-thrift-green" />
                      123 Main Street, City Center
                    </p>
                    <p className="flex items-center">
                      <Clock size={18} className="mr-2 text-thrift-green" />
                      Open Mon-Sat: 10AM - 7PM
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Location 2 */}
              <Card className="bg-white overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Replace with actual store image */}
                  <div className="w-full h-full flex items-center justify-center bg-thrift-green/20">
                    <MapPin size={32} className="text-thrift-green" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Westside Location</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <MapPin size={18} className="mr-2 text-thrift-green" />
                      456 Ocean Avenue, West Side
                    </p>
                    <p className="flex items-center">
                      <Clock size={18} className="mr-2 text-thrift-green" />
                      Open Mon-Sun: 11AM - 8PM
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Location 3 */}
              <Card className="bg-white overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Replace with actual store image */}
                  <div className="w-full h-full flex items-center justify-center bg-thrift-green/20">
                    <MapPin size={32} className="text-thrift-green" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Eastside Boutique</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <MapPin size={18} className="mr-2 text-thrift-green" />
                      789 Elm Street, East District
                    </p>
                    <p className="flex items-center">
                      <Clock size={18} className="mr-2 text-thrift-green" />
                      Open Tue-Sun: 10AM - 6PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
