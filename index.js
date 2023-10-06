function longestWordInSentence(sentence) {
  const wordsArr = sentence.split(" ");
  let frontIndex = 0;
  let backIndex = wordsArr.length - 1;
  let longestWord = "";

  while (frontIndex <= backIndex) {
    const frontWord = wordsArr[frontIndex].replace(/[^a-zA-Z ]/g, "");
    const backWord = wordsArr[backIndex].replace(/[^a-zA-Z ]/g, "");

    if (frontWord.length > longestWord.length) {
      longestWord = frontWord;
    }
    if (frontWord.length > longestWord.length) {
      longestWord = backWord;
    }
    if (
      longestWord.length === frontWord.length ||
      longestWord.length === backWord.length
    ) {
      let longestWordVwl = longestWord.match(/[aeiou]/gi);
      if (longestWord.length === frontWord.length) {
        let frontWordVwl = frontWord.match(/[aeiou]/gi);
        longestWord =
          frontWordVwl.length > longestWordVwl.length ? frontWord : longestWord;
      }
      if (longestWord.length === backWord.length) {
        let backWordVwl = backWord.match(/[aeiou]/gi);
        longestWord =
          backWordVwl.length > longestWordVwl.length ? backWord : longestWord;
      }
    }
    frontIndex += 1;
    backIndex -= 1;
  }
  return longestWord;
}

const sent =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
console.log("longestWordInSentence", longestWordInSentence(sent));
