import User from "./User";
import UserClass from "./UserClass"
import UserClass1 from "./UserClass1";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent mount")
    }

    render(){
        console.log("Parent render");
        return(
            <div>
                <h1>About Us</h1>
                <h1>This is react</h1>
                <User name={"Debarka Chakraborti"}>   </User>
                {/* <UserClass name={"first"} location="Real Madrid"></UserClass> */}
                {/* <UserClass1 name={"second"} location="Real Madrid"></UserClass1> */}
            </div>
        )
    }
}


// const About=()=>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h1>This is react</h1>
//             <User name={"Debarka Chakraborti"}>   </User>
//             <UserClass name={"Ronaldo"} location="Real Madrid"></UserClass>
//         </div>
//     )
// }


export default About;