// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the Cat fact.
 * The "async" is there because it will take time for the internet to return the value
 */
async function getCatFact() {
  // the "try" is here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch("https://meowfacts.herokuapp.com/")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const randomFactNumber = jsonData.data[0]

    // output
    document.getElementById("cat-fact").innerHTML = "<p>" + randomFactNumber + "</p>"
  } catch (error) {
    console.error(error)
  }
}