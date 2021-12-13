// This is the unordered list in the nav menu.
const menuList = document.getElementById("menu-list");

// Set initial style.maxHeight to 0px.
menuList.style.maxHeight = "0px";

// Create the event handler associated with the onClick event attribute.
const togglemenu = () => {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "150px";
  } else {
    menuList.style.maxHeight = "0px";
  }
};