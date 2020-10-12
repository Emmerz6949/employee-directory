import React from "react";

const style = {
    jumbo: {
      background: "#141e41",
      borderBottom: "5px solid #d74139"
    }
};
  

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" style={style.jumbo}>
            <div className="container text-center text-light">
                <h1 className="display-4"><strong>Employee Directory</strong></h1>
                <p className="lead">You can sort the employees by alphabetical or reverse alphabetical order via clicking the up and down arrow heads beside "Name" or Filter the employees by their first name, last name, or email address via the search bar!</p>
            </div>
        </div>
    );
}

export default Jumbotron;
