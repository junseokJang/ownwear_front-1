import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav/Nav"
import Login from "./components/Login/Login"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Detail from "./components/Detail/Detail"
import Ranking from "./components/Ranking/Ranking"
import Profile from "./components/Profile/Profile"
import MyPage from "./components/MyPage/MyPage"
import Create from "./components/Create/Create"
import List from "./components/List/List"
import './App.scss';


export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      
      <div className="main-section" style={{
        position:"relative",
        top:"70px"
      }
      }>
        
        <Switch >
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/detail" component={Detail}/>
          <Route exact path="/ranking" component={Ranking}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/mypage" component={MyPage}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/list" component={List}/>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter> 
  );
}


