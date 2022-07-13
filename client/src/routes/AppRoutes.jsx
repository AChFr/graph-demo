import { Routes, Route } from 'react-router-dom'

import StartingPage from '../pages/StartingPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<SignUpPage />} />

            <Route path="/user" element={<PrivateRoute />}>
                <Route path="/user" element={<HomePage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}
export default AppRoutes