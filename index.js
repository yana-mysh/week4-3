let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
let newAlphabet = alphabet.replace(/\s/g, "");
console.log(newAlphabet);
console.log(newAlphabet.length);
let index1 = Math.floor(Math.random() * 27);
let index2 = Math.floor(Math.random() * 27);
let index3 = Math.floor(Math.random() * 27);
let index4 = Math.floor(Math.random() * 27);
console.log(index1, index2, index3, index4);
console.log(
  newAlphabet[index1] +
    newAlphabet[index2] +
    newAlphabet[index3] +
    newAlphabet[index4]
);
