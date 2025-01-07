import React from "react"

class Userclass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count:0
        };
    }


 
    render(){

        const {name,component} = this.props;

        return(
            <div className="fun">
           <h1>count:{this.state.count}</h1>
           <button onClick={()=>{
            this.setState({
              count : this.state.count+1
            })
           }}>
            Increase
           </button>
            <h1>{name}</h1>
            <h1>{component} </h1>
        </div>
        )
    }
}

export  default Userclass;