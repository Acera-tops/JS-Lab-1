const name = "April Topolewski";
const age = 32;
const birthday = "May 16th";
const detroitGC = true;

var lifeEvents = [
    "I was born and riased in Michigan",
    "Growing up, I wanted to be a writer, actor, editor, meteorologist, radio host and teacher",
    "I went to CMU for Teaching Science",
    "I have 2 cats and a dog"
];


if (detroitGC === true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

// loop the array printing one line at a time
    // console.log(lifeEvents.length);
for (let i=0; i<lifeEvents.length; i++) {
    console.log (`${lifeEvents[i]}. \n`);
}


let counter = 0;
let randomNumber = 0;

while (randomNumber !== 5) {
    let randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber !== 5) {
        console.log (`${randomNumber} !==5`)
        counter++;
    } else {
        counter++;
        console.log(`5===5. Its took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}