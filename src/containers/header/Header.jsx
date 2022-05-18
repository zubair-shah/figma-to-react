import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets Build something amazing with gpt3 Open AI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque
          consectetur velit nisi! Libero, tempora maiores inventore quia est
          voluptatibus! Voluptatibus, explicabo.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder="Your Email Adrress" />
          <button type="button"> Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            alias ex.
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
