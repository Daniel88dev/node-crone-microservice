/**
 * Configuration for the weekly report microservice
 * 
 * This module loads configuration from environment variables (.env.local file)
 * with fallback to default values if environment variables are not set.
 */
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

export const config = {
  // Target API endpoint
  apiUrl: process.env.API_URL || "http://localhost:3000/api/weekly-report",

  // Schedule configuration (every Monday at 5 AM)
  schedule: {
    dayOfWeek: parseInt(process.env.SCHEDULE_DAY_OF_WEEK || "1", 10), // Monday (0 is Sunday, 1 is Monday, etc.)
    hour: parseInt(process.env.SCHEDULE_HOUR || "5", 10),
    minute: parseInt(process.env.SCHEDULE_MINUTE || "0", 10),
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || "info",
    // Add timestamps to logs
    timestamps: process.env.LOG_TIMESTAMPS !== "false", // Convert string to boolean
  },
};
