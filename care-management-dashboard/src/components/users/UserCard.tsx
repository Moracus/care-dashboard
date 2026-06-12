import type { User } from "../../types/user";

interface Props {
  user: User;
  onClick: () => void;
}

export default function UserCard({
  user,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded shadow cursor-pointer"
    >
      <h2 className="font-bold">
        {user.name}
      </h2>

      <p>{user.email}</p>

      <p>{user.phone}</p>
    </div>
  );
}