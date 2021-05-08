import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Routes = () => {
    return (
        <>
            <NavBar />
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>

                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </>
    );
}

export default Routes;