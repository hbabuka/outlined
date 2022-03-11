import styled from "styled-components";

const WrapperStyled = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const DescriptionStyled = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const HideStyled = styled.div`
  overflow: hidden;
`;

export const Shared = {
  Section: {
    Wrapper: WrapperStyled,
    Description: DescriptionStyled,
    Image: ImageStyled,
    Hide: HideStyled,
  },
};
