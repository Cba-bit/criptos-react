import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import imagen from './cryptomonedas.png';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
    max-width: 900px;
    margin: -45px auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2 rem;
    }
`;

const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
    }
`;

function App() {
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const cotizarCriptomoneda = async () => {
            //evitamos la ejecucion la primera vez
            if (moneda === '') return;

            // Consultar la API
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            const resultado = await axios.get(url);

            // Mostrar el spinner
            setCargando(true);

            // con un settieout ocultar el spinner y mostrar el resultado.
            setTimeout(() => {
                // cargar estado de cargando
                setCargando(false);

                // guardar cotizacion
                setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
            }, 1500);
        };
        cotizarCriptomoneda();
    }, [moneda, criptomoneda]);

    // mostrar spinner o resultado

    const componente = cargando ? (
        <Spinner />
    ) : (
        <Cotizacion resultado={resultado} />
    );

    return (
        <Contenedor className='App'>
            <div>
                <Imagen src={imagen} alt='imagen cripto' />
            </div>
            <div>
                <Heading>Cotiza Criptomonedas al Instante</Heading>

                <Formulario
                    setMoneda={setMoneda}
                    setCriptomoneda={setCriptomoneda}
                />

                {componente}
            </div>
        </Contenedor>
    );
}

export default App;
