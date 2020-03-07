import React from 'react';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';

export default class Valani extends React.Component {
    constructor(){
        super()
        this.state = {
            isOpen: false,
            popupImage: '',
            photoIndex: 0,
            images:['/images/valani_p1.jpg', '/images/valani_p2.jpg', '/images/valani_p3.jpg', '/images/valani_p4.jpg', '/images/valani_p5.jpg', '/images/valani_p6.jpg']
        }
    }

    onClickHandler(photoIndex) {
        this.setState({isOpen: true, photoIndex})
    }

    render(){
        const { isOpen, photoIndex, images } = this.state;
        return (
            <HighendContainer >
                <HighendWrapper>
                    <Image src={images[0]} onClick={() => this.onClickHandler.call(this, 0)} alt="part 1" />
                    <Image src={images[1]} onClick={() => this.onClickHandler.call(this, 1)} alt="part 2" />
                    <Image src={images[2]} onClick={() => this.onClickHandler.call(this, 2)} alt="part 3" />
                    <Image src={images[3]} onClick={() => this.onClickHandler.call(this, 3)} alt="part 4" />
                    <Image src={images[4]} onClick={() => this.onClickHandler.call(this, 4)} alt="part 5" />
                    <Image src={images[5]} onClick={() => this.onClickHandler.call(this, 5)} alt="part 6" />
                </HighendWrapper>
                {
                    isOpen && (
                        <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                          })
                        }
                      />
                    )
                }
            </HighendContainer>
        )
    }
}

const HighendContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const HighendWrapper = styled.div`
    width: 80%;
    display:flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Image = styled.img`
    width:25%;
    margin: 15px;
    box-shadow: 0 5px 10px black;
    cursor: pointer;
    &:hover{
        transform: scale(3);
        transition: all .2s ease-in-out;
        left:50%;
        top:45%;
    }
`;