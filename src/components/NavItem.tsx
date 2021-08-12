interface NavItemProps {
  label: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      {" ->"} <a href="#">{"~"} {props.label.toUpperCase()}</a>
    </>
  );
}

export default NavItem;
