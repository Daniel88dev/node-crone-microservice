/**
 * Test script for the Weekly Report Microservice
 * 
 * This script tests the sendWeeklyReportRequest function
 * without waiting for the scheduled time.
 */
import { Logger } from './logger.ts';
import { sendWeeklyReportRequest } from './index.ts';

// Set up a more verbose logging level for testing
process.env.LOG_LEVEL = 'debug';

async function runTest() {
  Logger.info('Starting test for Weekly Report Microservice');

  try {
    await sendWeeklyReportRequest();
    Logger.info('Test completed successfully');
  } catch (error) {
    Logger.error('Test failed', error as Error);
  }
}

// Run the test
runTest();
