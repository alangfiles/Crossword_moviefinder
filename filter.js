function f(movieObj) {
  let movie = movieObj.title.toLowerCase();
  let initials = movie.split(" ").map(i => i[0]).join('');

  if (initials.length <= 2) { return false } //don't care about 2 word
  if (movie.indexOf(initials) == 0) {
    return true
  } else {
    return false
  }
}