let myArr = [];

// get the input on CLI i use virtual interface.
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
//i used nested question for saving all the input in a one time.
readline.question(`What's your name?`, (name) => {
  readline.question(`What's your verb?`, (vrb) => {
    readline.question(`What's your adv?`, (adv) => {
      readline.question(`What's your adjective?`, (adj) => {
        myArr.push(
          // to send the inputs into the Array as a Object
          ` {
                  name:${name},
                  verb:${vrb},
                  adverb:${adv},
                  adjective:${adj},
          
              }
              `
        );
        console.log(myArr[0]);

        readline.close();
        readline.close();
        readline.close();
        readline.close();
      });
    });
  });
});

console.log(`My story starts here. 
The hero is ${myArr[0].name})
The verb is ${myArr[0].vrb})
The adverb is ${myArr[0].adv})
The adjective is ${myArr[0].adj}`);
