
import { Header } from "./header";
import { RepoAllList } from "./repoAllList";
import { Sidebar } from "./sidebar";
import { RepoTopSection } from "./repotopsection";
const Desktop = ({ data }) => {
    return (
        <>

            <body>
                <div className="app-container">

                    <Header />

                    <div className="d-flex">

                        <Sidebar />


                        <main className="main-content flex-grow-1">
                            <div className="container-fluid py-4">

                                <RepoTopSection />

                                <RepoAllList data={data} />

                            </div>
                        </main>
                    </div>
                </div>



            </body>


        </>
    )
};
export { Desktop }