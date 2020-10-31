import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      link: Joi.string().required(),
      description: Joi.string().required(),
      tags: Joi.array().required(),
    },
  }),
  toolsController.create,
);

toolsRouter.get('/', toolsController.show);

export default toolsRouter;
