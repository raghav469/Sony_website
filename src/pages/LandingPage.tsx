import LandingPage1 from "../components/LandingPage1"
import LandingPageBar1 from "./LandingPageBar1"
import LandingPageBar2 from "./LandingPageBar2"

const LandingPage = () => {
    
    return (
        <div className="relative">
            <LandingPage1 />
            <LandingPageBar1 />
            <LandingPageBar2 />
        </div>
    )
}

export default LandingPage