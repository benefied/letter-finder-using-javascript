function reverse(string) {
    let reverseWord = "";
    for(i = string.length - 1; i >= 0; i--){
        reverseWord += string[i];
    }return reverseWord;
}

module.exports = reverse;
