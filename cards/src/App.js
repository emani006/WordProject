import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import "./styles/card.css"
import wordlist from './components/wordlist'
import Words from "./components/Words"
// import Table from "./components/Table"
// import TableOne from "./components/TableOne"
// import TableTwo from "./components/TableTwo"
import TableInput from "./components/TableInput";
import Slider from './components/Slider';

const wordStos = wordlist.map((word) => {return word});  

class App extends React.Component {
  render (){

    return (
      <div className="wrapper">
          <Header/>

          {/* <div className="cardBox">
            <div className="cardPlace">
              <div className="wordPlace">
                <Slider words={wordlist}/>
              </div>
            </div>
          </div> */}

          <Words words={wordlist}/>
            {/* <Table key={wordlist.id} words={wordlist}/> */}
            {/* {wordlist.map(el => {
              return <TableOne key={el.id} item={el}/>
            })} */}
            {/* <TableTwo item={wordlist}/> */}

            <TableInput item={wordlist}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
