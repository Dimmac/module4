//45
console.log("qweqwe");
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((book) => book.author)
//   .filter((user) => user.rating > MIN_BOOK_RATING);

// const sortedNames = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.log(sortedNames);
// const mappedNames = sortedNames.map((book) => book.author);
// console.log(mappedNames);
// const filteredNames = mappedNames.filter(
//   ({ rating }) => rating >= MIN_BOOK_RATING
// );
// const filteredNames = [...books].filter(
//   ({ rating }) => rating > MIN_BOOK_RATING
// );
// console.log(filteredNames);
const names = [...books]
  .filter(({ rating }) => rating >= MIN_BOOK_RATING)
  .sort((a, b) => a.author.localeCompare(b.author))
  .map((book) => book.author);
console.log(names);
//46
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((book) => book.name);
};
//47
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((fr) => fr.friends)
    .filter((friends, index, array) => array.indexOf(friends) === index)
    .sort((a, b) => a.localeCompare(b));
};
//48
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((user) => user.gender === gender)
    .reduce((total, user) => (total += user.balance), 0);
};
