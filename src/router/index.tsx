import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { EpisodeView, HomeView } from '../animes';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            { path: '/home', element: <HomeView />},
            { path: 'episodio/:slug', element: <EpisodeView />},
            { path: '/', element: <Navigate to='/home' /> },
        ]
    },
    
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
])