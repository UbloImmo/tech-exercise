import styled from "styled-components";

export const App = () => {
  return (
    <Container>
      <Header>
        <h1>Header</h1>
      </Header>
      <ContentContainer>
        <ListContainer></ListContainer>
        <SideContainer></SideContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled("div")`
  background-color: lightgray;
  overflow: hidden;
  width: 100%;
  height: 100%;
  /* flex */
  display: flex;
  flex-direction: column;
`;

const Header = styled("div")`
  background-color: white;
  display: flex;
  padding: 0 1rem;
`;

const ContentContainer = styled("div")`
  padding: 1rem;
  flex-grow: 1;
  overflow-y: scroll;
  /* flex */
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ListContainer = styled("div")`
  min-height: 60rem;
  background-color: red;
  /* flex */
  flex: 8;
`;

const SideContainer = styled(`div`)`
  background-color: white;
  min-height: 100%;
  /* flex */
  flex: 4;
`;
