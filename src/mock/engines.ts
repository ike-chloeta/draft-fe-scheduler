import { v4 as uuidv4 } from "uuid";

export interface Crew {
    id: string; // Unique ID for each crew object
    name: string;
    status: string;
    designation: string;
}

interface Schedule {
    crews: Crew[];
    date: Date;
}

interface Engine {
    name: string;
    Schedules: Schedule[];
}

export const Engines: Engine[] = [
    {
        name: "CHL631",
        Schedules: [
            {
                crews: [
                    { id: uuidv4(), name: "Crew1", status: "Travel In", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Travel In", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew4", status: "Travel Out", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew3", status: "Travel Out", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 1),
            },
            {
                crews: [
                    { id: uuidv4(), name: "Standingrock", status: "Regular", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Regular", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 2),
            },
        ],
    },
    {
        name: "CHL632",
        Schedules: [
            {
                crews: [
                    { id: uuidv4(), name: "Crew1", status: "Travel In", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Travel In", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew4", status: "Travel Out", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew3", status: "Travel Out", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 1),
            },
            {
                crews: [
                    { id: uuidv4(), name: "Standingrock", status: "Regular", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Regular", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 2),
            },
        ],
    },
    {
        name: "CHL633",
        Schedules: [
            {
                crews: [
                    { id: uuidv4(), name: "Crew1", status: "Travel In", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Travel In", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew4", status: "Travel Out", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew3", status: "Travel Out", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 1),
            },
            {
                crews: [
                    { id: uuidv4(), name: "Standingrock", status: "Regular", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Regular", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 2),
            },
        ],
    },
    {
        name: "CHL634",
        Schedules: [
            {
                crews: [
                    { id: uuidv4(), name: "Crew1", status: "Travel In", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Travel In", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew4", status: "Travel Out", designation: "Firefighter" },
                    { id: uuidv4(), name: "Crew3", status: "Travel Out", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 1),
            },
            {
                crews: [
                    { id: uuidv4(), name: "Standingrock", status: "Regular", designation: "Captain" },
                    { id: uuidv4(), name: "Crew2", status: "Regular", designation: "Firefighter" },
                ],
                date: new Date(2024, 3, 2),
            },
        ],
    },
];
