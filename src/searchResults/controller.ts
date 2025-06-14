import { Request, Response } from "express";
import { searchReports } from "./dao";

export const getSearchResults = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const results = await searchReports(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { searchReports };

