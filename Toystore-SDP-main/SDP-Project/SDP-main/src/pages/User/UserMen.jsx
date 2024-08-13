import React from "react";
import { useNavigate } from "react-router-dom";

import './Userfile.css';
const MenCategory = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (<>
        <div className= "category-content" >
        <div
        className="category-item"
    onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://extrokids.com/cdn/shop/files/under-99-300x300_png_290x.webp?v=1708499376" alt = "Eyeglasses" />
        
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://extrokids.com/cdn/shop/files/under-199-300x300_png_290x.webp?v=1708499375" />
        
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://extrokids.com/cdn/shop/files/under-499-300x300_png_290x.webp?v=1708499376"  />
        
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://extrokids.com/cdn/shop/files/under-599-300x300_png_290x.webp?v=1708499368"  />
        
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://extrokids.com/cdn/shop/files/Under-799-300x300_png_290x.webp?v=1708499375" />
        
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://extrokids.com/cdn/shop/files/under-999-300x300_png_290x.webp?v=1708499376" />
       
        </div>
        
        </div>
        </>
  );
};

export default MenCategory;