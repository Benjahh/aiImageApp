const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL);

export const postQuery = async () => {
  await client.connect();
  try {
    const result = await client.query('SELECT * FROM');
    return result.rows;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.end();
  }
};

export const getAllQuery = async () => {
  await client.connect();
  try {
    const result = await pool.query('SELECT * FROM');
    return result.rows;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.end();
  }
};
