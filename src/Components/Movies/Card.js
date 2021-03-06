import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Rating from '../UI/Rating';
import Image from '../UI/Image';

import LazyLoader from '../UI/LazyLoader';
import { LoaderContainer } from '../UI/Image';

const MovieCards = styled.div`

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    width: 23rem;
    color: #9da0a0;
    transition: all .3s ease-in-out;
    border-radius: 1rem;
    overflow: hidden;
    margin: 2.5rem;
    
    @media (max-width:600px) { width: 25rem;  }
    img {
        height: 35rem;
        overflow: hidden;
        border-radius: 1.5rem;
        -webkit-box-shadow: 0px 4px 21px -13px rgba(0,0,0,1);
        -moz-box-shadow: 0px 4px 21px -13px rgba(0,0,0,1);
        box-shadow: 0px 4px 21px -13px rgba(0,0,0,1);
        object-fit: cover;  
        display:${ props => props.didLoad ? 'inline-flex' : 'none'};
        @media (max-width:500px) {
            height: 40rem;
            width: 100% ;
        }
    }


        &:hover {
            cursor:pointer;
            box-shadow: 0px 14px 60px -26px rgba(0,0,0,1);
            transform: scale(1.1);
            border-radius: 1.5rem;
            background-color: #132931;
            color: #5fada9;
            img {
                border-radius: 0;
                box-shadow: 0;
            }
        } 
`;

const MovieTitle = styled.div`

            text-align: center;
            background-color: inherit;
            width: 100%;
            padding: 1rem;
            margin-top: -.5rem;

            h2 {
                margin-top:1rem;
                font-size: 1.5rem;
            }

            span { font-size: 2rem; }
`;
const Card = ({details}) => {
const [loaded, setLoaded] = useState(false)
    return (
            <Link to={`/movie/${details.id}`}>
                <MovieCards didLoad={loaded}>
                  {loaded ? null :  <LoaderContainer> <LazyLoader />  </LoaderContainer>}  
                  <Image details={details} loaded={setLoaded}/>
                    <MovieTitle>
                        <h2>{details.title}</h2>
                        <Rating  rating={details.vote_average} />      
                    </MovieTitle>
            </MovieCards>
            </Link>
    )
}

export default Card
