// local reviews data
const reviews = [
  {
    id: 1,
    name: "michael jackson",
    job: "An American singer, songwriter, and dancer",
    img:
      "./michael.jpg",
    text: 
    "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the 'King of Pop'. he is regarded as one of the most significant cultural figures of the 20th century. Through stage and video performances, he popularized complicated dance techniques such as the moonwalk, to which he gave the name, and popularized the robot. His sound and style have influenced artists of various genres, and his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture for over four decades. Jackson is the most awarded artist in the history of popular music.",
  },
  {
    id: 2,
    name: "Steve Jobs",
    job: "an American business magnate, industrial designer, investor, and media proprietor",
    img:
      "stevejobs.jpg",
    text:
    "Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc., the chairman and majority shareholder of Pixar, a member of The Walt Disney Company's board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak.",
  },
  {
    id: 3,
    name: "elon musk",
    job: "An interna business magnate, industrial designer, engineer, and philanthropist",
    img:
      "elon.jpg",
    text:
      "Elon Reeve Musk FRS is a business magnate, industrial designer, engineer, and philanthropist. He is the founder, CEO, CTO and chief designer of SpaceX; early investor, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.",
  },
  {
    id: 4,
    name: "Lady GaGa",
    job: "An American singer, songwriter, record producer, actress, and businesswoman",
    img:
      "gaga.jpg",
    text:
  "Stefani Joanne Angelina Germanotta (born March 28, 1986), known professionally as Lady Gaga, is an American singer, songwriter, record producer, actress, and businesswoman. She is known for her consistent image reinventions and versatility in both music and entertainment. Gaga began performing as a teenager, singing at open mic nights and acting in school plays. She studied at Collaborative Arts Project 21, through New York University's Tisch School of the Arts, before dropping out to pursue a career in music. When Def Jam Recordings canceled her contract, she worked as a songwriter for Sony/ATV Music Publishing, where she signed a joint deal with Interscope Records and Akon's label, KonLive Distribution, in 2007. Gaga rose to prominence the following year with her debut studio album, The Fame, and its chart-topping singles 'Just Dance' and 'Poker Face'. The album was later reissued to include the EP, The Fame Monster (2009), which yielded the successful singles 'Bad Romance', 'Telephone', and 'Alejandro'."    
  },
  {
    id: 5,
    name: "justin bieber",
    job: "A Canadian singer, songwriter and multi-instrumentalist",
    img:
      "justin.jpg",
    text:
    "Justin Drew Bieber is a Canadian singer, songwriter and multi-instrumentalist. Discovered at age 13 by talent manager Scooter Braun after he had watched his YouTube cover song videos, Bieber was signed to RBMG Records in 2008.",
  },
  {
    id: 6,
    name: "Taylor Swift",
    job: "An American singer-songwriter",
    img:
      "taylor.jpeg",
    text:
    "Born in West Reading, Pennsylvania, Swift relocated to Nashville, Tennessee in 2004 to pursue a career in country music. Her 2006 eponymous debut studio album was the longest-charting album of the 2000s on the Billboard 200. Its third single, 'Our Song', made her the youngest person to single-handedly write and perform a number-one song on the Billboard Hot Country Songs chart. Swift's second studio album, Fearless (2008), expands on country pop styles and won the Grammy Award for Album of the Year. Buoyed by the success of crossover singles 'Love Story' and 'You Belong with Me', Fearless was certified Diamond by the Recording Industry Association of America (RIAA). Speak Now (2010), her third studio album, blends country pop with rock sensibility and spawned the top-10 singles 'Mine' and 'Back to December'.",
  },
  {
    id: 7,
    name: "Leonardo DiCaprio",
    job: "An American actor, producer and environmentalist",
    img:
      "leo.jpeg",
    text:
    "Leonardo Wilhelm DiCaprio (born November 11, 1974) is an American actor, producer and environmentalist. He has often played unconventional roles, particularly in biopics and period films. As of 2019, his films have grossed US$7.2 billion worldwide, and he has placed eight times in annual rankings of the highest-paid actors in the world. Born in Los Angeles, DiCaprio began his career by appearing in television commercials in the late 1980s. In the early 1990s, he played recurring roles in various television series, such as the sitcom Parenthood. He had his first major film role in This Boy's Life (1993) and received acclaim for his supporting role as a developmentally disabled boy in What's Eating Gilbert Grape (1993). He achieved international stardom in the epic romance Titanic (1997), which became the highest-grossing film to that point. After a few commercially unsuccessful films, DiCaprio starred in two successful features in 2002: the biographical crime drama Catch Me If You Can and the historical drama Gangs of New York, which marked his first of many collaborations with director Martin Scorsese.",
  },
  {
    id: 8,
    name: "Angelina Jolie",
    job: "An American actress, filmmaker, and humanitarian",
    img:
      "jolie.jpg",
    text:
    "Angelina Jolie (born June 4, 1975) is an American actress, filmmaker, and humanitarian. The recipient of numerous accolades, including an Academy Award and three Golden Globe Awards, she has been named Hollywood's highest-paid actress multiple times.",
  },
  {
    id: 9,
    name: "Brad Pitt",
    job: "An American actor and film producer",
    img:
      "pitt.jpg",
    text:
    "William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He has received multiple awards, including two Golden Globe Awards and an Academy Award for his acting, in addition to another Academy Award, another Golden Globe Award and a Primetime Emmy Award as producer under his production company, Plan B Entertainment.",
  },
  {
    id: 10,
    name: "Rihanna",
    job: "A Barbadian singer, actress, and businesswoman",
    img:
      "Rihanna.jpg",
    text:
    "Robyn Rihanna Fenty (born 20 February 1988)[2] is a Barbadian singer, actress, and businesswoman. Born in Saint Michael and raised in Bridgetown, Barbados, Rihanna was discovered by American record producer Evan Rogers who invited her to the United States to record demo tapes. After signing with Def Jam in 2005, she soon gained recognition with the release of her first two studio albums, Music of the Sun (2005) and A Girl like Me (2006), both of which were influenced by Caribbean music and peaked within the top ten of the US Billboard 200 chart.",
  },
  {
    id: 11,
    name: "Jackie Chan",
    job: "A Hong Kong martial artist, actor, stuntman, film director, action choreographer, screenwriter, producer, and singer.",
    img:
      "JackieChan.jpg",
    text:
    "Chan Kong-sang (About this soundlisten) (Chinese: 陳港生; born 7 April 1954), known professionally as Jackie Chan, is a Hong Kong martial artist, actor, stuntman, film director, action choreographer, screenwriter, producer, and singer. He is known in the cinematic world for his slapstick acrobatic fighting style, comic timing, use of improvised weapons, and innovative stunts, which he typically performs himself. He has trained in Wushu or Kung Fu and Hapkido, and has been acting since the 1960s, appearing in over 150 films.",
  },
  {
    id: 12,
    name: "Kobe Bryant",
    job: "An American professional basketball player",
    img:
      "kobe.jpg",
    text:
    "Kobe Bean Bryant (August 23, 1978 – January 26, 2020) was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA). Regarded as one of the greatest players of all time,[3][4][5][6] Bryant won five NBA championships, and was an 18-time All-Star, a 15-time member of the All-NBA Team, a 12-time member of the All-Defensive Team, the 2008 NBA Most Valuable Player (MVP), and a two-time NBA Finals MVP. Bryant also led the NBA in scoring twice, and ranks fourth on the league's all-time regular season scoring and all-time postseason scoring lists.",
  },
];

// get items by id
const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const introduction = document.getElementById("info");

// get btns by class
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentPerson = 7;

// load initial page
window.addEventListener("DOMContentLoaded", function(){
  showPersonInfo();
});

// show person info based in the currentPerson number
function showPersonInfo(){
  const person = reviews[currentPerson];
  img.src = person.img;
  name.textContent = person.name;
  job.textContent = person.job;
  introduction.textContent = person.text;
}

// set action to the prevBtn
prevBtn.addEventListener("click", function(){
  currentPerson--;
  if(currentPerson < 0){
    currentPerson = reviews.length - 1;
  }
  showPersonInfo();
});
// set action to the nextBtn
nextBtn.addEventListener("click", function(){
  currentPerson++;
  if(currentPerson > reviews.length - 1){
    currentPerson = 0;
  }
  showPersonInfo();
});
// set action to the randomBtn
randomBtn.addEventListener("click", function(){
  currentPerson = getRandomNumber();
  showPersonInfo();
}); 

function getRandomNumber(){
  return Math.floor(Math.random()*reviews.length);
}

