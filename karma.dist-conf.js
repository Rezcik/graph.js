'use strict';

module.exports = function (config) {
	config.set({
		basePath:      '',
		frameworks:    [ 'jasmine', 'requirejs' ],
		files:         [ 'spec/main-dist.js', {pattern: '**/*.js', included: false} ],
		exclude:       [],
		preprocessors: {}, // NOTE: coverage analysis on the minified file would be meaningless
		reporters:     ['progress'],
		port:          9876,
		colors:        true,
		logLevel:      config.LOG_INFO,
		autoWatch:     false,
		browsers:      ['PhantomJS'],
		singleRun:     true
	});
};
