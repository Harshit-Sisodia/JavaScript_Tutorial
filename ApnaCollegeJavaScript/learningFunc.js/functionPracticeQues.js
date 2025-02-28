function func(str) {
  let len = str.length;
  let vowel = 0;
  for (let i = 0; i < len; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowel++;
    }
  }
  return vowel;
}

let str = "harshit";

let vowel = func(str);
console.log("the num of vowels are", vowel);
