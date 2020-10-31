import { Request, Response } from 'express';

import ToolsRepository from '../../typeorm/repositories/ToolsRepository';
import CreateToolService from '../../../services/CreateToolService';
import ListToolService from '../../../services/ListToolService';
import DeleteToolService from '../../../services/DeleteToolService';

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

  public async show(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query;

    const toolsRepository = new ToolsRepository();

    const listTool = new ListToolService(toolsRepository);

    const filteredTools = await listTool.execute(
      tag ? tag.toString() : undefined,
    );

    return response.json(filteredTools);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const toolsRepository = new ToolsRepository();

    const deleteTool = new DeleteToolService(toolsRepository);

    await deleteTool.execute({ id });

    return response.status(204).send();
  }
}
