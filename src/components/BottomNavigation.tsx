import { Home, FileText, Receipt, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
    { id: 'plans', label: 'Plans', icon: FileText, path: '/plans' },
    { id: 'transactions', label: 'Transactions', icon: Receipt, path: '/transactions' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' }
  ];

  const handleNavigation = (path: string) => {
    if (path === '/dashboard') {
      navigate(path);
    } else {
      // For other routes, show coming soon message
      alert('Coming soon!');
    }
  };

  return (
    <footer className="sticky bottom-0 glass-effect border-t border-input-border pb-safe">
      <div className="flex justify-around items-center px-2 pt-2 pb-safe">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-fast ${
                isActive 
                  ? 'text-brand-primary' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon size={20} />
              <p className="text-xs font-medium tracking-[0.015em]">{item.label}</p>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default BottomNavigation;