// src/pages/OverviewPage.tsx
import React from 'react';
import KPICard from '../components/dashboard/KPICard';
import LineChartCard from '../components/dashboard/charts/LineChartCard';
import SalesTargetCard from '../components/dashboard/SalesTargetCard';
import TopProductsCard from '../components/dashboard/TopProductsCard';
import TopCountriesCard from '../components/dashboard/TopCountriesCard';
import ChannelRevenueCard from '../components/dashboard/ChannelRevenueCard';
import { DollarSign, ShoppingCart, Eye } from 'lucide-react'; // Import icons for KPI Cards

// Simple SVG Icon Placeholders are now replaced by Lucide icons for KPI cards.
// If other SVGs were used elsewhere and intended to remain, they'd stay.

const OverviewPage: React.FC = () => {
  const kpiIconSize = "w-6 h-6"; // Standard size for KPI card icons (24px)

  return (
    <div className="space-y-8">
      {/* Section for KPI Cards */}
      <section>
        <div className="flex flex-col md:flex-row gap-6">
          <KPICard
            title="Total Profit"
            value="$82,373.21"
            indicator="+3.4%"
            iconPlaceholder={<DollarSign className={kpiIconSize} />}
            iconBgColor="bg-blue-100"
            iconColor="text-blue-500"
          />
          <KPICard
            title="Total Order"
            value="7,234"
            indicator="-2.8%"
            iconPlaceholder={<ShoppingCart className={kpiIconSize} />}
            iconBgColor="bg-green-100"
            iconColor="text-green-500"
          />
          <KPICard
            title="Impression"
            value="3.1M"
            indicator="+4.6%"
            iconPlaceholder={<Eye className={kpiIconSize} />}
            iconBgColor="bg-purple-100"
            iconColor="text-purple-500"
          />
        </div>
      </section>

      {/* Main Chart and Sales Target Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LineChartCard />
        </div>
        <div className="lg:col-span-1">
          <SalesTargetCard />
        </div>
      </section>

      {/* Top Products, Top Countries, and Channel Revenue Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TopProductsCard />
        <TopCountriesCard />
        <ChannelRevenueCard />
      </section>
    </div>
  );
};

// Re-add definitions for icons if they are not in a shared file yet for brevity in this example
// const DollarIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
// const CartIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg> );
// const EyeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /> </svg> );


export default OverviewPage;
