const letterPositions = function(sentence) {
  
  sentence = sentence.split('');
  const results = {};

  sentence.forEach((letter, index) => {
    if (letter !== ' ') {
      results[letter] ? results[letter].push(index) : results[letter] = [index];
    }
  });

  return results;
};



module.exports = letterPositions;
