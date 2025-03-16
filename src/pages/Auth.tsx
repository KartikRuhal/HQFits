
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Github, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin) {
      // Registration validation
      if (!username || !password || !email || !confirmPassword) {
        toast({
          title: "Missing fields",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
      
      if (password !== confirmPassword) {
        toast({
          title: "Passwords don't match",
          description: "Please make sure your passwords match",
          variant: "destructive",
        });
        return;
      }
      
      if (!termsAccepted) {
        toast({
          title: "Terms not accepted",
          description: "Please accept the Terms and Conditions",
          variant: "destructive",
        });
        return;
      }
    } else {
      // Login validation
      if (!username || !password) {
        toast({
          title: "Missing fields",
          description: "Please enter your username and password",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Mock successful authentication
    toast({
      title: isLogin ? "Login successful" : "Registration successful",
      description: isLogin ? "Welcome back!" : "Your account has been created",
    });
    
    // Redirect to product page
    setTimeout(() => navigate('/product-page'), 1500);
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} login initiated`,
      description: "This feature is not implemented in this demo",
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel - yellow gradient */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-yellow-200 to-yellow-400 flex-col justify-center items-center p-8">
        <div className="mb-12">
          <div className="border-2 border-black p-8 rotate-45 relative">
            <div className="absolute inset-0 flex items-center justify-center -rotate-45">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">👕</span>
                <span className="text-sm font-light uppercase tracking-widest mt-1">HQFITS</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-8">Already Registered</h2>
        <Button 
          onClick={() => setIsLogin(true)} 
          className="bg-black text-white hover:bg-black/80 px-10"
        >
          Login here
        </Button>
      </div>
      
      {/* Right panel - black */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center p-8 relative">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-center mb-6">HQFits</h1>
          <h2 className="text-2xl font-light text-center mb-8">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h2>
          
          {!isLogin && (
            <div className="mb-6">
              <p className="text-center text-sm mb-4">Sign up using social media</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 hover:bg-blue-600 hover:border-blue-600"
                  onClick={() => handleSocialLogin('Facebook')}
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 hover:bg-red-500 hover:border-red-500"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 hover:bg-gray-600 hover:border-gray-600"
                  onClick={() => handleSocialLogin('GitHub')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-white/20"></div>
                <span className="px-4 text-sm text-white/60">or</span>
                <div className="flex-grow h-px bg-white/20"></div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white text-black"
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white text-black"
              />
            </div>
            
            {!isLogin && (
              <>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-white text-black"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={termsAccepted}
                    onCheckedChange={(checked) => 
                      setTermsAccepted(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Terms And Conditions
                  </label>
                </div>
              </>
            )}
            
            <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
              {isLogin ? "Login" : "Sign In"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-white/70 hover:text-white"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Login"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
