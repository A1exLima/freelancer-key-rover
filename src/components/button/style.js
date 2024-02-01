import { styled } from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  background: transparent;
  border-radius: 1rem;
  border: 1.5px solid ${({ theme }) => theme.COLORS.Orange};
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.33);

  a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.COLORS.Orange};
    font-family: var(--roboto-font-family);
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  > svg {
    padding-bottom: 0.1rem;
  }

  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.COLORS.Orange};
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.COLORS.Orange};
  }
`
