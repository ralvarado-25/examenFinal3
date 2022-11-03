import React, { useEffect } from 'react';

import { useCart } from 'hooks';
import { Portlet, Button, ReservationDetails } from 'components';
import { clearStoredValues } from 'lib/scripts/utils';

import styleClasses from './Finish.module.scss';

import fireworks from 'lib/media/icons/fireworks.svg';

const Finish: React.FC<TypeReservationStep> = (props: TypeReservationStep) => {
    const { cart, dispatchDeleteReservation } = useCart();

    const { stepChangeHandler } = props;

    // Go to the first step after delete
    useEffect(() => {
        if (cart.newReservation.status === 'idle' && !cart.newReservation.data.id) {
            stepChangeHandler(0, { isValid: false, inputs: {} }, 0);
            clearStoredValues();
        }
    }, [cart.newReservation.data.id, cart.newReservation.status, stepChangeHandler]);

    return (
        <Portlet>
            <div className={styleClasses['finish']}>
                <div className={styleClasses['finish__content']}>
                    <div className={styleClasses['finish__img-wrapper']}>
                        <img src={fireworks} alt="Su registro de reserva ha sido registrado correctamente." />
                    </div>
                    <h1 className={styleClasses['finish__title']}>Su registro de reserva ha sido registrado correctamente.</h1>
                    <p className={styleClasses['finish__text']}>
                        
El resumen de su reserva es el que se muestra a continuación. Puede usar los enlaces a continuación para actualizar su registro de reserva o hacer una nueva reserva.
                    </p>
                    <div className={styleClasses['finish__actions']}>
                        <Button
                            type="button"
                            onClick={() => {
                                stepChangeHandler(0, { isValid: false, inputs: {} }, 0);
                                clearStoredValues();
                            }}
                        >
                            Hacer una nueva reserva
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                stepChangeHandler(0, { isValid: true, inputs: {} }, 0);
                            }}
                        >
                            Actualizar reserva
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                if (window.confirm('Are you sure you want to delete your reservation?')) {
                                    dispatchDeleteReservation();
                                }
                            }}
                            loading={cart.newReservation.status === 'pending'}
                        >
                            Cancelar la reserva
                        </Button>
                    </div>
                </div>

                <ReservationDetails
                    type="boxes"
                    show={['checkin', 'checkout', 'adults', 'children', 'room', 'view', 'totals']}
                />
            </div>
        </Portlet>
    );
};

export default Finish;
