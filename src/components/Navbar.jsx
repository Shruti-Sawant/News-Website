import React from 'react'
import { Link } from 'react-router-dom';
import "./News.css"

function Navbar() {
    return (
        <>
            <div style={{ height: " 40px", width: "auto", backgroundColor: "red", textAlign: "center", paddingTop: "18px", paddingBottom: "5px" }}>
                <p style={{ fontSize: "25px", fontWeight: "bolder" }}>
                    Today's News
                </p>
            </div>
            <div>
                <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <li className='ctry-menu' style={{ margin: "5px 20px" }}><Link to='/us-news' style={{ textDecoration: "none", color: "maroon" }}>US</Link></li>
                    <li className='ctry-menu' style={{ margin: "5px 20px" }}><Link to='/france-news' style={{ textDecoration: "none", color: "maroon" }}>France</Link></li>
                    <li className='ctry-menu' style={{ margin: "5px 20px" }}><Link to='/ukraine-news' style={{ textDecoration: "none", color: "maroon" }}>Ukraine</Link></li>
                    <li className='ctry-menu' style={{ margin: "5px 20px" }}><Link to='/argentina-news' style={{ textDecoration: "none", color: "maroon" }}>Argentina</Link></li>
                    <li className='ctry-menu' style={{ margin: "5px 20px" }}><Link to='/india-news' style={{ textDecoration: "none", color: "maroon" }}>India</Link></li>
                    <li className='ctry-menu' style={{ margin: "5px 20px" }}><Link to='/europe-news' style={{ textDecoration: "none", color: "maroon" }}>Europe</Link></li>
                </ul>
                <hr />
            </div>
        </>
    )
}

export default Navbar