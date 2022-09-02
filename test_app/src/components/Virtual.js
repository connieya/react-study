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
      [...Array(30000).keys()].map((key) => {
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

      <List
        width={600}
        height={600}
        rowHeight={50}
        rowCount={people.length}
        rowRenderer={({ key, index, style, parent }) => {
          const person = people[index];

          return (
            <div key={key}>
              <h2>{person.name}</h2>
            </div>
          );
        }}
      />

      {/* <ul>
        {people.map((person) => (
          <li key={person.id}>
            <h2>{person.name}</h2>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Virtual;
