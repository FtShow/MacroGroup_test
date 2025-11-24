export interface Workplace {
    id: string;
    name: string;
    description: string;
    ipAddress: string;
}

export type GetWorkplacesData  = {
    workplaces: Workplace[];
}

export type Order = "asc" | "desc";