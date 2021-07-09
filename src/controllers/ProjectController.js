const knex = require('../database');

module.exports = { 
  async index(req, res, next) {
    try {
      const { user_id, page = 1 } = req.query;
      const query = knex('projects').limit(5).offset((page - 1) * 5);

      const countProjects = knex('projects').count();

      if (user_id) {
        query
          .where({ user_id })
          .join('users', 'users.id', '=', 'projects.user_id') /* Junte os campos onde na tabela users (id) === projects (user_id) */
          .select('projects.*', 'users.username') /* traga dessa junção tudo da tabela projects e da tabela user somente o usename */
          .where('users.deleted_at', null);
          
          countProjects.where({ user_id });
      }
      const [count] = await countProjects;
      res.header('X-Total-count', count['count  ']);

      const results = await query

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { title, user_id } = req.body;

      const newProject = {
        title, 
        user_id
      };

      await knex('projects').insert(newProject);

      return res.status(201).send(newProject);
    } catch(error) {
      next(error);
    };
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      
      await knex('projects')
        .update({ title })
        .where({ id });
      
      return res.send()
    } catch (error) {
      next(error);      
    };
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('projects').where({ id }).del();
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};