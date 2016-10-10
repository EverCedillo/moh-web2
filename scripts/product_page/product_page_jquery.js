$(document).ready(function(){
  //Set the background of the register section with backstretch.
  $presentation_section = $('#presentation_section');
  $presentation_section.backstretch('../images/Productpage2.jpg');
  
  $characteristics_section = $('#characteristics_section');
  $characteristics_section.backstretch('../images/productpage3.jpg');
  
  // just querying the DOM...like a boss!
  var links = document.querySelectorAll(".itemLinks");
  var wrapper = document.querySelector("#app_views_wrapper");
  
  // the activeLink provides a pointer to the currently displayed item
  var activeLink = 0;
  
  // setup the event listeners
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // identify the item for the activeLink
    link.itemID = i;
  };
  
  // set first item as active
  links[activeLink].classList.add("active");

  function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
  };
  
  function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
  }
  
  // Handle changing the slider position as well as ensure
  // the correct link is highlighted as being active
  function changePosition(link) {
    var position = link.getAttribute("data-pos");

    var translateValue = "translate3d(" + position + ", 0px, 0)";
    wrapper.style[transformProperty] = translateValue;

    link.classList.add("active");
  }

  //
  // Dealing with Transforms
  //
  var transforms = ["transform",
              "msTransform",
              "webkitTransform",
              "mozTransform",
              "oTransform"];

  var transformProperty = getSupportedPropertyName(transforms);

  // vendor prefix management
  function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
      if (typeof document.body.style[properties[i]] != "undefined") {
          return properties[i];
      }
    }
    return null;
  }
  
  
  
  
  
  // just querying the DOM...like a boss!
  var links_d = document.querySelectorAll(".itemLinks_description");
  var wrapper_d = document.querySelector("#description_app_view_wrapper");
  
  // the activeLink provides a pointer to the currently displayed item
  var activeLink_d = 0;
  
  // setup the event listeners
  for (var i = 0; i < links_d.length; i++) {
    var link_d = links_d[i];
    link_d.addEventListener('click', setClickedItem_d, false);

    // identify the item for the activeLink
    link_d.itemID = i;
  };
  
  // set first item as active
  links_d[activeLink_d].classList.add("active");

  function setClickedItem_d(e_d) {
    removeActiveLinks_d();

    var clickedLink_d = e_d.target;
    activeLink_d = clickedLink_d.itemID;

    changePosition_d(clickedLink_d);
  };
  
  function removeActiveLinks_d() {
    for (var i = 0; i < links_d.length; i++) {
        links_d[i].classList.remove("active");
    }
  }
  
  // Handle changing the slider position as well as ensure
  // the correct link is highlighted as being active
  function changePosition_d(link_d) {
    var position_d = link_d.getAttribute("data-pos");

    var translateValue_d = "translate3d(" + position_d + ", 0px, 0)";
    wrapper_d.style[transformProperty] = translateValue_d;

    link_d.classList.add("active");
  }

  //
  // Dealing with Transforms
  //
  var transforms_d = ["transform",
              "msTransform",
              "webkitTransform",
              "mozTransform",
              "oTransform"];

  var transformProperty_d = getSupportedPropertyName_d(transforms_d);

  // vendor prefix management
  function getSupportedPropertyName_d(properties_d) {
    for (var i = 0; i < properties_d.length; i++) {
      if (typeof document.body.style[properties_d[i]] != "undefined") {
          return properties_d[i];
      }
    }
    return null;
  }
  
  $('#link_one').click(function(){
    $('#hidden_link_one').click();
  });
  
  
  $('#link_two').click(function(){
    $('#hidden_link_two').click();
  });
  
  $('#link_three').click(function(){
    $('#hidden_link_three').click();
  });
  
  
  //
  // The code for sliding the content automatically
  //
  /*var timeoutID;

  function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setInterval(goToNextItem, 2000);
  }
  startTimer();

  function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
  }

  function goToNextItem() {
    removeActiveLinks();

    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }

    var newLink = links[activeLink];
    changePosition(newLink);
  }*/
  // just querying the DOM...like a boss!
  var links_t = document.querySelectorAll(".itemLinks_t");
  var wrapper_t = document.querySelector("#app_views_wrapper_t");
  
  // the activeLink provides a pointer to the currently displayed item
  var activeLink_t = 0;
  
  // setup the event listeners
  for (var i = 0; i < links_t.length; i++) {
    var link_t = links_t[i];
    link_t.addEventListener('click', setClickedItem_t, false);

    // identify the item for the activeLink
    link_t.itemID = i;
  };
  
  // set first item as active
  links_t[activeLink_t].classList.add("active");

  function setClickedItem_t(e_t) {
    removeActiveLinks_t();

    var clickedLink_t = e_t.target;
    activeLink_t = clickedLink_t.itemID;

    changePosition_t(clickedLink_t);
  };
  
  function removeActiveLinks_t() {
    for (var i = 0; i < links_t.length; i++) {
        links_t[i].classList.remove("active");
    }
  }
  
  // Handle changing the slider position as well as ensure
  // the correct link is highlighted as being active
  function changePosition_t(link_t) {
    var position_t = link_t.getAttribute("data-pos");

    var translateValue_t = "translate3d(" + position_t + ", 0px, 0)";
    wrapper_t.style[transformProperty] = translateValue_t;

    link_t.classList.add("active");
  }

  //
  // Dealing with Transforms
  //
  var transforms_t = ["transform",
              "msTransform",
              "webkitTransform",
              "mozTransform",
              "oTransform"];

  var transformProperty_t = getSupportedPropertyName_t(transforms_t);

  // vendor prefix management
  function getSupportedPropertyName_t(properties_t) {
    for (var i = 0; i < properties_t.length; i++) {
      if (typeof document.body.style[properties_t[i]] != "undefined") {
          return properties_t[i];
      }
    }
    return null;
  }
  
  
  
  
  
  // just querying the DOM...like a boss!
  var links_d_t = document.querySelectorAll(".itemLinks_description_t");
  var wrapper_d_t = document.querySelector("#description_app_view_wrapper_t");
  
  // the activeLink provides a pointer to the currently displayed item
  var activeLink_d_t = 0;
  
  // setup the event listeners
  for (var i = 0; i < links_d_t.length; i++) {
    var link_d_t = links_d_t[i];
    link_d_t.addEventListener('click', setClickedItem_d_t, false);

    // identify the item for the activeLink
    link_d_t.itemID = i;
  };
  
  // set first item as active
  links_d_t[activeLink_d_t].classList.add("active");

  function setClickedItem_d_t(e_d_t) {
    removeActiveLinks_d_t();

    var clickedLink_d_t = e_d_t.target;
    activeLink_d_t = clickedLink_d_t.itemID;

    changePosition_d_t(clickedLink_d_t);
  };
  
  function removeActiveLinks_d_t() {
    for (var i = 0; i < links_d_t.length; i++) {
        links_d_t[i].classList.remove("active");
    }
  }
  
  // Handle changing the slider position as well as ensure
  // the correct link is highlighted as being active
  function changePosition_d_t(link_d_t) {
    var position_d_t = link_d_t.getAttribute("data-pos");

    var translateValue_d_t = "translate3d(" + position_d_t + ", 0px, 0)";
    wrapper_d_t.style[transformProperty] = translateValue_d_t;

    link_d_t.classList.add("active");
  }

  //
  // Dealing with Transforms
  //
  var transforms_d_t = ["transform",
              "msTransform",
              "webkitTransform",
              "mozTransform",
              "oTransform"];

  var transformProperty_d_t = getSupportedPropertyName_d_t(transforms_d_t);

  // vendor prefix management
  function getSupportedPropertyName_d_t(properties_d_t) {
    for (var i = 0; i < properties_d_t.length; i++) {
      if (typeof document.body.style[properties_d_t[i]] != "undefined") {
          return properties_d_t[i];
      }
    }
    return null;
  }
  
  $('#link_one_t').click(function(){
    $('#hidden_link_one_t').click();
  });
  
  
  $('#link_two_t').click(function(){
    $('#hidden_link_two_t').click();
  });
  
  $('#link_three_t').click(function(){
    $('#hidden_link_three_t').click();
  });
  
  
  
  
  
  
  
  // just querying the DOM...like a boss!
  var links_m = document.querySelectorAll(".itemLinks_m");
  var wrapper_m = document.querySelector("#app_views_wrapper_m");
  
  // the activeLink provides a pointer to the currently displayed item
  var activeLink_m = 0;
  
  // setup the event listeners
  for (var i = 0; i < links_m.length; i++) {
    var link_m = links_m[i];
    link_m.addEventListener('click', setClickedItem_m, false);

    // identify the item for the activeLink
    link_m.itemID = i;
  };
  
  // set first item as active
  links_m[activeLink_m].classList.add("active");

  function setClickedItem_m(e_m) {
    removeActiveLinks_m();

    var clickedLink_m = e_m.target;
    activeLink_m = clickedLink_m.itemID;

    changePosition_m(clickedLink_m);
  };
  
  function removeActiveLinks_m() {
    for (var i = 0; i < links_m.length; i++) {
        links_m[i].classList.remove("active");
    }
  }
  
  // Handle changing the slider position as well as ensure
  // the correct link is highlighted as being active
  function changePosition_m(link_m) {
    var position_m = link_m.getAttribute("data-pos");

    var translateValue_m = "translate3d(" + position_m + ", 0px, 0)";
    wrapper_m.style[transformProperty] = translateValue_m;

    link_m.classList.add("active");
  }

  //
  // Dealing with Transforms
  //
  var transforms_m = ["transform",
              "msTransform",
              "webkitTransform",
              "mozTransform",
              "oTransform"];

  var transformProperty_m = getSupportedPropertyName_m(transforms_m);

  // vendor prefix management
  function getSupportedPropertyName_m(properties_m) {
    for (var i = 0; i < properties_m.length; i++) {
      if (typeof document.body.style[properties_m[i]] != "undefined") {
          return properties_m[i];
      }
    }
    return null;
  }
  
  
  
  
  
  // just querying the DOM...like a boss!
  var links_d_m = document.querySelectorAll(".itemLinks_description_m");
  var wrapper_d_m = document.querySelector("#description_app_view_wrapper_m");
  
  // the activeLink provides a pointer to the currently displayed item
  var activeLink_d_m = 0;
  
  // setup the event listeners
  for (var i = 0; i < links_d_m.length; i++) {
    var link_d_m = links_d_m[i];
    link_d_m.addEventListener('click', setClickedItem_d_m, false);

    // identify the item for the activeLink
    link_d_m.itemID = i;
  };
  
  // set first item as active
  links_d_m[activeLink_d_m].classList.add("active");

  function setClickedItem_d_m(e_d_m) {
    removeActiveLinks_d_m();

    var clickedLink_d_m = e_d_m.target;
    activeLink_d_m = clickedLink_d_m.itemID;

    changePosition_d_m(clickedLink_d_m);
  };
  
  function removeActiveLinks_d_m() {
    for (var i = 0; i < links_d_m.length; i++) {
        links_d_m[i].classList.remove("active");
    }
  }
  
  // Handle changing the slider position as well as ensure
  // the correct link is highlighted as being active
  function changePosition_d_m(link_d_m) {
    var position_d_m = link_d_m.getAttribute("data-pos");

    var translateValue_d_m = "translate3d(" + position_d_m + ", 0px, 0)";
    wrapper_d_m.style[transformProperty] = translateValue_d_m;

    link_d_m.classList.add("active");
  }

  //
  // Dealing with Transforms
  //
  var transforms_d_m = ["transform",
              "msTransform",
              "webkitTransform",
              "mozTransform",
              "oTransform"];

  var transformProperty_d_m = getSupportedPropertyName_d_m(transforms_d_m);

  // vendor prefix management
  function getSupportedPropertyName_d_m(properties_d_m) {
    for (var i = 0; i < properties_d_m.length; i++) {
      if (typeof document.body.style[properties_d_m[i]] != "undefined") {
          return properties_d_m[i];
      }
    }
    return null;
  }
  
  $('#link_one_m').click(function(){
    $('#hidden_link_one_m').click();
  });
  
  
  $('#link_two_m').click(function(){
    $('#hidden_link_two_m').click();
  });
  
  $('#link_three_m').click(function(){
    $('#hidden_link_three_m').click();
  });
  
  
  
  
  
  
  
  
  
  
});