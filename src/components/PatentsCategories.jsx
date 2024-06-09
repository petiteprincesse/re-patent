export default function PatentsCategories({ title, description }) {
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
