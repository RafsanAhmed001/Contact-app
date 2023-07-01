import React from "react";

const ContactCard = (props) => {
    const{id, name, email}= props.contact;

return(
    
    <div className="item">
    <div className="content">
        <div className="header">{name}</div>
        <i className="trash alternate outline icon" style={{ float: "right", color:"red", marginTop:"7px"}}></i>
        <div>{email}</div> 
    </div>
    
        
</div>
)
}

export default ContactCard;
// https://www.youtube.com/watch?v=0riHps91AzE&list=PLmHJXzaFz9eWWztIdC2pE-Z2hNE_KzOG7&index=1&t=1639s 
// click this link to pick up from where you stated @ 0:27:19 
// this is where i'm picking up -------