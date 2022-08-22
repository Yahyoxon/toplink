import "./Nav.css";
import LogoImg from "../../Assets/Img/LogoImg.png";
import menuIcon from "../../Assets/Img/menu.png";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "84%",
    right: "auto",
    bottom: "auto",
    height: "100vh",
    marginRight: "-100%",
    transform: "translate(-50%, -50%)",
  },
};

const Nav = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="logo-link">
          <img src={LogoImg} alt="" className="logo-img" />
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/workpage" className="nav-link">
              U qanday ishlaydi
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/featurepage" className="nav-link">
              Xususiyat
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loginpage" className="nav-link">
              Kirish
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register-page" className="nav-link">
              Ro‘yxatdan o‘tish
            </Link>
          </li>
        </ul>
        <button className="menu-btn" onClick={openModal}>
          <img src={menuIcon} alt="" className="menu-icon" />
        </button>
      </div>

      <div className="navs-modal">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ul className="nav-lists">
            <button onClick={closeModal} className="close-menus">
              &times;
            </button>
            <li className="nav-items">
              <Link to="/workpage" className="nav-link">
                U qanday ishlaydi
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/featurepage" className="nav-link">
                Xususiyat
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/loginpage" className="nav-link">
                Kirish
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/register-page" className="nav-link">
                Ro‘yxatdan o‘tish
              </Link>
            </li>
          </ul>
        </Modal>
      </div>
    </nav>
  );
};

export default Nav;
