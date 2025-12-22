import UserCard from "@/components/UserCard";

interface UserResponse {
  results: User[];
}

interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  gender: string;
  phone: string;
  cell: string;
  dob: {
    date: string;
    age: number;
  };
}

export default async function Home() {
  const userResponse = await fetch("https://randomuser.me//api");
  const users: UserResponse = await userResponse.json();
  console.log(users.results);

  return (
    <main>
      {users.results.map((user) => (
        <UserCard
          key={user.email}
          name={`${user.name.title} ${user.name.first} ${user.name.last}`}
          email={user.email}
        />
      ))}
    </main>
  );
}
