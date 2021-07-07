import React from 'react';
import { makeStyles } from '@material-ui/core';
import Modal from './components/modal';




function App () {

    return (
        <div>
            <main>
                <Modal open={true}>Hello</Modal>
            </main>
        </div>
    )
}

export default App;