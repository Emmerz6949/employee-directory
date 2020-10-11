import React, { Component } from 'react';
import Table from "./components/Table"
import Wrapper from "./components/Wrapper";
import Employee from "./components/Employee";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import './App.css';

class App extends Component {
  state = {
    search: "",
    employees: [],
    sorted: false
  }

  componentDidMount() {
    this.obtainE();
  }

  obtainE = () => {
    API.getE()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });

    this.searchE(value);
  };

  searchE = val => {
    return this.state.employees
      .filter(e => (e.name.first.includes(val) || e.name.last.includes(val) || e.email.includes(val))).map(employed => (
        <Employee 
          name={{first: employed.name.first, last: employed.name.last}}
          picture={{medium: employed.picture.medium}}
          phone={employed.phone}
          email={employed.email}
          login={{username: employed.login.username}}
          key={employed.login.username}
        />
      ));
  }

  handleClickUp = () => {
    this.setState({ sorted: true });
    
    this.sortE();
  }

  handleClickDown = () => {
    this.setState({ sorted: true });
    
    this.reverseSortE();
  }

  sortE = () => {
    return this.state.employees
      .sort((a, b) => (a.name.first > b.name.first) ? 1 : -1).map(employed => (
        <Employee 
          name={{first: employed.name.first, last: employed.name.last}}
          picture={{medium: employed.picture.medium}}
          phone={employed.phone}
          email={employed.email}
          login={{username: employed.login.username}}
          key={employed.login.username}
        />
      ))
  }

  reverseSortE = () => {
    return this.state.employees
      .sort((a, b) => (a.name.first > b.name.first) ? 1 : -1).reverse().map(employed => (
        <Employee 
          name={{first: employed.name.first, last: employed.name.last}}
          picture={{medium: employed.picture.medium}}
          phone={employed.phone}
          email={employed.email}
          login={{username: employed.login.username}}
          key={employed.login.username}
        />
      ))
  }

  renderE = () => {
    if (this.state.search === "") {
      return this.state.employees.map(employed => (
        <Employee 
          name={{first: employed.name.first, last: employed.name.last}}
          picture={{medium: employed.picture.medium}}
          phone={employed.phone}
          email={employed.email}
          login={{username: employed.login.username}}
          key={employed.login.username}
        />
      ))
    } else {
      return this.searchE(this.state.search);
    }
  }

  render() {
    return (
      <Wrapper>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table 
          handleClickUp={this.handleClickUp}
          handleClickDown={this.handleClickDown}
        >
          {this.renderE()}
        </Table>
      </Wrapper>
    );
  }
}

export default App;
