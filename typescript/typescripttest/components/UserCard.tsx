export default function UserCard({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{email}</p>
    </article>
  );
}
