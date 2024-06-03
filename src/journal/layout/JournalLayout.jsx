import { Box } from '@mui/material'
import { NavBAr } from '../components';



const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Navbar drawerWidth */}
            <NavBAr drawerWidth={drawerWidth} />

            {/* Sidebar drawerWidth */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                {children}


            </Box>

        </Box>
    )
}
