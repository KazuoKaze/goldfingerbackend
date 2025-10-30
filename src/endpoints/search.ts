// payload/endpoints/search.ts
import { PayloadHandler } from 'payload'

export const searchHandler: PayloadHandler = async (req, res) => {
  const { query } = req.query

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query parameter required' })
  }

  try {
    const results = await req.payload.find({
      collection: 'pages',
      where: {
        or: [
          {
            title: {
              contains: query,
            },
          },
          {
            description: {
              contains: query,
            },
          },
          {
            'keywords.keyword': {
              contains: query,
            },
          },
        ],
      },
      limit: 10,
    })

    return res.status(200).json({
      results: results.docs.map((doc) => ({
        title: doc.title,
        url: doc.url,
        description: doc.description,
        category: doc.category,
      })),
    })
  } catch (error) {
    return res.status(500).json({ error: 'Search failed' })
  }
}
