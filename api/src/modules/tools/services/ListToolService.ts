import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

class ListToolService {
  constructor(private toolsRepository: IToolsRepository) {}

  public async execute(tag: string | undefined): Promise<Tool[] | undefined> {
    if (!tag) {
      const tools = await this.toolsRepository.list();

      return tools;
    }

    const filteredTools = await this.toolsRepository.findByTags(tag);

    return filteredTools;
  }
}

export default ListToolService;
