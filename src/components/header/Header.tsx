import { Button } from "../button/Button"
import { Logo } from "../logo/Logo"
import { ElementHeader, HeaderContainer } from "./Header.style"

export const Header = () => {
  return (
    <ElementHeader>
      <HeaderContainer>
        <Logo />
        <Button>Login</Button>
      </HeaderContainer>
    </ElementHeader>
  )
}
