import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostContextProvider from './store/social-media-store';

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <PostContextProvider>
        <div className='d-flex position-relative'>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className='w-100 position-relative'>
            <Header />
            <main className='mx-4 py-4'>
              {activeTab === "home" ? <PostList /> : <CreatePost />}
            </main>
            <Footer />
          </div>
        </div>
      </PostContextProvider>
    </>
  )
}

export default App
