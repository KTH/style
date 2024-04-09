/* eslint no-var: off */

// JavaScript that originally was placed in kth-style
// It copies the content of the main menu and places it in the left mobile
window.addEventListener("load", () => {
  // If no mobile menu container is present, skip everything
  if (!document.getElementById("mobileMenuList")) {
    return;
  }

  var mainMenu = document.getElementById("mainMenu"); // Get main menu

  if (mainMenu) {
    // For main menu items, copy a link if it exists, otherwise copy the link content
    createMobileMenuItems(mainMenu.querySelectorAll("li"), true);
  }

  function createMobileMenuItems(
    menuItems: NodeListOf<HTMLElement>,
    includeInline: boolean,
  ) {
    for (var i = 0; i < menuItems.length; i++) {
      var linkToCopy = menuItems[i].querySelector("a");
      if (linkToCopy || includeInline) {
        var listItem = document.createElement("li");
        listItem.className =
          menuItems[i].className !== "" ? menuItems[i].className : "nav-item";
        if (linkToCopy) {
          var link = document.createElement("a");
          link.href = linkToCopy.href;
          link.text = linkToCopy.text;
          link.className = linkToCopy.className;
          listItem.appendChild(link);
        } else if (includeInline) {
          listItem.innerHTML = menuItems[i].innerHTML;
        }
        document.getElementById("mobileMenuList")?.appendChild(listItem);
      }
    }
  }
});
