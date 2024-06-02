// assignment - 3

//creating  a lesson plan(using for loop)
let mywork :{name:string, status :boolean}[] =[];
 
for (let i = 1;i<=10;i++){
    let lesson ={
        name: `lesson${i}`,
        status: i%2===1?true:false
    };
mywork.push(lesson);
};
console.log(mywork);

//guessing game (using while loop)

const maxValue:number =10;
const randomNumber :number=Math.floor(Math.random()*maxValue) +1;
console.log(`random number generated:${randomNumber}`);

let guessStatus : boolean = false;
const guesses:number[]=[9,12,8,10,1];

let i :number=0;
while(!guessStatus&&i<guesses.length){
    if (guesses[i]===randomNumber){
        console.log(`congratulations! you have guessed a corect number:${randomNumber}`)
        guessStatus = true;
    }
else if (guesses[i]<randomNumber){
    console.log(`your guess ${guesses[i]} is to low`);
}    
else{
    console.log(`your guess ${guesses[i]} is too high`);
}
i++;
}

//counter incrementer(using do while loop)

let counter: number =0;
let step: number = 5;

do {
    console.log(counter);
    counter+=step;
}
while(counter<100);

//exploring objects
let myobject ={
    item1 :`value1`,
    item2:`value2`,
    item3:`value3`,
};
for (let key in myobject){
    console.log(`Property:${key},
    value:{myobject[key]}`);
}

//exploring arrays with loops

let myArray :number[]=[];
for (let i=0;i<=10;i++){
    myArray.push(i);
}
console.log(myArray);

for (let i=0;i<myArray.length;i++){
    console.log(`Index:${i},Value:${myArray[i]}`)
}
for(let value of myArray){
    console.log(value);
}



