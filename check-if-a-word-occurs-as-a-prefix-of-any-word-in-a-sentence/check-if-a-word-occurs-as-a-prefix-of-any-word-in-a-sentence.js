/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = (sentence, searchWord) => {
  if(!sentence) return sentence;
  const splitSentence = sentence.split(' ');
  for(let i = 0; i < splitSentence.length; i++) {
    const slicer = splitSentence[i]; // other way -> splitSentence[i].slice(0,searchWord.length) and then compare slicer with searchword
    if(slicer.startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};