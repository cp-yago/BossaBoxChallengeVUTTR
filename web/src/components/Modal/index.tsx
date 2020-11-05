import React, { useCallback } from 'react';
import { Formik, Field, Form } from 'formik';
import { FiPlus, FiXOctagon } from 'react-icons/fi';
import * as Yup from 'yup';
import { useModal } from '../../hooks/modal';
import { useTools } from '../../hooks/tools';

import { Container, Content } from './styles';

interface AddToolFormData {
  title: string;
  description: string;
  link: string;
  tags: string;
}

const Modal: React.FC = () => {
  const { isAddModalOpen, isAddToolModalOpen } = useModal();
  const { handleCreateTool } = useTools();

  const schema = Yup.object().shape({
    title: Yup.string().required(),
    link: Yup.string().required(),
    description: Yup.string().required(),
    tags: Yup.string().required(),
  });

  const handleSubmit = useCallback(async (data: AddToolFormData) => {
    await handleCreateTool(data);
    isAddToolModalOpen();
    console.log('data: ', data);
  }, [handleCreateTool, isAddToolModalOpen]);

  return (
    <Container
      isOpen={isAddModalOpen}
      onRequestClose={() => isAddToolModalOpen()}
      ariaHideApp={false}
    >
      <Content>
        <div className="header">
          <FiPlus size={15} />
          <h3>Add new tool</h3>

          <button type="button" className="exit-button" onClick={() => isAddToolModalOpen()}>
            <FiXOctagon />
          </button>
        </div>

        <Formik
          initialValues={{
            title: '',
            link: '',
            description: '',
            tags: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="form">
              <div>
                <p>Tool name</p>
                <Field name="title" type="text" value={values.title} onChange={handleChange('title')} />

                <p>Link</p>
                <Field name="link" type="text" value={values.link} onChange={handleChange('link')} />

                <p>Description</p>
                <Field name="description" type="text" value={values.description} onChange={handleChange('description')} />

                <p>
                  Tags
                  <span>  *Separate with spaces</span>
                </p>
                <Field name="tags" type="text" value={values.tags} onChange={handleChange('tags')} />

              </div>
              <button type="submit">Enviar</button>
            </Form>
          )}
        </Formik>

      </Content>
    </Container>
  );
};

export default Modal;
