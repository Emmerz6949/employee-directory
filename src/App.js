import React, { Component } from 'react';
import Table from "./components/Table"
import Wrapper from "./components/Wrapper";
import Employee from "./components/Employee";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import './App.css';

class App extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.obtainE();
  }

  obtainE = () => {
    API.getE()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
        <Table>
          {this.state.employees.map(employed => (
              <Employee 
                name={{first: employed.name.first, last: employed.name.last}}
                picture={{medium: employed.picture.medium}}
                phone={employed.phone}
                email={employed.email}
              />
            ))}
        </Table>
      </Wrapper>
    );
  }
}

export default App;
