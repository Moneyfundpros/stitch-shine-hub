import { ReactNode } from "react";

interface InvestmentCardProps {
  title: string;
  value: string;
  backgroundImage?: string;
  className?: string;
  children?: ReactNode;
}

const InvestmentCard = ({ title, value, backgroundImage, className = "", children }: InvestmentCardProps) => {
  const cardStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : undefined;

  return (
    <div 
      className={`bg-app-surface bg-cover bg-center flex flex-col items-start justify-end rounded-xl p-4 min-h-[160px] transition-fast hover:scale-105 cursor-pointer ${className}`}
      style={cardStyle}
    >
      <p className="text-text-primary text-sm font-medium leading-normal">{title}</p>
      <p className="text-text-primary tracking-tight text-3xl font-bold leading-tight">{value}</p>
      {children}
    </div>
  );
};

export default InvestmentCard;