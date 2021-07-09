const knex = require('../database');

module.exports = { 
  async index(req, res, next) {
    try {
      const { user_id } = req.query;
      const query = knex('projects');

      if (user_id) {
        query
          .where({ user_id })
          .join('users', 'users.id', '=', 'projects.user_id') /* Junte os campos onde na tabela users (id) === projects (user_id) */
          .select('projects.*', 'users.username') /* traga dessa junção tudo da tabela projects e da tabela user somente o usename */
      }

      const results = await query

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  // Continuar tabela de projetos;
};