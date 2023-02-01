import './App.css';
//import Row from './Row';
import Footer from './Components/Footer';
//import requests from './requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav.js';
import RowJson from './RowJson';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <RowJson title ="Trending" rowpic="pic1.jpg" isLarge={true} movies2={DATA_ROW1}/>
      <RowJson title ="Companies" rowpic="pic2.jpg"  />
      <RowJson title ="Requirements" rowpic="pic3.jpg"  />
      <RowJson title ="Frelance Opportunities" rowpic="pic4.jpg" />
      <RowJson title ="Utilities" rowpic="pic5.jpg"/>
      <Footer/>
    </div>
  );
}


export default App;

const DATA_ROW1 = [
  {
    "adult": false,
    "backdrop_path": "/uJ16DD1dj4CQLPNCWIoiOF3l8np.jpg",
    "id": 100088,
    "name": "The Last of Us",
    "original_language": "en",
    "original_name": "The Last of Us",
    "overview": "Twenty years after modern civilization has been destroyed. Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the U.S. and depend on each other for survival.",
    "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    "media_type": "tv",
    "genre_ids": [
      18,
      10765,
      10759
    ],
    "popularity": 1038.563,
    "first_air_date": "2023-01-15",
    "vote_average": 9.2,
    "vote_count": 231,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    "id": 76600,
    "title": "Avatar: The Way of Water",
    "original_language": "en",
    "original_title": "Avatar: The Way of Water",
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      12,
      28
    ],
    "popularity": 3390.012,
    "release_date": "2022-12-14",
    "video": false,
    "vote_average": 7.724,
    "vote_count": 4271
  },
  {
    "adult": false,
    "backdrop_path": "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    "id": 315162,
    "title": "Puss in Boots: The Last Wish",
    "original_language": "en",
    "original_title": "Puss in Boots: The Last Wish",
    "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    "media_type": "movie",
    "genre_ids": [
      16,
      28,
      12,
      35,
      10751,
      14
    ],
    "popularity": 10895.482,
    "release_date": "2022-12-07",
    "video": false,
    "vote_average": 8.64,
    "vote_count": 1815
  },
  {
    "adult": false,
    "backdrop_path": "/mSyQoValhBsJdq3JNGXJww2Q5yL.jpg",
    "id": 593643,
    "title": "The Menu",
    "original_language": "en",
    "original_title": "The Menu",
    "overview": "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    "poster_path": "/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg",
    "media_type": "movie",
    "genre_ids": [
      35,
      27,
      53
    ],
    "popularity": 501.666,
    "release_date": "2022-11-18",
    "video": false,
    "vote_average": 7.294,
    "vote_count": 1506
  },
  {
    "adult": false,
    "backdrop_path": "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
    "id": 661374,
    "title": "Glass Onion: A Knives Out Mystery",
    "original_language": "en",
    "original_title": "Glass Onion: A Knives Out Mystery",
    "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
    "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    "media_type": "movie",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "popularity": 1762.412,
    "release_date": "2022-11-23",
    "video": false,
    "vote_average": 7.076,
    "vote_count": 2718
  },
  {
    "adult": false,
    "backdrop_path": "/b08BDQPq42AoLMfhi7DtTOoYqVu.jpg",
    "id": 800815,
    "title": "The Pale Blue Eye",
    "original_language": "en",
    "original_title": "The Pale Blue Eye",
    "overview": "West Point, New York, 1830. When a cadet at the burgeoning military academy is found hanged with his heart cut out, the top brass summons former New York City constable Augustus Landor to investigate. While attempting to solve this grisly mystery, the reluctant detective engages the help of one of the cadets: a strange but brilliant young fellow by the name of Edgar Allan Poe",
    "poster_path": "/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg",
    "media_type": "movie",
    "genre_ids": [
      9648,
      80,
      27
    ],
    "popularity": 1318.459,
    "release_date": "2022-12-23",
    "video": false,
    "vote_average": 7.103,
    "vote_count": 652
  },
  {
    "adult": false,
    "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "id": 436270,
    "title": "Black Adam",
    "original_language": "en",
    "original_title": "Black Adam",
    "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    "media_type": "movie",
    "genre_ids": [
      14,
      28,
      878
    ],
    "popularity": 2030.075,
    "release_date": "2022-10-21",
    "video": false,
    "vote_average": 7.217,
    "vote_count": 3717
  },
  {
    "adult": false,
    "backdrop_path": "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    "id": 119051,
    "name": "Wednesday",
    "original_language": "en",
    "original_name": "Wednesday",
    "overview": "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
    "poster_path": "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "media_type": "tv",
    "genre_ids": [
      10765,
      9648,
      35
    ],
    "popularity": 2711.329,
    "first_air_date": "2022-11-23",
    "vote_average": 8.671,
    "vote_count": 5344,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/A077VsMIBBXNvlI5mohGnSiIrfI.jpg",
    "id": 536554,
    "title": "M3GAN",
    "original_language": "en",
    "original_title": "M3GAN",
    "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
    "poster_path": "/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      27,
      35
    ],
    "popularity": 2196.229,
    "release_date": "2023-01-06",
    "video": false,
    "vote_average": 7.088,
    "vote_count": 266
  },
  {
    "adult": false,
    "backdrop_path": "/kSqEenES71d1ApF2rRWxp5X0en5.jpg",
    "id": 156902,
    "name": "Kaleidoscope",
    "original_language": "en",
    "original_name": "Kaleidoscope",
    "overview": "A master thief and his crew attempt an epic and elaborate heist worth $7 billion dollars — but betrayal, greed and other threats undermine their plans.",
    "poster_path": "/2nXJoSB5Y6R9ne7pjqL7Cs3zqY1.jpg",
    "media_type": "tv",
    "genre_ids": [
      80,
      18
    ],
    "popularity": 496.118,
    "first_air_date": "2023-01-01",
    "vote_average": 7.328,
    "vote_count": 119,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/k47JEUTQsSMN532HRg6RCzZKBdB.jpg",
    "id": 116135,
    "name": "Vikings: Valhalla",
    "original_language": "en",
    "original_name": "Vikings: Valhalla",
    "overview": "In this sequel to \"Vikings,\" a hundred years have passed and a new generation of legendary heroes arises to forge its own destiny — and make history.",
    "poster_path": "/rDFy1fUU6OC3Mm0CLFB7u0fGwVN.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      18,
      10768
    ],
    "popularity": 435.51,
    "first_air_date": "2022-02-25",
    "vote_average": 7.947,
    "vote_count": 499,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    "id": 19995,
    "title": "Avatar",
    "original_language": "en",
    "original_title": "Avatar",
    "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    "media_type": "movie",
    "genre_ids": [
      28,
      12,
      14,
      878
    ],
    "popularity": 1690.857,
    "release_date": "2009-12-15",
    "video": false,
    "vote_average": 7.561,
    "vote_count": 27796
  },
  {
    "adult": false,
    "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    "id": 361743,
    "title": "Top Gun: Maverick",
    "original_language": "en",
    "original_title": "Top Gun: Maverick",
    "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    "media_type": "movie",
    "genre_ids": [
      28,
      18
    ],
    "popularity": 581.371,
    "release_date": "2022-05-24",
    "video": false,
    "vote_average": 8.332,
    "vote_count": 5664
  },
  {
    "adult": false,
    "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
    "id": 653851,
    "title": "Devotion",
    "original_language": "en",
    "original_title": "Devotion",
    "overview": "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
    "poster_path": "/lwybGlEEJtXZM3ynY19PNwNlPn9.jpg",
    "media_type": "movie",
    "genre_ids": [
      10752,
      36,
      18
    ],
    "popularity": 570.095,
    "release_date": "2022-11-23",
    "video": false,
    "vote_average": 6.691,
    "vote_count": 55
  },
  {
    "adult": false,
    "backdrop_path": "/zdPIWOHuL4nBsvgWwMNnAvNtaJk.jpg",
    "id": 640146,
    "title": "Ant-Man and the Wasp: Quantumania",
    "original_language": "en",
    "original_title": "Ant-Man and the Wasp: Quantumania",
    "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    "poster_path": "/ynWwsafy7ib7hitxImQ8Lso3lvI.jpg",
    "media_type": "movie",
    "genre_ids": [
      12,
      878,
      35
    ],
    "popularity": 112.166,
    "release_date": "2023-02-15",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg",
    "id": 545611,
    "title": "Everything Everywhere All at Once",
    "original_language": "en",
    "original_title": "Everything Everywhere All at Once",
    "overview": "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    "poster_path": "/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    "media_type": "movie",
    "genre_ids": [
      28,
      12,
      878
    ],
    "popularity": 245.247,
    "release_date": "2022-03-24",
    "video": false,
    "vote_average": 8.063,
    "vote_count": 2709
  },
  {
    "adult": false,
    "backdrop_path": "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    "id": 505642,
    "title": "Black Panther: Wakanda Forever",
    "original_language": "en",
    "original_title": "Black Panther: Wakanda Forever",
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "media_type": "movie",
    "genre_ids": [
      28,
      12,
      878
    ],
    "popularity": 1442.235,
    "release_date": "2022-11-11",
    "video": false,
    "vote_average": 7.469,
    "vote_count": 1630
  },
  {
    "adult": false,
    "backdrop_path": "/mNHRGO1gFpR2CYZdANe72kcKq7G.jpg",
    "id": 153312,
    "name": "Tulsa King",
    "original_language": "en",
    "original_name": "Tulsa King",
    "overview": "Just after he is released from prison after 25 years, New York mafia capo Dwight “The General” Manfredi is unceremoniously exiled by his boss to set up shop in Tulsa, Okla. Realizing that his mob family may not have his best interests in mind, Dwight slowly builds a “crew” from a group of unlikely characters, to help him establish a new criminal empire in a place that to him might as well be another planet.",
    "poster_path": "/fwTv3RPRAIy0maOMns5eYRRwnDk.jpg",
    "media_type": "tv",
    "genre_ids": [
      80,
      18
    ],
    "popularity": 2311.492,
    "first_air_date": "2022-11-13",
    "vote_average": 8.597,
    "vote_count": 531,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/1vXD5HXqkhvsXFHE7KmCPZGPR1e.jpg",
    "id": 674324,
    "title": "The Banshees of Inisherin",
    "original_language": "en",
    "original_title": "The Banshees of Inisherin",
    "overview": "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
    "poster_path": "/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg",
    "media_type": "movie",
    "genre_ids": [
      18,
      35
    ],
    "popularity": 188.453,
    "release_date": "2022-10-21",
    "video": false,
    "vote_average": 7.459,
    "vote_count": 494
  },
  {
    "adult": false,
    "backdrop_path": "/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg",
    "id": 877269,
    "title": "Strange World",
    "original_language": "en",
    "original_title": "Strange World",
    "overview": "A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
    "poster_path": "/fHMqfsYyl3lskPK2RiFRwhzwuep.jpg",
    "media_type": "movie",
    "genre_ids": [
      16,
      878,
      12,
      10751
    ],
    "popularity": 975.13,
    "release_date": "2022-11-23",
    "video": false,
    "vote_average": 6.557,
    "vote_count": 651
  }

]