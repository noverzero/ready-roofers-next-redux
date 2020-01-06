import TerritoryOwner from './TerritoryOwner.js'

const Home = () => {
    const background = require(`./images/roofer1-background.png`)
    return(
        <div>

            <div>
                <img className="background" src={background} />
            </div>
            <div className="row d-block owner">
                <TerritoryOwner />
            </div>
                <style jsx>{`
                    .background {
                        width:100%;
                        position:absolute;
                        z-index: -10;
                    }
                    .corner{
                        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 0%, 0 100%);
                        clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 0% 100%);
                        height: 155%;
                        width: 22%;
                        position:absolute;
                        z-index: 1;
                        opacity: 1;
                    }
                    .owner{
                        width:500%;
                        height: 5000px;
                        background-color: transparent;
                    }
                `}</style>
        </div>
    )
}


export default Home