function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  console.log("data2");
  getData(2, () => {
    console.log("data3");
    getData(3, () => {
      console.log("data4");
    });
  });
});

fulfilled = value;
reject = reason;

let promise = new Promise((resolve, reject) => {
  console.log("hi....... bro........");
  resolve("123");
});

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data: ", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("after 2 seconds");
      resolve("success");
    }, 2000);
  });
};

promise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise chain means each step in the chain depends on successful promise of previous one
