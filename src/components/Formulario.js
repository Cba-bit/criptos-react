import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66adfe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = ({ setMoneda, setCriptomoneda }) => {
    //State del listado de criptos
    const [listaCripto, setListaCripto] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar EEUU' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'ARS', nombre: 'Peso Argentino' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
    ];

    // Utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS);

    // Utilizar CriptoMoneda
    const [cripto, SelectCripto] = useCripto(
        'Elige tu Criptomoneda',
        '',
        listaCripto
    );

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url =
                'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);
            setListaCripto(resultado.data.Data);
        };
        consultarAPI();
    }, []);

    //Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si ambos campos estan llenos
        if (moneda === '' || cripto === '') {
            setError(true);
            return;
        }

        // Pasar los datos al componente principal
        setError(false);
        setMoneda(moneda);
        setCriptomoneda(cripto);
    };

    return (
        <form onSubmit={cotizarMoneda}>
            {error ? (
                <Error mensaje='Todos los campos son obligatorios' />
            ) : null}

            <SelectMonedas />

            <SelectCripto />

            <Boton type='submit' value='Calcular' />
        </form>
    );
};

export default Formulario;
