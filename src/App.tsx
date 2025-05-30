// src/App.tsx
import DashboardLayout from './components/dashboard/DashboardLayout';
import OverviewPage from './pages/OverviewPage'; // Import OverviewPage

function App() {
  return (
    <DashboardLayout>
      <OverviewPage /> {/* Render OverviewPage as the content */}
    </DashboardLayout>
  );
}

export default App;
