import React from "react";

function Table(props) {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name <i className="fas fa-angle-up" onClick={props.handleClickUp}></i><i className="fas fa-angle-down" onClick={props.handleClickDown}></i></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}

export default Table;
