const FILTER_ALL = 'FILTER_ALL';

const FILTERS = [
    {name: 'ALL', value: FILTER_ALL},
    {name: 'DOCUMENTARY', value: 'DOCUMENTARY'},
    {name: 'COMEDY', value: 'COMEDY'},
    {name: 'HORROR', value: 'HORROR'},
    {name: 'CRIME', value: 'CRIME'},
];

function getFilters() {
    return FILTERS;
}

module.exports = {getFilters, FILTER_ALL};
