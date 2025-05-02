
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Key, ArrowLeft } from 'lucide-react';

const Account = () => {
  const { toast } = useToast();
  
  // State for forms
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  // Form submission handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!loginEmail || !loginPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Show success message (in a real app, this would connect to authentication)
    toast({
      title: "Login Successful",
      description: "Welcome back to ThriftNest!",
    });
    
    // Reset form
    setLoginEmail('');
    setLoginPassword('');
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!signupName || !signupEmail || !signupPassword || !signupConfirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (signupPassword !== signupConfirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // Show success message (in a real app, this would connect to authentication)
    toast({
      title: "Account Created",
      description: "Welcome to ThriftNest!",
    });
    
    // Reset form
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="text-thrift-green dark:text-white hover:text-thrift-orange flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold font-lora mb-8 text-center text-thrift-green dark:text-white">My Account</h1>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="login" className="text-lg">Sign In</TabsTrigger>
              <TabsTrigger value="register" className="text-lg">Create Account</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card className="border-thrift-green/20 dark:border-gray-700 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-thrift-green dark:text-white flex items-center gap-2">
                    <User size={20} /> Sign In
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Welcome back! Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="dark:text-gray-300">Password</Label>
                        <Link to="#" className="text-sm text-thrift-orange hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-thrift-green hover:bg-thrift-green/90 dark:bg-thrift-orange dark:hover:bg-thrift-orange/90">
                      Sign In
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t dark:border-gray-700 pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link to="#" className="text-thrift-orange hover:underline" onClick={() => document.querySelector('[data-value="register"]')?.click()}>
                      Create one
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card className="border-thrift-green/20 dark:border-gray-700 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-thrift-green dark:text-white flex items-center gap-2">
                    <Key size={20} /> Create Account
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Join ThriftNest and start your sustainable shopping journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="dark:text-gray-300">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="dark:text-gray-300">Email</Label>
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="dark:text-gray-300">Password</Label>
                      <Input 
                        id="signup-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="dark:text-gray-300">Confirm Password</Label>
                      <Input 
                        id="confirm-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={signupConfirmPassword}
                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                        className="dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-thrift-orange hover:bg-thrift-orange/90">
                      Create Account
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t dark:border-gray-700 pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="#" className="text-thrift-orange hover:underline" onClick={() => document.querySelector('[data-value="login"]')?.click()}>
                      Sign in
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
