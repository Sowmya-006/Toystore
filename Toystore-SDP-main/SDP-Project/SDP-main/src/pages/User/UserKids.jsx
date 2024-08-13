import React from "react";
import { useNavigate } from "react-router-dom";

import './Userfile.css';
const kidsCategory = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (<>
        <div className= "category-content" >
        <div
        className="category-item"
    onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.shopify.com/s/files/1/0646/3737/0541/files/infant-300x300.png?v=1708766239" alt = "Eyeglasses" />
        
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.shopify.com/s/files/1/0646/3737/0541/files/toodler-300x300.png?v=1708766240" alt = "Sunglasses" />
       
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.shopify.com/s/files/1/0646/3737/0541/files/Pre-schooler-300x300.png?v=1708766239" alt = "Computer Glasses" />
        
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.shopify.com/s/files/1/0646/3737/0541/files/Aged-300x300.png?v=1708766238" alt = "Reading Glasses" />
        
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.shopify.com/s/files/1/0646/3737/0541/files/Adolescent-300x300.png?v=1708766239" alt = "Contact Lenses" />
       
            </div>
        
        </div>
        </>
  );
};

export default kidsCategory;