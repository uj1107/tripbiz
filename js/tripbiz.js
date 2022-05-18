$(document).ready(function () {
  $("#search").on("click", function () {
    $("#search_box").addClass("click");
  });

  $("#search_box").click(function (e) {
    if (!$(e.target).hasClass("input_box")) {
      $("#search_box").removeClass("click");
    }
  });

  $(".top-slider").slick({
    fade: true,
    cssEase: "linear",
    prevArrow: '<button class="slide-arrow prev-arrow1"><</button>',
    nextArrow: '<button class="slide-arrow next-arrow1">></button>',
  });

  $("#words-slider").slick({
    fade: true,
    prevArrow: '<button class="slide-arrow prev-arrow2"><</button>',
    nextArrow: '<button class="slide-arrow next-arrow2">></button>',
  });

  //   multi range slider
  const inputLeft = document.getElementById("input-l");
  const inputRight = document.getElementById("input-r");

  const thumbLeft = document.getElementById("thumb-l");
  const thumbRight = document.getElementById("thumb-r");
  const range = document.querySelector(".range-slider > .range");

  const setLeftValue = () => {
    const _this = inputLeft;
    const [min, max] = [parseInt(_this.min), parseInt(_this.max)];

    _this.value = Math.min(
      parseInt(_this.value),
      parseInt(inputRight.value) - 1
    );

    const spanLeft = document.getElementById("span-l");

    const percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    spanLeft.innerHTML = _this.value;
  };

  const setRightValue = () => {
    const _this = inputRight;
    const [min, max] = [parseInt(_this.min), parseInt(_this.max)];

    _this.value = Math.max(
      parseInt(_this.value),
      parseInt(inputLeft.value) + 1
    );

    const spanRight = document.getElementById("span-r");

    const percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight.style.right = 100 - percent + "%";
    range.style.right = 100 - percent + "%";
    spanRight.innerHTML = _this.value;
  };

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);

  // 모바일 mobile

  var search = document.getElementById("search-m");
  var hamButton = document.getElementById("ham-button");

  hamButton.addEventListener("click", function () {
    var hamMenu = document.getElementById("ham-menu");
    hamButton.classList.toggle("click");
    hamMenu.classList.toggle("click");
  });

  search.addEventListener("click", function () {
    var searchBoxM = document.getElementById("searchbox-m");
    searchBoxM.classList.toggle("click");
  });
});
