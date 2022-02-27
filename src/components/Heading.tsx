type HeadingProps =
{
children :string;
}

const Heading = (props:HeadingProps) => {
  return (
    <div>Place Holder {props.children}</div>
  )
}

export default Heading