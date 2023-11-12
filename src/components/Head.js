import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HeadBlock = styled.div`
  display: flex;
  padding: 1.2rem;
  width: 1180px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1180px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const LostKU = styled(NavLink)`
  font-size: 2rem;
  font-weight: 900;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  color: inherit;

  &:hover{
    color: rgb(134, 38, 51);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 30px;
`;

const Newtext = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  color: inherit;

  &:hover{
    color: rgb(134, 38, 51);
  }
`;

const Login = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  color: inherit;

  &:hover{
    color: rgb(134, 38, 51);
  }
`;


const Head = () => {
  return(
    <div>
      <header>
        <HeadBlock>
          <LostKU to='/'>로스트KU</LostKU>
          <StyledDiv>
            <Newtext to='/newtext'>새 글 쓰기</Newtext>
            <Login to='/login'>로그인</Login>
          </StyledDiv>
        </HeadBlock>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};


export default Head;