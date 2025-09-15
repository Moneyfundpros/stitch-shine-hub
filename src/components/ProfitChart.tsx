import { TrendingUp } from "lucide-react";

const ProfitChart = () => {
  return (
    <div className="bg-app-surface p-4 rounded-xl">
      <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Profit Graph</h2>
      <div className="mt-4">
        <p className="text-text-primary tracking-light text-4xl font-bold leading-tight truncate">$2,350</p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-text-secondary text-sm font-normal leading-normal">Last 30 Days</p>
          <p className="text-brand-success text-sm font-medium leading-normal flex items-center">
            <TrendingUp size={16} className="mr-1" />
            +15%
          </p>
        </div>
        <div className="mt-4 h-40">
          <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 475 150" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear_profit)"></path>
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="hsl(var(--brand-primary))" strokeLinecap="round" strokeWidth="3"></path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_profit" x1="236" x2="236" y1="1" y2="149">
                <stop stopColor="hsl(var(--brand-primary))" stopOpacity="0.3"></stop>
                <stop offset="1" stopColor="hsl(var(--brand-primary))" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfitChart;