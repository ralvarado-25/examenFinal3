import React from 'react';

import { useCart } from 'hooks';

import styleClasses from './ReservationTotals.module.scss';

type TypeReservationTotalsProps = {};

const ReservationTotals: React.FC<TypeReservationTotalsProps> = (props: TypeReservationTotalsProps) => {
    const { cart, coupon, totals } = useCart();

    let discountAmount = 0;
    if (coupon.id) {
        const discountPercentage = coupon.discountAmmount ? coupon.discountAmmount : 0;
        discountAmount = (discountPercentage / 100) * totals.final;
    }

    return (
        <li className={styleClasses['reservation-details__totals']}>
            <div className={styleClasses['reservation-details__totals__item']}>
                <span className={styleClasses['reservation-details__totals__title']}>Precio de la habilitación</span>
                <span className={styleClasses['reservation-details__totals__value']}>{totals.room} Bs</span>
            </div>
            <div className={styleClasses['reservation-details__totals__item']}>
                <span className={styleClasses['reservation-details__totals__title']}>Porcentaje incluido</span>
                <span className={styleClasses['reservation-details__totals__value']}>{totals.ratio}%</span>
            </div>
            <div className={styleClasses['reservation-details__totals__item']}>
                <span className={styleClasses['reservation-details__totals__title']}>
                    Cantidad{' '}
                    <span>
                        {cart.days} {cart.days && +cart.days > 1 ? 'Días' : 'Día'}
                    </span>
                </span>
                <span className={styleClasses['reservation-details__totals__value']}>{totals.total.toFixed(2)} Bs</span>
            </div>
            {coupon.code && (
                <div className={styleClasses['reservation-details__totals__item']}>
                    <span className={styleClasses['reservation-details__totals__title']}>
                        Discount <span>({coupon.code})</span>
                    </span>
                    <span className={styleClasses['reservation-details__totals__value']}>
                        -{discountAmount.toFixed(2)} Bs
                    </span>
                </div>
            )}
            <div className={styleClasses['reservation-details__totals__total']}>
                <span className={styleClasses['reservation-details__totals__title']}>Monto total</span>
                <span className={styleClasses['reservation-details__totals__value']}>
                    {(totals.final - discountAmount).toFixed(2)} Bs
                </span>
            </div>
        </li>
    );
};

export default ReservationTotals;
