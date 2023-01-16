import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import "./styles/card.css"
import wordlist from './components/wordlist'
import Words from "./components/Words"
import Table from "./components/Table"

class App extends React.Component {
  render (){
    return (
      <div className="wrapper">
          <Header/>
          <Words words={wordlist}/>
          <Table words={wordlist}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
