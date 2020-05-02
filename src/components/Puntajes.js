import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Api from '../controller/Api';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = {
  root: {
    flexGrow: 1,
  },
  table: {
    height: '400px',
    width: '300px',
  },
  botonError: {
    marginRight: 16,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: '200px',
    display: 'inline-block',
    fontSize: '15px',
    height: '40px',
    width: '200px',
    border: '0',
    textAlign: 'center',
    transition: 'all 290ms cubic-bezier(0.79, 0.01, 0.38, 0.99)',
  },
  panel: {
    backgroundColor: "#FFC226",
    width: '350px',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.4)',
      outline: '1px solid slategrey'
    }
  }
};


class Puntajes extends React.Component {
  constructor() {
    super();
    this.state = {
      puntajes: []
    }
  }

  componentDidMount() {
    Api.getPuntajes(this.resultPuntajes.bind(this));
  }
  resultPuntajes(puntajes, error) {
    if (error != null) {
      this.props.history.push('/Error')
      return;
    }
    this.setState({ puntajes: puntajes })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className='titleCenter'>Puntaje de los almunos</h1>
        <div>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs>
              <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h2 className='titleLeft'>Tablas</h2>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TableContainer className={classes.table}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre</TableCell>
                          <TableCell align="right">Puntos</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.puntajes.map((row) => (
                          <TableRow key={row.nombre}>
                            <TableCell component="th" scope="row">
                              {row.nombre}
                            </TableCell>
                            <TableCell align="right">{row.puntos}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
            <Grid item xs>
              <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <h2 className='titleLeft'>Sumas</h2>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TableContainer className={classes.table}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre</TableCell>
                          <TableCell align="right">Puntos</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.puntajes.map((row) => (
                          <TableRow key={row.nombre}>
                            <TableCell component="th" scope="row">
                              {row.nombre}
                            </TableCell>
                            <TableCell align="right">{row.puntos}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
            <Grid item xs>
              <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <h2 className='titleLeft'>Billetes</h2>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TableContainer className={classes.table}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre</TableCell>
                          <TableCell align="right">Puntos</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.puntajes.map((row) => (
                          <TableRow key={row.nombre}>
                            <TableCell component="th" scope="row">
                              {row.nombre}
                            </TableCell>
                            <TableCell align="right">{row.puntos}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
            <Grid>
              <Button className={classes.botonError} variant="contained" component={Link} to={'/'}>Volver</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

}

export default withStyles(useStyles)(Puntajes);