// Q1: write a javascript program that takes a callback and invokes it after a delay of 2 second

function inner() {
  console.log("inner");
}

function outer(a) {
  console.log("outer");
  a();
}

const callFunction = () => {
  setTimeout(() => {
    outer(inner);
  }, 2000);
};

callFunction();

// Q2: write a javascript program that converts a callback based function to a promise based function

// Callback based function
function inner() {
  console.log("inner");
}

function outer(a) {
  console.log("outer");
  a();
}

outer(inner);

// Promise based function
const outer1 = () => {
  return new Promise((resolve, reject) => {
    console.log("outer1");
  });
};

const inner1 = () => {
  return new Promise((resolve, reject) => {
    console.log("inner1");
  });
};

outer1().then(inner1());

// Q3: write a javascript function that makes an http GET request and returns a Promise that resolves with the response data

async function fetchData(cityName) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3775fe69ee0a4d9ebbf163205241704&q=${cityName}&aqi=yes`
    );

    if (!response.ok) {
      throw new Error("network issue");
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

console.log(fetchData("Mandya"));

// Q4: write a javascript function that takes an array of URLs and download the content of each URL in parallel using Promises

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
];

const fetchDatas = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network issue");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

Promise.all(urls.map((url) => fetchDatas(url)))
  .then((results) => {
    results.forEach((res) => console.log(res.body));
  })
  .catch((error) => console.log(error.message));
