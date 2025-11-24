import {Paper} from "@mui/material";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <Paper sx={{p: 3, maxWidth: 500, mx: "auto", mt: 4}}>
            <Outlet/>
        </Paper>
    );
};
