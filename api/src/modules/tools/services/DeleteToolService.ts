import IToolsRepository from '../repositories/IToolsRepository';

interface IRequest {
  id: string;
}

class DeleteToolService {
  constructor(private toolsRepository: IToolsRepository) {}

  public async execute({ id }: IRequest): Promise<void> {
    const tool = await this.toolsRepository.findById(id);

    if (!tool) {
      throw new Error('Tool not found!');
    }

    await this.toolsRepository.remove(tool);
  }
}

export default DeleteToolService;
