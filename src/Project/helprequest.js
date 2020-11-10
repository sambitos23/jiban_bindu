import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./style/css/registration2.css";
import PrimarySearchAppBar2 from './navbar2';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, blood) {
  return { name, calories, fat, carbs, protein, blood };
}

const rows = [
  createData('M. Mandal', 'Male', '22-03-1990', 7676754391, 'Animiya', 'A+'),
  createData('S. Sukhla', 'Female', '21-01-2000', 9876754391, 'Thalasemia', 'B+'),
  createData('R. Kabir', 'Male', '12-08-1956', 9956754391, 'Accident', 'O-'),
  createData('G. Mohan', 'Male', '30-05-1987', 9566754391, 'Heart attack', 'A+'),
  createData('P. Das', 'Female', '15-11-1995', 8906754391, 'Sikal Cell', 'A-'),
];

export default function Help() {
  const classes = useStyles();
  const [a, seta] = useState('1');
  const [c, setC] = useState('1');
  return (
      <div >
          <PrimarySearchAppBar2
             val={a}
             valc={c}
          />
          <div className="background" style={{paddingLeft:'3%', paddingRight: '3%', paddingBottom:'20%', paddingTop:'15%'}}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Full Name</TableCell>
                    <TableCell align="right">Gender&nbsp;</TableCell>
                    <TableCell align="right">Date of Birth&nbsp;</TableCell>
                    <TableCell align="right">Contact No.&nbsp;</TableCell>
                    <TableCell align="right">Disease&nbsp;</TableCell>
                    <TableCell align="right">Blood Group&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.blood}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}
