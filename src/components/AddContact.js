import React from "react";

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui manin">
                <h2>Add Conatact</h2>
                <form className="ui form">
                    <div className="field">
                        <lebel>Name</lebel>
                        <input type="text" name = "name" placeholder="Type your name"></input>
                    </div>
                    <div className="field">
                        <lebel>Email</lebel>
                        <input type="text" name = "email" placeholder="Type your Email"></input>
                    </div>
                    
                    <button className="ui button blue" name="Add">Add</button>

                </form>

            </div>
        )
    }
}

export default AddContact;
//dfsdf