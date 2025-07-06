//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Testunmount from "./testunmount";
import Employeedetails from "./Employeedetails";
import Searchfield from "./searchfield";
// import PokemonFetcher from "./PokemonFetcher";
import Pokemon from "./Pokemon";

// function App() {
//   return (
//    //<h1>Priya</h1>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Priya",
      flag: true,
    };
    console.log("Constructor called");
    this.changeName = this.changeName.bind(this);
    this.removeName = this.removeName.bind(this);
  }
  static getDerivedStatesFromProps() {
    console.log("getDerivedStateFromProps method is called");
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }

  changeName() {
    this.setState({
      name: "Abhay",
    });
  }
  removeName() {
    this.setState({
      flag: !this.state.flag,
    });
  }

  componentWillUnmount() {


  }

  render() {
    console.log("Render method called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Click me</button>
        <br></br>
        <button onClick={this.removeName}>Remove me</button>

        {this.state.flag && <Testunmount />}
        {/* Assignment 1 completed */}
        <Employeedetails/>
        <Searchfield/>
        <Pokemon/>
        {/* <PokemonFetcher/> */}
      </div>
    );
  }
}
export default App;
