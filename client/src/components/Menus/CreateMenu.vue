<template>
  <div>
    <h1>Create Menu</h1>

    <form @submit.prevent="createMenu">
      <p>
        ชื่อเมนู:
        <input type="text" v-model="menu.name" required>
      </p>

      <p>
        ราคา:
        <input type="number" v-model="menu.price" required>
      </p>

      <p>
        รายละเอียด:
        <input type="text" v-model="menu.description">
      </p>

      <p>
        <button type="submit">สร้างเมนู</button>
      </p>
    </form>
  </div>
</template>

<script>
import MenusService from '../../services/MenusService'

export default {
  data () {
    return {
      menu: {
        name: '',
        price: '',
        description: ''
      }
    }
  },

  methods: {
    async createMenu () {
      try {
        await MenusService.create(this.menu)

        // สร้างเสร็จ → กลับหน้าแสดงรายการ
        this.$router.push({
          name: 'menus'
        })

      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
