import './book.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cover1 from '../images/cover1.jpg'
import cover2 from '../images/cover2.jpg'
export default function Book() {
const images = [
    cover1,
    cover2
]
   

    return (
        <div className='book'>
        <div className='crsl-container'>
       <Carousel className='crsl' showThumbs={false} width={'100%'} height={'100%'} >
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image} alt="book cover" />
                        </div>
                    )
                })}
       </Carousel>
       </div>
            <section className="synopsis">Hazel and Alfie have just moved in together as flatmates. They've also just slept together, which was either a catastrophic mistake, or the best decision of their lives.
<br></br><br></br>
Before they can decide, Hazel's sister Emily and her wife Daria arrive for a visit, setting in motion a chain of events that will turn everything upside down.
<br></br><br></br>
What follows will bind the four of them together, bringing joy and heartache, hope and anxiety, and reshaping their relationships in ways that none of them quite predicted.</section>
        </div>
    )
};