import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={{
          background: "#493D9E",
          position: "fixed",
          zIndex: 999,
          top: 0,
          right: 0,
          left: 0,
          height: "12vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 15vw",
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#FFF2AF",
              // marginRight: "10px",
            }}
          >
            oldpaperbank.com
          </p>
        </div>
        <div
          style={{
            // background: "green",
            display: "flex",
            width: "30vw",
          }}
          id="nav-links"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#FFF2AF",
            }}
            id="nav-home"
          >
            Home
          </Link>
          <div
            style={{
              color: "#FFF2AF",
            }}
            id="nav-about"
          >
            About
          </div>
          <div
            style={{
              color: "#FFF2AF",
            }}
            id="nav-contact"
          >
            Contact
          </div>
          <div
            style={{
              position: "fixed",
              right: "5vw",
              top: "4.5vh",
            }}
            id="ham"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#FFF2AF",
          // height: "12vh",
          position: "fixed",
          width: "100%",
          zIndex: "998",
          top: isOpen ? "12vh" : "-9vh",
          transition: "0.2s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
        id="ham-items"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "10px",
          }}
        >
          Home
        </Link>
        <div>About</div>
        <div
          style={{
            paddingBottom: "10px",
          }}
        >
          Contact
        </div>
      </div>
    </>
  );
};

export default Navbar;
