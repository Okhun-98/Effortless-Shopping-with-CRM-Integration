import { FC, useEffect, useState } from "react";
import { IUser } from "../../types/user";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

export const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<IUser>>({});
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to add user");
      }
      const newUser = await res.json();
      console.log("New user:", newUser);
      if (!newUser || typeof newUser !== "object") {
        throw new Error("Invalid user data received");
      }
      setUsers([...users, newUser]);
      handleCloseForm();
      console.log("Updated user list:", users);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormData = name.startsWith("address.")
      ? {
          ...formData,
          address: {
            ...formData.address,
            [name.split(".")[1]]: value,
          },
        }
      : { ...formData, [name]: value };
    setFormData(updatedFormData);
  };

  return (
    <div className="pr-[40px] pl-[40px]">
      <Button variant="contained" onClick={handleAddUser}>
        Add User
      </Button>
      <List>
        <ListItem>
          <ListItemText
            primary="Image"
            sx={{ width: "10%" }}
            className="font-bold"
          />
          <ListItemText primary="Id" sx={{ width: "10%" }} />
          <ListItemText primary="Username" sx={{ width: "15%" }} />
          <ListItemText primary="Email" sx={{ width: "25%" }} />
          <ListItemText primary="City" sx={{ width: "25%" }} />
          <ListItemText primary="Phone" sx={{ width: "25%" }} />
        </ListItem>
        {users.map((item) => (
          <ListItem
            key={item.id}
            className="cursor-pointer hover:bg-slate-600"
            onClick={() => navigate(`/profile/${item.id}`)}
          >
            <Box sx={{ width: "10%" }}>
              <PersonOutlineIcon />
            </Box>
            <ListItemText primary={`${item.id}`} sx={{ width: "10%" }} />
            <ListItemText primary={`${item.username}`} sx={{ width: "15%" }} />
            <ListItemText primary={`${item.email}`} sx={{ width: "25%" }} />
            <ListItemText
              primary={`${item.address?.city || "N/A"}`}
              sx={{ width: "25%" }}
            />
            <ListItemText primary={`${item.phone}`} sx={{ width: "25%" }} />
          </ListItem>
        ))}
      </List>
      <Dialog open={showForm} onClose={handleCloseForm}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add User</DialogTitle>
          <DialogContent>
            <TextField
              name="email"
              label="Email"
              value={formData.email || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="username"
              label="Username"
              value={formData.username || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="address.city"
              label="City"
              value={formData.address?.city || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="phone"
              label="Phone"
              value={formData.phone || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
export default Users;
