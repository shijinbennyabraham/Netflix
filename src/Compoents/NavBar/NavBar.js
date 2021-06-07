import React from 'react'
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" alt="Netflix" />
            <img className="avatar" src="https://gravatar.com/avatar/31e545ebd97b0fe4dc13668c5fa4be8f?s=400&d=robohash&r=x" alt="Avatar" />
        </div>
    )
}

export default NavBar
