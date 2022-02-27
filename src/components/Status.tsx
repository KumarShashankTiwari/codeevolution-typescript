type StatusProps = {
  status: 'loding'| 'success' | 'error';
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loding") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "success";
  }
  else if (props.status === "error") {
    message = "Error in Loading data";
  }
  return <div>

      <h2>Status {message}</h2>
  </div>;
};

export default Status;
