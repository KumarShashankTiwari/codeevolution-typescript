import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
const App = () => {
  const personName = {
    first: "Bruce",
    last: "Wales",
  };
  const personNameList = [
    {
      first: "Bruce",
      last: "Wales",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="shashank" messageCount={10} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList personNameList={personNameList} />
      <Status status='error' />
      <Status status='loding' />
      <Heading>Children</Heading>
      <Oscar><Heading>Children</Heading></Oscar> 
    </div>
  );
};

export default App;
