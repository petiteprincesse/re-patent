import Button from "./Button/Button";
import { useState } from "react";

export default function AuthorsSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    type: "model",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(false);
  // const [type, setType] = useState("model");

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
  }

  return (
    <section>
      <h3>Патентодержатели</h3>
      <form>
        <label htmlFor="name">Наименование организации</label>
        <input
          type="text"
          id="name"
          className="control"
          style={{ border: form.hasError ? "1px solid red" : null }}
          value={form.name}
          onChange={handleNameChange}
        />

        <label htmlFor="type">Тип патента</label>
        <select
          className="control"
          id="type"
          value={form.type}
          onChange={(e) => setForm(prev => ({...prev, type: e.target.value}))}
        >
          <option value="model">Модель</option>
          <option value="invention">Изобретение</option>
          <option value="sample">Образец</option>
        </select>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
