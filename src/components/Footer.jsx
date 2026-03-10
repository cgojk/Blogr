import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Site Info or Logo */}
        <div className="footer-brand">
          <Link to="/">
                  <img src={logo} className="footer-logo" alt="Podcast logo" />

               </Link>
          
         
        </div>
    <div className="secondpart_footer_links">

        {/* Footer Navigation */}
        <ul className="footer-links">
          {/* <li><Link to="/">Home</Link></li> */}
        
          <li className="footer-column">
            <h3 className="footer-title">Product</h3>
            <ul className="link-inner_list">
                <li> <Link to="/product/overview">Overview</Link></li>
                <li> <Link to="/product/pricing">Pricing</Link></li>
                <li> <Link to="/product/features">Features</Link></li>
                <li><Link to="/product/Marketplace">Marketplace</Link></li>
                <li><Link  to="/product/Integrations">Integrations</Link></li>

            </ul>
        </li>

          <li className="footer-column">
            <h3 className="footer-title">Company</h3>

                <ul className="link-inner_list">
                  <li> <Link to="/company/about">About</Link></li>
                  <li> <Link to="/company/careers">Careers</Link></li>
                  <li> <Link to="/company/blog">Blog</Link></li>
                  <li><Link to="/company/team">Team</Link></li>
              </ul>
          </li>

         


          <li className="footer-column">
            <h3 className="footer-title">Connect</h3>
              <ul className="link-inner_list">
                  <li> <Link to="/connect/contact">contact</Link></li>
                  <li> <Link to="/connect/newsletter">Newsletter</Link></li>
                  <li> <Link to="/connect/linkedin">LinkedIn</Link></li>

              </ul>
          </li>


        </ul>
     </div>
  </div>
    </footer>
  );
}