type PersonProps = {
  personName: {
    first: string;
    last: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <div>
      Person {props.personName.first} {props.personName.last}
    </div>
  );
};
export default Person;
