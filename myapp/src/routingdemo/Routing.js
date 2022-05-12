import Login from './Login'
import Userdetials from "./Userdetails"
import Portfolio from "./Protfolio"
import NotFound from "./404"
import Register from "./Register"
import {BrowserRouter,Route , Switch} from "react-router-dom"
import Header1 from "./Header"
function Route1(){
    return (
        <div>
        {route}
        </div>
    )
}
export default Route1
    const route=(
        <BrowserRouter>
        <Header1/>
        <Switch>
        <Route path='/' component={Login} exact={true}/>
        <Route path='/Register' component={Register}/>
        <Route path='/Userdetails/id' component={Userdetials}/>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route  component={NotFound}/>
        </Switch>
        </BrowserRouter>
    )