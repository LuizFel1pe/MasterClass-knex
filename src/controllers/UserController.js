const knex = require('../database'); /* Não precisa do index porque ele ja sabe */

module.exports = { 
  async index(req, res) {
    const result = await knex('users');
    return res.json(result);
  } 
};