/**
 * Weekly Report Microservice
 *
 * This service sends a POST request to the specified API endpoint
 * every Monday at 5 AM and logs the response.
 */
import axios from "axios";
import cron from "node-cron";
import { config } from "./config.ts";
import { Logger } from "./logger.ts";

/**
 * Sends a POST request to the weekly report API endpoint
 */
export async function sendWeeklyReportRequest(): Promise<void> {
  try {
    Logger.info(`Sending weekly report request to ${config.apiUrl}`);

    const response = await axios.post(config.apiUrl);

    Logger.info("Weekly report request sent successfully");
    Logger.info(`Response status: ${response.status}`);
    Logger.info(`Response data: ${JSON.stringify(response.data)}`);

    return Promise.resolve();
  } catch (error) {
    Logger.error("Failed to send weekly report request", error as Error);
    return Promise.reject(error);
  }
}

/**
 * Schedule the weekly report task
 */
function scheduleWeeklyReport(): void {
  const { dayOfWeek, hour, minute } = config.schedule;

  Logger.info(
    `Scheduling weekly report for day ${dayOfWeek} at ${hour}:${minute}`
  );

  // Schedule the job to specified day and time
  // node-cron format: second(0-59) minute(0-59) hour(0-23) day-of-month(1-31) month(1-12) day-of-week(0-7)(0 or 7 is Sunday)
  cron.schedule(`${minute} ${hour} * * ${dayOfWeek}`, async () => {
    Logger.info("Running scheduled weekly report task");
    await sendWeeklyReportRequest();
  });

  Logger.info("Weekly report scheduled successfully");
}

// Initialize the service
function init(): void {
  Logger.info("Starting Weekly Report Microservice");
  scheduleWeeklyReport();

  // For testing purposes, you can uncomment this to run the task immediately
  // sendWeeklyReportRequest();

  Logger.info("Weekly Report Microservice started successfully");
}

// Start the service
init();
