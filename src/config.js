import BackupsPage from "./pages/BackupsPage";
import MainPage from "./pages/MainPage";


export const config = {
    style: {
        font: {
            family: "Arial"
        }
    },
    menu: {
        Main: {
            path: '/', 
            page: <MainPage />,
            index: 1
        },
        Backups: {
            path: '/backups', 
            page: <BackupsPage />,
            index: 2
        },
        Management: {
            path: '/mng', 
            page: '',
            index: 3
        },
        Options: {
            path: '/options', 
            page: '',
            index: 4
        }
    }
}