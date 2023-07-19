import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Portfolio } from './routers';
import { Suspense } from 'react';
function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Data loading.....</div>}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

