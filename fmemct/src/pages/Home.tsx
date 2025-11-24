import {Button, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate();
    const handleGoToWorkplaceForm = () => {
        navigate('/workplace_form')
    }
    const handleGoToWorkplaceList = () => {
        navigate('/workplace_list')
    }
    return (
        <Stack direction="column" spacing={5}>
            <Typography>Разные страницы просто что бы показать что подключен react-router</Typography>
            <Stack direction="row" justifyContent="space-between">
                <Button variant={'contained'} onClick={handleGoToWorkplaceForm}> Перейти к форме</Button>
                <Button variant={'contained'} onClick={handleGoToWorkplaceList}> Перейти к таблице</Button>
            </Stack>
        </Stack>
    );
};
