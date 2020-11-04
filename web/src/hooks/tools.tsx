import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

import api from '../services/api';

interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface ToolsContextProps {
  tools: Tool[];
  loadTools(): void;
  deleteTool(id: number): void;
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

  const value = useMemo(() => ({
    tools,
    loadTools,
    deleteTool,
  }), [
    tools,
    loadTools,
    deleteTool,
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
