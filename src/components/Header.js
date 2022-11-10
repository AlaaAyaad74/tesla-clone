import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
function Header() {
  const [width, setWidth] = useState(1);
  console.log(width);
  const carsValue = useSelector((state) => state.car.cars);
  // carsValue.cars.map((item) => console.log(item));
  return (
    <HeaderStyle>
      <div className="logo">
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="models">
        <ul>
          {carsValue.cars.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="options">
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a
              onClick={() => {
                setWidth(!width);
              }}
            >
              Menu
            </a>
          </li>
        </ul>
      </div>
      <Burgernav
        style={{ transform: `${width ? "translateX(100%)" : "TranslateX(0)"}` }}
      >
        <li
          id="close"
          onClick={() => {
            setWidth(!width);
          }}
        >
          <GrClose />
        </li>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cyber truck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilites</a>
        </li>
        <li>
          <a href="#">Find us</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">United States</a>
        </li>
      </Burgernav>
    </HeaderStyle>
  );
}
const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  z-index: 1;
  .logo {
    width: 120px;
    height: 22px;
  }
  .logo img {
    object-fit: cover;
  }
  ul {
    display: flex;
    font-weight: 600;
  }

  .models a,
  .options a {
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    transition: 0.1s;
  }
  .models a:hover,
  .options a:hover {
    background-color: #fff;
  }
  @media (max-width: 992px) {
    .models {
      display: none;
    }
  }
  @media (max-width: 400px) {
    .options ul li {
      display: none;
    }
    .options ul li:nth-last-child(1) {
      display: block;
    }
  }
`;
const Burgernav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: #fff;
  z-index: 16;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  gap: 0.5em;
  transition: 1s ease;
  overflow-y: scroll;
  li {
    text-align: start;
    list-style: none;
    margin: 0.25em;
    font-weight: 500;
  }
  li a {
    display: block;
    padding: 0.45em;
    border-radius: 4px;
    transition: 0.5s;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  #close {
    text-align: end;
    width: fit-content;
    margin-left: auto;
    cursor: pointer;
    padding: 0.4em;
    display: flex;
    border-radius: 4px;
  }
  #close:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default Header;
