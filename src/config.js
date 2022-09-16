import BackupsPage from "./pages/BackupsPage";
import DevicesPage from "./pages/DevicesPage";
import MainPage from "./pages/MainPage";
import ManagmentPage from "./pages/ManagmentPage"
import OptionsPage from "./pages/OptionsPage";

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
            page: <ManagmentPage />,
            index: 3
        },
        Devices: {
            path: '/devices', 
            page: <DevicesPage />,
            index: 4
        },
        Options: {
            path: '/options', 
            page: <OptionsPage />,
            index: 5
        }
    }
}