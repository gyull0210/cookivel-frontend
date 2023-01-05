

const Header = (props) => {

  const { tw, } = props;

  return (
    <header
    >
      {children}
    </header>
  )
}

Header.displayName="Header";

export default Header;