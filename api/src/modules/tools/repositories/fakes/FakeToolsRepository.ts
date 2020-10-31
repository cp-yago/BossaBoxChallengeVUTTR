import IToolsRepository from '../IToolsRepository';
import ICreateToolDTO from '../../dtos/ICreateToolDTO';

import Tool from '../../infra/typeorm/entities/Tool';

class FakeToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async create(toolData: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: 1 }, toolData);

    this.tools.push(tool);

    return tool;
  }

  public async remove(data: Tool): Promise<void> {
    const index = this.tools.findIndex(tool => tool.id === data.id);

    this.tools.splice(index, 1);
  }

  public async list(): Promise<Tool[]> {
    return this.tools;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = this.tools.find(item => item.id === id);

    return tool;
  }

  public async findByTags(tag: string): Promise<Tool[]> {
    const filteredTags = this.tools.filter(tool => {
      return tool.tags.includes(tag);
    });
    return filteredTags;
  }
}

export default FakeToolsRepository;
