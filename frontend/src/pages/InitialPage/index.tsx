import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header, Main } from './styles';

import LogoImg from '../../assets/Logo.svg';
import People1Img from '../../assets/People1.svg';

export function InitialPage(){

    return(
        <>
            <Header>
                <div>
                    <img src={LogoImg} alt="Oppine" />
                    <Link to={'/login'}>
                        Fazer Login <FiArrowRight/>
                    </Link>
                </div>
            </Header>


            <Main>
                <div>
                    <h1>Seu Trabalho é opinar</h1>
                    <p>(é só mais uma rede).</p>
                    <Link to={'/register'}>
                        Quero Entrar!
                    </Link>
                </div>
                <img src={People1Img} alt="Man on computer" />
            </Main>
        </>
    );
}