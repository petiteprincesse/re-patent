import PatentsCategories from "./PatentsCategories";
import { categories, } from "../data";

export default function PatentsSection() {
  return (
    <section>
      <h3>Категории патентов</h3>
      <ul>
        {categories.map((category, i) => (
          <PatentsCategories {...category} key={i} />
        ))}
      </ul>
    </section>
  );
}
