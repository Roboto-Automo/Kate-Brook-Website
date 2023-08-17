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
        <div className='bookpagecontainter'>
        <div className='book'>
        <div className='carousel-container'>
            <Carousel className='crsl' showStatus={false}showThumbs={false} autoPlay={true} infiniteLoop={true} dynamicHeight={true} animationHandler={"fade"} swipeable={false} transitionTime={3000} interval={5000}>
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img className='image' src={image} alt="book cover" />
                        </div>
                    )
                })}
            </Carousel>
        </div>
      
            <section className="synopsis">
            <br></br><br></br>Hazel and Alfie have just moved in together as flatmates. They've also just slept together, which was either a catastrophic mistake, or the best decision of their lives.
<br></br><br></br>
Before they can decide, Hazel's sister Emily and her wife Daria arrive for a visit, setting in motion a chain of events that will turn everything upside down.
<br></br><br></br>
What follows will bind the four of them together, bringing joy and heartache, hope and anxiety, and reshaping their relationships in ways that none of them quite predicted.

<div className='outnow'>Out now in hardback (UK) and paperback (US)</div>
<div className='buttonholder'><button className='buyedition'>Buy UK edition</button><button className='buyedition'>Buy US edition</button></div>
</section>
        </div>

        <section className='topcomment'>'I absolutely loved every word of it.'
<br></br>
<em>Netgalley review</em></section>
<section className='quotegrid'>
    <div className='quote'>'I adored this book - fresh, funny and thought provoking, I fell in love with the characters and did not want it to end'
    <br></br>
<em>Sophie Cousens, author of This Time Next Year</em></div>
    <div className='quote'>'A clever and insightful take on what love and family mean in the twenty-first century'
    <br></br>
<em>Nicola Gill, author of We Are Family</em></div>
    <div className='quote'>'Captures the intricacies of modern relationships with undeniable skill, heaps of humour and a style that fans of Sally Rooney will love. Captivating and addictively complex ... a delight'
<br></br>
Ashley Hickson-Lovence, author of Your Show</div>
    <div className='quote'></div>
    <div className='quote'></div>
    <div className='quote'></div>
</section>
        </div>
    )
};