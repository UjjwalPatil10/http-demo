import React, { Component } from "react";

import PostTodos from "./Components/Post and todos task/PostTodos";
import Parent from "./Components/Child to parent data pass/Parent";
import SearchParameterses from "./Components/search-Parameters/SearchParameterses";
import AxiosDemo from "./Components/Simple-requests/AxiosDemo";
import SimpleRequests from "./Components/Simple-requests/SimpleRequests";
import UserListing from "./Components/Simple-requests/UserListing";
import UserForm from "./Components/users-app/UserForm";
import UserApp from "./Components/user-apps/UserApp";
// import UserApp from "./Components/user-apps/UserApp";
// import UserApp from "./Components/user-app/UserApp";
class App extends Component {
  //here we direct use component not React.Component so in named import write { Component } like this
  render() {
    //JSX
    return (
      <div className="app">
        {/* <List /> */}
        <UserApp />
        {/* <PostTodos /> */}
        {/* <UserApp /> */}
        {/* <SearchParameterses /> */}
        {/* <Parent /> */}
        {/* <SimpleRequests /> */}
        {/* <AxiosDemo /> */}
        {/* <UserListing /> */}
      </div>
    );
  }
}
export default App;
