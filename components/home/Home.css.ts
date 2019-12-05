import styled from 'styled-components';

interface HomeProps {
  isOnMobile: boolean;
}
const StyledHome = styled.div`
  .home-title {
    font-size: ${(props: HomeProps) => {
      return props.isOnMobile ? '5em' : '9em';
    }};
  }
  .home-entry {
    font-size: ${(props: HomeProps) => {
      return props.isOnMobile ? '1.5em' : '2em';
    }};
  }
`;

export default StyledHome;
