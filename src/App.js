import { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/New';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
export default class App extends Component {
  pageSize = 15;
  state = {
    progress: 0
  }
  setprogress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route path="/" element={<News setprogress={this.setprogress} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
          <Route path="/business" element={<News setprogress={this.setprogress} key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
          <Route path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
          <Route path="/general" element={<News setprogress={this.setprogress} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
          <Route path="/health" element={<News setprogress={this.setprogress} key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
          <Route path="/science" element={<News setprogress={this.setprogress} key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
          <Route path="/sports" element={<News setprogress={this.setprogress} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}></Route>
          <Route path="/technology" element={<News setprogress={this.setprogress} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

