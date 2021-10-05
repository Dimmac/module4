//6
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  // Change code above this line
  return filteredNumbers;
}
//answer
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
//7
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }

  return commonElements;
  // Change code above this line
}
//answer
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
  // Change code above this line
}
//8
// Change code below this line

function calculateTotalPrice(quantity, pricePerItem) {
  // Change code above this line
  return quantity * pricePerItem;
}
//answer
// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
};
//9
// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
// Change code above this line
//answer
// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line
//10
// Change code below this line
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line
//answer
// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
};
// Change code above this line
//11
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number) => {
//     if (number > value) {
//         filteredNumbers.push(number);
//     }
// }
//   return filteredNumbers;
// };
//12
// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

// Change code above this line
//   return commonElements;
// }
//answer
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

// Change code above this line
//     return commonElements;
// };
//13
function changeEven(numbers, value) {
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Change code above this line
}
//answer
function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
      newArray.push(number);
    }
  });
  return newArray;
  // Change code above this line
}
//14
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets;
//answer
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => planet.length);
//15
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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books;
//answer
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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map((book) => book.title);
//16
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books;
//answer
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap((book) => book.genres);
//17
// Change code below this line
const getUserNames = (users) => {};
// Change code above this line
//answer
// Change code below this line
const getUserNames = (users) => users.map((user) => user.name);
// Change code above this line
//18
// Change code below this line
const getUserEmails = (users) => {};
// Change code above this line
//18
// Change code below this line
const getUserEmails = (users) => {};
// Change code above this line
//answer
const getUserEmails = (users) => {
  return users.map((user) => user.email);
};
//19 answer
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
//20 answer
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);
//21
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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books;
const booksByAuthor = books;
//answer
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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);
//22
const getUsersWithEyeColor = (users, color) => {};
//answer
// Change code below this line
const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};
//23
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {};
//answer
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(({ age }) => age > minAge && age < maxAge);
};
// Change code above this line
//24
const getUsersWithFriend = (users, friendName) => {};
answer;
const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName));
};
//25
const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  const uniqueFriends = allFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
  return uniqueFriends;
};
//or
const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
//26
const getActiveUsers = (users) => {};
//answer
const getActiveUsers = (users) => {
  return users.filter(({ isActive }) => isActive === true);
};
//answer
const getInactiveUsers = (users) => {
  return users.filter(({ isActive }) => !isActive === true);
};
//28
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
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";
// Change code below this line

const bookWithTitle = books;
const bookByAuthor = books;
//answer
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
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";
// Change code below this line

const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
const bookByAuthor = books.find(({ author }) => author === AUTHOR);
//29
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
//30
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);
//31
const isEveryUserActive = (users) => {
  return users.every((value) => value.isActive === true);
};
//32
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
//33
const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive === true);
};
//34
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
//35
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);
//36
const calculateTotalBalance = (users) => {};
//aswer
const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};
//37
// const UnionUsers = users.flatMap((el) => users.el);
const getTotalFriendCount = (users) => {
  return users.reduce((total, user) => total + user.friends.length, 0);
};
///38
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = releaseDates;

const alphabeticalAuthors = authors;
//answer
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
//39
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
//40
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
//41
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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
//42
const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};
//43
const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
//44
const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
