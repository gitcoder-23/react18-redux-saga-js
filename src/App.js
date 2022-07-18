import { Routes, Route } from 'react-router-dom';

import './App.css';
import UsersComponent from './components/UsersComponent';

function App() {
  return (
    <div className="App">
      {/* <UsersComponent /> */}
      <Routes>
        <Route path="/" element={<UsersComponent />} />
      </Routes>
    </div>
  );
}

export default App;
