import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';

describe('CreateTool', () => {
  it('should be able to create a tool', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const createTool = new CreateToolService(fakeToolsRepository);

    const tool = await createTool.execute({
      title: 'Title',
      link: 'http://example.com',
      description: 'Description',
      tags: 'tag',
    });
    expect(tool).toHaveProperty('id');
  });
});
