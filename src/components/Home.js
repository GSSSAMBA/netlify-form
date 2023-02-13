// import Work from './Work';
import Work1 from './Work1';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Skills from './Skills';
import NewWork1 from './NewWork1';


const Home = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Work1 />
            {/* <NewWork /> */}
            <NewWork1 />
            <Contact />
        </div >

    );
};

export default Home;