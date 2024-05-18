import {var1,var2} from './module1.mjs'
const myArray=[10];
const [x,y]=myArray

const countCharacters=(text)=>{
    let characterCount=0;
    for(const char of text){
        if(char!==' ')
        characterCount++;
    }
   return characterCount;
   }

   const countWords=(text)=>{
    let trimedText=text.trim();
    let wordCount=0;
    for(const char of trimedText){
        if(char===' ')
        wordCount++;
    }
    return (wordCount+1);

   }

// countWords(' dd trs sf fsdf sdf');
// console.log(countWords('sdfsdf sdf sf'))

const str=''
console.log(str.length===0?0:str.trim().split(/[ ]+/).length);
