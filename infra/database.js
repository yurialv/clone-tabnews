import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_PASSWORD_HOST,
    port: process.env.POSTGRES_PASSWORD_PORT,
    user: process.env.POSTGRES_PASSWORD_USER,
    database: process.env.POSTGRES_PASSWORD_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
