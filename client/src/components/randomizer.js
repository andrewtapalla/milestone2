import React, { useState, useEffect } from "react";

export function Randomizer() {

}

//Decade Switcher Logic
let params = [
    "https://logogame.s3.us-west-1.amazonaws.com/80sTacoBell.png",
    "https://logogame.s3.us-west-1.amazonaws.com/80sPringles.png",
    "https://logogame.s3.us-west-1.amazonaws.com/80sGatorade.png",
    "https://logogame.s3.us-west-1.amazonaws.com/80sNBC.png",
    "https://logogame.s3.us-west-1.amazonaws.com/80sDiscovery.png",
  ];
  /* let counter = 0; */
  export let test = params[Math.floor(Math.random() * params.length)];
  
  //Decade Switch button
  export function decadeSwitch() {
    //---this block of code was to update test var to new value---
    // test = params[Math.floor(Math.random() * params.length)];
    // counter += 1;
    // console.log(test);
    window.location.reload(false);
  }