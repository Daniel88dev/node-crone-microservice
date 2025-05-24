/**
 * Simple logger utility for the microservice
 */
import { config } from './config.ts';

export class Logger {
  private static formatMessage(level: string, message: string): string {
    const timestamp = config.logging.timestamps ? `[${new Date().toISOString()}] ` : '';
    return `${timestamp}${level.toUpperCase()}: ${message}`;
  }

  public static info(message: string): void {
    if (config.logging.level === 'info' || config.logging.level === 'debug') {
      console.log(this.formatMessage('info', message));
    }
  }

  public static error(message: string, error?: Error): void {
    console.error(this.formatMessage('error', message));
    if (error) {
      console.error(error.stack || error.message);
    }
  }

  public static debug(message: string): void {
    if (config.logging.level === 'debug') {
      console.debug(this.formatMessage('debug', message));
    }
  }
}
