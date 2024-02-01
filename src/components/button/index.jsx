import { Container } from "./style"

export default function Button({ link, icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      <a href={link}>
        {Icon}
        {title}
      </a>
    </Container>
  )
}
