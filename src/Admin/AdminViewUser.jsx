import React from 'react'
import { Button, Card, CardContent, Typography,Box,TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import AdminHeader from '../components/AdminHeader';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function AdminViewUser() {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
         <AdminHeader/>
            <div style={{ backgroundColor: 'rgba(242, 227, 166, 0.8)', minHeight: '100vh', padding: '40px 0' }}>
                <h1 className='font-bold  text-center' >
                                        User Details
                                    </h1>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 mb-4">
                            <Card
                                sx={{
                                    minWidth: 275,
                                    p: 2,
                                    boxShadow: 4,
                                    borderRadius: 3,
                                    bgcolor: '#ffffff',
                                }}
                            >
                                <CardContent>
                                    

                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ fontWeight: 'bold', padding: '6px 8px', paddingLeft: '40px' }}>User ID</td>
                                                <td style={{ padding: '6px 8px' }}>101</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: 'bold', padding: '6px 8px', paddingLeft: '40px' }}>Name</td>
                                                <td style={{ padding: '6px 8px' }}>Anagha KV</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: 'bold', padding: '6px 8px', paddingLeft: '40px' }}>Book Number</td>
                                                <td style={{ padding: '6px 8px' }}>B-203</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: 'bold', padding: '6px 8px', paddingLeft: '40px' }}>Book Name</td>
                                                <td style={{ padding: '6px 8px' }}>React Essentials</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: 'bold', padding: '6px 8px', paddingLeft: '40px' }}>Taken Date</td>
                                                <td style={{ padding: '6px 8px' }}>2025-10-10</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: 'bold', padding: '6px 8px', paddingLeft: '40px' }}>Return Date</td>
                                                <td style={{ padding: '6px 8px' }}>2025-11-01</td>
                                            </tr>
                                            {/* ✅ Put buttons inside a td spanning both columns */}
                                            <tr>
                                                <td colSpan="2" style={{ textAlign: 'center', paddingTop: '10px' }}>
                                                    <div className="d-flex justify-content-center gap-3">
                                                        <Button
                                                            onClick={handleOpen}
                                                            variant="contained"
                                                            sx={{
                                                                backgroundColor: '#983508',
                                                                color: '#fff',
                                                                '&:hover': {
                                                                    backgroundColor: '#7a2a06',
                                                                },
                                                            }}
                                                        >
                                                            Edit
                                                        </Button>

                                                        <Button
                                                            variant="contained"
                                                            sx={{
                                                                backgroundColor: '#f43636',
                                                                color: '#fff',
                                                                '&:hover': {
                                                                    backgroundColor: '#d12f2f',
                                                                },
                                                            }}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </div>

                <div>
                    {/* <Button onClick={handleOpen}>Open modal</Button> */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >


                        <Box
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                padding: 4,
                                borderRadius: 3,
                                width: { xs: '90%', sm: '70%', md: '50%' },
                                boxShadow: 6,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                align="center"
                                fontWeight="bold"
                                sx={{ color: '#4a2f04' }}
                            >
                                Update User Details
                            </Typography>

                            <Box component="form" noValidate autoComplete="off">
                                <TextField
                                    label="User ID"
                                    name="userId"
                                    type="number"
                                    fullWidth
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="User Name"
                                    name="userName"
                                    fullWidth
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Book Name"
                                    name="bookName"
                                    fullWidth
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Book Number"
                                    name="bookNumber"
                                    fullWidth
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Taken Date"
                                    name="takenDate"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    required

                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Return Date"
                                    name="returnDate"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    required

                                    sx={{ mb: 2 }}
                                />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#f43636',
                                            '&:hover': { backgroundColor: '#d12f2f' },
                                        }}
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#983508',
                                            '&:hover': { backgroundColor: '#7a2a06' },
                                        }}
                                    >
                                        Update
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Modal>
                </div>
            </div>

        </>
    )
}

export default AdminViewUser
