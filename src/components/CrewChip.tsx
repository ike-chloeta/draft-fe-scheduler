import { Chip } from "@mui/material";

type Props = { name: string; status: string; designation: string };
function CrewChip({ name, status, designation }: Props) {
    const fontSize = ".66rem";
    function handleDelete() {}

    let color = "inherit";
    switch (status) {
        case "Regular":
            color = "black";
            break;
        case "Travel In":
            color = "green";
            break;
        case "Travel Out":
            color = "red";
            break;
    }
    return (
        <>
            <Chip
                sx={{
                    fontSize: fontSize,
                    color: { color },
                    fontWeight: designation === "Firefighter" ? "" : "bold",
                    boxShadow: 3,
                    py: 1,
                }}
                label={name}
                variant="outlined"
                onDelete={handleDelete}
            />
        </>
    );
}

export default CrewChip;
