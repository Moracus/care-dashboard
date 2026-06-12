import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers } from "../services/api";

import UserCard from "../components/users/UserCard";
import UserModal from "../components/users/UserModal";
import UserForm from "../components/users/UserForm";

import { useApp } from "../context/AppContext";
import Modal from "../components/common/Modal";

export default function UsersPage() {
  const { users, setUsers } = useApp();

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (users.length > 0) {
      setLoading(false);
      return;
    }

    const loadUsers = async () => {
      try {
        const data = await fetchUsers();

        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleAddUser = (userData: Partial<User>) => {
    const newUser: User = {
      id: Date.now(),

      name: userData.name || "",

      email: userData.email || "",

      phone: userData.phone || "",

      address: {
        street: "",
        city: "",
        zipcode: "",
      },

      company: {
        name: "",
      },
    };

    setUsers((prev: User[]) => [newUser, ...prev]);

    setShowForm(false);
  };

  const handleEditUser = (updatedUser: User) => {
    setUsers((prev: User[]) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );

    setEditingUser(null);
    setShowForm(false);
  };
  const handleSubmitUser = (data: Partial<User>) => {
    if (editingUser) {
      handleEditUser(data as User);
    } else {
      handleAddUser(data);
    }
  };

  const handleDeleteUser = (userId: number) => {
    const confirmDelete = window.confirm("Delete this user?");

    if (!confirmDelete) return;

    setUsers((prev: User[]) => prev.filter((user) => user.id !== userId));

    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null);
    }
  };

  const filteredUsers = users.filter((user: User) => {
    const query = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return <div className="flex justify-center py-10">Loading users...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            border
            rounded-lg
            px-4
            py-2
            w-full
            md:max-w-md
          "
        />

        <button
          onClick={() => {
            setEditingUser(null);
            setShowForm(true);
          }}
          className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded-lg
            hover:bg-blue-700
          "
        >
          Add User
        </button>
      </div>

      {/* ADD / EDIT FORM */}

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <UserForm
            initialData={editingUser}
            onSubmit={handleSubmitUser}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      )}

      {/* USERS GRID */}

      {filteredUsers.length === 0 ? (
        <div className="text-gray-500">No users found.</div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
          "
        >
          {filteredUsers.map((user: User) => (
            <UserCard
              key={user.id}
              user={user}
              onClick={() => setSelectedUser(user)}
            />
          ))}
        </div>
      )}

      {/* USER DETAILS MODAL */}

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onEdit={() => {
            setEditingUser(selectedUser);

            setShowForm(true);

            setSelectedUser(null);
          }}
          onDelete={() => handleDeleteUser(selectedUser.id)}
        />
      )}
    </div>
  );
}
