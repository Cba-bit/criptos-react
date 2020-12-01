import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.span`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;
    console.log(resultado);
    return (
        <ResultadoDiv>
            <Precio>
                El precio es: <span>{resultado.PRICE}</span>
            </Precio>
            <Parrafo>
                Precio más alto del día: <span>{resultado.HIGHDAY}</span>
            </Parrafo>
            <Parrafo>
                El más bajo del día: <span>{resultado.LOWDAY}</span>
            </Parrafo>
            <Parrafo>
                Variación últimas 24HS:{' '}
                <span>{resultado.CHANGEPCT24HOUR} %</span>
            </Parrafo>
            <Parrafo>
                Última actualización: <span>{resultado.LASTUPDATE}</span>
            </Parrafo>
        </ResultadoDiv>
    );
};

export default Cotizacion;
