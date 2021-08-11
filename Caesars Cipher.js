// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
  let result=""
  for(let i=0;i<str.length;i++){
    let char=str[i] 
    
    if(char.length === 1 && char.match(/[A-Z]/i)){
      let ascii=str.charCodeAt(i);
      char=String.fromCharCode((ascii + 13-65) % 26+65);
       }

    result=result+char;
  }
  str=result.slice()
  return str;
}

rot13("SERR PBQR PNZC");
