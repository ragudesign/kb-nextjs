const { readFileSync } = require('fs')
const { join } = require('path');
const rawSearchJson = readFileSync(join(process.cwd(), 'public/search.json'), 'utf8');


let searchJson = JSON.parse(rawSearchJson);

export default (req, res) => {
    const results = req.query.q ?
        searchJson.filter(kb => kb.title.toLowerCase().includes(req.query.q.toLowerCase())) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}