import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InvestmentInput } from "@/components/ui/investment-input";
import { Mail, Lock, AlertCircle, Facebook } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful!");
      navigate("/dashboard");
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`${provider} login coming soon!`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-6 bg-app-background">
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="h-16 w-16 mb-4 text-brand-primary flex items-center justify-center">
          <AlertCircle size={64} />
        </div>
        <h1 className="text-text-primary text-3xl font-bold tracking-tight">Welcome Back</h1>
        <p className="text-text-secondary text-base mt-2">Sign in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto w-full">
        <InvestmentInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail size={20} />}
          required
        />
        
        <InvestmentInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock size={20} />}
          required
        />

        <div className="mt-6">
          <Button 
            type="submit" 
            variant="investment" 
            size="xl" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Log In"}
          </Button>
        </div>
      </form>

      <div className="relative my-8 flex items-center justify-center max-w-md mx-auto w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-input-border"></div>
        </div>
        <div className="relative bg-app-background px-4">
          <p className="text-text-secondary text-sm font-normal leading-normal">Or continue with</p>
        </div>
      </div>

      <div className="flex gap-4 max-w-md mx-auto w-full">
        <Button 
          variant="secondary" 
          size="lg" 
          className="flex-1"
          onClick={() => handleSocialLogin("Facebook")}
        >
          <Facebook size={20} />
          Facebook
        </Button>
        
        <Button 
          variant="secondary" 
          size="lg" 
          className="flex-1"
          onClick={() => handleSocialLogin("Google")}
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"/>
            <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"/>
            <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"/>
            <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.012,35.846,44,30.34,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"/>
          </svg>
          Google
        </Button>
      </div>

      <div className="pb-6 pt-8 max-w-md mx-auto w-full">
        <p className="text-text-secondary text-base font-normal leading-normal text-center">
          Don't have an account? 
          <button 
            className="font-bold text-brand-primary hover:underline ml-1"
            onClick={() => toast.info("Sign up coming soon!")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;