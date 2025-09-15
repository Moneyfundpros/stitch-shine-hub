import { Button } from "@/components/ui/button";
import InvestmentCard from "@/components/InvestmentCard";
import ProfitChart from "@/components/ProfitChart";
import TransactionList from "@/components/TransactionList";
import BottomNavigation from "@/components/BottomNavigation";
import { Settings } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const handleAction = (action: string) => {
    toast.info(`${action} feature coming soon!`);
  };

  return (
    <div className="min-h-screen bg-app-background flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 glass-effect z-10">
        <div className="w-12"></div>
        <h1 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Dashboard
        </h1>
        <div className="flex w-12 items-center justify-end">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 hover:bg-white/10"
            onClick={() => handleAction("Settings")}
          >
            <Settings size={20} />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-4 pb-20">
        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InvestmentCard
            title="Total Investment Balance"
            value="$12,500"
            backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
          />
          <InvestmentCard
            title="Active Plans"
            value="3"
            backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center"
          />
          <InvestmentCard
            title="Total Profit"
            value="$2,350"
            backgroundImage="https://images.unsplash.com/photo-1643039952431-38adfa91f320?w=400&h=300&fit=crop&crop=center"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => handleAction("Deposit")}
          >
            Deposit
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => handleAction("Withdraw")}
          >
            Withdraw
          </Button>
          <Button 
            variant="investment" 
            size="lg" 
            className="col-span-2"
            onClick={() => handleAction("Invest")}
          >
            Invest
          </Button>
        </div>

        {/* Profit Chart */}
        <ProfitChart />

        {/* Transaction List */}
        <TransactionList />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;