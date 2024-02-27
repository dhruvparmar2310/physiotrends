import { members } from "@/data/editorialMembers"

export default function handler (req, res) {
    try {
        res.status(200).json({ members })
      } catch (err) {
        res.status(500).json({ error: 'failed to load members data' })
      }
}