//QQ 1. What does the following code return?
//new Set([1,1,2,2,3,4])
// {1,2,3,4}

//QQ 2. What does the following code return?
// [...new Set("referee")].join("")
// //"ref"

//QQ 3. What does teh Map m look like after running the following code? 
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

//hasDuplicate
const hasDuplicate = arr => new Set(arr).size != arr.length;

//vowelCount
function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}