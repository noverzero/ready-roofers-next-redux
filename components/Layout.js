import Head from 'next/head'
import Navbar from './Navbar.js'


const Layout = (props) => {

    return(

    <div>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>Ready Roofers</title>
        </Head>
        <div className="container-fluid heady">
            <Navbar/>   
        </div>
        <div className="">
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
        <style jsx>{`
        .page {
            position:absolute;
            width:100%;
            background: no-repeat;
            background-size: cover;
            transform: translate(-00%, -0%)
            z-index:0
        }
        .heady{
            background-color: transparent;
            position:absolute;
        }
    `}</style>
        <div>
            {/* <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </div>
    </div>
    )
}


export default Layout