import React from 'react';
import Table from "./components/Table"
import Wrapper from "./components/Wrapper";
import Employee from "./components/Employee";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import './App.css';

function App() {
  return (
    <Wrapper>
      <Table />
    </Wrapper>
  );
}

export default App;
