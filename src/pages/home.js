import './home.css';
import Navbar from '../Components/Navbar';
import KateBrookImage from '../images/KateBrook.jpg';

function Home(){
    return (<div>
        <div className = "Home">
        <Navbar />
        <h1>KATE BROOK</h1>
        <img src={KateBrookImage} alt="Kate Brook" />
        <section>
I am an author based in London. My first novel, <a >Not Exactly What I Had in Mind,</a> was published in 2022 by Corvus (UK) and Dutton (US), with German and Spanish translations forthcoming. My short-form writing has been published in LitHub, The Fiction Pool and The Real Story. I have a PhD in French Literature and Visual Art from King’s College London, and have worked as a bookseller and in publishing.
​
Please send general enquiries to Philippa Sitters at DGA, or come and say hello on Instagram or Twitter.</section>
        </div>
        </div>
    );
    }

    export default Home;