type LoggerFunction = {
  <T extends Object>(obj: T, msg?: string, ...args: any[]): void;
};

export interface Logger {
  error: LoggerFunction;
  warn: LoggerFunction;
  info: LoggerFunction;
  debug: LoggerFunction;
  trace: LoggerFunction;
  silent: LoggerFunction;
}
