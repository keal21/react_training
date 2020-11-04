const {getMovieList, addMovie, editMovie, deleteMovie} = require('./movieList');
const {getFilters} = require('./filters');
const {getSorts} = require('./sorts');

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "*");
    res.setHeader('Content-Type', 'application/json');

    const query = url.parse(req.url, true).query;

    console.log(JSON.stringify(query));

    let movieList;

    // eslint-disable-next-line default-case
    switch (query.action) {
        case 'add':
            addMovie(query);
            break;
        case 'edit':
            editMovie(query);
            break;
        case 'delete':
            deleteMovie(query);
            break;
        case 'get':
            movieList = getMovieList(query.filter, query.sort);
            break;
    }

    const payload = {
        movieList: movieList,
        filters: getFilters(),
        sorts: getSorts(),
    };

    res.end(JSON.stringify(payload));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
