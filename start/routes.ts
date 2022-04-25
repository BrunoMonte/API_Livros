import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'UserStoresController.store')
  Route.delete('/', 'UserDeletesController.destroy')
  Route.get('/', 'UserListsController.index')
}).prefix('/Bookseller')
