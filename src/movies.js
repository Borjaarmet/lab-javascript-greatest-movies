// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(movies) {
    return movies.map((movie) => {

        return (movie.director)

    });
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filteredArray = movies.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return filteredArray.length

}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    } else {
        const sumRates = movies.reduce((acc, movie) => {
            if (movie.rate === "" || movie.rate === undefined) {
                return acc;
            }
            return acc + parseFloat(movie.rate);
        }, 0);
        const numRates = movies.length;
        return parseFloat((sumRates / numRates).toFixed(2));
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter((movie) => {
        return movie.genre.includes("Drama");
    })
    return ratesAverage(dramaMovies)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray)); //copy of the moviesArray

    moviesCopy.sort((a, b) => {
        if (a.year < b.year) return -1;

        if (a.year > b.year) return 1;

        return a.title.localeCompare(b.title);
    });

    return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles




const orderAlphabetically = moviesArray => {

    const movieTitles = moviesArray.map(movie => movie.title);

    movieTitles.sort((movie1, movie2) => movie1.localeCompare(movie2));

    return movieTitles.slice(0, 20);


};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHourstoMinutes(movies) {
    movies.array.forEach(movie => {
        movie.duration = calculateMins(movie.duration)
    });
    split
    replace
    parseInt
    2 * 60
    reduce

}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average