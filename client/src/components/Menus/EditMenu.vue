<template>
  <div>
    <h1>Edit Menu</h1>

    <form @submit.prevent="updateMenu">
      <p>
        ชื่อเมนู:
        <input type="text" v-model="menu.name" required />
      </p>

      <p>
        ราคา:
        <input type="number" v-model="menu.price" required />
      </p>

      <p>
        ประเภท:
        <select v-model="menu.type" required>
          <option value="ร้อน">ร้อน</option>
          <option value="เย็น">เย็น</option>
          <option value="ปั่น">ปั่น</option>
        </select>
      </p>

      <p>
        สถานะ:
        <select v-model="menu.status" required>
          <option value="มีจำหน่าย">มีจำหน่าย</option>
          <option value="หมด">หมด</option>
        </select>
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
      menu: {
        name: '',
        price: '',
        type: '',
        status: ''
      },
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
