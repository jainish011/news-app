import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import './App.css';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
 const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#ffc600'
        progress={progress}
        height={2}
      />
        <Routes>
          <Route  path='/' element={<News setProgress={setProgress}  apiKey={apiKey}  key='general' pageSize={10} country='in' category='general' />}></Route>
          <Route   path='sports' element={<News setProgress={setProgress}  apiKey={apiKey} key='sports' pageSize={10} country='in' category='sports'/>}></Route>
          <Route   path='science' element={<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={10} country='in' category='science'/>}></Route>
          <Route   path='business' element={<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={10} country='in' category='business'/>}></Route>
          <Route   path='entertainment' element={<News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={10} country='in' category='entertainment'/>}></Route>
          <Route   path='health' element={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={10} country='in' category='health'/>}></Route>
          <Route   path='technology' element={<News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={10} country='in' category='technology'/>}></Route>
        </Routes>
      </Router>
      </>
    )
}

