import React from "react";
import "./Topbar.css";

const Topbar = ({ label, list }) => {
    const displayListItems = () => {
        return list.map((item) => {
            return(
                <div key = {item} className="item button">{item}</div>
            )
        })
    }
    return (
        <div className='topbar-container'>
            <div className='topbar-icon-container'>
                <img
                    className='topbar-icon'
                    src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012016/untitled-1_333.png?itok=WvWJyeD9'
                    alt = "panda icon"
                />
            </div>
            <div>{label}</div>
            <div className="list-grid">{displayListItems()}</div>
            <div>Clerk/Manager view</div>
        </div>
    );
};

export default Topbar;
