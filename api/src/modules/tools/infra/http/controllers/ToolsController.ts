import { Request, Response } from 'express';

import ToolsRepository from '../../typeorm/repositories/ToolsRepository';
import CreateToolService from '../../../services/CreateToolService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const toolsRepository = new ToolsRepository();

    const createTool = new CreateToolService(toolsRepository);

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
    });

    return response.status(201).json(tool);
  }
}
