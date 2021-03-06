var api       = require('./lib/api'), // wrappers for API calls
    debug     = require('./lib/debug'), // debug mode module
    exception = require('./lib/exception'),  // exception handler module
    logger    = require('./lib/logger'), // logging methods module
    CONFIG    = require('./config/config');

module.exports = {
    // start sending logs
    start: function (options) {
        CONFIG.SELECTED_LOGGER = CONFIG.LOGGER_VERSION;
        debug.set(options.debug);
        api.methods.identifyApp(options);
        exception.catchException(options.exitOnError || false);
        exception.gracefulExitHandler();
    },

    log: logger.methods.log,
    trace: logger.methods.trace,
    debug: logger.methods.debug,
    info: logger.methods.info,
    warn: logger.methods.warn,
    error: logger.methods.error,

    //common method for handling logged messages
    push: logger.methods.push,
    // setting logger name to Winston logger if it's used
    setLoggerName: function (name) {
        if (name === 'Winston') {
            CONFIG.SELECTED_LOGGER = CONFIG.WINSTON_LOGGER_VERSION;
            debug.write('Winston Stackify Transport added');
        }
    },

    expressExceptionHandler: exception.expressExceptionHandler
};