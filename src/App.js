import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Desktop } from './components/Desktop';
import { Icon } from './components/Icon';
import { GamesWindow } from './components/GamesWindow';
import { ProjectsWindow } from './components/ProjectsWindow';
import { READMEWindow } from './components/READMEWindow';
import { Window } from './components/Window';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/icon" element={<Icon />} />
        <Route path="/games_window" element={<GamesWindow />} />
        <Route path="/project_window" element={<ProjectsWindow />} />
        <Route path="/readme_window" element={<READMEWindow />} />
        <Route path="/window" element={<Window />} />
      </Routes>
    </div>
  );
}

export default App;
