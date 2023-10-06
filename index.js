function longestWordInSentence(sentence) {
  const wordsArr = sentence.split(" ");
  let frontIndex = 0;
  let backIndex = wordsArr.length - 1;
  let longestWord = "";

  while (frontIndex <= backIndex) {
    const frontWord = wordsArr[frontIndex].replace(/[^a-zA-Z ]/g, "");
    const backWord = wordsArr[backIndex].replace(/[^a-zA-Z ]/g, "");
    let longestWordVwl = longestWord.match(/[aeiou]/gi);

    if (frontWord.length >= longestWord.length) {
      if (longestWord.length === frontWord.length) {
        let frontWordVwl = frontWord.match(/[aeiou]/gi);
        longestWord =
          frontWordVwl.length > longestWordVwl.length ? frontWord : longestWord;
      } else {
        longestWord = frontWord;
      }
    }

    if (backWord.length >= longestWord.length) {
      console.log(backWord, longestWord);
      if (longestWord.length === backWord.length) {
        let backWordVwl = backWord.match(/[aeiou]/gi);
        longestWord =
          backWordVwl.length > longestWordVwl.length ? backWord : longestWord;
      } else {
        longestWord = backWord;
      }
    }
    frontIndex += 1;
    backIndex -= 1;
  }
  return longestWord;
}

const sent =
  "You will be evaluated for both correctness, proper requirement understanding and presentations abilities";
console.log("longestWordInSentence", longestWordInSentence(sent));
