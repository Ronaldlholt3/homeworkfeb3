var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
   
    return parseFloat(movie.rating) >= 8.0;
  });

  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });

  return anim.slice(beginSlice, endSlice);
  return cities.slice(0, 3);
  return original.concat(attach);
  return original.concat(newItem);

  var averageRating =
  watchList
   
    .filter(film => film.Director === "Christopher Nolan")
    
    .map(film => Number(film.imdbRating))
    
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
 
  watchList.filter(film => film.Director === "Christopher Nolan").length;

  return arr
  .filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2));

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });