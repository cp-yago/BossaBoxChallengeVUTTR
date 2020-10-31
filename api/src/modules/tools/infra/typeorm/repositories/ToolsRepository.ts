import { getRepository, Repository } from 'typeorm';

import IToolsRepository from '../../../repositories/IToolsRepository';
import ICreateToolDTO from '../../../dtos/ICreateToolDTO';
import Tool from '../entities/Tool';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async create(toolData: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create(toolData);

    return await this.ormRepository.save(tool);
  }

  public async save(tool: Tool): Promise<Tool> {
    return this.ormRepository.save(tool);
  }

  public async findByTags(tag: string): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    const filteredTools = tools.filter(tool => {
      return tool.tags.includes(tag);
    });

    return filteredTools;
  }

  public async list(): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    return tools;
  }
}

export default ToolsRepository;
