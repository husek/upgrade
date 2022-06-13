import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

const errorColor = 'rgb(200, 60, 76)';

const StyledInput = styled.input`
  font-size: 1rem;
  font-weight: 500;
  background-color: ${({ error, theme }) => error ? lighten(0.4, errorColor) : lighten(0.1, theme.accentBackgroundColor)};
  width: calc(100% - 1rem);
  margin: 0;
  border: ${({ error, theme }) => `1px solid ${error ? errorColor : theme.textColor}`};
  border-radius: 3px;
  color: ${({ theme }) => theme.textColor};
  padding: 0.5em;
  line-height: normal;
  &[type="checkbox"] {
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-left: 1em;
    width: auto;
  }
`;

const StyledSelect = styled.select`
  font-size: 1rem;
  font-weight: 500;
  background-color: ${({ error, theme }) => error ? lighten(0.4, errorColor) : lighten(0.1, theme.accentBackgroundColor)};
  width: calc(100% - 1rem);
  margin: 0;
  border: ${({ error, theme }) => `1px solid ${error ? errorColor : theme.textColor}`};
  border-radius: 3px;
  color: ${({ theme }) => theme.textColor};
  padding: 0.5em;
  line-height: normal;
`;

const ErrorMessage = styled.small`
  color: ${errorColor};
`;

const FormLabel = styled.span`
  display: ${({ type }) => type !== 'checkbox' ? 'block' : 'inline-block'};
`;

const InputWrapper = styled.label`
  padding-bottom: 1rem;
  display: block;
`;

const SelectLoader = styled.div`
  width: 100%;
  text-align: center;
  background: ${({ theme }) => transparentize(0.2, theme.accentBackgroundColor)};
  position: relative;
  margin-bottom: -60px;
`;

export { ErrorMessage, StyledInput, FormLabel, InputWrapper, StyledSelect, SelectLoader };
