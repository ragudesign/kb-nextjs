import { searchArray } from '../../lib/search-array'

export default (req, res) => {
    const results = req.query.q ?
    searchArray.filter(kb => kb.title.toLowerCase().includes(req.query.q.toLowerCase())) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}