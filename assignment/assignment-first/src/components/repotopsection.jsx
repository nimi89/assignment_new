
const RepoTopSection = () => {
    return (
        <>
            <div className="RepoSection">
                <div className="RepoTop">

                    <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                        <div className="mb-3 mb-md-0">
                            <h1 className="h4 mb-1">Repositories</h1>
                            <p className="text-muted mb-0">33 total repositories</p>
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center gap-2" style={{ border: "1px solid #D5D7DA", }} >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9609 10.4102C16.418 10.5508 16.6641 11.0078 16.5234 11.4648C15.5391 14.8047 12.4453 17.125 8.96484 17.125C6.1875 17.125 3.62109 15.6133 2.21484 13.2578V16.8438C2.21484 17.3359 1.86328 17.6875 1.37109 17.6875C0.914062 17.6875 0.527344 17.3359 0.527344 16.8438V11.2188C0.527344 10.7617 0.914062 10.375 1.37109 10.375H6.99609C7.48828 10.375 7.83984 10.7617 7.83984 11.2188C7.83984 11.7109 7.45312 12.0625 6.99609 12.0625H3.44531C4.5 14.1016 6.60938 15.4375 8.96484 15.4375C11.707 15.4375 14.168 13.6094 14.9062 10.9727C15.0469 10.5156 15.5039 10.2695 15.9609 10.4102ZM16.5938 0.8125C17.0508 0.8125 17.4375 1.19922 17.4375 1.65625V7.28125C17.4375 7.77344 17.0508 8.125 16.5938 8.125H10.9688C10.4766 8.125 10.125 7.77344 10.125 7.28125C10.125 6.82422 10.4766 6.4375 10.9688 6.4375H14.4844C13.4297 4.43359 11.3203 3.0625 9 3.0625C6.25781 3.0625 3.79688 4.92578 3.02344 7.52734C2.91797 7.98438 2.46094 8.23047 2.00391 8.08984C1.54688 7.98438 1.30078 7.49219 1.40625 7.07031C2.39062 3.73047 5.51953 1.375 9 1.375C11.7773 1.375 14.3438 2.92188 15.75 5.27734V1.65625C15.75 1.19922 16.1016 0.8125 16.5938 0.8125Z" fill="#414651" />
                                </svg>


                                <span> Refresh All</span>
                            </button>
                            <button className="btn btn-primary d-flex justify-content-center align-items-center gap-2" style={{ border: "1px solid #D5D7DA" }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 8.25C15.1875 8.74219 14.8008 9.09375 14.3438 9.09375H8.71875V14.7188C8.71875 15.2109 8.33203 15.5977 7.875 15.5977C7.38281 15.5977 7.03125 15.2109 7.03125 14.7188V9.09375H1.40625C0.914062 9.09375 0.5625 8.74219 0.5625 8.28516C0.5625 7.79297 0.914062 7.40625 1.40625 7.40625H7.03125V1.78125C7.03125 1.32422 7.38281 0.972656 7.875 0.972656C8.33203 0.972656 8.71875 1.32422 8.71875 1.78125V7.40625H14.3438C14.8008 7.40625 15.1875 7.79297 15.1875 8.25Z" fill="white" />
                                </svg>


                                <span>   Add Repository</span>
                            </button>
                        </div>
                    </div>

                    <div className="search-box mb-4">
                        <div class="input-group">
                            <span class="input-group-text bg-white border-end-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>




                            </span>
                            <input type="text" class="form-control border-start-0" placeholder="Search Repositories" />
                            {/* <input type="text" placeholder="search Repositories" /> */}
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
};
export { RepoTopSection }