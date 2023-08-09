import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [objects, setObjects] = useState([]);
  const [create, setCreate] = useState(false);
  const [intervalId, setIntervalId] = useState("");
  useEffect(() => {
    if (!create) return clearInterval(intervalId);
    if (create) {
      setIntervalId(
        setInterval(() => {
          const id = uuidv4();
          setObjects((prevObjects) => [
            ...prevObjects,
            { id, title: `This is a ${id}` },
            { id: id + 1, title: `This is a ${id + 1}` },
            { id: id + 2, title: `This is a ${id + 2}` },
            { id: id + 3, title: `This is a ${id + 3}` },
            { id: id + 4, title: `This is a ${id + 4}` },
          ]);
        }, 1000)
      );
    }
    return () => {
      console.log(create);
    };
  }, [create]);

  const toggleCreate = () => {
    setCreate((prevState) => !prevState);
  };

  const deleteObject = (id) => {
    const filteredObjects = objects.filter((object) => object.id !== id);
    setObjects(filteredObjects);
  };

  return (
    <div className="App">
      <Button onClick={toggleCreate}>Start</Button>
      <Button onClick={toggleCreate}>Stop</Button>
      <ol>
        {objects.map((object) => (
          <li key={object.id}>
            <p>{object.title}</p>
            <Button onClick={() => deleteObject(object.id)}>Delete</Button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
