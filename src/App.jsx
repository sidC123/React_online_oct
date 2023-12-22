import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import GrandParent from './components/GrandParent';
import Todo from './components/Todo';
import PasswordGen from './components/PasswordGen';
import SearchFilter from './components/SearchFilter';
import BgChanger from './components/BackgroundColorChanger'
import Footer from './components/Footer';
import UpdateObjectsInsideArray from './components/UpdateObjectsInsideArray';
import MyContacts from './components/MyContacts';
import Contact from './pages/Contact/Contact';
import Form from './components/Formik_without_Ui_library/Form';
import ApiRequest from './components/ApiRequests';
import Demo from './components/Demo';

function App() {
  const navList = [
    {
      URL: "/",
      label: "Home",
    },
    {
      URL: "/contact",
      label: "Contact",
    },
  ]

  const homedata = [
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
    },
    {
      URL: "/updating-objects-inside-array",
      label: "Update Array of Objects",
    },
    {
      URL: "/my-contacts-app",
      label: "My Contacts App",
    },
    {
      URL: "/react-form",
      label: "React form Validation",
    }
  ]

  return (
    <>
      <BrowserRouter>
        <Navbar navData={navList} />
        <Routes>
          <Route path='/' element={<Homepage homedata={homedata} />} />
          <Route path='/grand-parent' element={<GrandParent />} />
          <Route path='/pass-gen' element={<PasswordGen />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/search-filter' element={<SearchFilter />} />
          <Route path='/bg-changer' element={<BgChanger />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-contacts-app' element={<MyContacts />} />
          <Route path='/api-req' element={<ApiRequest />} />
          <Route path='/react-form' element={<Form />} />
          <Route path='/updating-objects-inside-array' element={<UpdateObjectsInsideArray />} />
          <Route path='/demo' element={<Demo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
