import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate();
    const handleGoToWorkplaceForm = () => {
        navigate('/workplace_form')
    }
    return (
        <>
            <Typography variant={'h5'}>
                Кнопка просто для того, что бы показать что подключен роутер дом
            </Typography>
            <Button variant={'contained'} onClick={handleGoToWorkplaceForm}> Перейти к форме</Button>
        </>
    );
};
