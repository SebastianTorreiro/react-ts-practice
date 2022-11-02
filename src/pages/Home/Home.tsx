import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {

const columns =  [
	{
		field: 'name',
		headerName: 'Name',
		flex: 1,
		minWidth: 150,
		renderCell:(params: GridRenderCellParams)=> <>{params.value}</>
	},
	{
		field: 'category',
		headerName: 'Category',
		flex: 1,
		renderCell:(params: GridRenderCellParams)=> <>{params.value}</>
	},
	{
		field: 'company',
		headerName: 'Company',
		flex: 1,
		renderCell:(params: GridRenderCellParams)=> <>{params.value}</>
	}
]
const pageSize = 5

return (
	<DataGrid
		rows={People}
		columns={columns}
		disableColumnSelector 
		disableSelectionOnClick  
		autoHeight
		pageSize={pageSize}
		rowsPerPageOptions={[pageSize]}
		getRowId={(row: any) => row.id}

	/>
)
};

export default Home;

