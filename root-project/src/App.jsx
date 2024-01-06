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
import ImageUploadForm from './components//ImageUploadForm';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import ScrollIndicator from './components/scroll-indicator';

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

  const routeData = [
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
    },
    {
      URL: "/image-upload",
      label: "Image Upload Form",
    },
    {
      URL: "/accordion",
      label: "Accordion",
    },
    {
      URL: "/popup-modal",
      label: "Modal Popup",
    },
    {
      URL: "/custom-Nav-tabs",
      label: "Nav Tabs",
    },
    {
      URL: "/github-profile-finder",
      label: "GitHub Profile Finder",
    },
    {
      URL: "/image-slider",
      label: "Image Slider",
    },
    {
      URL: "/theme-changer",
      label: "Theme changer",
    },
    {
      URL: "/load-more-data",
      label: "Load More Data",
    },
    {
      URL: "/qr-code-generator",
      label: "QR Code Generator",
    },
    {
      URL: "/scroll-indicator",
      label: "Scroll indicator",
    },
    {
      URL: "/scroll-to-top-bottom",
      label: "Scroll to top bottom",
    },
    {
      URL: "/search-autocomplete",
      label: "Search Autocomplete",
    },
    {
      URL: "/star-rating",
      label: "Star rating",
    },
    {
      URL: "/tic-tac-toe",
      label: "Tic Tac toe",
    },
    {
      URL: "/tree-view",
      label: "Tree View",
    },
    {
      URL: "/use-fetch",
      label: "Use fetch",
    },
    {
      URL: "/use-outside-click",
      label: "Use outside click",
    },
    {
      URL: "/use-window-resize",
      label: "Use window resize",
    },

  ]

  return (
    <>
      <BrowserRouter>
        <Navbar navData={navList} />
        <Routes>
          <Route path='/' element={<Homepage routeData={routeData} />} />
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
          <Route path='/image-upload' element={<ImageUploadForm />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/accordion' element={<Accordian />} />
          <Route path='/popup-modal' element={<ModalTest />} />
          <Route path='/custom-Nav-tabs' element={<TabTest />} />
          <Route path="/github-profile-finder" element={<GithubProfileFinder />} />
          <Route path="/image-slider" element={<ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />} />
          <Route path="/theme-changer" element={<LightDarkMode />} />
          <Route path="/load-more-data" element={<LoadMoreData />} />
          <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
          <Route path="/scroll-indicator" element={<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />} />
          <Route path="/scroll-indicator" element={<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />} />

        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
