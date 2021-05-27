import { v4 as uuidv4 } from "uuid";
import { allCategories } from "../const/productConst";

/*
 * Testing Purpose
 * This service is used for creating fake datas
 */

// fake mobile items
let mobile = Array(20)
  .fill(null)
  .map((value, index) => {
    let item = {
      id: uuidv4(),
      imgUrl: "/assets/mobile.jpeg",
      details: "Oppo a9-2020-cph1937 mobile",
      quantity: 0,
      price: 22000 * index + 1,
      categories: allCategories.MOBILE,
    };
    return item;
  });

// fake sports items
let sports = Array(20)
  .fill(null)
  .map((value, index) => {
    let item = {
      id: uuidv4(),
      imgUrl: "/assets/football.jpeg",
      details: "Football training kit nivia",
      quantity: 0,
      price: 499 * index + 1,
      categories: allCategories.SPORTS,
    };
    return item;
  });

// fake computer gadgets
let computerGadgets = Array(20)
  .fill(null)
  .map((value, index) => {
    let item = {
      id: uuidv4(),
      imgUrl: "/assets/mouse.jpeg",
      details: "Logitech b175 wireless mouse",
      quantity: 0,
      price: 377 * index + 1,
      categories: allCategories.COMPUTER_ACCESSORIES,
    };
    return item;
  });

// fake mobile gadgets
let mobileGadgets = Array(20)
  .fill(null)
  .map((value, index) => {
    let item = {
      id: uuidv4(),
      imgUrl: "/assets/headphone.jpeg",
      details: "Jbl c150siublk headphone",
      quantity: 0,
      price: 899 * index + 1,
      categories: allCategories.MOBILE_ACCESSORIES,
    };
    return item;
  });

// fake fashion items
let fashion = Array(20)
  .fill(null)
  .map((value, index) => {
    let item = {
      id: uuidv4(),
      imgUrl: "/assets/shoe.jpeg",
      details: "Shoe 8-ca4417-kraasa sports",
      quantity: 0,
      price: 1230 * index + 1,
      categories: allCategories.FASHION,
    };
    return item;
  });

// To shuffle fake product items
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getAllProductItems() {
  let allProduct = mobile
    .concat(sports)
    .concat(computerGadgets)
    .concat(mobileGadgets)
    .concat(fashion);
  return shuffleArray(allProduct);
}

export let fakeShuffledArray = getAllProductItems();
