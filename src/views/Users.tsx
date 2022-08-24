import { Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styled from 'styled-components'
import { data } from '../data/data'



const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Nombre', width: 250 },
    { field: 'edad', headerName: 'Edad', width: 300 },
    { field: 'carrera', headerName: 'Carrera', width: 300 },
    { field: 'hobbie', headerName: 'Hobbie', },

];

const Users = () => {

    const rows = data.map(user => ({
        id: user.id,
        nombre: user.nombre,
        edad: user.edad,
        carrera: user.carrera,
        hobbie: user.hobbie,
    }));


    return (
        <Wrapper>
            <Grid container className='fadeIn' sx={{ 
                maxWidth: '1000px',
                margin: '0 2rem',
                height: "calc(100vh - 150px)"
            }}>
                <Typography variant='h4' sx={{
                    margin: '1rem 0',
                    textAlign: 'center'
                }}>
                    Usuarios
                </Typography>
                <Grid item xs={12} sx={{ height: 450, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />

                </Grid>
            </Grid>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Users