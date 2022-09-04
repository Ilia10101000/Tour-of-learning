(function () {
  let day = document.querySelector(".days.t");
  let hour = document.querySelector(".hours.t");
  let minute = document.querySelector(".minutes.t");
  let second = document.querySelector(".seconds.t");
  let startLearningTime = new Date(2022, 1, 25);
  setInterval(function () {
    let now = new Date();
    let dif = now.getTime() - startLearningTime.getTime();
    let days = Math.floor(dif / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dif / (1000 * 60 * 60)) % 24);
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = Math.floor((dif / (1000 * 60)) % 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = Math.floor((dif / 1000) % 60);
    day.textContent = days + " :";
    hour.textContent = hours + " :";
    minute.textContent = minutes + " :";
    second.textContent = seconds;
  }, 1000);
})();

let arr1 = [
  "img/cry.png",
  "img/wtf.png",
  "img/wish.png",
  "img/why.png",
  "img/eror1.png",
  "img/choice.png",
  "img/t.png",
  "img/eror.png",
];

let arr2 = ["img/iron.png", "img/hold on.png", "img/++.png", "img/iron2.png"];

let arr3 = [
  "img/why1.png",
  "img/learn.png",
  "img/skills.png",
  "img/fullstack.png",
  "img/enough.png",
  "img/dream.png",
];

(function () {
  let elem1 = document.querySelector(".backSlider.f");
  let elem2 = document.querySelector(".forwardSlider.f");
  let img = elem1.nextElementSibling;
  let i = 0;
  elem1.addEventListener("click", function (event) {
    event.stopPropagation();
    i--;
    if (i < 0) {
      i = arr1.length - 1;
    }
    img.src = arr1[i];
  });

  elem2.addEventListener("click", function (event) {
    event.stopPropagation();
    i++;
    if (i > arr1.length - 1) {
      i = 0;
    }
    img.src = arr1[i];
  });
})();

(function () {
  let elem1 = document.querySelector(".backSlider.s");
  let elem2 = document.querySelector(".forwardSlider.s");
  let img = elem1.nextElementSibling;
  let i = 0;
  elem1.addEventListener("click", function (event) {
    event.stopPropagation();
    i--;
    if (i < 0) {
      i = arr2.length - 1;
    }
    img.src = arr2[i];
  });

  elem2.addEventListener("click", function (event) {
    event.stopPropagation();
    i++;
    if (i > arr2.length - 1) {
      i = 0;
    }
    img.src = arr2[i];
  });
})();

(function () {
  let elem1 = document.querySelector(".backSlider.th");
  let elem2 = document.querySelector(".forwardSlider.th");
  let img = elem1.nextElementSibling;
  let i = 0;
  elem1.addEventListener("click", function (event) {
    event.stopPropagation();
    i--;
    if (i < 0) {
      i = arr3.length - 1;
    }
    img.src = arr3[i];
  });

  elem2.addEventListener("click", function (event) {
    event.stopPropagation();
    i++;
    if (i > arr3.length - 1) {
      i = 0;
    }
    img.src = arr3[i];
  });
})();

(function () {
  let elems = document.querySelectorAll(".data");

  for (let elem of elems) {
    elem.addEventListener("mouseenter", function (event) {
      let comment = document.createElement("div");
      comment.textContent = event.target.dataset.name;
      comment.classList.add("table");
      let target = event.target;
      let coords = target.getBoundingClientRect();
      let left = coords.left + (target.offsetWidth - comment.offsetWidth) / 2;
      if (left < 0) left = 0;
      let top = coords.top + target.offsetHeight * 1.1 + comment.offsetHeight;
      if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
      } else if (
        coords.top + target.offsetHeight >
        document.documentElement.clientHeight
      ) {
        top = coords.top - target.offsetHeight / 2;
      }
      comment.style.left = left + "px";
      comment.style.top = top + "px";
      elem.insertAdjacentElement("afterend", comment);
      console.log(coords);
      elem.addEventListener("mouseleave", function () {
        if (comment) {
          comment.remove();
          comment = null;
        }
      });
    });
  }
})();
