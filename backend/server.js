const express = require('express')

const port = 5001

const app = express()




app.get('/', (req,res) =>
res.json({message: 'Hieeeeeeee'})
)

app.listen(port, () => console.log(`Server started on port ${port}`))