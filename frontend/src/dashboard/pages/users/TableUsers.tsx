import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridCellParams, GridColumns, GridRowId } from '@mui/x-data-grid';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../app.styled';
import { useUser } from '../../../hooks/useUser';
import { IUser } from '../../../interfaces/User';
import DialogDelete from '../../components/dialogs/DeleteDialog';
import DialogDetailsUser from './detailsUser/Index';
import DialogUpdateUser from './updateUser/Index';

export default function TableProducts() {
  const { getAll, users, loading, error, remove, setUser } = useUser();
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
  const [currentId, setCurrentId] = useState<GridRowId>(0)
  const [currentUser, setCurrentUser] = useState<IUser>();

  // DELETE
  const handleOpenDialogDelete = (id: GridRowId) => () => {
    setOpenDialogDelete(true);
    setCurrentId(id)
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
  };

  const deleteUser = useCallback((id: GridRowId) => async () => {
    await remove(+id);
    await getAll();
    setOpenDialogDelete(false);
  }, [remove, getAll]);

  //DETAILS
  const handleOpenDialogDetails = (user: IUser) => () => {
    setOpenDialogDetails(true);
    setCurrentUser(user)
  };

  const handleCloseDialogDetails = () => {
    setOpenDialogDetails(false);
  };

  // UPDATE
  const handleOpenDialogUpdate = (user: IUser) => () => {
    setOpenDialogUpdate(true);
    setCurrentUser(user)
  };

  useEffect(() => {
    getAll()
  }, [getAll, openDialogUpdate])

  const columns: GridColumns<IUser> = [
    { field: 'id', headerName: 'ID', width: 70, headerClassName: 'header' },
    { field: 'firstName', headerName: 'First Name', width: 180, headerClassName: 'header' },
    { field: 'lastName', headerName: 'Last Name', width: 230, headerClassName: 'header' },
    { field: 'username', headerName: 'Username', width: 130, headerClassName: 'header' },
    { field: 'email', headerName: 'Email', width: 230, headerClassName: 'header' },
    { field: 'age', headerName: 'Age', width: 70, headerClassName: 'header' },
    {
      field: 'role',
      headerName: 'Role',
      width: 80,
      headerClassName: 'header',
      cellClassName: (params: GridCellParams<string>) => {
        return clsx('super-app', {
          admin: params.value === "admin",
        });
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerClassName: 'header',
      width: 100,
      getActions: (params) => [
        <Box>
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleOpenDialogDelete(params.id)}
          />
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleOpenDialogUpdate(params.row)}
          />
          <GridActionsCellItem
            icon={<ArticleIcon />}
            label="Details"
            onClick={handleOpenDialogDetails(params.row)}
          />
        </Box>
      ],
    },
  ];

  return (
    <Box sx={{
      height: 600,
      width: '100%',
      '& .header div': {
        fontWeight: "600",
      },
      '& .super-app.admin': {
        color: `${theme.palette.primary.main}`
      },
    }}>
      <DataGrid
        loading={loading}
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
      <DialogDelete
        dialog={openDialogDelete}
        onClose={handleCloseDialogDelete}
        onConfirm={deleteUser}
        id={currentId} />
      <DialogUpdateUser
        dialog={openDialogUpdate}
        setOpenDialogUpdate={setOpenDialogUpdate}
        currentUser={currentUser} />
      <DialogDetailsUser
        dialog={openDialogDetails}
        onClose={handleCloseDialogDetails}
        currentUser={currentUser} />
    </Box >
  );
}

