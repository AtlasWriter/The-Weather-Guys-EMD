import { Router } from "express";
import { searchReports } from "./controller";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const query = req.query.query as string;
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }
    const results = await searchReports(query);
    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
