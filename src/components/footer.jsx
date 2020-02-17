import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <footer class="footer bg-light">
        <div class="row">
          {getAddress()}
          {getContact()}
        </div>
      </footer>
    </div>
  );
};

const getAddress = () => {
  return (
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="widget subscribe no-box">
        <h5 class="widget-title">
          <span>ValorizaCred</span>
        </h5>
        <p>Rua Dorival de Barros Leite, 55, Centro - Salto de Pirapora </p>
      </div>
    </div>
  );
};

const getContact = () => {
  return (
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="widget no-box">
        <h5 class="widget-title">
          <span>Contato</span>
        </h5>
        <ul class="thumbnail-widget">
          <li>{getPhoneItem("(15) 3333-1111")}</li>
          <li>{getPhoneItem("(15) 3333-1111")}</li>
          <li>{getPhoneItem("(15) 3333-1111")}</li>
        </ul>
      </div>
    </div>
  );
};
const getPhoneItem = phone => {
  return (
    <div class="thumb-content">
      <p>{phone}</p>
    </div>
  );
};

export default Footer;
