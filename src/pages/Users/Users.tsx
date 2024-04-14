import { FC, useEffect, useState } from "react";
import { IUser } from "../../types/user";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

export const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
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

  return (
    <div className="pr-[40px] pl-[40px]">
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
              primary={`${item.address.city}`}
              sx={{ width: "25%" }}
            />
            <ListItemText primary={`${item.phone}`} sx={{ width: "25%" }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Users;
