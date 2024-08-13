// ShopByCategory.jsx

import React, { useState } from "react";
import './Userfile.css';
import MenCategory from "./UserMen";
import WomenCategory from "./UserWomen";
import KidsCategory from "./UserKids";
import UserHome from "./UserHome";
import { User } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Nav.css"
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";
import { authService } from "@/services/auth";
import { color } from "framer-motion";

const ShopByCategory = () => {
  const [activeCategory, setActiveCategory] = useState("Men");
  const navigate = useNavigate();

 
  const handleNavigation = (path) => {
      authService.SignOut();
      navigate(path);
  };

  return (
    <>
    <div className="shop-by-category">
      
    <nav className="navbar">
            <div className="navbar-container">
            <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg">
      <div className="flex-shrink-0">
                        <img className="block lg:hidden h-8 w-auto" src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fa00a8f29cc626bc128f080/logo-for-website-480x480.png" alt="Logo" />
                        <img className="hidden lg:block h-12" src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fa00a8f29cc626bc128f080/logo-for-website-480x480.png" alt="Logo" />
                    </div>
      </div>
      <div className="design-panel">
      <div className="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
                </div>
            <div className="pl-3">
                <Button  onClick={()=>handleNavigation("/")} className="bg-[purple]  border-black">SIGN OUT</Button>
                </div>
            </div>
        </nav>
      <br></br>
      <br></br>
    
    <img data-v-dd2afbb0="" src="https://www.mastermindtoys.com/cdn/shop/files/W32_Coco_Village_desktop_desktop_2000x.jpg?v=1723142751" class="w-100 swiper-lazy swiper-lazy-loaded"></img>
          <br></br>
      <h2 className="font-semibold text-1xl sm:text-0xl md:text-2xl lg:text-2xl">SHOP BY CATEGORY</h2>
      <br></br>
      <div className="category-tabs">
      <button
  className={`${activeCategory === "Men" ? "active" : ""} bg-[purple] border-black`}
  onClick={() => setActiveCategory("Men")}
>
  BUDGET BUYS
</button>

        <button
          className={activeCategory === "Women" ? "active" : ""}
          onClick={() => setActiveCategory("Women")}
        >
          SHOP BY BRANDS
        </button>
        <button
          className={activeCategory === "Kids" ? "active" : ""}
          onClick={() => setActiveCategory("Kids")}
        >
          TINY TOTS
        </button>
      </div>
      <div className="category-content">
        {activeCategory === "Men" && <MenCategory />}
        {activeCategory === "Women" && <WomenCategory />}
        {activeCategory === "Kids" && <KidsCategory />}
      </div>
    </div>
   
    <footer className="footer">
        <div className="flex-shrink-0 pl-20">
                        <img className="block lg:hidden h-8 w-auto" src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fa00a8f29cc626bc128f080/logo-for-website-480x480.png" alt="Logo" />
                        <img className="hidden lg:block h-12" src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fa00a8f29cc626bc128f080/logo-for-website-480x480.png" alt="Logo" />
                    </div>
      <div className="footer-content">
      
        
        <div className="footer-sections">
          <div className="footer-section">
            <h4>About us</h4>
            <ul className="social-links">
              <li>
                <p>Blogs</p>
                
              </li>
              <li>
               <p>FAQs</p>
              </li>
              <li>
               <p>Refund Policy</p>
              </li>
              <li>
               <p>Terms and Services</p>
              </li>
              
            </ul>
            
          </div>
          

          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="social-links">
              <li>
                <p>Best Sellers</p>
              </li>
              <li>
                <p>New Products</p>
              </li>
              <li>
                <p>Baby Toys</p>
              </li>
              <li>
                <p>Puzzel For Kids</p>
              </li>
            </ul>
            
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className='pr-2'/> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className='pr-2'/> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className='pr-2' /> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className='pr-2'/> LinkedIn
                </a>
              </li>
            </ul>
            
          </div>
          
          <div className="footer-section">
            <h4>Contact us</h4>
            <p>www.toysmarche.com</p>
            
            <p>+0 6785433258</p>
            
            <p>123 Toy Lane<br />Toy City, TC 45678</p>
          </div>
        </div>
        <br></br>
        <br></br>
        
        <p>&copy; 2024 Toys Shop. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default ShopByCategory;