import {
  Admin,
  Resource
} from "react-admin";
import * as React from 'react';
import { dataProvider } from "./dataProvider";
import PostList from "./components/PostList";
import PostEdit from "./components/PostEdit";
import CommentList from "./components/CommentList";
import CommentEdit from "./components/CommentEdit";

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} />
      <Resource name="comments" list={CommentList} edit={CommentEdit} />
  </Admin>
);

export default App;
