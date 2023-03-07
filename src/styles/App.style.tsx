import { createGlobalStyle } from 'styled-components'

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  html, body{
    position: absolute;
    width: 428px;
    height: 926px;
    left: 0px;
    top: 0px;
    background: #075252;
  }
  #wrap {
    width: 100%;
    height: 50px;
    margin: 0;
    z-index: 99;
    position: relative; 
  }
  .navbar {
    height: 50px;
    padding: 0;
    margin: 0;
    position: absolute;
  }
  .navbar li {
    height: auto;
    width: 135.8px;
    float: left;
    text-align: center;
    list-style: none;
    font: normal bold 13px/1em Arial, Verdana, Helvetica;
    padding: 0;
    margin: 0;
  }
  .navbar a {
    border-left: 1px solid #ccc9c9;
    text-decoration: none;
    color: white;
    display: block;
  }

  h1{
    color: white;
    text-align:end;
    width:70%;
  }
  .navbar li:hover, a:hover {
    background-color:  #0e8d8d;
  }
  .navbar li ul {
    display: none;
    height: auto;
    margin: 0;
    padding: 0;
  }
  .navbar li:hover ul {
    display: block;
  }
  .navbar li ul li {
    background-color:#0e8d8d;
  }
  .navbar li ul li a {
    border-left: 1px solid #0e8d8d;
    border-right: 1px solid #0e8d8d;
    border-top: 1px solid #c9ffff;
    border-bottom: 1px solid #0e8d8d;
  }
  h2{
    color: white;
    font-size:160%;
  }


`
