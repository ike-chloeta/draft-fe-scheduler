import { getMonthDays } from "../utils/getMonthDays";
import { Engines } from "../mock/engines";
import EngineCell from "./EngineCell";
import { Typography, Box, Table, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";

const engines = Engines;

export default function CalendarTable({ calendar = getMonthDays(3, 2024), engineData = engines }) {
    return (
        <Box sx={{ py: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                March 2024
            </Typography>
            <TableContainer sx={{ px: 5, pb: 4, maxHeight: "75vh", overflowY: "auto" }}>
                <Table>
                    <TableBody>
                        {engineData.map((engine) => {
                            return (
                                <>
                                    <TableRow>
                                        {calendar.map((date) => {
                                            const record = engine.Schedules.find(
                                                (schedule) => schedule.date.getDate() == date.date.getDate()
                                            );
                                            const crews = record ? record.crews : [];

                                            return (
                                                <TableCell key={date.index} sx={{ border: 0 }}>
                                                    <EngineCell
                                                        engine={engine.name}
                                                        index={date.index}
                                                        dayOfWeek={date.dayOfWeek}
                                                        crews={crews}
                                                    />
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                </>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
