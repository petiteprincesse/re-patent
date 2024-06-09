import { useState } from "react";
import Button from "./Button/Button";
import { criteria } from "../data";

export default function CriteriaSection() {
  const [contentType, setContentType] = useState(null);
  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <h3>Критерии патентоспособности</h3>
      <Button
        isActive={contentType === "one"}
        onClick={() => handleClick("one")}
      >
        Новизна
      </Button>
      <Button
        isActive={contentType === "two"}
        onClick={() => handleClick("two")}
      >
        Оригинальность
      </Button>
      <Button
        isActive={contentType === "three"}
        onClick={() => handleClick("three")}
      >
        Промышленная применимость
      </Button>
      {contentType && <p>{criteria[contentType]}</p>}
    </section>
  );
}
