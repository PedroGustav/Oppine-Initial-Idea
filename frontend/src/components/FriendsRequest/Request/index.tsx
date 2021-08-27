import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import EuImg from '../../../assets/eu.jpg';
import { Container } from './styles';
export const Request: React.FC = () => {

    return(

        <Container>
            <div>
                <img src={EuImg} alt="" /> 
            </div>
            <section>
                <strong>
                    Pedro Gustavo
                </strong>
                <p>
                    pedro.gustavo_
                </p>
            </section>
            <div>
                <button className='acept'>
                    <FiCheck size={17} color={'#FFF'}/>
                </button>
                <button className='d-acept'>
                    <FiX size={17} color={'#FFF'}/>
                </button>
            </div>
        </Container>
    );
}