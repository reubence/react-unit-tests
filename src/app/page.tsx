import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text:</label>
        <input id="randomText" type="text" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text:</label>
        <input id="specificText" type="text" />
      </div>
      <div>
        <input placeholder="Search..." type="text" />
      </div>
      <div>
        <input value="AUDI Q5..." type="text" />
      </div>
    </main>
  );
}
