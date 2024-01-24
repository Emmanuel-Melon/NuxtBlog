import * as dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 8000;
export const secret = `${process.env.SECRET || "secret"}`;
export const databaseURL = process.env.DATABASE_URL as string;