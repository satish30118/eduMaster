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
import StudentProf from './student/StudentProf';
import StTest from './student/StTest';
import StAssignment from './student/StAssignment';
import Stliveclass from './student/Stliveclass';
import Chatbox from './student/Chatbox';
import StCourses from './student/StCourses';
import StFeedback from './student/StFeedback';
import StPlayList from './student/StPlayList';
import StCalendar from './student/StCalendar';

const educatorComp = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Profile1 />
            },
            {
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
                path: "calendar",
                element: <Calendar />


            },
            {
                path: "edplaylist",
                element: <EDPlaylist />

            },
            {
                path: "edteam",
                element: <EDTeam />

            },
            {
                path: "feedback",
                element: <Feedback />
            },
            {
                path: "edcourses",
                element: <EDCourses />
            },

        ]

    }

]
const StudentComp = [
    {
        path: "studentprofile",
        element: <StudentProf />

    },
    {
        path: "studenttests",
        element: <StTest />

    },
    {
        path: "stassignment",
        element: <StAssignment />
    },
    {
        path: "stliveclass",
        element: <Stliveclass />
    },
    {
        path: "doubtbox",
        element: <Chatbox />
    },
    {
        path: "stcourses",
        element: <StCourses />
    },
    {
        path: "stfeedback",
        element: <StFeedback />
    },
    {
        path: "stplaylist",
        element: <StPlayList />
    },
    {
        path: "stcalendar",
        element: <StCalendar />
    }
]
const routers = createBrowserRouter(
    [
        ...educatorComp,
    ]


)
export default routers
