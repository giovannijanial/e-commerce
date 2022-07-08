
import { DataGrid, GridColDef, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid';
import { useEffect, useState, useCallback } from 'react';
import { useProduct } from '../../../hooks/useProduct';
import { ICategory, IProduct } from '../../../interfaces/Product';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, CircularProgress } from '@mui/material';
import { theme } from '../../../app.styled';

export default function TableProducts() {


  const { getAll, products, loading, error, remove } = useProduct();



  const [rows, setRows] = useState<IProduct[]>(products);

  useEffect(() => {
    getAll()
  }, [getAll])

  const deleteProduct = useCallback(
    (id: GridRowId) => () => {
      remove(+id);
    },
    [],
  );

  const editProduct = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );



  const columns: GridColumns<IProduct> = [
    { field: 'id', headerName: 'ID', width: 70, headerClassName: 'header' },
    { field: 'name', headerName: 'Product Name', width: 550, headerClassName: 'header' },
    {
      field: 'categories',
      headerName: 'Categories',
      sortable: false,
      headerClassName: 'header',
      renderCell: (params) => (
        <>
          {params.value.map((cat: ICategory, index: number) => (
            index !== 1 ? (<p key={index}>{cat.name}</p>) : (<p key={index}>, {cat.name}</p>)

          ))}
        </>
      )
      ,
      width: 250
    },
    {
      field: 'price',
      headerName: 'Price',
      headerAlign: "center",
      align: "center",
      width: 130,
      valueFormatter: ({ value }) => `R$${value}0`,
      headerClassName: 'header',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerClassName: 'header',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteProduct(params.id)}
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Toggle Admin"
          onClick={editProduct(params.id)}
        />,
      ],
    },
  ];

  return (
    <Box sx={{
      height: 600,
      width: '100%',
      '& .header div': {
        fontWeight: "600",
      }
    }}>
      <DataGrid
        loading={loading}
        rows={products}
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
    </Box>
  );
}
