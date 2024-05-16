import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import CourseDetails from './pages/course-details/CourseDetails';
import CourseList from './pages/course-list/CourseList';
import Home from './pages/home/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul className='navbar-list'>
            <li className='navbar-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/courses'>Courses</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/about'>About Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<CourseList />} />
          <Route path='/courses/:id' element={<CourseDetails />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
