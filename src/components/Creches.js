import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(nome, telefone, endereco) {
  id += 1;
  return {id,  nome, telefone, endereco};
}

const rows = [
  createData('Sete Marias', '11 4114-5658', 'Avenida 7 Lagoas - São Paulo - SP'),
  createData('Antônio Carlos', '11 4557-5625', 'Rua Antônio João - São Paulo - SP'),
  createData('Maria Eduarda', '11 4578-5684', 'Rua São Luís - São Paulo - SP'),
  createData('Canto da criança', '11 6225-8545', 'Interlagos - São Paulo - SP'),
  createData('O pequeno príncipe', '11 7845-8541','São Bento - São Paulo - SP'),
];

function CustomizedTable(props) {
  const { classes } = props;
  return (
      <div className="row">
          <h1>Creches</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          Adicionar Creche
          <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <CustomTableCell>Nome</CustomTableCell>
                    <CustomTableCell>Telefone</CustomTableCell>
                    <CustomTableCell>Endereço</CustomTableCell>
                    <CustomTableCell>Opções</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => {
                    return (
                    <TableRow className={classes.row} key={row.id}>
                        <CustomTableCell component="th" scope="row">
                        {row.nome}
                        </CustomTableCell>
                        <CustomTableCell>{row.telefone}</CustomTableCell>
                        <CustomTableCell>{row.endereco}</CustomTableCell>
                        <CustomTableCell>I / O</CustomTableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </Paper>
      </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);