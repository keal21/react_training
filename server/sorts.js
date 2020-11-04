const SORTS = [
    {name: 'TITLE', value: 'title'},
    {name: 'OVERVIEW', value: 'overview'},
    {name: 'YEAR', value: 'releaseDate'},
    {name: 'GENRE', value: 'genre'},
];

function getSorts() {
    return SORTS;
}

module.exports = {getSorts};
