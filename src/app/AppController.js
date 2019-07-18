
module.exports = class AppController {
  static async index(req, res) {
    res.json({ ok: true, DB_HOST: process.env.DB_HOST })
  }
}
