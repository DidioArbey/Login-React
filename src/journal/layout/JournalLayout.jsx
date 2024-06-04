import { Box, Toolbar } from '@mui/material'
import { NavBAr, SideBar } from '../components';



const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Navbar drawerWidth */}
            <NavBAr drawerWidth={drawerWidth} />

            {/* Sidebar drawerWidth */}
            <SideBar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                <Toolbar />
                {children}


            </Box>

        </Box>
    )
}
