import React, { useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Formik, Form, Field } from 'formik';
import { useModal } from '../../hooks/modal';
import { useTools } from '../../hooks/tools';

import Tool from '../../assets/images/tool.svg';

import {
  Container,
  SearchInput,
  CheckboxInput,
  SearchButton,
  AddButton,
} from './styles';

interface SearchData {
  search: string;
}

const Header: React.FC = () => {
  const { isAddToolModalOpen } = useModal();
  const { handleSearchTools } = useTools();

  const handleSubmit = useCallback(async (data: SearchData) => {
    await handleSearchTools(data);
  }, [handleSearchTools]);

  return (
    <Container>
      <div>
        <div className="contents">
          <img src={Tool} alt="vuttr" width={85} />
          <div>
            <h1>VUTTR</h1>
            <h3>Very Useful Tools to Remember</h3>
          </div>
        </div>

        <div className="search">

          <Formik
            initialValues={{
              search: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="search">
                <Field className="search-input" name="search" type="text" value={values.search} onChange={handleChange('search')} />
                <SearchButton type="submit" onClick={() => handleSubmit}>
                  Search
                </SearchButton>

              </Form>
            )}
          </Formik>

          <AddButton onClick={() => isAddToolModalOpen()}>
            <FiPlus />
            <span>Add</span>
          </AddButton>
        </div>

        <div className="checkbox">
          <CheckboxInput type="checkbox" />
          <span>Search in tags only</span>
        </div>

      </div>
    </Container>
  );
};

export default Header;
