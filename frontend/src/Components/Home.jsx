import { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Home = ({ socket }) => {
  const handleNewUserMessage = (newMessage) => {
    socket.emit("send-message", newMessage);
  };
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
    socket.on("receive-message", (message) => {
      addResponseMessage(message);
    });
  }, [socket]);
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
        title="Chat With Customer Service"
        subtitle=""
        emojis="true"
      />
      Home
    </div>
  );
};
export default Home;
