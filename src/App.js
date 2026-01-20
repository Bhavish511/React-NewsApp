import { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/New';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  let pageSize = 15;
  let apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0);
  const setprogress = (progress) => {
    setProgress(progress)
  }
    return (
      <>
        <div>
          <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setprogress={setprogress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
            <Route path="/business" element={<News setprogress={setprogress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
            <Route path="/entertainment" element={<News setprogress={setprogress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
            <Route path="/general" element={<News setprogress={setprogress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
            <Route path="/health" element={<News setprogress={setprogress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
            <Route path="/science" element={<News setprogress={setprogress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
            <Route path="/sports" element={<News setprogress={setprogress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
            <Route path="/technology" element={<News setprogress={setprogress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
          </Routes>
          </Router>
        </div>
      </>
    )
}

export default App;