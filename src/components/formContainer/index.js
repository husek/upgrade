import styled from 'styled-components';

const FormContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.accentBackgroundColor};
  max-width: 800px;
  box-sizing: border-box;
  padding: 1.5rem;
  width: 100%;
`;

export default FormContainer;
