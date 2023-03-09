import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from '../Components/Header'
import QuotesGenerator from '../Components/QuotesGenerator'
import ActivitiesGenerator from '../Components/ActivitiesGenerator'
import RobotsGenerator from '../Components/RobotsGenerator'
import JokesGenerator from '../Components/JokesGenerator'


function Layout(){
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route path='QuotesGenerator' element={<QuotesGenerator />}/>
                    <Route path='ActivitiesGenerator' element={<ActivitiesGenerator />}/>
                    <Route path='RobotsGenerator' element={<RobotsGenerator />}/>
                    <Route path='JokesGenerator' element={<JokesGenerator />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;