var anagram = function (str) {
  var results = {};

  var combos = function (bld, feed) {
    if (!feed.length) {
      results[bld] = '';
      return;
    }
    for (var i = 0; i < feed.length; i++) {
      combos(bld + feed.charAt(i), feed.slice(0, i) + feed.slice(i + 1));
    }
  };

  combos('', str);
  return Object.keys(results);
};
console.log(anagram('ilm'));
