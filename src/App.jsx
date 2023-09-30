import { useState, useEffect } from "react";
import Title from "./component/Title";
import Content from "./component/Content";
import data from "./data.js";
//

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // index more than or less than index handling
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // Auto slide handling
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    // Clean up function
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <Title />
      <Content people={people} index={index} setIndex={setIndex} />
    </section>
  );
}

export default App;
