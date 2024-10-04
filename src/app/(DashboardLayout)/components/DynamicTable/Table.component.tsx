import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import { TableContainer } from '@mui/material';
import { CustomPagination, CustomPaginationNumber } from './TablePagination';

type Order = 'asc' | 'desc';

interface HeadCell<T> {
    id: keyof T;
    label: string;
    numeric: boolean;
}

interface ReusableTableProps<T> {
    rows: T[];
    headCells: HeadCell<T>[];
    title?: string;
    enableSelect?: boolean;
    enablePagination?: boolean;
    enableSorting?: boolean;
}

function descendingComparator<T extends { [key: string]: string | number }>(
    a: T,
    b: T,
    orderBy: keyof T
) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (a: { [key in Key]: string | number }, b: { [key in Key]: string | number }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function EnhancedTableHead<T>({
    headCells,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    enableSelect = false,
    enableSorting = false,
}: {
    headCells: HeadCell<T>[];
    onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: keyof T;
    numSelected: number;
    rowCount: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
    enableSelect?: boolean;
    enableSorting?: boolean;
}) {
    const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {enableSelect && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            sx={{ color: "#0003" }}
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                )}
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id as string}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {enableSorting ? (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : (
                            headCell.label
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

function DynamicTableComponent<T extends { [key: string]: string | number }>({
    rows,
    headCells,
    title = 'Table',
    enableSelect = false,
    enablePagination = true,
    enableSorting = true,
}: ReusableTableProps<T>) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof T>(headCells[0].id);
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [dense, setDense] = React.useState(false);


    const startEntry = page * rowsPerPage + 1;
    const endEntry = Math.min(rows.length, (page + 1) * rowsPerPage);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof T) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((_, index) => index);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, index: number) => {
        const selectedIndex = selected.indexOf(index);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, index);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (_event: React.MouseEvent<HTMLElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRowsPerPage(parseInt(event.target.value as string, 10));
        setPage(0);
    };

    const visibleRows = React.useMemo(
        () => [...rows].sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage, rows]
    );

    return (
        <Box sx={{ width: '100%' }}>
            {/* <Toolbar>
                <Typography variant="h6">{title}</Typography>
            </Toolbar> */}

            {/* Custom Pagination at the Top (for Rows Per Page) */}
            {enablePagination && (
                <CustomPagination
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" size={dense ? 'small' : 'medium'}>
                    <EnhancedTableHead
                        headCells={headCells}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        enableSelect={enableSelect}
                        enableSorting={enableSorting}
                    />
                    <TableBody>
                        {visibleRows.map((row, index) => (
                            <TableRow
                                hover
                                key={index}
                                selected={selected.includes(index)}
                                onClick={(event) => handleClick(event, index)}
                            >
                                {enableSelect && (
                                    <TableCell padding="checkbox">
                                        <Checkbox sx={{ color: "#0003" }} checked={selected.includes(index)} />
                                    </TableCell>
                                )}
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={headCell.id as string}
                                        align={headCell.numeric ? 'right' : 'left'}
                                    >
                                        {row[headCell.id as keyof T]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {enableSorting && (
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt:4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 1 }}>
                        <Typography>
                            Showing {startEntry} to {endEntry} of {rows.length} entries
                        </Typography>
                    </Box>
                    <CustomPaginationNumber
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>

            )}

            {/* Dense Padding Control */}
            {/* <FormControlLabel
                control={<Switch checked={dense} onChange={(e) => setDense(e.target.checked)} />}
                label="Dense padding"
            /> */}
        </Box>
    );
}

export default DynamicTableComponent;

