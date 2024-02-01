import { styled } from "styled-components"

export const Container = styled.div`
  position: relative;

  > video {
    width: 100%;
    border-radius: 1rem;
    border: none;
    box-shadow: 0px 0px 20px ${({ theme }) => theme.COLORS.Black};
  }

  > button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 0;
    cursor: pointer;

    > svg {
      font-size: clamp(6rem, 6vw, 8rem);
      color: ${({ theme }) => theme.COLORS.Orange};
    }
  }
`

export const Brand = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 1rem 1.5rem;

  > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.Orange};
    width: 4rem;
    height: 4rem;
    border-radius: 9999rem;

    animation: glow 1s ease-in-out infinite alternate;

    @keyframes glow {
      from {
        box-shadow: 0px 0px 15px ${({ theme }) => theme.COLORS.Orange};
      }

      to {
        box-shadow: 0px 0px 35px ${({ theme }) => theme.COLORS.Orange};
      }
    }

    > img {
      width: 3rem;
      margin-left: .3rem;
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
