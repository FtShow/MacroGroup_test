import {WorkplaceList} from "../components/workplace-list/ui/WorkplaceList.tsx";
import {BackButton} from "../components/button-navigate-back/ButtonNavigateBack.tsx";


const WorkplaceListPage = () => {
    return (
        <>
            <BackButton/>
            <WorkplaceList/>
        </>
    );
};
export default WorkplaceListPage;