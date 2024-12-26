
const RepoList = ({ repoall }) => {
    return (
        <>
            <li className="mb-2" >
                <div class="repository-item">
                    <div class="d-flex  align-items-start mb-2 gap-2 ">
                        <h2 class="repository-name mb-0">{repoall.name}</h2>
                        <span class="public   ">{repoall.visibility}</span>
                    </div>
                    <div class="repository-meta">
                        <span class="meta-item">

                            {repoall.language}
                            <span class="language-dot react"></span>
                        </span>
                        <span class="meta-item">
                            <i class="bi bi-file-text"></i>
                            {repoall.size}
                        </span>
                        <span class="meta-item">
                            Updated {repoall.lastUpdate}
                        </span>
                    </div>
                </div>


            </li>
        </>
    );


};

export { RepoList }