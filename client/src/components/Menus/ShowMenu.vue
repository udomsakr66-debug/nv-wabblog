<template>
  <div>
    <h1>Show Menu</h1>

    <div v-if="menu">
      <p>ID: {{ menu.id }}</p>
      <p>ชื่อเมนู: {{ menu.name }}</p>
      <p>ราคา: {{ menu.price }}</p>
    </div>

    <div v-else>
      กำลังโหลดข้อมูล...
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      menu: null
    }
  },

  async created () {
    try {
      const id = this.$route.params.menuId

      const response = await axios.get(
        `http://localhost:8081/menus/${id}`
      )

      this.menu = response.data

    } catch (error) {
      console.error(error)
    }
  }
}
</script>
