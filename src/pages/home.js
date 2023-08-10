import './home.css';
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import KateBrookImage from '../images/KateBrook.jpg';

function Home(){
    return (<div>
        <div className = "Home">
        <Navbar />
        <h1>KATE BROOK</h1>
        <figure>
        <img src={KateBrookImage} alt="Kate Brook" />
        <figcaption>Photo © Ellen Dobbs</figcaption>
        </figure>
        <section>
I am an author based in London. My first novel, <Link to="/book"><em>Not Exactly What I Had in Mind,</em></Link> was published in 2022 by Corvus (UK) and Dutton (US), with German and Spanish translations forthcoming. My short-form writing has been published in LitHub, The Fiction Pool and The Real Story. I have a PhD in French Literature and Visual Art from King’s College London, and have worked as a bookseller and in publishing.
<br /><br />
Please send general enquiries to <a href="mailto:contact@example.com">Philippa Sitters</a> at DGA, or come and say hello on <a href="https://www.instagram.com/kate_br00k/">Instagram</a> or <a href="https://www.twitter.com/katebrook1">Twitter</a>.
</section>
        </div>
        </div>
    );
    }

    export default Home;