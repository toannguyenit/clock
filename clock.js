"use strict";

const degree = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes() * degree;
  const ss = date.getSeconds() * degree;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});
