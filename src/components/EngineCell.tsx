import { Paper, Stack, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CrewChip from "./CrewChip";
import { Crew } from "../mock/engines";

type Props = {
    engine: string;
    index: number;
    dayOfWeek: string;
    crews?: Crew[];
};

function EngineCell({ engine, index, dayOfWeek, crews }: Props) {
    return (
        <>
            <Paper
                sx={{
                    p: 1,
                    boxShadow: 5,
                    overflowY: "auto",
                    borderRadius: "3%",
                    backgroundColor: "#F8F8FF",
                    ":hover": { backgroundColor: "#ffffff" },
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Typography sx={{ fontWeight: "bold" }}>{index}</Typography>
                    <AddCircleIcon onClick={() => alert()} sx={{ ":hover": { cursor: "pointer" } }} />
                </Stack>
                <Stack
                    direction="column"
                    alignItems="center"
                    spacing={1}
                    sx={{ my: 2, px: 3, py: 1, width: 120, height: 100, overflow: "auto" }}
                >
                    {crews &&
                        crews.map((crew) => (
                            <CrewChip
                                key={crew?.name}
                                name={crew.name}
                                status={crew.status}
                                designation={crew.designation}
                            />
                        ))}
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Typography sx={{ fontSize: ".8rem" }}>{dayOfWeek}</Typography>
                    <Typography sx={{ fontSize: ".8rem", fontWeight: "bold" }}>{engine}</Typography>
                </Stack>
            </Paper>
        </>
    );
}

export default EngineCell;
