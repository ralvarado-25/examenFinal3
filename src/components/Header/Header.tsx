import React from 'react';

import { Button } from 'components';
import { clearStoredValues } from 'lib/scripts/utils';

import styleClasses from './Header.module.scss';
import 'lib/css/header.css';


type TypeHeader = {
    activeStep?: number;
    stepChangeHandler: (stepIndex: number, formState: TypeFormState, targetStep: number) => void;
};
const Header: React.FC<TypeHeader> = (props: TypeHeader) => (
    <header className={styleClasses['header']}>
        <div className={styleClasses['header__logo']}>
            <span className={styleClasses['header__principalTitle']}>Hoteles en Bolivia</span>
            {/* <span className={styleClasses['header__logo__slogan']}>Reservation System</span> */}
        </div>
        <nav id="nav">
            <ul>
                <li><a href="#nuestros-cuartos">Habitaciones</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#lugares-proximos">Lugares próximos</a></li>
                <li><a href="#reservar">Reservas</a></li>
                <li><a href="#contacto">Contactanos</a></li>
            </ul>
        </nav>
        {/* {props.activeStep !== 0 && (
            <div className={styleClasses['header__actions']}>
                <Button
                    type="button"
                    onClick={() => {
                        props.stepChangeHandler(0, { isValid: false, inputs: {} }, 0);
                        clearStoredValues();
                    }}
                >
                    Make a new reservation
                </Button>
            </div>
        )} */}
    </header>
);

export default Header;
