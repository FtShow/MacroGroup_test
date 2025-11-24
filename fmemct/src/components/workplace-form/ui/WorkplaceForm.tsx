import {
    Box,
    Button,
    FormControlLabel,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import {useWorkplaceForm} from "../libs/useWorkplaceForm.ts";


export const WorkplaceForm = () => {
    const {form, handleSwitchChange, handleSubmit, handleChange} = useWorkplaceForm()

    return (
        <>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Новое рабочее место
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Название"
                        value={form.name}
                        onChange={handleChange("name")}
                        required
                    />

                    <TextField
                        label="Описание"
                        value={form.description}
                        multiline
                        rows={3}
                        onChange={handleChange("description")}
                    />

                    <FormControlLabel
                        label="Место с компьютером"
                        control={
                            <Switch
                                checked={form.isComputerPlace}
                                onChange={handleSwitchChange}
                            />
                        }
                    />

                    {form.isComputerPlace && (
                        <TextField
                            label="IP-адрес"
                            value={form.ipAddress}
                            onChange={handleChange("ipAddress")}
                        />
                    )}

                    <Button variant="contained" type="submit">
                        Создать
                    </Button>
                </Stack>
            </Box>
        </>
    );
};
