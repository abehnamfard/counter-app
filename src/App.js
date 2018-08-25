import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 2 },
      { id: 5, value: 22 }
    ]
  };

  handleIncrement = counter => {
    const index = this.state.counters.indexOf(counter);
    const counters = this.state.counters;
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="container-fluid">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
