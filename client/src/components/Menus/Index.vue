<template>
  <div>
    <h1>Get All Menus</h1>

    <p>
      <button @click="navigateTo('/menus/create')">
        สร้างเมนูใหม่
      </button>
    </p>

    <h4>จำนวนเมนูกาแฟ {{ menus.length }}</h4>

    <div v-if="menus.length === 0">
      ยังไม่มีเมนูกาแฟในระบบ
    </div>

    <div v-for="menu in menus" :key="menu.id">
      <p>id: {{ menu.id }}</p>
      <p>ชื่อเมนู: {{ menu.name }}</p>
      <p>ราคา: {{ menu.price }}</p>
      <p>รายละเอียด: {{ menu.description }}</p>

      <!-- ปุ่มเรียงแนวนอน -->
      <div class="button-row">
        <button
          @click="$router.push({
            name: 'menu-show',
            params: { menuId: menu.id }
          })"
        >
          แสดงเมนู
        </button>

        <button @click="navigateTo('/menus/edit/' + menu.id)">
          แก้ไขเมนู
        </button>

        <button @click="deleteMenu(menu.id)">
          ลบเมนู
        </button>
      </div>

      <hr>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      menus: []
    }
  },

  async created() {
    try {
      const response = await axios.get('http://localhost:8081/menus')
      this.menus = response.data
      console.log('ข้อมูลที่ได้จาก Server:', this.menus)
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },

    async deleteMenu(id) {
      try {
        if (confirm('ต้องการลบเมนูนี้หรือไม่?')) {
          await axios.delete(`http://localhost:8081/menus/${id}`)
          const response = await axios.get('http://localhost:8081/menus')
          this.menus = response.data
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
