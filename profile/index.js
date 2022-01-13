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

// 좋아하는 것 button //

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
        <img id="img" src="images/family1.jpg" alt=parents title=family1 width="150"> <br> 
        parents
      </div>
      <div id="family_members">
        <img id="img" src="images/family2.jpg" alt=sister title=famliy2 width="150"> <br>
        sister
      </div>
      <div id="family_members">
        <img id="img" src="images/family4.jpg" alt=cousin title=famlily4 width="150"> <br>
        cousin
        </div>
      
    </div>
    <br><br>

    <h3>
      <li>Trip</li>
    </h3> <br>
    <div id="travel">
      <div id="trip">
        <img id="img" src="images/trip2.jpg" alt=Petite_France title=trip1 width="150">
        <br>Petite France
      </div>
      <div id="trip">
        <img id="img" src="images/trip3.jpg" alt=Nami_Island title=trip2 width="150">
        <br>Nami Island
      </div>
      <div id="trip">
        <img id="img" src="images/trip4.jpg" alt=ChunCheon title=trip3 width="150">
        <br>ChunCheon
      </div>
    </div>
    <div id="travel">
      <br> <br>
      <div id="trip">
        <img id="img" src="images/trip1.jpg" alt=Busan title=trip4 height="150">
        <br>ChunCheon
      </div>
      <div id="trip">
        <img id="img" src="images/trip6.jpg" alt=JeJu_Island1 title=trip5 width="150">
        <br>JeJu Island1
      </div>
      <div id="trip">
        <img id="img" src="images/trip7.jpg" alt=JeJu_Island2 title=trip6 width="150">
        <br>JeJu Island2
      </div>
    </div>
    <br> <br>

    <h3>
      <li>Friends</li>
    </h3> <br>
    <div id="friends">
      <div id="friends_members">
        <img id="img" src="images/friends3.jpg" alt=Mate title=friends1 width="150">
        <br>Mate
      </div>
      <div id="friends_members">
        <img id="img" src="images/friends4.jpg" alt=GELB title=friends2 width="150">
        <br>GELB
      </div>
      <div id="friends_members">
       <img id="img" src="images/friends5.jpg" alt=2018_leadership_club title=friends3 width="150">
       <br>2018 leadership club
      </div>
    </div>
    <div id="friends">
      <div id="friends_members">
        <img id="img" src="images/friends6.jpg" alt=du_hyo_jin title=friends4 width="150">
        <br>du hyo jin
      </div>
      <div id="friends_members">
        <img id="img" src="images/friends7.jpg" alt=machine_learning title=friends5 width="150">
        <br>machine learning
      </div>
      <div id="friends_members">
        <img id="img" src="images/friends8.jpg" alt=college_juniors title=friends6 width="150">
        <br>college juniors
      </div>
    </div>
    <div id="friends">
      <div id="friends_members">
        <img id="img" src="images/friends9.jpg" alt=college_classmate1 title=friends7 width="150">
        <br>college classmate1
      </div>
      <div id="friends_members">
        <img id="img" src="images/friends2.jpg" alt=cheering_club title=friends8 height="150">
        <br>cheering club
      </div>
      <div id="friends_members">
       <img id="img" src="images/friends1.jpg" alt=title=college_classmate2 friends9 width="150">
       <br>college classmate2
      </div>
    </div>
    <br> <br>
  </ol>
  <br>
  <hr> <br>`
    btn_favorite_things_open.innerHTML = "CLOSE"
    favorite_things_check = "open"
  }
  else if (favorite_things_check == "open") {
    favorite_things.innerHTML = ""
    btn_favorite_things_open.innerHTML = "OPEN"
    favorite_things_check = "close"
  }
})

//좋아하는 음식//

const btn_favorite_food_open = document.querySelector("#btn_favorite_food_open")
let favorite_food_check = "close"

btn_favorite_food_open.addEventListener('click', () => {
  const favorite_food = document.querySelector("#favorite_food")
  if (favorite_food_check == "close") {
    favorite_food.innerHTML = `<ol>
    <h3>
      <li>Tteokbokki</li>
    </h3> <br>
    <div id="food">
      <div id="favorite_food_list">
        <img id="img" src="https://img.insight.co.kr/static/2020/10/30/700/img_20201030135303_777z5500.webp" alt="신전떡볶이"
          title="Tteokbokki1" width="150">
          <br> 신전떡볶이
      </div>
      
      <div id="favorite_food_list">
        <img id="img" src="https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20200527032509_photo1_3a0aa2d2846e.jpg"
          alt="청년다방" title="Tteokbokki2" width="150">
          <br> 청년다방
      </div>
      <div id="favorite_food_list">
        <img id="img" src="https://rereco.co/wp-content/uploads/2021/04/yeopddok-450x300.jpg" alt="엽기떡볶이"
          title="Tteokbokki3" height="150">
          <br> 엽기떡볶이
      </div>
    </div>
    <br> <br>
    
    <h3>
      <li>Haejangguk</li>
    </h3> <br>
    <div id="food">
      <div id="favorite_food_list">
        <img id="img" src="https://t1.daumcdn.net/cfile/tistory/99E7A9335CCB94A70A" alt="뼈해장국" title="Haejangguk" height="150">
        <br> 뼈해장국
      </div>      
    </div>
    </ol>`
    btn_favorite_food_open.innerHTML = "CLOSE"
    favorite_food_check = "open"
  }
  else if (favorite_food_check == "open") {
    favorite_food.innerHTML = ""
    favorite_food_check = "close"
    btn_favorite_food_open.innerHTML = "OPEN"
  }
})

//strawberry moon 가사//

const btn_IU_lyrics = document.querySelector("#btn_IU_lyrics")
let btn_lyrics_open = "close"

btn_IU_lyrics.addEventListener("click", () => {
  const strawberry_moon_lyrics = document.querySelector("#strawberry_moon_lyrics")
  if (btn_lyrics_open == "close") {
    strawberry_moon_lyrics.innerHTML = `<br> <br>
    <div id="lyrics">
      <div id="strawberry_moon_lyrics_part">달이 익어가니 서둘러 젊은 피야</div>
      <div id="strawberry_moon_lyrics_part">민들레 한 송이 들고</div>
      <div id="strawberry_moon_lyrics_part">사랑이 어지러이 떠다니는 밤이야</div>
      <div id="strawberry_moon_lyrics_part">날아가 사뿐히 이루렴</div> <br>

      <div id="strawberry_moon_lyrics_part">팽팽한 어둠 사이로</div>
      <div id="strawberry_moon_lyrics_part">떠오르는 기분</div>
      <div id="strawberry_moon_lyrics_part">이 거대한 무중력에 혹 휘청해도</div>
      <div id="strawberry_moon_lyrics_part">두렵진 않을 거야</div><br>

      <div id="strawberry_moon_lyrics_part">푸르른 우리 위로</div>
      <div id="strawberry_moon_lyrics_part">커다란 strawberry moon 한 스쿱</div>
      <div id="strawberry_moon_lyrics_part">나에게 너를 맡겨볼래 eh-oh</div> <br>

      <div id="strawberry_moon_lyrics_part">바람을 세로질러</div>
      <div id="strawberry_moon_lyrics_part">날아오르는 기분 so cool</div>
      <div id="strawberry_moon_lyrics_part">삶이 어떻게 더 완벽해 ooh</div>
      <div id="strawberry_moon_lyrics_part">다시 마주하기 어려운 행운이야</div> <br>

      <div id="strawberry_moon_lyrics_part">온몸에 심장이 뛰어</div>
      <div id="strawberry_moon_lyrics_part">Oh 오히려 기꺼이 헤매고픈 밤이야</div>
      <div id="strawberry_moon_lyrics_part">너와 길 잃을 수 있다면</div> <br>

      <div id="strawberry_moon_lyrics_part">맞잡은 서로의 손으로</div>
      <div id="strawberry_moon_lyrics_part">출입구를 허문</div>
      <div id="strawberry_moon_lyrics_part">이 무한함의 끝과 끝 또 위아래로</div>
      <div id="strawberry_moon_lyrics_part">비행을 떠날 거야</div> <br>

      <div id="strawberry_moon_lyrics_part">푸르른 우리 위로</div>
      <div id="strawberry_moon_lyrics_part">커다란 strawberry moon 한 스쿱</div>
      <div id="strawberry_moon_lyrics_part">나에게 너를 맡겨볼래 eh-oh</div>
      <div id="strawberry_moon_lyrics_part">바람을 세로질러</div>
      <div id="strawberry_moon_lyrics_part">날아오르는 기분 so cool</div>
      <div id="strawberry_moon_lyrics_part">삶이 어떻게 더 완벽해 ooh</div> <br>

      <div id="strawberry_moon_lyrics_part">놀라워 이보다</div>
      <div id="strawberry_moon_lyrics_part">꿈같은 순간이 또 있을까 (더 있을까)</div>
      <div id="strawberry_moon_lyrics_part">아마도 우리가 처음 발견한</div>
      <div id="strawberry_moon_lyrics_part">오늘 이 밤의 모든 것, 그 위로 날아</div> <br>

      <div id="strawberry_moon_lyrics_part">푸르른 우리 위로</div>
      <div id="strawberry_moon_lyrics_part">커다란 strawberry moon 한 스쿱</div>
      <div id="strawberry_moon_lyrics_part">세상을 가져보니 어때 eh-oh</div> <br>

      <div id="strawberry_moon_lyrics_part">바람을 세로질러</div>
      <div id="strawberry_moon_lyrics_part">날아오르는 기분 so cool</div>
      <div id="strawberry_moon_lyrics_part">삶이 어떻게 더 완벽해 ooh</div>
    </div>`
    btn_lyrics_open = "open"
    btn_IU_lyrics.innerHTML = "HIDE ∧"
  }
  else if (btn_lyrics_open == "open") {
    strawberry_moon_lyrics.innerHTML = ""
    btn_lyrics_open = "close"
    btn_IU_lyrics.innerHTML = "SHOW ∨"
  }
})

//warning 가사//

const btn_sj_lyrics = document.querySelector("#btn_sj_lyrics")
let btn_warning_open = "close"

btn_sj_lyrics.addEventListener("click", () => {
  const warning_lyrics = document.querySelector("#warning_lyrics")
  if (btn_warning_open == "close") {
    warning_lyrics.innerHTML = `<br> <br>
    <div id="lyrics">
      <div id="warning_lyrics_part">중요한 걸 잊은 느낌</div>
      <div id="warning_lyrics_part">다가오는 불안함에</div>
      <div id="warning_lyrics_part">더 이상은 걷지 못해</div>
      <div id="warning_lyrics_part">왜 이러지 나 모르겠어</div> <br>

      <div id="warning_lyrics_part">예전 같지 않은 눈빛</div>
      <div id="warning_lyrics_part">빛을 잃은듯한 future</div>
      <div id="warning_lyrics_part">이건 뭐지</div>
      <div id="warning_lyrics_part">흠 에라 몰라</div> <br>

      <div id="warning_lyrics_part">놀러 가자 저 멀리</div>
      <div id="warning_lyrics_part">나를 찾아 떠나자</div>
      <div id="warning_lyrics_part">길을 잃어버려도 좋아</div>
      <div id="warning_lyrics_part">그게 옳을 테니까</div> <br>

      <div id="warning_lyrics_part">멀리 찾아 떠나자</div>
      <div id="warning_lyrics_part">나를 잡지 못하게</div>
      <div id="warning_lyrics_part">힘을 내 สู้ๆนะ</div>
      <div id="warning_lyrics_part">加油 cheer up baby</div>
      <div id="warning_lyrics_part">¡Ánimo! 頑張って。</div>
      <div id="warning_lyrics_part">더 이상 I cannot go on</div> <br>

      <div id="warning_lyrics_part">Warning! Warning! Warning!</div> <br>

      <div id="warning_lyrics_part">날아가자 높이</div>
      <div id="warning_lyrics_part">많은 걸 볼수록 확실할 테니</div>
      <div id="warning_lyrics_part">멀리 놓을수록 가벼워져 갈 테니까</div> <br>

      <div id="warning_lyrics_part">Warning! 가보자</div>
      <div id="warning_lyrics_part">모든 건 너도 나도 처음일 테니까</div>
      <div id="warning_lyrics_part">Warning! 해보자</div>
      <div id="warning_lyrics_part">아니면 다시 돌아오지 까짓 거 뭐</div> <br>

      <div id="warning_lyrics_part">Now every time I close my eyes</div>
      <div id="warning_lyrics_part">떠올라 수만 가지 things</div>
      <div id="warning_lyrics_part">어린 시절에 그린</div>
      <div id="warning_lyrics_part">나의 미래에 scene S</div>
      <div id="warning_lyrics_part">이루어진 건 잘 없지만</div>
      <div id="warning_lyrics_part">그래도 그때만큼은 즐거웠지 나는</div>
      <div id="warning_lyrics_part">여전하길 비네</div>
      <div id="warning_lyrics_part">시간이 지난 뒤에도</div>
      <div id="warning_lyrics_part">아무렇지 않게</div>
      <div id="warning_lyrics_part">날았으면 해 저 위에</div>
      <div id="warning_lyrics_part">Look where we at 구름 위에 불안감들 비워내</div>
      <div id="warning_lyrics_part">잠시나마 여길 떠나 멀리 warning!</div> <br>

      <div id="warning_lyrics_part">걸어가자 천천히</div>
      <div id="warning_lyrics_part">넘어지지 않도록</div>
      <div id="warning_lyrics_part">조금 느리더라도 좋아</div>
      <div id="warning_lyrics_part">볼 게 많을 테니까</div> <br>

      <div id="warning_lyrics_part">잠시 멈춰 서보자</div>
      <div id="warning_lyrics_part">돌아볼 수 있도록</div> 
      <div id="warning_lyrics_part">괜찮아 잘했어</div>
      <div id="warning_lyrics_part">내가 뭐 어쩔 거야</div>
      <div id="warning_lyrics_part">세상은 운이야</div> <br>

      <div id="warning_lyrics_part">날아가자 높이</div> 
      <div id="warning_lyrics_part">많은 걸 볼수록 확실할 테니</div> 
      <div id="warning_lyrics_part">멀리 놓을수록 가벼워져 갈 테니까</div> <br>

      <div id="warning_lyrics_part">Warning! 떠나자</div>
      <div id="warning_lyrics_part">이대론 너도 나도 불안할 테니까</div>
      <div id="warning_lyrics_part">Warning! 나 혼자면 어때</div> 
      <div id="warning_lyrics_part">가면 누구라도 있겠지 뭐</div> <br> 

      <div id="warning_lyrics_part">무서웠던 맘이 사라지기를</div> 
      <div id="warning_lyrics_part">내일이 오지 않길 기도하던</div>
      <div id="warning_lyrics_part">나의 세상도</div> <br>

      <div id="warning_lyrics_part">나아갈 거야 앞으로</div>
      <div id="warning_lyrics_part">우울을 밟고서</div> <br>

      <div id="warning_lyrics_part">Worth it! Worth it! Worth it!</div> <br> 

      <div id="warning_lyrics_part">나아가자 높이</div> <br>
      <div id="warning_lyrics_part">모든 걸 밟고 찬란한 우주로</div>
      <div id="warning_lyrics_part">멀리 쏘아 올린 작은 별을 다시 찾자</div> <br>

      <div id="warning_lyrics_part">Worth it!</div>
      <div id="warning_lyrics_part">가보자 까짓 거 지금보단 나아질 테니까</div>
      <div id="warning_lyrics_part">Worth it!</div>
      <div id="warning_lyrics_part">물러서 있기엔</div> 
      <div id="warning_lyrics_part">너무 아름다운 나이니까</div>
    </div>`
    btn_warning_open = "open"
    btn_sj_lyrics.innerHTML = "HIDE ∧"
  }
  else if (btn_warning_open == "open") {
    warning_lyrics.innerHTML = ""
    btn_warning_open = "close"
    btn_sj_lyrics.innerHTML = "SHOW ∨"
  }
})
