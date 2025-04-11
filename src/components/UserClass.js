//class component example
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
        this.state={
            count:0
            //for another count state variable we will not create another this.state
            //we will do it inside this only
            //count2:0
        };

        console.log(this.props.name+"Child constructor")
    }

    componentDidMount(){
        console.log(this.props.name+"Child mount")
    }

    componentWillUnmount(){
        console.log("component unmount")
    }
    

    render(){
        const{name,location}=this.props;

        console.log(this.props.name+"Child render")
        return(
            <div className="user-card">
            <h1>Name: {name}</h1>
            <button 
            onClick={()=>{
                //we cannot directly update the state variable in a class component instead use this.setState()
                //this.state.count=this.state.count+1  --->wrong
                this.setState({
                    count:this.state.count+1
                })
            }}>Click me</button>
            <h2>Contact: {location}</h2>
            <h2>Count: {this.state.count}</h2>

            </div>
        )
    }
}

export default UserClass;