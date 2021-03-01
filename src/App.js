import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';

import NavBarComponent from './components/nav/NavBarComponent';
import ItemDetailPage from './pages/item-detail/ItemDetailPage';

const App = () => {

  return (

    // Everything inside BrowserRouter will have the ability to Route

    <BrowserRouter> 
      <div className="App">

        {/* NavBar will be in all the pages */}
        <NavBarComponent />

        <Switch>
          
          <Route exact path="/" component={ HomePage } />
        
          <Route path="/about" component={ AboutPage } />

          <Route exact path="/shop" component={ ShopPage } />

          <Route path='/shop/:id' component={ ItemDetailPage } />

        </Switch>

      </div>
    </BrowserRouter>
  )

}

export default App;
