import React, { useEffect } from 'react';
import { ConnectedProps } from 'react-redux';

import withErrorHandler from 'hocs/withErrorHandler';
import connector from './connector';
import { CircularProgress, Header, Steps, StepsIndicator } from 'components';
import { HotelDate, PreviewPayment, RoomView, Finish } from 'containers/Steps';
import { useSteps } from 'hooks';

import iconCalendar from 'lib/media/icons/calendar.svg';
import iconBed from 'lib/media/icons/bed.svg';
import iconCreditCard from 'lib/media/icons/credit-card.svg';



import 'lib/css/global.css';
import 'lib/css/footer.css';
import 'lib/css/lugares.css';
import 'lib/css/quartos.css';
import 'lib/css/servicos.css';
import 'lib/css/carousel.css';


import cuarto1 from 'lib/img/quarto-1.jpg';
import cuarto2 from 'lib/img/quarto-2.jpg';
import cuarto3 from 'lib/img/quarto-3.jpg';
import cuarto4 from 'lib/img/quarto-4.jpg';
import HTajibos from 'lib/img/HTajibos.jpg';//HMarriott
import HMarriott from 'lib/img/HMarriott.jpg';
import GranHotel from 'lib/img/GranHotel.jpg'; //
import RitzApart from 'lib/img/RitzApart.jpg'; //
import CaminoPlaza from 'lib/img/CaminoPlaza.jpg'; //Presidente
import Presidente from 'lib/img/Presidente.jpg';

type TypeAppReduxProps = ConnectedProps<typeof connector>;

const App: React.FC<TypeAppReduxProps> = (props: TypeAppReduxProps) => {
    const { stepsState, stepChangeHandler } = useSteps();

    const { onInitReservationForm, data, status, error } = props;

    useEffect(() => {
        if (data.names && !data.names.length && !error) {
            onInitReservationForm();
        }
    }, [onInitReservationForm, data, error]);

    const renderStep = () => {
        if (stepsState.currentStep === 0) {
            return <HotelDate stepChangeHandler={stepChangeHandler} />;
        }
        if (stepsState.currentStep === 1) {
            return <RoomView stepChangeHandler={stepChangeHandler} />;
        }
        if (stepsState.currentStep === 2) {
            return <PreviewPayment stepChangeHandler={stepChangeHandler} />;
        }
        if (stepsState.currentStep === 3) {
            return <Finish stepChangeHandler={stepChangeHandler} />;
        }
    };

    return (
        <>
            <Header activeStep={stepsState.currentStep} stepChangeHandler={stepChangeHandler} />            
            <main>
                {/* <div id="hotel-img">
                </div> */}
              <section className="awSlider">
                <div  className="carousel slide" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                    <li data-target=".carousel" data-slide-to="0" className="active"></li>
                    <li data-target=".carousel" data-slide-to="1"></li>
                    <li data-target=".carousel" data-slide-to="2"></li>
                    <li data-target=".carousel" data-slide-to="3"></li>
                    <li data-target=".carousel" data-slide-to="4"></li>
                    <li data-target=".carousel" data-slide-to="5"></li>
                    </ol>
                    
                    <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src={HTajibos}/>
                        <div className="carousel-caption">Hotel los Tajibos - Santa Cruz</div>
                    </div>
                    <div className="item">
                        <img src={HMarriott}/>
                        <div className="carousel-caption">Hotel Marriott - Santa Cruz</div>
                    </div>
                    <div className="item">
                        <img src={GranHotel}/>
                        <div className="carousel-caption">Gran Hotel - Cochabamba</div>
                    </div>
                    <div className="item">
                        <img src={CaminoPlaza}/>
                        <div className="carousel-caption">Camino Plaza Hotel - Cochabamba</div>
                    </div>
                    <div className="item">
                        <img src={RitzApart}/>
                        <div className="carousel-caption">Hotel Ritz Apart - La Paz</div>
                    </div>
                    <div className="item">
                        <img src={Presidente}/>
                        <div className="carousel-caption">Hotel Presidente - La Paz</div>
                    </div>
                </div>

                    
                    <a className="left carousel-control" href=".carousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Geri</span>
                    </a>
                    <a className="right carousel-control" href=".carousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">İleri</span>
                    </a>
                </div>
            </section>
            <p>            
                Una vista a lo más hermoso de Bolivia
                <section id="nuestros-cuartos">
                <h2>Habitaciones</h2>
                <div id="quartos-container">
                    <div className='qbox'>
                        <img src={cuarto1} alt=""/>
                        <p className="qtitulo">Habitación de lujo</p>
                        <p className="qdescricao">Las habitaciones están decoradas con elegancia.</p>
                    </div>
                    <div className="qbox">
                        <img src={cuarto2} alt=""/>
                        <p className="qtitulo">Habitación personal</p>
                        <p className="qdescricao">Tendrás el espacio suficiente que necesitas descansar durante tus viajes profesionales o de ocio.</p>
                    </div>
                    <div className="qbox">
                        <img src={cuarto3} alt=""/>
                        <p className="qtitulo">Habitación familiar</p>
                        <p className="qdescricao">Para todos aquellos que planeen sus vacaciones con toda la familia. Esta opción es ideal para disfrutar de la comodidad de un hotel junto con toda la familia.</p>
                    </div>
                    <div className="qbox">
                        <img src={cuarto4} alt=""/>
                        <p className="qtitulo">Habitación común</p>
                        <p className="qdescricao">Para todos aquellos que solo estan de paso por el lugar.</p>
                    </div>
                </div>
                </section>
                <section id="servicios">
                    <h2>Servicios</h2>            
                    <div id="servicos-container">
                        <div id="piscina" className="sbox">
                            <div className="simg">
                                <i className="fa-solid fa-water-ladder"></i>                        
                            </div>
                            <h3>Piscina</h3>
                            <p>Cuenta con su propia piscina, para pasar un monento agradable.</p>
                            {/* <a href="#">saiba mais</a> */}
                        </div>
                        <div id="spa" className="sbox">
                        <div className="simg">
                            <i className="fa-solid fa-spa"></i>
                            </div>
                            <h3>Spa</h3>
                            <p>Para las damas, que quieran tener un momento de relax</p>
                            {/* <a href="#">saiba mais</a> */}
                        </div>
                        <div id="restaurante" className="sbox">
                            <div className="simg">
                                <i className="fa-solid fa-utensils"></i>
                            </div>
                            <h3>Restaurante</h3>
                            <p>Encontrara un menú variado, para las personas exigentes.</p>
                            {/* <a href="#">saiba mais</a> */}
                        </div>
                        <div id="estacionamento" className="sbox">
                            <div className="simg">
                                <i className="fa-solid fa-square-parking"></i>
                            </div>
                            <h3>Estacionamento Grátis</h3>
                            <p>Se cuenta con estacionamiento gratis 24/7</p>
                            {/* <a href="#">saiba mais</a> */}
                        </div>
                    </div>
                </section>
                <section id="lugares-proximos">
                    <h2>Lugares Próximos</h2>
                    <div id="lugares-container">
                        {/* <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-umbrella-beach"></i>
                            </div>
                            <h3>Praia</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates.</p>
                        </div> */}
                        <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-martini-glass"></i>
                            </div>
                            <h3>Bar</h3>
                            <p>Cuenta con bar dentro del hotel, como también para celebrar momentos inolvidables.</p>
                        </div>
                        <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-masks-theater"></i>
                            </div>
                            <h3>Teatro</h3>
                            <p>Los fines de semana puede disfrutar de teatro.</p>
                        </div>
                        <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-tree"></i>
                            </div>
                            <h3>Parque</h3>
                            <p>Salidas a parques para ver las numerosas reservas de Bolivia.</p>
                        </div>
                        <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-landmark"></i>
                            </div>
                            <h3>Museu</h3>
                            <p>Museos historicos que te contara una parte de la historia de Bolivia.</p>
                        </div>
                        <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                            <h3>Shopping</h3>
                            <p>Tiendas de ropa tradicionales.</p>
                        </div>
                        {/* <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-golf-ball-tee"></i>
                            </div>
                            <h3>Golfe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates.</p>
                        </div> */}
                        {/* <div className="lbox">
                            <div className="limg">
                                <i className="fa-solid fa-dice"></i>
                            </div>
                            <h3>Cassino</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates.</p>
                        </div> */}
                    </div>
                </section>
                <section id="reservar">
                    <h2>Reservas</h2>                    
                    <div id="quartos-container">
                    <Steps>
                        <StepsIndicator
                            imgUrl={iconCalendar}
                            title="Hotel y fecha"
                            index={0}
                            stepChangeHandler={stepChangeHandler}
                        />
                        <StepsIndicator
                            imgUrl={iconBed}
                            title="Habitaciones y vistas"
                            index={1}
                            stepChangeHandler={stepChangeHandler}
                        />
                        <StepsIndicator
                            imgUrl={iconCreditCard}
                            title="Pagos"
                            index={2}
                            stepChangeHandler={stepChangeHandler}
                        />
                    </Steps>
                    {status === 'pending' && <CircularProgress />}
                    {status === 'resolved' && renderStep()}
                    {status === 'rejected' && error && <h3 style={{ textAlign: 'center', color: 'red' }}>{error}</h3>}
                    </div>                    
                </section>
            </p>        
            </main>
            <footer>
                <div id="contatos-container">
                    <div>
                        <h3 id="contacto">Contacto</h3>
                        <p>Teléfono: (99) 9999-9999</p>
                        <p>Email: email@gmail.com</p>
                        {/* <p>Dirección: Dir</p> */}
                    </div>
                    <div>
                        <h3 id="redes">Redes Socialess</h3>
                        <p>Facebook: @hotel</p>
                        <p>Instagram: @hotel</p>
                        <p>Twitter: @hotel</p>
                    </div>
                </div>
                {/* <p id="creditos">Realizado <a href="#" target="_blank">Raúl Alberto Alvarado Ramos</a>
                </p> */}
            </footer>

            {/* <main className={'container'}>
                <Steps>
                    <StepsIndicator
                        imgUrl={iconCalendar}
                        title="Hotel y fecha"
                        index={0}
                        stepChangeHandler={stepChangeHandler}
                    />
                    <StepsIndicator
                        imgUrl={iconBed}
                        title="Room type &amp; View"
                        index={1}
                        stepChangeHandler={stepChangeHandler}
                    />
                    <StepsIndicator
                        imgUrl={iconCreditCard}
                        title="Preview &amp; Payment"
                        index={2}
                        stepChangeHandler={stepChangeHandler}
                    />
                </Steps>
                {status === 'pending' && <CircularProgress />}
                {status === 'resolved' && renderStep()}
                {status === 'rejected' && error && <h3 style={{ textAlign: 'center', color: 'red' }}>{error}</h3>}
            </main> */}
        </>
    );
};

export default withErrorHandler(connector(App));
