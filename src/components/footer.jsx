import React from "react";

const classNameDiv = "footer-item";

const Footer = () => {
  return (
    <div className="footer">
        {getAddress()}
        {getHour()}
        {getContact()}
    </div>
  );
};

const getAddress = () => {
  return (
    <div className={classNameDiv}>
      <div className="widget subscribe no-box">
        <h5 className="widget-title">
          <span>ValorizaCred</span>
        </h5>
        <p>Rua Dorival de Barros Leite, 55, Centro - Salto de Pirapora </p>
      </div>
    </div>
  );
};

const getHour = () => {
  return (
    <div className={classNameDiv}>
      <div className="widget subscribe no-box">
        <h5 className="widget-title">
          <span>Horário de funcionamento</span>
        </h5>
        <p>Segunda a sexta - 8:30 até 17:30 </p>
      </div>
    </div>
  );
};

const getContact = () => {
  return (
    <div className={classNameDiv}>
      <div className="widget no-box">
        <h5 className="widget-title">
          <span>Contato</span>
        </h5>
        <ul className="thumbnail-widget">
          {getPhoneItem("(15) 3491-1468")}
          {getPhoneItem("(15) 99690-7254")}
        </ul>
      </div>
    </div>
  );
};

const getPhoneItem = phone => {
  let style = { textAlign: "center" };
  return (
    <div className="thumb-content" style={style}>
      <p>{phone}</p>
    </div>
  );
};

export default Footer;
