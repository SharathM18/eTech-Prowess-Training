// async operation

// setTimeout(() => {
//   console.log("hi bro....");
// }, 1000);
// setTimeout(() => {
//   console.log("hi bro....");
// }, 2000);
// setTimeout(() => {
//   console.log("hi bro....");
// }, 3000);
// setTimeout(() => {
//   console.log("hi bro....");
// }, 4000);

// callback

function outer(a) {
  setTimeout(() => {
    console.log(a);
  }, 1000);

  return function inner(b) {
    setTimeout(() => {
      console.log(a, b);
    }, 2000);
    return (c) => {
      setTimeout(() => {
        console.log(a, b, c);
      }, 3000);
    };
  };
}

outer(2)(3)(4);
