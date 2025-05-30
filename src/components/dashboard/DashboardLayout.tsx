// src/components/dashboard/DashboardLayout.tsx
import { useState } from 'react'; // React default import removed
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Closed by default on mobile

  return (
    <div className="flex h-screen bg-[#F5F6FA] text-black">
      {/* Sidebar */}
      {/* Mobile: slides in and out, overlays content. Uses full screen height. */}
      {/* Desktop: fixed on the left. */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-3/4 sm:w-1/2 md:w-1/4 bg-[#F5F6FA] shadow-xl md:shadow-md
                   transform transition-transform duration-300 ease-in-out
                   md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Sidebar />
      </aside>

      {/* Overlay for mobile when sidebar is open, to close on click outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      {/* Mobile: Takes full width. */}
      {/* Desktop: Has left margin equal to sidebar width. */}
      <main className="flex-1 p-6 overflow-y-auto md:ml-[25%]">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Content passed to the layout */}
        {children || (
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold">Main Content Placeholder</h3>
            <p>This is where page-specific content will go.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;
