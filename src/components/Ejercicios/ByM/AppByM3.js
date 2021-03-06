import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import './App.css';

/* Imagenes de Billetes  */
import diezpesos from './images/billetesymonedas/billetes/diezpesos.png';
import veintepesos from './images/billetesymonedas/billetes/veintepesos.png';
import cincuentapesos from './images/billetesymonedas/billetes/cincuentapesos.png';
import cienpesos from './images/billetesymonedas/billetes/cienpesos.png';
import doscientospesos from './images/billetesymonedas/billetes/cienpesos.png';
import quinientospesos from './images/billetesymonedas/billetes/quinientospesos.png';
import milpesos from './images/billetesymonedas/billetes/milpesos.png';
/* Imagene Kiosco  */
import kiosco from './images/billetesymonedas/m/kiosco.png';

/* Funcion principal  */
export default function StickyFooter(props) {

  /* Constantes  */
  const classes = useStyles();
  const imageCollection = [ diezpesos, veintepesos, cincuentapesos, cienpesos, doscientospesos, quinientospesos, milpesos];
  const getRandomImage = () => imageCollection[Math.floor(Math.random() * imageCollection.length)];

  return (
    <div className={classes.root}>

      <Container component="main" className={classes.main} maxWidth="sm">
        {/* Comienzo  */}
        <Typography variant="h4" component="h4" gutterBottom>
        Billetes y Monedas 
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
        Si quiero comprar 5 golosinas distintas, ¿Me alcanza con éste dinero?
        </Typography>

        {/* Selec de la func Si o No  */}
        <div>
        <ErrorRadios/>
        <p></p>
        </div>

       </Container>
        {/* Fotos random de billetes */}
        <Container maxWidth="sm">
        <div className="App">
        <header className="App-header">
        <img src={getRandomImage()}  alt="billete"/>
        <h5>+</h5>
        <img src={getRandomImage()}  alt="billete"/>
        <p></p>
        <img src={kiosco}  alt="kiosco"/>
        <p></p>
        </header>
        </div>
        
        {/* Boton volver a niveles  */}
        <Button className={classes.boton} variant="contained" onClick={() => props.history.go(-1)}>Volver a Niveles</Button>
        </Container>
      
      </div>
  );
}

// Func para selec Si o No 
function ErrorRadios() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('Respuesta correcta!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Respuesta equivocada !');
      setError(true);
    } else {
      setHelperText('¿Cual es la respuesta?');
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Elige una opción</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="best" control={<Radio />} label="Si" />
          <FormControlLabel value="worst" control={<Radio />} label="No" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Enviar
        </Button>
        </FormControl>
    </form>
  );
}

// Estilos  
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#FFC226',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  footer: {
    padding: theme.spacing(4, 4),
    marginTop: 'left',
    backgroundColor: '#FFC226',
  },
  boton: {
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
}));
