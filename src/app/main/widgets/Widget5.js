import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const rows = [
  { fullname: 'Johnny Drake', ref: '13451232232323', status: 'Pending', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'Kehinde Omotoso', ref: '13451232232323', status: 'Suspended', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'Elvis Duru', ref: '13451232232323', status: 'Completed', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'Danny Cray', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'Mike Luis', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'John Reece', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'Ryan Knowles', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'Jack Bridges', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
  { fullname: 'Jack Bridges', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'adName', numeric: false, disablePadding: false, label: 'Ad Name' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'budget', numeric: true, disablePadding: false, label: 'Budget' },
  { id: 'spent', numeric: true, disablePadding: false, label: 'Amount Spent' },
  { id: 'clicks', numeric: true, disablePadding: false, label: 'Clicks' },
  { id: 'impressions', numeric: true, disablePadding: false, label: 'Impressions' },
  { id: 'reach', numeric: true, disablePadding: false, label: 'Reach' },
  { id: 'cpc', numeric: true, disablePadding: false, label: 'CPC' },
  { id: 'linkClicks', numeric: true, disablePadding: false, label: 'Link Clicks' },
];

function Widget5Head(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

Widget5Head.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

function Widget5() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('fullname');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
  }


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <Widget5Head
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.fullname}
                    >
                      <TableCell component="th" scope="row">
                        <div className="flex flex-col">
                          <Typography variant="subtitle2" className="font-600">{row.fullname}</Typography>
                          <Typography variant="caption">{row.ref}</Typography>
                        </div>
                      </TableCell>
                      <TableCell align="right" className={row.status === "Pending" ? 'text-orange' : row.status === "Running" ? 'text-green' : row.status === "Completed" ? 'text-blue' : row.status === 'Suspended' ? 'text-red' : null}>{row.status}</TableCell>
                      <TableCell align="right">${row.budget}</TableCell>
                      <TableCell align="right">${row.spent}</TableCell>
                      <TableCell align="right">{row.clicks}</TableCell>
                      <TableCell align="right">{row.impressions}</TableCell>
                      <TableCell align="right">{row.reach}</TableCell>
                      <TableCell align="right">{row.CPC}</TableCell>
                      <TableCell align="right">{row.clicks}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Widget5;