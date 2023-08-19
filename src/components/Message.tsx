let count = 0;

const Message = () => {
  console.log("messageCalled" + count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
