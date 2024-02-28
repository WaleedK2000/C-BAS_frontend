// // Determine the environment and load the appropriate .env file
// const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
// dotenv.config({ path: envFile });
export function getBackendLink() {
  return process.env.REACT_APP_BACKEND_LINK;
}
