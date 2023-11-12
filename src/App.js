import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './components/Head.js';
import Home from './pages/Home.js';
import NewText from './pages/NewText.js';
import LogIn from './pages/LogIn.js';


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Head />}>
          <Route index element={<Home />} />
          <Route path='newtext' element={<NewText />} />
        </Route>
        <Route path='login' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;