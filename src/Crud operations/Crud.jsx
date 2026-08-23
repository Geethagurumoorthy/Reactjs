import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const API = "https://jsonplaceholder.typicode.com/users";
const EMPTY = { name: "", email: "", phone: "" };

export default function CRUD() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(API);
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const change = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const addUser = () => {
    setEditId(null);
    setForm(EMPTY);
    setOpen(true);
  };

  const editUser = (user) => {
    setEditId(user.id);
    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone
    });
    setOpen(true);
  };

  const save = async () => {
    if (!Object.values(form).every(v => v.trim())) return;

    try {
      if (editId) {
        const { data } = await axios.put(`${API}/${editId}`, form);
        setUsers(users.map(u => u.id === editId ? { ...u, ...data } : u));
      } else {
        const { data } = await axios.post(API, form);
        setUsers([...users, { ...data, id: users.length + 1 }]);
      }
      close();
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      setUsers(users.filter(u => u.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const close = () => {
    setOpen(false);
    setEditId(null);
    setForm(EMPTY);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-5">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              API Integration
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
               User Management
            </h1>
          </div>
          <Button variant="contained" onClick={addUser}>+ Add User</Button>
        </header>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Total Users", users.length],
            ["API Method", "REST API"],
            ["Operations", "CRUD"]
          ].map(([title, value]) => (
            <div className="rounded-xl bg-white p-5 shadow ring-1 ring-slate-200" key={title}>
              <p className="text-sm text-slate-500">{title}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">{value}</h2>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-xl">
          <div className="flex justify-between border-b p-5">
            <h2 className="text-xl font-bold text-slate-800">User List</h2>
            <button onClick={fetchUsers} className="rounded-lg border px-4 py-2">
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="p-10 text-center text-slate-500">Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    {["ID", "Name", "Email", "Phone", "Actions"].map(h =>
                      <th className="p-4 text-left" key={h}>{h}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr className="border-b hover:bg-blue-50" key={u.id}>
                      <td className="p-4">#{u.id}</td>
                      <td className="p-4 font-semibold">{u.name}</td>
                      <td className="p-4">{u.email}</td>
                      <td className="p-4">{u.phone}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="small" variant="outlined" onClick={() => editUser(u)}>
                            Edit
                          </Button>
                          <Button size="small" color="error" variant="outlined" onClick={() => remove(u.id)}>
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Dialog open={open} onClose={close} fullWidth maxWidth="sm">
        <DialogTitle>{editId ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <div className="mt-3 flex flex-col gap-4">
            {["name", "email", "phone"].map(field => (
              <TextField
                key={field}
                label={field[0].toUpperCase() + field.slice(1)}
                name={field}
                value={form[field]}
                onChange={change}
                type={field === "email" ? "email" : "text"}
                fullWidth
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="inherit">Cancel</Button>
          <Button onClick={save} variant="contained">
            {editId ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}