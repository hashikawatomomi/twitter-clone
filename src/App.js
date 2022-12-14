import { Timeline } from '@mui/icons-material';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />
      {/* Widget */}
    </div>
  );
}

export default App;
