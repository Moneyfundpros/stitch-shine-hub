import { ArrowUpRight, ArrowDownLeft, TrendingUp } from "lucide-react";

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'investment';
  amount: string;
  date: string;
  icon: React.ReactNode;
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'deposit',
    amount: '+$500',
    date: '2023-05-20',
    icon: <ArrowDownLeft className="text-text-primary" size={20} />
  },
  {
    id: '2',
    type: 'withdrawal',
    amount: '-$200',
    date: '2023-05-18',
    icon: <ArrowUpRight className="text-text-primary" size={20} />
  },
  {
    id: '3',
    type: 'investment',
    amount: '+$1,000',
    date: '2023-05-15',
    icon: <TrendingUp className="text-text-primary" size={20} />
  }
];

const TransactionList = () => {
  return (
    <div>
      <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em] px-4 pt-5 pb-2">
        Latest Transactions
      </h2>
      <div className="divide-y divide-input-border">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center gap-4 p-4 min-h-[72px] justify-between hover:bg-app-surface transition-fast cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-button-secondary flex items-center justify-center">
                {transaction.icon}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-text-primary text-base font-medium leading-normal line-clamp-1 capitalize">
                  {transaction.type}
                </p>
                <p className="text-text-secondary text-sm font-normal leading-normal line-clamp-2">
                  {transaction.date}
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <p className="text-text-primary text-base font-medium leading-normal">
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;