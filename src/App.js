import { useEffect, useState } from "react";
import Button from "./components/UI/Button";
import { v4 as uuidv4 } from "uuid";
import ObjectItem from "./components/UI/ObjectItem";
import ObjectsList from "./components/ObjectsList";
import { styled } from "styled-components";

function App() {
  const [objects, setObjects] = useState([]);
  const [create, setCreate] = useState(false);
  const [intervalId, setIntervalId] = useState("");
  useEffect(() => {
    if (!create) return clearInterval(intervalId);
    if (create) {
      const getBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        return "#" + randomColor;
      };
      setIntervalId(
        setInterval(() => {
          const id = uuidv4();
          setObjects((prevObjects) => [
            ...prevObjects,
            { id, bgColor: getBg() },
            { id: id + 1, bgColor: getBg() },
            { id: id + 2, bgColor: getBg() },
            { id: id + 3, bgColor: getBg() },
            { id: id + 4, bgColor: getBg() },
          ]);
        }, 1000)
      );
    }
  }, [create]);

  const deleteObject = (id) => {
    const filteredObjects = objects.filter((object) => object.id !== id);
    setObjects(filteredObjects);
  };

  return (
    <StyledApp>
      <Actions>
        <Button onClick={() => setCreate(true)}>Start</Button>
        <Button onClick={() => setCreate(false)}>Stop</Button>
      </Actions>
      <ObjectsList>
        {objects.map((object) => (
          <ObjectItem bgColor={object.bgColor} key={object.id}>
            <Button onClick={() => deleteObject(object.id)}>Delete</Button>
          </ObjectItem>
        ))}
      </ObjectsList>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 20px;
`;

const Actions = styled.div`
  display: flex;
  gap: 20px;
`;
