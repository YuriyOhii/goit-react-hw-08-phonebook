import styled from 'styled-components';

export const Btn = styled.button`
  margin: 0 auto;
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  width: max-content;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#1565c0' : '#e2e5e8')};
  color: ${props => (props.selected ? 'white' : '#1565c0')};
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }

  &:active {
    background-color: #1565c0;
    color: #fff;
  }
`;
