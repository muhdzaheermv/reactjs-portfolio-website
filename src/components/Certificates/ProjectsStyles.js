import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 1.5rem 1rem;
  }
`;

export const BlogCard = styled.div`
  background-color: #0f1624;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(80, 78, 78, 0.3);
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TitleContent = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: #9cc9e3;
  font-size: ${(props) => (props.title ? '2.2rem' : '1.8rem')};
  margin: 0.5rem 0;
`;

export const Hr = styled.hr`
  width: 40px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  padding: 0 1.5rem;
  color: #e4e6e7;
  font-size: 1.4rem;
  line-height: 1.6;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem;
  }
`;

export const UtilityList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
  padding: 0 1rem;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background: #6b3030;
  border-radius: 12px;
  transition: 0.3s ease;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
`;

export const Tag = styled.li`
  background: #1e1e1e;
  color: #d8bfbf;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
`;
