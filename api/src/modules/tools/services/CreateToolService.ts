import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

interface IRequest {
  title: string;
  link: string;
  description: string;
  tags: string;
}

class CreateToolService {
  constructor(private toolsRepository: IToolsRepository) {}

  public async execute({
    title,
    link,
    description,
    tags,
  }: IRequest): Promise<Tool> {
    return await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });
  }
}

export default CreateToolService;
