//Video card
const VideoCards = [...document.querySelectorAll(".video-card")];

VideoCards.forEach((item) => {
  item.addEventListener('mouseover', () => {
    let Video = item.children[1];
    Video.play()
  });
  item.addEventListener('mouseleave', () => {
    let Video = item.children[1];;
    Video.pause();
  }); 
});
//Click button move side
const productContainers = [...document.querySelectorAll('.container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})
// Latest Movie Section
let latest_movie_posters = [
  {
    poster: "../images/Latest movies/Apurva.jpeg"
  },
  {
    poster: "../images/Latest movies/JFK.jpg "
  },
  {
    poster: "../images/Latest movies/Aarya.png"
  },
  {
    poster: "../images/Latest movies/BB7.jpg"
  },
  {
    poster: "../images/Latest movies/chitha.jpg"
  },
  {
    poster: "../images/Latest movies/Valatty.jpeg"
  },
  {
    poster: "../images/Latest movies/Label.png"
  },
  {
    poster: "../images/Latest movies/Spider-Man-Into-The-Spider-Verse.jpg"
  },
  {
    poster: "../images/Latest movies/Vaccine-war.jpg"
  },
  {
    poster: "../images/Latest movies/Skanda.webp"
  },
  {
    poster: "../images/Latest movies/kannur-squad.jpg"
  },
  {
    poster: "../images/Latest movies/Home in the world.jpg"
  },
  {
    poster: "../images/Latest movies/National geo.jpg"
  }
]
function latest_movies_display() {
  const Movies = document.getElementById('Latest-Movies');
  let MoviesIndex = 0;
  //create dom elements
  for (i = 0; i < latest_movie_posters.length; i++) {
    let ver_card = document.createElement('div');
    let ver_poster = document.createElement('div');
    let poster = document.createElement('img');
    //Attachd elements
    poster.appendChild(document.createTextNode(''));
    ver_card.appendChild(ver_poster);
    ver_poster.appendChild(poster);
    Movies.appendChild(ver_card);
    //setting up img
    poster.src = latest_movie_posters[MoviesIndex].poster;
    MoviesIndex++;
    //setting class name
    ver_card.className = "ver-movie-card";
    ver_poster.className = "vertical-poster";
    poster.className = "poster";
  }
}
latest_movies_display()

let freemovies = [
  {
    poster: "../images/Free movies/CP.jpg"
  },
  {
    poster: "../images/Free movies/F.webp"

  },
  {
    poster: "../images/Free movies/H-D.jpg"
  },
  {
    poster: "../images/Free movies/Vikram.webp"
  },
  {
    poster: "../images/Free movies/B.jpeg"
  },
  {
    poster: "../images/Free movies/T P I.jpeg"
  },
  {
    poster: "../images/Free movies/C.webp"
  },
  {
    poster: "../images/Free movies/L.jpg"
  },
  {
    poster: "../images/Free movies/HG-2.jpg"
  },
  {
    poster: "../images/Free movies/Liger.jpeg"
  },
  {
    poster: "../images/Free movies/rangi.jpeg"
  },
  {
    poster: "../images/Free movies/Sanak.jpg"
  },
  {
    poster: "../images/Free movies/VR.jpg"
  }
]
function Free_movies_display() {
  let moviecodes = ` `;
  for (i = 0; i < freemovies.length; i++) {
    moviecodes = moviecodes + `
  <div class="ver-movie-card">
    <div class="overlay">
      <button>Free</button>
    </div>
    <div class="vertical-poster">
       <img class="poster" src="${freemovies[i].poster}" alt="">
    </div>
  </div>
  `
    document.querySelector('#Free-Movies').innerHTML = moviecodes;
  }
}
Free_movies_display()
// sports Movie Section
let sports = [
  {
    poster: "../images/sports/Sports1.jpeg",
    highlight: "Rahul Dravid Stay on as India Coach"
  },
  {
    poster: "../images/sports/Jaipur-Pink-Panthers.jpg",
    highlight: "Jaipur Pink Panthers All you need Know"
  },
  {
    poster: "../images/sports/Jaiswal.jpeg",
    highlight: "Jaiwals inspiring journey"
  },
  {
    poster: "../images/sports/Sports12.jpeg",
    highlight: "Team of GW 13ft. Haverts"
  },
  {
    poster: "../images/sports/Sports6.jpeg",
    highlight: "Mongie Decodes Pandya's Move to..."
  },
  {
    poster: "../images/sports/Sunrisers-Hyderabad.jpg",
    highlight: "Giants Clip Urbanrisers's Wings"
  },
  {
    poster: "../images/sports/Sports3.webp",
    highlight: "Maxwell: King of Chases in Troll"
  },
  {
    poster: "../images/sports/Sports4.jpeg",
    highlight: "Hit & Flop: NewCastle vs Chelsea"
  },
  {
    poster: "../images/sports/Sports5.jpeg",
    highlight: "Moments of GW Btt Haaland"
  },
  {
    poster: "../images/sports/sports7.jpeg",
    highlight: "Rooney - Sepue: Garnacho nets a.."
  },
  {
    poster: "../images/sports/Sports8.jpeg",
    highlight: "Team of ICC Men's CWC 2023 Ft Rohit"
  },
  {
    poster: "../images/sports/Sports9.jpeg",
    highlight: "Everton 0-3 Manchester United"
  },
  {
    poster: "../images/sports/Sports10.jpeg",
    highlight: "Tott When 1-2 Aston Villa"
  },
  {
    poster: "../images/sports/Sports11.jpeg",
    highlight: "Hist & Flop: Mancity vs Liverpool"
  },
  {
    poster: "../images/sports/Sports2.jpg",
    highlight: "Highlights od CSK vs RCB"
  },
  {
    poster: "../images/sports/yashasvi.jpg",
    highlight: "Jawals Blazes At the Top 50"
  }
]
function movies_display() {
  let moviecodes = ` `;
  for (i = 0; i < sports.length; i++) {
    moviecodes = moviecodes + `
  <div class="hor-movie-card">
    <div class="overlay1">
        <p></p>
      <i class="fa-solid fa-play"></i>
    </div>
    <div class="horizontal-poster">
     <img class="poster1" src="${sports[i].poster}" alt="">
    </div>
    <div class="highlights">
      <p>${sports[i].highlight}</p>
    </div>
  </div>
  `
    document.getElementById('Sports').innerHTML = moviecodes;
  }
}
movies_display()
// top10 movies Section
let top10movies = [
  {
    rank:"1",
    poster: "../images/top 10/chitha.jpg"
  },
  {
    rank: "2",
    poster: "../images/top 10/Label.png"
  },
  {
    rank: "3",
    poster: "../images/top 10/BB7.jpg"
  },
  {
    rank: "4",
    poster: "../images/top 10/KK.webp"
  },
  {
    rank: "5",
    poster: "../images/top 10/kannur-squad.jpg"
  },
  {
    rank: "6",
    poster: "../images/top 10/Vikram.webp"
  },
  {
    rank: "7",
    poster: "../images/top 10/Mathaham.jpeg"
  },
  {
    rank: "8",
    poster: "../images/top 10/img11.png"
  },
  {
    rank: "9",
    poster: "../images/top 10/Valatty.jpeg"
  },
  {
    rank: "10",
    poster: "../images/top 10/img6.jpg"
  }

]
function Top10_movies_display() {
  let moviecodes = ` `;
  for (i = 0; i < top10movies.length; i++) {
    moviecodes = moviecodes + `
  <div class="top10-movie-card">
    <div class="top10-overlay">
      <h1 class="rank">${top10movies[i].rank}</h1>
    </div>
    <div class="top10-poster">
      <img class="top10-poster" src="${top10movies[i].poster}" alt="">
    </div>
  </div>
  `
    document.getElementById('Top10-Movies').innerHTML = moviecodes;
  }
}
Top10_movies_display()
// hotstarspecial Section
let hotstarspecial_posters = [
  {
    poster: "../images/Hostar-special/HP-1.png"
  },
  {
    poster: "../images/Hostar-special/HP-2.png"
  },
  {
    poster: "../images/Hostar-special/HP-3.png"
  },
  {
    poster: "../images/Hostar-special/HP-4.jpg"
  },
  {
    poster: "../images/Hostar-special/HP-5.jpg"
  },
  {
    poster: "../images/Hostar-special/HP-6.png"
  },
  {
    poster: "../images/Hostar-special/HP-7.jpeg"
  },
  {
    poster: "../images/Hostar-special/HP-8.png"
  },
  {
    poster: "../images/Hostar-special/HP-9.png"
  },
  {
    poster: "../images/Hostar-special/HP-10.jpg"
  },
  {
    poster: "../images/Hostar-special/HP-11.jpg"
  },
  {
    poster: "../images/Hostar-special/HP-12.jpeg"
  },
  {
    poster: "../images/Hostar-special/HP-13.jpeg"
  },
  {
    poster: "../images/Hostar-special/HP-14.jpeg"
  },
  {
    poster: "../images/Hostar-special/HP-15.webp"
  },
  {
    poster: "../images/Hostar-special/HP-16.jpg"
  },
  {
    poster: "../images/Hostar-special/HP-17.jpg"
  },
  {
    poster: "../images/Hostar-special/HP-18.webp"
  }
]
function Hotstar_movies_display() {
  const Movies = document.getElementById('Hotstar-Special');
  let MoviesIndex = 0;
  //create dom elements
  for (i = 0; i < hotstarspecial_posters.length; i++) {
    let ver_card = document.createElement('div');
    let ver_poster = document.createElement('div');
    let poster = document.createElement('img');
    //Attachd elements
    poster.appendChild(document.createTextNode(''));
    ver_card.appendChild(ver_poster);
    ver_poster.appendChild(poster);
    Movies.appendChild(ver_card);
    //setting up img
    poster.src = hotstarspecial_posters[MoviesIndex].poster;
    MoviesIndex++;
    //setting class name
    ver_card.className = "ver-movie-card";
    ver_poster.className = "vertical-poster";
    poster.className = "poster";
  }
}
Hotstar_movies_display()
// commingsoon Movie Section
let commingsoon_posters = [
  {
    poster: "../images/Coming Soon/CS-0.jpeg"
  },
  {
    poster: "../images/Coming Soon/CS-1.jpg"
  },
  {
    poster: "../images/Coming Soon/CS-2.jpg"
  },
  {
    poster: "../images/Coming Soon/CS-3.png"
  },
  {
    poster: "../images/Coming Soon/CS-4.jpg"
  },
  {
    poster: "../images/Coming Soon/CS-5.png"
  },
  {
    poster: "../images/Coming Soon/CS-6.jpeg"
  },
  {
    poster: "../images/Coming Soon/CS-7.jpg"
  },
  {
    poster: "../images/Coming Soon/CS-8.jpeg"
  },
  {
    poster: "../images/Coming Soon/CS-9.webp"
  }
]
function Comming_movies_display() {
  const Movies = document.getElementById('Comming-Soon');
  let MoviesIndex = 0;
  //create dom elements
  for (i = 0; i < commingsoon_posters.length; i++) {
    let ver_card = document.createElement('div');
    let ver_poster = document.createElement('div');
    let poster = document.createElement('img');
    //Attachd elements
    poster.appendChild(document.createTextNode(''));
    ver_card.appendChild(ver_poster);
    ver_poster.appendChild(poster);
    Movies.appendChild(ver_card);
    //setting up img
    poster.src = commingsoon_posters[MoviesIndex].poster;
    MoviesIndex++;
    //setting class name
    ver_card.className = "ver-movie-card";
    ver_poster.className = "vertical-poster";
    poster.className = "poster";
  }
}
Comming_movies_display()
// Koffee wih Karan
let coffetime = [
  {
    poster: "../images/Caffee time/koffe1.jpeg",
    members: "Kajol and Rani Mukerji"
  },
  {
    poster: "../images/Caffee time/koffe2.jpeg",
    members: "Sidharth Malhotra and Varun Dhawan"
  },
  {
    poster: "../images/Caffee time/koffe3.jpeg",
    members: "Kareena Kapoor Khan and Alia Bhatt"
  },
  {
    poster: "../images/Caffee time/koffe4.jpeg",
    members: "Sara Ali Khan and Ananya Pandey"
  },
  {
    poster: "../images/Caffee time/koffe5.jpeg",
    members: "Sunny Deol and Bobby Deol"
  },
  {
    poster: "../images/Caffee time/koffe6.png",
    members: "Deepika Padukone and Ranveer Singh"
  },
  {
    poster: "../images/Caffee time/koffe7.webp",
    members: "Saif Ali Khan and Sara Ali Khan"
  },
  {
    poster: "../images/Caffee time/koffe8.jpg",
    members: "Akhay Kumar and Ranveer Singh"
  },
  {
    poster: "../images/Caffee time/koffe9.webp",
    members: "Deepika Padukone and Alia Bhatt"
  },
  {
    poster: "../images/Caffee time/koffe10.jpeg",
    members: "Ranbir Kapoor, Ranveer Sign"
  },
  {
    poster: "../images/Caffee time/koffe11.png",
    members: "AliaBhatt and ShahRukh Khan"
  },
  {
    poster: "../images/Caffee time/koffe12.jpeg",
    members: "Salman Khan"
  },
  {
    poster: "../images/Caffee time/koffe13.jpg",
    members: "Kajol and ShahRukh Khan"
  }
]
function movies_display2() {
  let moviecodes = ` `;
  for (i = 0; i < coffetime.length; i++) {
    moviecodes = moviecodes + `
    <div class="hor-movie-card">
      <div class="overlay1">
        <p><button>free</button></p>
        <i class="fa-solid fa-play"></i>
      </div>
      <div class="horizontal-poster">
        <img class="poster1" src="${coffetime[i].poster}" alt="">
       </div>
      <div class="highlights">
       <p>${coffetime[i].members}</p>
      </div>
    </div>
  `
    document.getElementById('Its-Coffe-Time').innerHTML = moviecodes;
  }
}
movies_display2()
// Super hero movie Section
let superhero_posters = [
  {
    poster: "../images/Marvel/Hero1.jpg"
  },
  {
    poster: "../images/Marvel/Hero2.jpg"
  },
  {
    poster: "../images/Marvel/Hero3.jpeg"
  },
  {
    poster: "../images/Marvel/Hero4.jpg"
  },
  {
    poster: "../images/Marvel/Hero5.jpeg"
  },
  {
    poster: "../images/Marvel/Hero6.jpeg"
  },
  {
    poster: "../images/Marvel/Hero7.jpeg"
  },
  {
    poster: "../images/Marvel/Hero8.jpg"
  },
  {
    poster: "../images/Marvel/Hero9.jpeg"
  },
  {
    poster: "../images/Marvel/Hero10.jpg"
  },
  {
    poster: "../images/Marvel/Hero11.jpg"
  },
  {
    poster: "../images/Marvel/Hero12.jpg"
  },
  {
    poster: "../images/Marvel/Hero13.jpg"
  },
  {
    poster: "../images/Marvel/Hero14.jpg"
  },
  {
    poster: "../images/Marvel/Hero15.jpg"
  },
  {
    poster: "../images/Marvel/Hero16.webp "
  },
  {
    poster: "../images/Marvel/Hero17.jpg"
  },
  {
    poster: "../images/Marvel/Hero18.jpg"
  },
  {
    poster: "../images/Marvel/Hero19.jpg"
  }
]
function superhero_movies_display() {
  const Movies = document.getElementById('Super-Hero');
  let MoviesIndex = 0;
  //create dom elements
  for (i = 0; i < superhero_posters.length; i++) {
    let ver_card = document.createElement('div');
    let ver_poster = document.createElement('div');
    let poster = document.createElement('img');
    //Attachd elements
    poster.appendChild(document.createTextNode(''));
    ver_card.appendChild(ver_poster);
    ver_poster.appendChild(poster);
    Movies.appendChild(ver_card);
    //setting up img
    poster.src = superhero_posters[MoviesIndex].poster;
    MoviesIndex++;
    //setting class name
    ver_card.className = "ver-movie-card";
    ver_poster.className = "vertical-poster";
    poster.className = "poster";
  }
}
superhero_movies_display()
//Disney Movie Section
let disney_posters = [
  {
    poster: "../images/Disney/img1.webp"
  },
  {
    poster: "../images/Disney/img2.jpeg"
  },
  {
    poster: "../images/Disney/img3.jpeg"
  },
  {
    poster: "../images/Disney/img4.jpeg"
  },
  {
    poster: "../images/Disney/img5.jpg"
  },
  {
    poster: "../images/Disney/img6.jpg"
  },
  {
    poster: "../images/Disney/img7.jpg"
  },
  {
    poster: "../images/Disney/img8.jpeg"
  },
  {
    poster: "../images/Disney/img9.jpg"
  },
  {
    poster: "../images/Disney/img10.jpg "
  },
  {
    poster: "../images/Disney/img11.jpeg"
  },
  {
    poster: "../images/Disney/img12.jpg"
  },
  {
    poster: "../images/Disney/img13.jpeg"
  },
  {
    poster: "../images/Disney/img14.jpg"
  },
  {
    poster: "../images/Disney/img15.jpg"
  },
  {
    poster: "../images/Disney/img16.jpeg"
  },
  {
    poster: "../images/Disney/img17.jpg"
  },
  {
    poster: "../images/Disney/img18.png"
  },
  {
    poster: "../images/Disney/img19.png"
  }
]

function disney_movies_display() {
  const Movies = document.getElementById('Disney');
  let MoviesIndex = 0;
  //create dom elements
  for (i = 0; i < disney_posters.length; i++) {
    let ver_card = document.createElement('div');
    let ver_poster = document.createElement('div');
    let poster = document.createElement('img');
    //Attachd elements
    poster.appendChild(document.createTextNode(''));
    ver_card.appendChild(ver_poster);
    ver_poster.appendChild(poster);
    Movies.appendChild(ver_card);
    //setting up img
    poster.src = disney_posters[MoviesIndex].poster;
    MoviesIndex++;
    //setting class name
    ver_card.className = "ver-movie-card";
    ver_poster.className = "vertical-poster";
    poster.className = "poster";
  }
   
 
}
disney_movies_display()
//Kids Section
let kids_posters = [
  {
    poster: "../images/Kids/img1.jpeg"
  },
  {
    poster: "../images/Kids/Frozen-II-Magic.jpg"
  },
  {
    poster: "../images/Kids/img2.jpg"
  },
  {
    poster: "../images/Kids/img3.jpeg"
  },
  {
    poster: "../images/Kids/img4.jpeg"
  },
  {
    poster: "../images/Kids/img5.jpg"
  },
  {
    poster: "../images/Kids/img6.jpg"
  },
  {
    poster: "../images/Kids/img7.jpg"
  },
  {
    poster: "../images/Kids/img8.jpg"
  },
  {
    poster: "../images/Kids/img9.jpg"
  },
  {
    poster: "../images/Kids/img10.webp"
  },
  {
    poster: "../images/Kids/img11.png"
  },
  {
    poster: "../images/Kids/img12.jpeg"
  },
  {
    poster: "../images/Kids/img13.jpeg"
  },
  {
    poster: "../images/Kids/img14.jpeg"
  },
  {
    poster: "../images/Kids/img15.jpg"
  }
]

function movies_display3() {
  const Movies = document.getElementById('Kids');
  let MoviesIndex = 0;
  //create dom elements
  for (i = 0; i < kids_posters.length; i++) {
    let ver_card = document.createElement('div');
    let ver_poster = document.createElement('div');
    let poster = document.createElement('img');
    //Attachd elements
    poster.appendChild(document.createTextNode(''));
    ver_card.appendChild(ver_poster);
    ver_poster.appendChild(poster);
    Movies.appendChild(ver_card);
    //setting up img
    poster.src = kids_posters[MoviesIndex].poster;
    MoviesIndex++;
    //setting class name
    ver_card.className = "ver-movie-card";
    ver_poster.className = "vertical-poster";
    poster.className = "poster";
  } 
}
movies_display3()
