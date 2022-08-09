import React, { useEffect, useRef, useState } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

const Virtual = () => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setPeople(
      [...Array(3000).keys()].map((key) => {
        return {
          id: key,
          name: `Person : ${Math.random() * 100}`,
          bio: Math.random() * 100,
        };
      })
    );
  }, []);

  useEffect(() => {
    console.log("타임 설정");
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{time.toISOString()}</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <h2>{person.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Virtual;
