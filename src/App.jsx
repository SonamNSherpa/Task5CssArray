import { useState } from "react";
import styles from "./App.module.css";

const names = ["Alice", "Bob", "Mike", "John", "David"];
const address = ["NY", "Sydney", "Ktm", "Florida", "Texas"];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.container2}>
          {names.map((name, index) => (
            <li key={index} className={styles.nameList}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.container3}>
        <ul className={styles.container2}>
          {address.map((address, index) => (
            <li key={index} className={styles.nameList}>
              {address}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
