import HeaderContainer from "./styled/HeaderContainer.styled";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <h1>Devllary</h1>
      </Link>
    </HeaderContainer>
  );
}
