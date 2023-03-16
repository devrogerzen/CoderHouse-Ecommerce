import React from "react";
import Daniel from "../img/daniel.jpg";
import Elliot from "../img/elliot.jpg";
import Matthew from "../img/matthew.png";
import {RxExternalLink}  from 'react-icons/rx'

export const ItemListContainer = () => {
  return (
    <div className="section-card">
      <div className="card">
        <img src={Daniel} alt="img-user" />
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <a href="/#"><RxExternalLink /></a>
      </div>
      <div className="card">
        <img src={Elliot} alt="img-user" />
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <a href="/#"><RxExternalLink /></a>
      </div>
      <div className="card">
        <img src={Matthew} alt="img-user" />
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <a href="/#"><RxExternalLink /></a>
      </div>
    </div>
  );
};
