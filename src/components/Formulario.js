import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
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

const Formulario = () => {
    //State del listado de criptos
    const [listaCripto, setListaCripto] = useState([]);

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

    return (
        <form>
            <SelectMonedas />

            <SelectCripto />

            <Boton type='submit' value='Calcular' />
        </form>
    );
};

export default Formulario;
