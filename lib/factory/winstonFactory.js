var winston = require('winston');

var dateFormat = require('date-format');

module.exports = {

	_defaultTimestamp : function () {
		var now = new Date();
		return dateFormat.asString('yyyy-MM-dd hh:mm:ss.SSS', now);
	},

	_createFileTransport : function (options) {

		var transportConfig = {
			filename : options.filename,
			level : 'debug',
			json : false,
			timestamp : this._defaultTimestamp
		};

		return new (winston.transports.File)(transportConfig);
	},

	_createConsoleTransport : function (options) {

		var transportConfig = {
			colorize : true,
			level : 'debug',
			json : false,
			timestamp : this._defaultTimestamp
		};

		return new (winston.transports.Console)(transportConfig);
	},

	_createTransports : function (options) {
		var transports = [];

		if (options.filename) {
			var transport = this._createFileTransport({
				filename : options.filename
			});
			transports.push(transport);
		}

		if (options.console) {
			var transport = this._createConsoleTransport();
			transports.push(transport);
		}

		return transports;
	},

	/**
	 * @param {object} options
	 * @param {string} [options.filename] - log to specified file
	 * @param {bool} [options.console=false] - log to console
	 */
	createLogger : function (options) {

		var transports = this._createTransports(options);

		var loggerConfig = {
			transports : transports
		};

		var logger = new (winston.Logger)(loggerConfig);

		return logger;
	}

};