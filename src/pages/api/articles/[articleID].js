import { articles } from "@/data/articles";

export default function handler (req, res) {
    const {articleID} = req.query
    const article_data = articles.find(data => data._id === articleID)
    res.status(200).json(article_data)
}