import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="left-footer">
        <li>
          <Link to={"/"}>Mesafeli Satış Sözleşmesi</Link>
        </li>
        <li>
          <Link to={"/"}>Çerez Politikası</Link>
        </li>
        <li>
          <Link to={"/"}>KVKK Aydınlatma Metni</Link>
        </li>
      </ul>

      <ul className="mid-footer">
        <li>
          <Link to={"/"}>Hakkımızda</Link>
        </li>
        <li>
          <Link to={"/"}>Sıkca Sorulan Sorular</Link>
        </li>
        <li>
          <Link to={"/"}>Çerez Politikası</Link>
        </li>
      </ul>

      <ul className="right-footer">
        İletişim
        <li>
          <Link to={"/"} className="icon">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"} className="icon">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"} className="icon">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"} className="icon">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
