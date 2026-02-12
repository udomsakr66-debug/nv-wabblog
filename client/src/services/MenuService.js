import Api from './Api'

export default {

  index () {
    return Api().get('coffees')
  },

  show (id) {
    return Api().get(`coffee/${id}`)
  },

  create (menu) {
    return Api().post('menus', menu)
  },

  update (menu) {
    return Api().put(`coffee/${menu.id}`, menu)
  },

  remove (menu) {
    return Api().delete(`coffee/${menu.id}`)
  }
}