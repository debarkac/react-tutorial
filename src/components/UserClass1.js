//class component example
import React from "react";

class UserClass1 extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
        this.state={
            userInfo:{
                name:"John",
                location:"Kolkata"
            }
        };

    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/debarkac");
        const json=await data.json();
    
        this.setState({
            userInfo:json
        })
    }
    
    componentDidUpdate(){
        //it is called because setState was used
        console.log("component update")
    }

    componentWillUnmount(){
        console.log("component unmount")
    }
    

    render(){
        const {name,location,html_url}=this.state.userInfo;
        console.log(this.state.userInfo);

        return(
            <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Place: {location}</h2>
            <h2>Profile: {html_url}</h2>
            </div>
        )
    }
}

export default UserClass1;