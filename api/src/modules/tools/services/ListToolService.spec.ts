/* eslint-disable no-unused-expressions */
import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import ListToolService from './ListToolService';

import Tool from '../infra/typeorm/entities/Tool';

describe('ListTools', () => {
  it('should be able to list tools', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const createTool = new CreateToolService(fakeToolsRepository);
    const listTool = new ListToolService(fakeToolsRepository);

    const tool1 = await createTool.execute({
      title: 'Title',
      link: 'http://example.com',
      description: 'Description',
      tags: 'tag',
    });

    const tool2 = await createTool.execute({
      title: 'Title 2',
      link: 'http://example.com',
      description: 'Description',
      tags: 'tag',
    });

    const tag = undefined;

    expect(listTool.execute(tag)).toHaveReturned;
  });

  it('should be able to list tools with filter', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const createTool = new CreateToolService(fakeToolsRepository);
    const listTool = new ListToolService(fakeToolsRepository);

    await createTool.execute({
      title: 'Title 1',
      link: 'http://example.com',
      description: 'Description',
      tags: 'tag',
    });

    await createTool.execute({
      title: 'Title 2',
      link: 'http://example.com',
      description: 'Description',
      tags: 'tag',
    });

    const tag = 'tag';

    const tools = await listTool.execute(tag);

    const toolsArray = tools ? [...tools] : [];

    expect(toolsArray[0]).toHaveProperty('id');
    expect(toolsArray[0].title).toBe('Title 1');
  });
});
