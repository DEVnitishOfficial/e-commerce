import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomareRouter from './Router/CustomareRouter';
import AdminRouter from './Router/AdminRouter';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomareRouter />}></Route>
        <Route path='/admin/*' element={<AdminRouter />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
