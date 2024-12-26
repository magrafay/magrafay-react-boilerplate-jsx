class Logger {
  static logLevel = "info"; // Default log level

  static levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
  };

  static log(message, level = "info", ...optionalParams) {
    if (Logger.levels[level] <= Logger.levels[Logger.logLevel]) {
      // Customize log output
      console[level](`[${new Date().toISOString()}] [${level.toUpperCase()}]:`, message, ...optionalParams);
    }
  }

  static error(message, ...optionalParams) {
    Logger.log(message, "error", ...optionalParams);
  }

  static warn(message, ...optionalParams) {
    Logger.log(message, "warn", ...optionalParams);
  }

  static info(message, ...optionalParams) {
    Logger.log(message, "info", ...optionalParams);
  }

  static debug(message, ...optionalParams) {
    Logger.log(message, "debug", ...optionalParams);
  }

  // Optional: Method to dynamically set the log level
  static setLogLevel(level) {
    if (Logger.levels[level] !== undefined) {
      Logger.logLevel = level;
      Logger.info(`Log level set to ${level}`);
    } else {
      Logger.error(`Invalid log level: ${level}`);
    }
  }
}

export default Logger;
