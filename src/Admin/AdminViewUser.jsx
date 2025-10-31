import React from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material';
import AdminHeader from '../components/AdminHeader';


function AdminViewUser() {
    return (
        <>
         <AdminHeader/>
            <div style={{ backgroundColor: 'rgba(242, 227, 166, 0.8)', minHeight: '100vh', padding: '40px 0' }}>
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
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        align="center"
                                        fontWeight="bold"
                                    >
                                        User Details
                                    </Typography>

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
            </div>

        </>
    )
}

export default AdminViewUser
