const { Coffee } = require('../models')

module.exports = {

    async index (req, res) {
        try {
            const coffees = await Coffee.findAll()
            res.send(coffees)
        } catch (err) {
            res.status(500).send({ error: 'ดึงข้อมูลไม่สำเร็จ' })
        }
    },

    async create (req, res) {
        try {
            const coffee = await Coffee.create(req.body)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'สร้างเมนูไม่สำเร็จ' })
        }
    },

    // 🔥 เปลี่ยนจาก put → update
    async update (req, res) {
        try {
            await Coffee.update(req.body, {
                where: { id: req.params.id }
            })
            res.send({ message: 'แก้ไขสำเร็จ' })
        } catch (err) {
            res.status(500).send({ error: 'แก้ไขไม่สำเร็จ' })
        }
    },

    // 🔥 เปลี่ยนจาก remove → delete
    async delete (req, res) {
        try {
            const coffee = await Coffee.findByPk(req.params.id)

            if (!coffee) {
                return res.status(404).send({ error: 'ไม่มีเมนูนี้' })
            }

            await coffee.destroy()
            res.send({ message: 'ลบสำเร็จ' })

        } catch (err) {
            console.error(err)
            res.status(500).send({ error: 'ลบไม่สำเร็จ' })
        }
    },

    async show (req, res) {
        try {
            const coffee = await Coffee.findByPk(req.params.id)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'หาข้อมูลไม่เจอ' })
        }
    }

}
