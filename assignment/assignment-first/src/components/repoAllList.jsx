import { RepoList } from "./repolist"
const RepoAllList = ({ data }) => {
    return (
        <>
            <div class="repository-list">
                <ul>
                    {
                        data.map((repodata) => {
                            return (
                                <>
                                    <RepoList repoall={repodata} />
                                </>
                            )
                        })
                    }

                </ul>
            </div>
        </>
    )
}
export { RepoAllList }