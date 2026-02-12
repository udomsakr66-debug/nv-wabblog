<template>
  <div>
    <h1>Edit Menu</h1>

    <form @submit.prevent="updateMenu">
      <p>
        ชื่อเมนู:
        <input type="text" v-model="menu.name" />
      </p>

      <p>
        ราคา:
        <input type="number" v-model="menu.price" />
      </p>

      <p>
        ประเภท:
        <input type="text" v-model="menu.type" />
      </p>

      <p>
        รายละเอียด:
        <input type="text" v-model="menu.description" />
      </p>

      <p>
        <button type="submit">บันทึกการแก้ไข</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      menu: {},
      menuId: null
    }
  },

  async created() {
    this.menuId = this.$route.params.menuId

    try {
      const response = await axios.get(
        `http://localhost:8081/menus/${this.menuId}`
      )
      this.menu = response.data
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    async updateMenu() {
      try {
        await axios.put(
          `http://localhost:8081/menus/${this.menuId}`,
          this.menu
        )

        alert('แก้ไขเมนูสำเร็จ')
        this.$router.push('/menus')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
