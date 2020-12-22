import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Login from "./Login";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
    const [showBackdrop, setShowBackdrop] = useState();

    const onOpen = (data) => {
        setShowBackdrop(true);
    };

    const onClose = (data) => {
        setShowBackdrop(false);
    };

    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Router>
                        <Modal showModal={showBackdrop} closeModal={onClose} />
                        <Sidebar showModal={onOpen} />
                        <Switch>
                            <Route path="/rooms/:roomId">
                                <Chat />
                            </Route>

                            <Route path="/">
                                <Chat />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
