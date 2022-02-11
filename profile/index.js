document.write("<script src='files/lyrics.js'></script>");
document.write("<script src='files/favorites.js'></script>");

const btn_play = document.querySelector("#btn_play");
const btn_stop = document.querySelector("#btn_stop");
const age = document.querySelector('#age');
let music_check = false;

let today = new Date();
let year = today.getFullYear(); 
age.innerHTML = year - 1998 + 1;

btn_play.addEventListener('click', function () {
  const music = document.querySelector("#music");
  music.innerHTML = `노래가 재생중입니다.<iframe width="0" height="0" src="https://www.youtube.com/embed/sqgxcCjD04s?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  music_check = true;
});

btn_stop.addEventListener('click', function () {
  const music = document.querySelector("#music");
  music.innerHTML = "노래가 멈췄습니다.";
  music_check = false;
});

btn_play.addEventListener("mouseover", () => {
  if (music_check == false) {
    const music = document.querySelector("#music");
    music.innerHTML = "strawberry moon - IU";
  }
});

btn_play.addEventListener("mouseout", () => {
  if (music_check == false) {
    const music = document.querySelector("#music");
    music.innerHTML = "노래를 재생해 주세요!";
  }
});

// 좋아하는 것 button //

const btn_favorite_things_open = document.querySelector("#btn_favorite_things_open");
let favorite_things_check = "close";

btn_favorite_things_open.addEventListener('click', () => {
  const favorite_things = document.querySelector("#favorite_things");
  if (favorite_things_check == "close") {
    favorite_things.innerHTML = things;
    btn_favorite_things_open.innerHTML = "CLOSE";
    favorite_things_check = "open";
  }
  else if (favorite_things_check == "open") {
    favorite_things.innerHTML = "";
    btn_favorite_things_open.innerHTML = "OPEN";
    favorite_things_check = "close";
  }
});

//좋아하는 음식//

const btn_favorite_food_open = document.querySelector("#btn_favorite_food_open");
let favorite_food_check = "close";

btn_favorite_food_open.addEventListener('click', () => {
  const favorite_food = document.querySelector("#favorite_food");
  if (favorite_food_check == "close") {
    favorite_food.innerHTML = food;
    btn_favorite_food_open.innerHTML = "CLOSE";
    favorite_food_check = "open";
  }
  else if (favorite_food_check == "open") {
    favorite_food.innerHTML = "";
    favorite_food_check = "close";
    btn_favorite_food_open.innerHTML = "OPEN";
  }
});

//strawberry moon 가사//

const btn_IU_lyrics = document.querySelector("#btn_IU_lyrics");
let btn_lyrics_open = "close";

btn_IU_lyrics.addEventListener("click", () => {
  const strawberry_moon_lyrics = document.querySelector("#strawberry_moon_lyrics");
  if (btn_lyrics_open == "close") {
    strawberry_moon_lyrics.innerHTML = IU_lyrics;
    btn_lyrics_open = "open";
    btn_IU_lyrics.innerHTML = "HIDE ∧";
  }
  else if (btn_lyrics_open == "open") {
    strawberry_moon_lyrics.innerHTML = "";
    btn_lyrics_open = "close";
    btn_IU_lyrics.innerHTML = "SHOW ∨";
  }
});

//warning 가사//

const btn_sj_lyrics = document.querySelector("#btn_sj_lyrics");
let btn_warning_open = "close";

btn_sj_lyrics.addEventListener("click", () => {
  const warning_lyrics = document.querySelector("#warning_lyrics");
  if (btn_warning_open == "close") {
    warning_lyrics.innerHTML = sj_lyrics
    btn_warning_open = "open";
    btn_sj_lyrics.innerHTML = "HIDE ∧";
  }
  else if (btn_warning_open == "open") {
    warning_lyrics.innerHTML = "";
    btn_warning_open = "close";
    btn_sj_lyrics.innerHTML = "SHOW ∨";
  }
});

//const form = document.querySelector('#form');
const send_btn = document.querySelector('#send_btn');
const logs = document.querySelector('#logs');
document.querySelector('#cheer_message').focus();

send_btn.addEventListener('click', () => {
  const template_params = {
    name: document.querySelector('#from_name').value,
    message: document.querySelector('#cheer_message').value
  };
  emailjs.send('ez1n', 'template_bo9i1n3', template_params).then(send_success, send_fail);
});

function send_fail(error) {
  logs.innerHTML =`${error.text} 이러한 이유때문에 망함`;
};

function send_success() {
  logs.innerHTML = "성공이에양";
};



