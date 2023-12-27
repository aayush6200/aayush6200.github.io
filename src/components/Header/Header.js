import React, { useState } from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import "./style.css";

const Header = ({ toggle }) => {
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);

  const handleCertificationsClick = () => {
    setIsCertificationsOpen(!isCertificationsOpen);
  };

  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src="/logo.png" alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>

          {/* Certifications Dropdown */}
          <div className="menu-item">
            <NavLink
              className="menu-item"
              onClick={handleCertificationsClick}
              style={{ color: "rgb(119, 119, 121)", cursor: "pointer" }}>
              Certifications
            </NavLink>
            {isCertificationsOpen && (
              <div className="dropdown-content">
                <a
                  href="#/action-1"
                  onClick={() => {
                    window.open(
                      "https://www.credly.com/badges/45d979c2-afd3-4570-b837-ddb1371c746c/linked_in?t=s32xk4"
                    );
                  }}>
                  AWS SAA-C03
                </a>
                <a
                  href="#/action-2"
                  onClick={() => {
                    window.open(
                      "https://www.coursera.org/account/accomplishments/certificate/TCHXK5NKMS8Z"
                    );
                  }}>
                  ML/AI(Coursera)
                </a>
              </div>
            )}
          </div>

          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1zdQCVVhV7UK_mIZdz237V7mRCaVYFAQV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
