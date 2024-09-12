// src/appwrite.js
import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

// Initialize the Appwrite database instance
const databases = new Databases(client);

export { client, databases };
