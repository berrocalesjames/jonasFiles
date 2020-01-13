module.exports = {
    timeStamp: () => {
      const timeStamp = new Date();
      console.log(timeStamp)
      return Math.round(timeStamp.getTime() / 1000);
      console.log(timeStamp)
    },
  }

//const timeStamp = new Date();
// console.log(timeStamp)
// module.exports = {
//   timeStamp: Math.round(timeStamp.getTime() / 1000),
// }
