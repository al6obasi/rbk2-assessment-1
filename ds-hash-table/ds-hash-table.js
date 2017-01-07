var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here
      var index = hashFn(key,4);
      for (var i = 0; i < this._storage[index].length; i++) {
        if(this._storage[index][i] === key ){
          return this._storage[index][i][1];
        }
      }
    }

    insert: function(key, value) {
      var index = hashFn(key,4);
      var flag = true;
      if (this._storage[index] === undefined){
        this._storage[index] = [];
      }
      if (this._storage[index][0] === k) {
        this._storage[index][1] = v;
        flag = false ;
      }
      if (flag) {
        this._storage[index].push([k,v]);
      }

  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};