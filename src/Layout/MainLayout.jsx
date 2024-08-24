import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";
import { CirclesWithBar } from "react-loader-spinner";


const MainLayout = () => {

    const navigation = useNavigation();


    return (
        <section>
            <div>
                <Nav></Nav>
            </div>


            <div >
                {
                    navigation.state === "loading" ?

                        <div className="flex flex-col justify-center min-h-screen items-center">
                            <CirclesWithBar
                                height="200"
                                width="300"
                                color="#4f4d5d"
                                outerCircleColor="#4f4d5d"
                                innerCircleColor="#4f4d5d"
                                barColor="#f88207"
                                ariaLabel="circles-with-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />

                        </div>

                        :
                        <Outlet></Outlet>
                }


            </div>


            <div>
                <Footer></Footer>
            </div>

        </section>
    );
};

export default MainLayout;