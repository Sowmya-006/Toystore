import React from "react";
import { useNavigate } from "react-router-dom";

import './Userfile.css';
const WomenCategory = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (<>
        <div className= "category-content" >
        <div
        className="category-item"
    onClick = {() => handleNavigation("/girls-product")} 
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/LEGO-200925-1601042793777?wid=315&hei=315&qlt=60&fmt=webp" />
        
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/GUEST_0d260d8f-6ab7-4ac2-b315-9f7022f55c85?wid=315&hei=315&qlt=60&fmt=webp"  />
        
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/Pokemon-210923-1632433223745?wid=315&hei=315&qlt=60&fmt=webp" />
        
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/App_6182927-190712_1562963064353?wid=315&hei=315&qlt=60&fmt=webp"/>
       
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/D_4-220316-1647465552113?wid=315&hei=315&qlt=60&fmt=webp"/>
        
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/App_2182927-190712_1562963022383?wid=315&hei=315&qlt=60&fmt=webp" />
        
        </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/FAO-210817-1629215295236?wid=315&hei=315&qlt=60&fmt=webp" />
        
        </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/GUEST_0ec652ce-16f1-4191-bbf2-866ff397fa2a?wid=315&hei=315&qlt=60&fmt=webp" />
        
        </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/GUEST_8f480354-08f2-44d8-ba6b-96594edb90ff?wid=315&hei=315&qlt=60&fmt=webp" />
        
        </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://target.scene7.com/is/image/Target/GUEST_a482ecd5-4b9c-4ff6-97bc-89e1763d5a82?wid=315&hei=315&qlt=60&fmt=webp" />
        
        </div>
        
        </div></>
  );
};

export default WomenCategory;