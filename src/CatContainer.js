import React from "react";
import "./CatContainer.css"

const black = {
    backgroundColor: 'black'
}

const red = {
    backgroundColor: 'red'

}



function CatContainer(props) {
    return (
        <div className="catContainer" style={this.props.style}>
            <h1>this is {props.name}'s page</h1>
            {props.children}
        </div>
    )
}

export default CatContainer;