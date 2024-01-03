import { useEffect, useState } from "preact/hooks";

export const Home = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("Hello, world!");
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
