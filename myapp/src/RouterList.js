import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Assignment from './educator/page/Assignment';
import TestSeries from './educator/page/TestSeries';
import DoubtBox from './educator/page/DoubtBox';
import LiveClass from './educator/page/LiveClass';
import EducatorProfile from './educator/EducatorProfile';
import Profile1 from './educator/page/profile1';
import Calendar from './educator/page/Calendar';
import EDPlaylist from './educator/page/EDPlaylist';
import EDTeam from './educator/page/EDTeam';
import Feedback from './educator/page/Feedback';
import EDCourses from './educator/page/EDCourses';

const AllComp = [
    {
        path: "/",
        element: <App />,
        children: [{
            path: "assignment",
            element: <Assignment />

        },
        {
            path: "testseries",
            element: <TestSeries />

        },
        {
            path: "doubtbox",
            element: <DoubtBox />


        },
        {
            path: "liveclass",
            element: <LiveClass />

        },
        {
            path: "educatorprofile",
            element: <EducatorProfile />,
        },
        {
            path: "profile1",
            element: <Profile1 />
        },
        {
            path:"calendar",
            element:<Calendar/>


        },
        {
            path:"edplaylist",
            element:<EDPlaylist/>

        },
        {
            path:"edteam",
            element:<EDTeam/>

        },
        {
            path:"feedback",
            element:<Feedback/>
        },
        {
            path:"edcourses",
            element:<EDCourses/>
        }
        ]

    }

]


const routers = createBrowserRouter(
    AllComp

)
export default routers
export { AllComp }