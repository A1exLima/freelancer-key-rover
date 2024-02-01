import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
`

export const Content = styled.div`
  flex: 1;
  position: relative;

  transition: padding-left 0.6s ease-in-out;

  &[data-toggle-display="toAppear"] {
    padding-left: 42.8rem;
  }

  &[data-toggle-display="hidden"] {
    padding-left: 0rem;
  }

  @media (max-width: 1024px) {
    &[data-toggle-display="toAppear"] {
      padding-left: 0rem;
    }

    &[data-toggle-display="hidden"] {
      padding-left: 0rem;
    }
  }
`

export const SideBar = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  

  transition: transform 0.6s ease-in-out;

  &[data-toggle-display="toAppear"] {
    width: 42.8rem;
    transform: translateX(0%);
  }

  &[data-toggle-display="hidden"] {
    width: 42.8rem;
    transform: translateX(-100%);
  }

  @media (max-width: 1024px) {
    &[data-toggle-display="toAppear"] {
      width: 100%;
    }

    &[data-toggle-display="hidden"] {
      width: 100%;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.Black};
  padding: 5rem 2rem 6rem 2rem;

  @media (min-width: 728px) {
    padding: 8rem 2rem 6rem 2rem;
  }
`

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 5rem 2rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.Black200};
    text-align: center;
    font-family: var(--rhodium-font-family);
    font-size: clamp(2.2rem, 2.8vw, 3.8rem);
    font-style: normal;
    font-weight: 600;
    white-space: nowrap;
    padding-bottom: 2rem;
    text-shadow: 1px 6px 5px rgba(0,0,0,0.3);


    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 500px) {
      flex-direction: column;
      gap: 0.5rem;

      font-size: clamp(2.2rem, 5.8vw, 3.8rem);

      > img {
        padding-left: 2.5rem;
      }
    }

    > img {
      padding-bottom: 0.5rem;
      width: 13rem;
    }
  }
`

export const CloseSideBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 2rem;

  @media (max-width: 1024px) {
    padding-bottom: 3rem;
  }

  > svg {
    cursor: pointer;
    font-size: 3.5rem;
    color: ${({ theme }) => theme.COLORS.Black};

    transition: transform 0.4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const ContentMain = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 6rem;

  
`

export const ContentVideo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  border: 1px solid ${({ theme }) => theme.COLORS.Orange};

  transition: max-width 0.6s ease-in-out;

  &[data-toggle-display="toAppear"] {
    max-width: 48%;
  }

  &[data-toggle-display="hidden"] {
    max-width: 48%;
  }

  @media (max-width: 1024px) {
    transition: max-width 0.4s ease-in-out;

    &[data-toggle-display="toAppear"] {
      max-width: 85%;
    }

    &[data-toggle-display="hidden"] {
      max-width: 85%;
    }
  }
`

export const ContentText = styled.section`
  max-width: 60rem;
  padding-bottom: 3rem;

  > p {
    color: ${({ theme }) => theme.COLORS.Black100};
    text-align: center;
    font-family: var(--rhodium-font-family);
    font-size: clamp(1.6rem, 3vw, 1.8rem);
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    text-shadow: 1px 6px 5px rgba(0, 0, 0, 0.3);
  }
`

export const ContentButton = styled.section`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;


`

export const Barcode = styled.p`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: ${({ theme }) => theme.COLORS.Orange};
  padding: 2rem 0 2rem 0;
  color: ${({ theme }) => theme.COLORS.Black};
  text-align: center;
  font-family: var(--libre128-font-family);
  font-size: clamp(3rem, 5vw, 7.8rem);
  font-weight: 400;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;

  > div {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.Orange};
    width: clamp(15.4rem, 44vw, 19.4rem);
    height: clamp(15.4rem, 44vw, 19.4rem);
    padding-left: 1.5rem;
    border-radius: 9999rem;

    animation: glow 1.5s ease-in-out infinite alternate;

    @keyframes glow {
      from {
        box-shadow: 0px 0px 15px ${({ theme }) => theme.COLORS.Orange};
      }

      to {
        box-shadow: 0px 0px 35px ${({ theme }) => theme.COLORS.Orange};
      }
    }

    > img:nth-child(1) {
      width: clamp(12rem, 33vw, 15rem);
    }

    > img:nth-child(2) {
      position: absolute;
      top: 6rem;
      right: -10rem;
      width: clamp(16rem, 40vw, 17.3rem);
      filter: blur(0.03rem);
    }

    > img:nth-child(3) {
      position: absolute;
      top: -2rem;
      left: -8.5rem;
      width: clamp(12rem, 33vw, 13.7rem);
      filter: blur(0.03rem);
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.Orange};
    text-align: center;
    font-family: var(--libre128-font-family);
    font-size: 3.3rem;
    font-weight: 400;
  }
`

export const ContentButton2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  > button {
    max-width: 42.8rem;
  }
`

export const ContentKey = styled.div`
  > div {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      margin: 2rem 0 5rem 0;
      width: clamp(23rem, 43vw, 35rem);
      height: clamp(17rem, 25vw, 35rem);

      filter: brightness(1.1);

      @media (min-width: 1024px) {
        width: 28rem;
        margin-bottom: 5rem;
      }
    }
  }
`

export const Footer = styled.footer`
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.COLORS.Black};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  transition: transform 0.6s ease-in-out;

  &[data-toggle-display="toAppear"] {
    width: 42.8rem;
    transform: translateX(0%);
  }

  &[data-toggle-display="hidden"] {
    width: 42.8rem;
    transform: translateX(-100%);
  }

  @media (max-width: 1024px) {
    &[data-toggle-display="toAppear"] {
      width: 100%;
    }

    &[data-toggle-display="hidden"] {
      width: 100%;
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.Orange};
    font-size: 2.1rem;
    padding-bottom: 0.4rem;
  }

  > svg:nth-child(3) {
    color: ${({ theme }) => theme.COLORS.Orange};
    font-size: 3.5rem;
    padding-bottom: 0.3rem;
  }

  > p {
    padding-top: -0.8rem;
    padding-left: 0.7rem;
    color: ${({ theme }) => theme.COLORS.Orange};
    font-family: var(--rhodium-font-family);
    font-size: 1.4rem;
    font-weight: 400;
  }
`
