import { useState } from "react";

const Folder = ({ data }) => {
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");
  const [folderData, setFolderData] = useState(data); // Store data in state

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && input.trim() !== "") {
      const newFile = {
        type: "file",
        name: input,
        content: [],
      };

      setFolderData((prevData) => ({
        ...prevData,
        content: [...prevData.content, newFile],
      }));

      setInput("");
      setShowInput(false);
    }
  };

  return (
    <div>
      <span onClick={() => setShow(!show)}>{folderData.name}</span>
      <span>
        {folderData.type === "folder" && (
          <button
            style={{ marginLeft: "5px" }}
            onClick={() => setShowInput(!showInput)}
          >
            +
          </button>
        )}
        <br />
        {showInput && (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress} // Attach directly to input to avoid duplicate listeners
          />
        )}
      </span>
      {show &&
        folderData.type === "folder" &&
        folderData.content?.map((item, index) => (
          <div key={index} style={{ paddingLeft: "10px" }}>
            <Folder data={item} />
          </div>
        ))}
    </div>
  );
};

export default Folder;
