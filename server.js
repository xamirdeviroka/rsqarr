const app = require('./app')

const port = process.env.PORT || 3000;

  app.get('/team/1436023842834963', (req, res) => {
  res.send('This is the new route!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
