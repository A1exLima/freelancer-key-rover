import { styled } from "styled-components"

export const Container = styled.div`
  > button {
    width: 25rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background: ${({ theme }) => theme.COLORS.Black};
    border: 1.5px solid ${({ theme }) => theme.COLORS.Black};
    border-radius: 1rem;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.33);

    color: ${({ theme }) => theme.COLORS.Orange};
    font-family: var(--roboto-font-family);
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;

    > svg {
      padding-bottom: 0.1rem;
    }

    transition: all 0.4s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 10px ${({ theme }) => theme.COLORS.Black};
      transform: translateY(-2px);
    }
  }
`