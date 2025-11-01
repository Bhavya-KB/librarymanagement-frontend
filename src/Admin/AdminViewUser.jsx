import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, Typography, Box, TextField, Modal } from '@mui/material';
import Swal from 'sweetalert2';
import AdminHeader from '../components/AdminHeader';
import { getAllUsersAPI, updateUserAPI, deleteUserAPI } from '../service/allAPI';

const AdminViewUser = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const result = await getAllUsersAPI();
      if (result.data) {
        setUsers(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //  Open modal 
  const handleEdit = (user) => {
    setEditUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditUser(null);
  };

  //   update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const result = await updateUserAPI(editUser.id, editUser);
      if (result.status >= 200 && result.status < 300) {
        Swal.fire("Updated!", "User details updated successfully!", "success");
        handleClose();
        fetchUsers(); 
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to update user details!", "error");
    }
  };

  //  Delete user
  const handleDelete = async (id) => {
    try {
      await deleteUserAPI(id);
      Swal.fire("Deleted!", "User removed successfully!", "success");
      fetchUsers();
    } catch (error) {
      Swal.fire("Error!", "Failed to delete user!", "error");
    }
  };

  return (
    <>
      <AdminHeader />
      <div style={{ backgroundColor: 'rgba(242, 227, 166, 0.8)', minHeight: '100vh', padding: '40px 0' }}>
        <h1 className='font-bold text-center'>User Details</h1>

        <div className="container">
          <div className="row">
            {users.length > 0 ? (
              users.map((user) => (
                <div className="col-md-4 mb-4" key={user.id}>
                  <Card sx={{ minWidth: 275, p: 2, boxShadow: 4, borderRadius: 3, bgcolor: '#ffffff' }}>
                    <CardContent>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr><td style={{ fontWeight: 'bold', paddingLeft: '40px' }}>User ID</td><td>{user.userId}</td></tr>
                          <tr><td style={{ fontWeight: 'bold', paddingLeft: '40px' }}>Name</td><td>{user.userName}</td></tr>
                          <tr><td style={{ fontWeight: 'bold', paddingLeft: '40px' }}>Book Number</td><td>{user.bookNumber}</td></tr>
                          <tr><td style={{ fontWeight: 'bold', paddingLeft: '40px' }}>Book Name</td><td>{user.bookName}</td></tr>
                          <tr><td style={{ fontWeight: 'bold', paddingLeft: '40px' }}>Taken Date</td><td>{user.takenDate}</td></tr>
                          <tr><td style={{ fontWeight: 'bold', paddingLeft: '40px' }}>Return Date</td><td>{user.returnDate}</td></tr>
                          <tr>
                            <td colSpan="2" style={{ textAlign: 'center', paddingTop: '10px' }}>
                              <div className="d-flex justify-content-center gap-3">
                                <Button
                                  onClick={() => handleEdit(user)}
                                  variant="contained"
                                  sx={{ backgroundColor: '#983508', '&:hover': { backgroundColor: '#7a2a06' } }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() => handleDelete(user.id)}
                                  variant="contained"
                                  sx={{ backgroundColor: '#f43636', '&:hover': { backgroundColor: '#d12f2f' } }}
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
              ))
            ) : (
              <Typography align="center" sx={{ mt: 4 }}>No users found!</Typography>
            )}
          </div>
        </div>

        {/* ✏ Edit Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: 4,
            borderRadius: 3,
            width: { xs: '90%', sm: '70%', md: '50%' },
            boxShadow: 6,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <Typography variant="h5" gutterBottom align="center" fontWeight="bold" sx={{ color: '#4a2f04' }}>
              Update User Details
            </Typography>

            {editUser && (
              <Box component="form" onSubmit={handleUpdate} noValidate autoComplete="off">
                <TextField label="User ID" fullWidth sx={{ mb: 2 }}
                  value={editUser.userId}
                  onChange={(e) => setEditUser({ ...editUser, userId: e.target.value })} />
                <TextField label="User Name" fullWidth sx={{ mb: 2 }}
                  value={editUser.userName}
                  onChange={(e) => setEditUser({ ...editUser, userName: e.target.value })} />
                <TextField label="Book Name" fullWidth sx={{ mb: 2 }}
                  value={editUser.bookName}
                  onChange={(e) => setEditUser({ ...editUser, bookName: e.target.value })} />
                <TextField label="Book Number" fullWidth sx={{ mb: 2 }}
                  value={editUser.bookNumber}
                  onChange={(e) => setEditUser({ ...editUser, bookNumber: e.target.value })} />
                <TextField label="Taken Date" type="date" InputLabelProps={{ shrink: true }} fullWidth sx={{ mb: 2 }}
                  value={editUser.takenDate}
                  onChange={(e) => setEditUser({ ...editUser, takenDate: e.target.value })} />
                <TextField label="Return Date" type="date" InputLabelProps={{ shrink: true }} fullWidth sx={{ mb: 2 }}
                  value={editUser.returnDate}
                  onChange={(e) => setEditUser({ ...editUser, returnDate: e.target.value })} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#f43636', '&:hover': { backgroundColor: '#d12f2f' } }}>Cancel</Button>
                  <Button type="submit" variant="contained" sx={{ backgroundColor: '#983508', '&:hover': { backgroundColor: '#7a2a06' } }}>Update</Button>
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AdminViewUser;
