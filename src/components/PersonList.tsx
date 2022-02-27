type PersonListProps = {
  personNameList: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      PersonList
      {props.personNameList.map((item, index) => {
        return (
          <p key={index}>
            hi {item.first} {item.last}
          </p>
        );
      })}
    </div>
  );
};
export default PersonList;
