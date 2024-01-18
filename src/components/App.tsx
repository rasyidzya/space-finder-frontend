import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";

interface AppState {
  user: User | undefined;
}
export class App extends React.Component<{}, {}> {
  private authService: AuthService = new AuthService();
  render() {
    return <div>App from class works</div>;
  }
}

//  comment 1
// function App() {
//   return <div>App works</div>;
// }

export default App;
