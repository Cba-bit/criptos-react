import { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {
    const [state, setState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value=''>- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </Fragment>

        // return state, interfaz, funcion q modifica state
    );
    return [state, Seleccionar, setState];
};

export default useMoneda;
