import BackupsPage from "./pages/BackupsPage";
import DashboardPage from "./pages/DashboardPage";
import DevicesPage from "./pages/DevicesPage";
import MainPage from "./pages/MainPage";
import ManagmentPage from "./pages/ManagmentPage"
import OptionsPage from "./pages/OptionsPage";

let index = 0
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
            index: ++index
        },
        Dashboard: {
            path: '/dashboard', 
            page: <DashboardPage />,
            index: ++index
        },
        Backups: {
            path: '/backups', 
            page: <BackupsPage />,
            index: ++index
        },
        Management: {
            path: '/mng', 
            page: <ManagmentPage />,
            index: ++index
        },
        Devices: {
            path: '/devices', 
            page: <DevicesPage />,
            index: ++index
        },
        Options: {
            path: '/options', 
            page: <OptionsPage />,
            index: ++index
        }
    }
}