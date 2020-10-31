import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import DeleteToolService from './DeleteToolService';

import Tool from '../infra/typeorm/entities/Tool';

describe('DeleteTool', () => {
  it('should be able to delete a tool', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const deleteTool = new DeleteToolService(fakeToolsRepository);
    const createTool = new CreateToolService(fakeToolsRepository);

    const remove = jest.spyOn(fakeToolsRepository, 'remove');

    const tool = await createTool.execute({
      title: 'Title',
      link: 'http://example.com',
      description: 'Description',
      tags: 'tag',
    });

    await deleteTool.execute(tool);

    expect(remove).toHaveBeenCalled();
  });

  it('should not be able to delete a non existing tool', () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const deleteTool = new DeleteToolService(fakeToolsRepository);

    const tool = {
      id: '999',
      title: 'Title',
      link: 'http://example.com',
      description: 'Description',
      tags: 'tag',
    };

    expect(deleteTool.execute(tool as Tool)).rejects.toBeInstanceOf(Error);
  });
});
