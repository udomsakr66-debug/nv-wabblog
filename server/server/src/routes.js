const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app) => {

  app.get('/menus', CoffeeController.index)
  app.post('/menus', CoffeeController.create)
  app.get('/menus/:id', CoffeeController.show)
  app.put('/menus/:id', CoffeeController.update)
  app.delete('/menus/:id', CoffeeController.delete)

}
