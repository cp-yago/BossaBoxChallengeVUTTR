import Tool from '../infra/typeorm/entities/Tool';
import ICreateToolDTO from '../dtos/ICreateToolDTO';

export default interface IToolsRepository {
  create(data: ICreateToolDTO): Promise<Tool>;
  list(): Promise<Tool[]>;
  findByTags(tag: string): Promise<Tool[] | undefined>;
  remove(data: Tool): Promise<void>;
  findById(id: string): Promise<Tool | undefined>;
}
