import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-950 text-stone-300 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
