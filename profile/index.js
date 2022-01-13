const btn_play = document.querySelector("#btn_play")
const btn_stop = document.querySelector("#btn_stop")
let music_check = false

btn_play.addEventListener('click', function () {
    const music = document.querySelector("#music")
    music.innerHTML = '노래가 재생중입니다.<iframe width="0" height="0" src="https://www.youtube.com/embed/sqgxcCjD04s?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    music_check = true
})

btn_stop.addEventListener('click', function () {
    const music = document.querySelector("#music")
    music.innerHTML = "노래가 멈췄습니다."
    music_check = false
})

btn_play.addEventListener("mouseover", () => {
    if (music_check == false) {
        const music = document.querySelector("#music")
        music.innerHTML = "strawberry moon - IU"
    }
})

btn_play.addEventListener("mouseout", () => {
    if (music_check == false) {
        const music = document.querySelector("#music")
        music.innerHTML = "노래를 재생해 주세요!"
    }
})

const btn_favorite_things_open = document.querySelector("#btn_favorite_things_open")
let favorite_things_check = "close"

btn_favorite_things_open.addEventListener('click', () => {
    const favorite_things = document.querySelector("#favorite_things")
    if (favorite_things_check == "close") {
        favorite_things.innerHTML = `<ol>
    <h3>
      <li>Family</li>
    </h3> <br>
    <div id="family">
      <div id=family_members>
        <img id="img" src="imgaes/family1.jpg" alt=parents title=family1 width="150"> <br> 
        parents
      </div>
      <div id="family_members">
        <img id="img" src="imgaes/family2.jpg" alt=sister title=famliy2 width="150"> <br>
        sister
      </div>
      <div id="family_members">
        <img id="img" src="imgaes/family4.jpg" alt=cousin title=famlily4 width="150"> <br>
        cousin
        </div>
      
    </div>
    <br><br>

    <h3>
      <li>Trip</li>
    </h3> <br>
    <img id="img" src="imgaes/trip2.jpg" alt=Petite_France title=trip1 width="150">
    <img id="img" src="imgaes/trip3.jpg" alt=Nami_Island title=trip2 width="150">
    <img id="img" src="imgaes/trip4.jpg" alt=ChunCheon title=trip3 width="150">
    <br> <br>
    <img id="img" src="imgaes/trip1.jpg" alt=Busan title=trip4 height="150">
    <img id="img" src="imgaes/trip6.jpg" alt=JeJu_Island1 title=trip5 width="150">
    <img id="img" src="imgaes/trip7.jpg" alt=JeJu_Island2 title=trip6 width="150">
    <br> <br>

    <h3>
      <li>Friends</li>
    </h3> <br>
    <img id="img" src="imgaes/friends3.jpg" alt=Mate title=friends1 width="150">
    <img id="img" src="imgaes/friends4.jpg" alt=GELB title=friends2 width="150">
    <img id="img" src="imgaes/friends5.jpg" alt=2018_leadership_club title=friends3 width="150">
    <img id="img" src="imgaes/friends2.jpg" alt=cheering_club title=friends4 height="150">
    <img id="img" src="imgaes/friends1.jpg" alt=title=college_classmate1 friends5 width="150">
    <br><br>
    <img id="img" src="imgaes/friends6.jpg" alt=du_hyo_jin title=friends6 width="150">
    <img id="img" src="imgaes/friends7.jpg" alt=machine_learning title=friends7 width="150">
    <img id="img" src="imgaes/friends8.jpg" alt=college_juniors title=friends8 width="150">
    <img id="img" src="imgaes/friends9.jpg" alt=college_classmate2 title=friends9 width="150">
    <br> <br>
  </ol>
  <br>
  <hr> <br>`
  btn_favorite_things_open.innerHTML = "CLOSE"
  favorite_things_check = "open"
    }
    else if(favorite_things_check == "open") {
        favorite_things.innerHTML = ""
        btn_favorite_things_open.innerHTML = "OPEN"
        favorite_things_check = "close"
    }
})