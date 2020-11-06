import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

import api from '../services/api';

interface Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface AddToolFormData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface ToolSearchProps {
  search: string;
}

interface ToolsContextProps {
  tools: Tool[];
  loadTools(): void;
  deleteTool(id: string): void;
  handleCreateTool(data: AddToolFormData): Promise<void>;
  handleSearchTools(data: ToolSearchProps): Promise<void>;
}

const ToolsContext = createContext<ToolsContextProps>({} as ToolsContextProps);

const ToolsProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>([]);

  const loadTools = useCallback(async () => {
    const response = await api.get('/tools');
    setTools(response.data);
  }, []);

  const deleteTool = useCallback(async (id) => {
    await api.delete(`/tools/${id}`);

    const toolsUpdated = tools.filter((tool) => tool.id !== id);

    setTools(toolsUpdated);
  }, [tools]);

  const handleCreateTool = useCallback(async (data: AddToolFormData) => {
    const tagsFormatted = data.tags.split(' ');

    const requestData = { ...data, tags: tagsFormatted };

    const response = await api.post('/tools', requestData);

    const tool = response.data;

    tools.push(tool);

    loadTools();
  }, [loadTools, tools]);

  const handleSearchTools = useCallback(async (data: ToolSearchProps) => {
    const { search } = data;

    console.log('chegou aqui: ', search);

    const response = await api.get(`/tools?tag=${search}`);

    const searchResponse = response.data as Tool[];

    console.log(searchResponse);

    setTools(searchResponse);
  }, []);

  const value = useMemo(() => ({
    tools,
    loadTools,
    deleteTool,
    handleCreateTool,
    handleSearchTools,
  }), [
    tools,
    loadTools,
    deleteTool,
    handleCreateTool,
    handleSearchTools,
  ]);

  return (
    <ToolsContext.Provider value={value}>
      {children}
    </ToolsContext.Provider>
  );
};

function useTools(): ToolsContextProps {
  const context = useContext(ToolsContext);

  if (!context) {
    throw new Error('useTool must be within a ToolProvider.');
  }

  return context;
}

export { ToolsProvider, useTools };
