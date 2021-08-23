import * as React from "react";
import { Admin, Resource, Logout } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostList from "./components/PostList";
import PostEdit from "./components/PostEdit";
import PostCreate from "./components/PostCreate";
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import UserCreate from "./components/UserCreate";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider";
import { Layout } from "react-admin";
import MyAppBar from "./components/MyAppBar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Menu } from "./components/Menu";

const MyLogoutButton = (props) => (
  <Logout {...props} icon={<ExitToAppIcon />} />
);

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} menu={Menu} />;

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    // layout={MyLayout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    logoutButton={MyLogoutButton}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      // create={PostCreate}
      // icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />

    {/* <Resource name="users" list={ListGuesser} edit={EditGuesser} /> */}
    {/*<Resource name="comments" list={ListGuesser} edit={EditGuesser} />
    <Resource name="albums" list={ListGuesser} edit={EditGuesser} />
    <Resource name="todos" list={ListGuesser} edit={EditGuesser} />
    <Resource name="photos" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default App;
