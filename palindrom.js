// function check_palindrom(value){
//     let value_num = value.length()

//     if (string > 11){
//         console.log("its not an palindrom");
//     }else{
//         for(let i = 0 ; i < (value_num/2) ; i++){
//             if(value_num[i] === value_num[value_num[value_num.length - i]])
//         }
//     }
// }

// [2:34 PM] Yash Thaokar

// function checkPalindrome(str) {
// const arrayValues = string.split('');
// const reverseArrayValues = arrayValues.reverse();
// const reverseString = reverseArrayValues.join(''); 
// if(string == reverseString) {
// console.log('True');
// }
// else {
// console.log('False');
// }
// }
// // const string = prompt('input Name ');
// checkPalindrome('madam');

function palindrom(value){
   
    let array = Array.from(value)
    let reverse = array.reverse();
    if(array === reverse){
        console.log('its a palindrom');
    }else{
        console.log('its not palindrom')
    }
}

palindrom('madam')