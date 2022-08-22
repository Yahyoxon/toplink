import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-title">Bugunoq Toplink jamoasiga qo'shiling</h2>
          <p className="footer-text">
            O'z izdoshlariga o'zlarining barcha mazmunini kashf qilishda yordam
            berish uchun Toplink-dan foydalanadigan minglab foydalanuvchilarga
            qo'shiling.
          </p>
          <Link to="/register-page" className="footer-link">
            Toplink-dan bepul foydalaning
          </Link>
          <p className="footer-subtext">
            Bu haftada 5318 kishi roʻyxatdan oʻtgan!
          </p>
        </div>
        <ul className="footer-list">
          <li className="footer-item">
            <Link
              to="/workpage"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="footer-links"
            >
              U qanday ishlaydi
            </Link>
          </li>
          <li className="footer-item">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/featurepage"
              className="footer-links"
            >
              Xususiyat
            </Link>
          </li>
          <li className="footer-item">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/faqpage"
              className="footer-links"
            >
              FAQ
            </Link>
          </li>
          <li className="footer-item">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/servicepage"
              className="footer-links"
            >
              Terms Of Service
            </Link>
          </li>
          <li className="footer-item">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/policypage"
              className="footer-links"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
        <p className="footer-info">
          Copyright © 2022 Toplink All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
