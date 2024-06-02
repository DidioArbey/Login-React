import { Grid, Typography } from "@mui/material"


export const AuthLayaout = ({children, title=''}) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

            <Grid item
                className='box-shadown'
                xs={3}
                sx={{ backgroundColor: 'white',
                        padding: 3,
                        borderRadius: 2,
                        width: { sm:450}
                }}>
                <Typography variant="h5" xs={{ mb: 1 }} > {title} </Typography>
                {/* children */}
                {children}
            </Grid>
        </Grid>
            )
}
