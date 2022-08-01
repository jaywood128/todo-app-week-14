import styled from "styled-components";

const TodoStyles = styled.div`
  background-color: #e5eaf5;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  padding: 10px;
  font-size: 12px;
  margin-bottom: 6px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 8%;

  :last-of-type {
    margin-bottom: 20px;
  }
`;

const RemoveStyles = styled.div`
  display: flex;
  align-items: center;
  /* background-color: green; */
`;

export { TodoStyles, RemoveStyles };
