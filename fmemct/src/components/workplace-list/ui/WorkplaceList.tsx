import {
    Alert,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography
} from "@mui/material";
import {useGetWorkplaceList, useSortWorkplaceList} from "../libs";


export const WorkplaceList = () => {
    const {data, loading, error} = useGetWorkplaceList();
    const { sortedWorkplaces, order, orderBy, handleSort } = useSortWorkplaceList(
        data?.workplaces || []
    );


    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">Ошибка: {error.message}</Alert>;


    return (
        <TableContainer component={Paper} sx={{ mt: 4, maxWidth: 800, mx: "auto" }}>
            <Typography variant="h6" sx={{ p: 2 }}>
                Список рабочих мест
            </Typography>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#1976d2" }}>
                        <TableCell sx={{ color: "white" }}>
                            <TableSortLabel
                                active={orderBy === "name"}
                                direction={orderBy === "name" ? order : "asc"}
                                onClick={() => handleSort("name")}
                            >
                                Название
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ color: "white" }}>
                            <TableSortLabel
                                active={orderBy === "description"}
                                direction={orderBy === "description" ? order : "asc"}
                                onClick={() => handleSort("description")}
                            >
                                Описание
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ color: "white" }}>
                            <TableSortLabel
                                active={orderBy === "ipAddress"}
                                direction={orderBy === "ipAddress" ? order : "asc"}
                                onClick={() => handleSort("ipAddress")}
                            >
                                IP-адрес
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedWorkplaces.map((wp, index) => (
                        <TableRow
                            key={wp.id}
                            sx={{ backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white" }}
                        >
                            <TableCell>{wp.name}</TableCell>
                            <TableCell>{wp.description}</TableCell>
                            <TableCell>{wp.ipAddress || "-"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
