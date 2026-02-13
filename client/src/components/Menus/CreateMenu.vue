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
        ประเภท:
        <select v-model="menu.type" required>
          <option disabled value="">-- เลือกประเภท --</option>
          <option value="ร้อน">ร้อน</option>
          <option value="เย็น">เย็น</option>
          <option value="ปั่น">ปั่น</option>
        </select>
      </p>

      <p>
        สถานะ:
        <select v-model="menu.status" required>
          <option disabled value="">-- เลือกสถานะ --</option>
          <option value="มีจำหน่าย">มีจำหน่าย</option>
          <option value="หมด">หมด</option>
        </select>
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
        type: '',
        status: ''
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
