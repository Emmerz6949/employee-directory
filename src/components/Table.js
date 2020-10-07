import React, { Component } from "react";


class Table extends Component {
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
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employed => (
                        <Employee 
                            name={{first: employed.name.first, last: employed.name.last}}
                            picture={{medium: employed.picture.medium}}
                            phone={employed.phone}
                            email={employed.email}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
    
}

export default Table;
