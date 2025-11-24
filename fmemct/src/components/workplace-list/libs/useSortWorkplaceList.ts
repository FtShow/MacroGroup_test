import { useState } from "react";
import type { Order, Workplace } from "../../../types/types.ts";

export const useSortWorkplaceList = (workplaces: Workplace[]) => {
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<keyof Workplace>("name");

    const handleSort = (property: keyof Workplace) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const sortedWorkplaces = [...workplaces].sort((a, b) => {
        if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
        return 0;
    });

    return { order, orderBy, handleSort, sortedWorkplaces };
};
