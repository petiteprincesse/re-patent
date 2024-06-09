import { useState } from "react";

export default function useInput(defaultVal = '') {
  const [value, setValue] = useState(defaultVal);

  return {
    value,
    onChange: (e) => setValue(e.target.value)
  }
}