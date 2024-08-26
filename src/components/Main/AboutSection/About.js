import MarioAndAdrian from "../../../assets/Mario and Adrian A.jpg"
import AdrianAndMario from "../../../assets/Mario and Adrian b.jpg"
import "../../Main/Main.css"

const About = () =>  {
    return (
        <div className="about">
            <div className="aboutLeft">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis facere non ratione mollitia saepe sed dignissimos amet eaque nemo quisquam asperiores nihil soluta consequuntur, placeat, dolor perspiciatis dicta ut!</p>
            </div>
            <div className="aboutRight">
            <img className="aboutImg" src={MarioAndAdrian} alt="chef"></img>
            <img className="aboutImg2" src={AdrianAndMario} alt="Adrian"></img>
            </div>
        </div>
    )
}

export default About;