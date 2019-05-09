import React, {Component} from "react"

class Cats extends Component {
    
    render() {
        

            const catFullname = (cat) => {
                return `${cat.firstName} ${cat.lastName}`
            }
      
        return (
            <div>
                 This is the homepage of {catFullname(this.props.cat)}<br />
                 <img src={this.props.cat.avatar} />
            </div>
        )

    }
}

export default Cats;