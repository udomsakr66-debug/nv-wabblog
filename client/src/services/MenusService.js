import Api from './Api.js'

export default {

  index () {
    return Api().get('menus')
  },

  show (id) {
    return Api().get(`menus/${id}`)
  },

  create (menu) {
    return Api().post('menus', menu)
  },

  update (menu) {
    return Api().put(`menus/${menu.id}`, menu)
  },

  remove (menu) {
    return Api().delete(`menus/${menu.id}`)
  }

}
