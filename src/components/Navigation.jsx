

import React, { useState}from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6"
import logo from "../assets/images/logo.svg"
import HeroSection from "../components/HeroSection";

export default function Navigation() {
  const[menuOpen,setMenuOpen]=useState(false);
  // close the menu when clicking outside

   const [openMenu, setOpenMenu] = useState(null); // Track which menu is open


  function handleLinkClick(){
    setMenuOpen(false);
  }
  

   function handleToggleMenu(menuName) {
    // Toggle the selected menu, close it if it's already open
    setOpenMenu(openMenu === menuName ? null : menuName);
  }

  return(



<>
 <nav className="navbar" role="navigation" aria-label="Main Navigation">
{/* logo always visible */}
  <div className="navbar-inner">
   <Link to="/">
          <img src={logo} className="nav-logo" alt="logo" />
        </Link>

 {/* Hamburger Button: Visible only on mobile */}
           <button
              className="menu-btn"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
           </button>  


</div>

{/* menu items + buttons toggleable */}

  <div className={`navbar-flex container  ${menuOpen ? "open" : ""}`}>
    {/* First part of navigation with main menu items */}
    <div className="first_part_navigation main-menu-items">
      <ul className="nav-list ">
       
        <li className="nav-list-item">
              <details 
              className="submenu"
                
                open={openMenu === "product"}
                
                >
                <summary 
                    className="nav-link"
                    onClick={(e) => {
                    e.preventDefault();
                    handleToggleMenu("product");
                    }}
                    >Product
                </summary>
            <div
                        className={`details-body ${openMenu === "product" ? "open" : ""}`}
                      >
                <ul className="submenu_list">
                      <li>
                        <NavLink
                          to="/overview"
                          onClick={handleLinkClick}
                          className="submenu_active"
                        >
                          Overview
                        </NavLink>
                      </li>
                        <li>
                            <NavLink
                              to="/pricing"
                              onClick={handleLinkClick}
                            className="submenu_active"
                            >
                            Pricing
                            </NavLink>
                        </li>
                      <li>
                        <NavLink
                          to="/marketplace"
                          onClick={handleLinkClick}
                        className="submenu_active"
                        >
                      Marketplace
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/features"
                          onClick={handleLinkClick}
                          className="submenu_active"
                        >
                      Features
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/integrations"
                          onClick={handleLinkClick}
                          className="submenu_active"
                        >
                    Integrations
                        </NavLink>
                      </li>
               </ul>
            </div>
          </details>

        </li>
      

       
        {/* Adding a submenu under Connect */}
        <li className="nav-list-item">
          <details
                  className="submenu"
                 
                   open={openMenu === "company"}
                >
            <summary className="nav-link"
             onClick={(e) => {
            e.preventDefault();
          handleToggleMenu("company");
           }}
            >Company</summary>
            <div
                    className={`details-body ${openMenu === "company" ? "open" : ""}`}
                  >
            <ul className="submenu_list">
                  <li>
                    <NavLink
                      to="/about"
                      onClick={handleLinkClick}
                      className="submenu_active"
                    >
                    About 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      onClick={handleLinkClick}
                      className="submenu_active"
                    >
                  Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Blog"
                      onClick={handleLinkClick}
                      className="submenu_active"
                    >
                  Blog
                    </NavLink>
                  </li>


                  <li>
                    <NavLink
                      to="/Careers"
                      onClick={handleLinkClick}
                    className="submenu_active"
                    >
                  Careers 
                    </NavLink>
                  </li>
            </ul>
          </div>
          </details>
        </li>
      

        {/* Adding a submenu under Connect */}
        <li className="nav-list-item">
           <details
                  className="submenu"
                  open={openMenu === "connect"}
                  // onClick={() => handleToggleMenu("connect")}
                >
            <summary className="nav-link"
              onClick={(e) => {
              e.preventDefault();
              handleToggleMenu("connect");
    }}

            >Connect</summary>
           <div
                    className={`details-body ${openMenu === "connect" ? "open" : ""}`}
                  >
            <ul  className="submenu_list">
                  <li>
                    <NavLink
                      to="/contact-us"
                      onClick={handleLinkClick}
                      className="submenu_active"
                      
                    >
                      Contact 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/newsletter"
                      onClick={handleLinkClick}
                      // className={({ isActive }) =>
                      //   isActive ? "active nav-link" : "nav-link"
                      className="submenu_active"
                    >
                    Newsletter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/linkedln"
                      onClick={handleLinkClick}
                    className="submenu_active"
                    >
                    Linkedln
                    </NavLink>
                  </li>
            </ul>
        </div>
      </details>
     </li>
    </ul>
    </div>

    {/* Second part of navigation (Login/Sign Up buttons) */}
   <div className="second_part_navigation" >
      <a href="#" className="login">Login</a>
      <a href="#" className="sign-up__btn">Sign Up</a>
    </div>
</div>

   
</nav>
      

  <HeroSection/>
</>
  )
}



  