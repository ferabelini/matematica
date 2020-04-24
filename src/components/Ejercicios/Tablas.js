import React, { Component } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';




// const Container = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
// `;

const useStyles = theme => ({
  root: { 
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  boton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginRight: 16,
    marginTop: 20,
  },
});



class Tablas extends Component {

  state = {
    nivel: 1,
    data: [
      {
        id: 1,
        operacion: "2x2"
      },
      {
        id: 2,
        operacion: "2x2"
      },
      {
        id: 3,
        operacion: "2x2"
      },
      {
        id: 4,
        operacion: "2x2"
      },
      {
        id: 5,
        operacion: "2x2"
      },
      {
        id: 6,
        operacion: "2x2"
      },
      {
        id: 7,
        operacion: "2x2"
      },
      {
        id: 8,
        operacion: "2x2"
      },
      {
        id: 9,
        operacion: "2x2"
      },
    ],
    current: {}
  };

  render() {
    const { classes } = this.props;
    return (
      <div className='column'>
        <h1>Hola {this.props.name}</h1>
        <h2 className='titleCenter'>Practiequemos las Tablas</h2>
        <h3 className='titleCenter'>Nivel {this.state.nivel}</h3>
        <form className={classes.root}>
          {/* <TextField  id="standard" label="2x2"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  />
          <TextField  id="standard" label="3x3"  /> */}
          {this.state.data.map((row) => (
            <div>
              <label>{row.operacion}</label>
              <TextField id={row.id} label={row.operacion} />
            </div>
          ))}
        </form>
        <div>
          <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Volver</Button>
          <Button variant="contained" color="primary" className={classes.boton}>Siguiente</Button>
        </div>
      </div>

      
    );
  }
}

export default withStyles(useStyles)(Tablas);