import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ProjectDetails from './pages/ProjectDetails';
import './styles/index.css';

function App() {
  console.log('Rendering App component...');
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
