import * as pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "moviesdb",
});

export const postQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM");
    return result.rows;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllQueryQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM");
    return result.rows;
  } catch (error) {
    console.log(error.message);
  }
};
