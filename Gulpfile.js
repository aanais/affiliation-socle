gulp = require('gulp');
require('squel-affiliation-source/tasks/app')(
    require('squel-source/tasks/app')(gulp)
);