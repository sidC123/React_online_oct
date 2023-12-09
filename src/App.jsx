import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import GrandParent from './components/GrandParent';
import Todo from './components/Todo';
import PasswordGen from './components/PasswordGen';
import SearchFilter from './components/SearchFilter';
import BgChanger from './components/BackgroundColorChanger'
import Footer from './components/Footer';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';

function App() {
  const navList = [
    {
      URL: "/",
      label: "Home",
    },
    {
      URL: "/grand-parent",
      label: "GrandParent",
    },
    {
      URL: "/todo",
      label: "Todo",
    },
    {
      URL: "/pass-gen",
      label: "PassGen",
    },
    {
      URL: "/search-filter",
      label: "Filter",
    },
    {
      URL: "/bg-changer",
      label: "Bg Changer",
    }, {
      URL: "/contact",
      label: "Contact",
    },

  ]

  return (
    <>
      <BrowserRouter>
        <Navbar navData={navList} />

        <Routes>
          <Route path='/' element={<Homepage navData={navList} />} />
          <Route path='/grand-parent' element={<GrandParent />} />
          <Route path='/pass-gen' element={<PasswordGen />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/search-filter' element={<SearchFilter />} />
          <Route path='/bg-changer' element={<BgChanger />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
