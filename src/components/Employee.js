import React from "react";

function Employee(props) {
    let eName = `${props.name.first} ${props.name.last}`;
    return (
        <tr id={props.login.username}>
            <td><img alt={eName} src={props.picture.medium} /></td>
            <td className="align-middle">{eName}</td>
            <td className="align-middle">{props.phone}</td>
            <td className="align-middle">{props.email}</td>
        </tr>
    );
}

export default Employee;
