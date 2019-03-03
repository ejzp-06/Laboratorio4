import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class IngresoClase extends Component{

    
    constructor(props){
        super(props);
    }

    Table= ()=> {

        const styles = theme => ({
            root: {
              width: '100%',
              marginTop: theme.spacing.unit * 3,
              overflowX: 'auto',
            },
            table: {
              minWidth: 700,
            },
          });
          
          let id = 0;
          function createData(nombreClase, parcial1, parcial2) {
            id += 1;
            return { nombreClase, parcial1, parcial2 };
          }

         const rows = [
            //aqui deberian ir los campos
          ];
          
        return (
            <div>
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Nombre de Clase</TableCell>
                  <TableCell align="right">Parcial 1</TableCell>
                  <TableCell align="right">Parcial 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  
                }
              </TableBody>
            </Table>
          </Paper>
          </div>
        );
      }

    handleClick = ()=> {
        this.Table();
    }

    render(){

        return(
            <div>
                <div>Clase 1: <TextField id="Clase1" marginRight="110px"></TextField>      Nota: <TextField id="nota1"marginLeft="30px"></TextField></div>
                <div>Clase 2: <TextField id="Clase2" marginRight="30px"> </TextField>      Nota: <TextField id="nota2" marginLeft="30px"></TextField></div>
                <div>Clase 3: <TextField id="Clase3" marginRight="30px"></TextField>      Nota: <TextField id="nota3" marginLeft="30px"></TextField></div>
                <Button variant="contained" color="primary" onClick={ this.handleClick}>Guardar</Button>
            </div>    
        );
    }

}

export default IngresoClase;