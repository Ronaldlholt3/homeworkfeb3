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