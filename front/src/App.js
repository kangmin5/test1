import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post">
            <Route index element={<AddPostForm/>}/>
          </Route>
          <Route path="user">
            <Route index element={<UsersList/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
