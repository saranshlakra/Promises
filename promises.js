//---------------Promises----------------
const question = parseInt(prompt("30% of 100 is ?"));
const getAnswer = new Promise((resolve, reject) => {
  if (question === 30) {
    resolve("Correct Anwser");
  } else {
    reject("Incorrect Answer");
  }
});

getAnswer
  .then((getResolve) => {
    console.log(getResolve);
  })
  .catch((getReject) => {
    console.log(getReject);
  });
