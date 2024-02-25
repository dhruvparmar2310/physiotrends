import { articles } from "@/data/articles"

export default function handler (req, res) {
    try {
        res.status(200).json({ articles })
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
}