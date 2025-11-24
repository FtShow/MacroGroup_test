import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
    label?: string;
}

export const BackButton = ({ label = "Назад" }: BackButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button variant="outlined" onClick={handleClick}>
            {label}
        </Button>
    );
};
