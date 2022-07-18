import { Routes, Route } from 'react-router-dom'

import StartingPage from '../pages/StartingPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import ErrorPage from '../pages/ErrorPage'
import SelectPage from '../pages/SelectPage'
import RechartPage from '../pages/RechartPage'
import ChartJSPage from '../pages/ChartJSPage'
import PrivateRoute from './PrivateRoutes'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<SignUpPage />} />

            <Route path="/user" element={<PrivateRoute />}>
                <Route path="/user" element={<SelectPage />} />
                <Route path="/user/ugly" element={<RechartPage />} />
                <Route path="/user/nice" element={<ChartJSPage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}
export default AppRoutes