import React, { useEffect } from 'react';
import { useTools } from '../../hooks/tools';

import Header from '../../components/Header';
import ToolItem from '../../components/ToolItem';
import Modal from '../../components/Modal';

import { Container } from './styles';

const Landing: React.FC = () => {
  const { loadTools, tools } = useTools();

  useEffect(() => {
    loadTools();
  }, [loadTools]);

  return (
    <Container>
      <Modal />
      <Header />
      <ul>
        {
          tools.map((tool) => (
            <ToolItem
              key={tool.id}
              title={tool.title}
              link={tool.link}
              description={tool.description}
              tags={tool.tags}
            />
          ))
        }
      </ul>
    </Container>
  );
};

export default Landing;
