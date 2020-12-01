import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';

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
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar EEUU' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'ARS', nombre: 'Peso Argentino' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
    ];

    // Utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS);

    return (
        <form>
            <SelectMonedas />

            <Boton type='submit' value='Calcular' />
        </form>
    );
};

export default Formulario;
