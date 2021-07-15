import * as React from "react";
import { MenuItemLink } from "react-admin";
import logo from "../Logo.jpg"
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  Typography,
} from "@material-ui/core";
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
};

const items = [
  {
    to: "/posts",
    leftIcon: <BarChartIcon />,
    primaryText: "Dashboard",
  },
  {
    to: "/users",
    leftIcon: <UsersIcon />,
    primaryText: "Customers",
  },
  {
    to: "/users",
    leftIcon: <ShoppingBagIcon />,
    primaryText: "Products",
  },
  {
    to: "/users",
    leftIcon: <UserIcon />,
    primaryText: "Account",
  },
  {
    to: "/users",
    leftIcon: <SettingsIcon />,
    primaryText: "Settings",
  },
  {
    to: "/users",
    leftIcon: <LockIcon />,
    primaryText: "Login",
  },
  {
    to: "/users",
    leftIcon: <UserPlusIcon />,
    primaryText: "Register",
  },
  {
    to: "/users",
    leftIcon: <AlertCircleIcon />,
    primaryText: "Error",
  },
];


export const Menu = () => {

   return (
     <div style={{ marginTop: "20px" }}>
       <Box
         sx={{
           display: "flex",
           flexDirection: "column",
           height: "100%",
         }}
       >
         <Box
           sx={{
             alignItems: "center",
             display: "flex",
             flexDirection: "column",
             p: 2,
           }}
         >
           <Avatar
             src={logo}
             style={{
               cursor: "pointer",
               width: 80,
               height: 80,
             }}
             to="/app/account"
           />
           <Typography color="textPrimary" variant="h6">
             {user.name}
           </Typography>
           <Typography color="textSecondary" variant="body2">
             {user.jobTitle}
           </Typography>
         </Box>
         <Divider />

         <Box sx={{ p: 2 }}>
           <List>
             {items.map((item) => (
               <MenuItemLink
                 to={item.to}
                 primaryText={item.primaryText}
                 leftIcon={item.leftIcon}
                 style={{
                   fontFamily: "Roboto",
                   fontSize: "14px",
                   fontWeight: "bold",
                   marginBottom: "10px",
                   color: "gray",
                 }}
               />
             ))}
           </List>
         </Box>

         <Box sx={{ flexGrow: 1 }} />
         <Box
           sx={{
             backgroundColor: "background.default",
             m: 2,
             p: 2,
           }}
         >
           <Typography align="center" gutterBottom variant="h5">
             Need more?
           </Typography>
           <Typography align="center" variant="body2">
             Upgrade to PRO version and access 20 more screens
           </Typography>
           <Box
             sx={{
               display: "flex",
               justifyContent: "center",
               pt: 2,
             }}
           >
             <Button
               color="primary"
               component="a"
               href="https://react-material-kit.devias.io"
               variant="contained"
             >
               See PRO version
             </Button>
           </Box>
         </Box>
       </Box>
     </div>
   );

        }