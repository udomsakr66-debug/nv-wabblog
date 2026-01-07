// src/controllers/CoffeeController.js
const { Coffee } = require('../models') // เรียกใช้ Model Coffee ที่เราเพิ่งสร้าง

module.exports = {
    // 1. ดึงเมนูทั้งหมด (GET /coffees)
    async index (req, res) {
        try {
            const coffees = await Coffee.findAll()
            res.send(coffees)
        } catch (err) {
            res.status(500).send({ error: 'ดึงข้อมูลไม่สำเร็จ' })
        }
    },

    // 2. สร้างเมนูใหม่ (POST /coffee)
    async create (req, res) {
        try {
            // บันทึกลงตาราง Coffee
            const coffee = await Coffee.create(req.body)
            res.send(coffee.toJSON())
        } catch (err) {
            res.status(500).send({ error: 'สร้างเมนูไม่สำเร็จ' })
        }
    },

    // 3. แก้ไขเมนู (PUT /coffee/:coffeeId)
    async put (req, res) {
        try {
            await Coffee.update(req.body, {
                where: { id: req.params.coffeeId }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({ error: 'แก้ไขไม่สำเร็จ' })
        }
    },

    // 4. ลบเมนู (DELETE /coffee/:coffeeId)
    async remove (req, res) {
        try {
            const coffee = await Coffee.findOne({
                where: { id: req.params.coffeeId }
            })
            if (!coffee) {
                return res.status(403).send({ error: 'ไม่มีเมนูนี้' })
            }
            await coffee.destroy()
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'ลบไม่สำเร็จ' })
        }
    },

    // 5. ดูเมนูรายตัว (GET /coffee/:coffeeId)
    async show (req, res) {
        try {
            const coffee = await Coffee.findByPk(req.params.coffeeId)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'หาข้อมูลไม่เจอ' })
        }
    }
}