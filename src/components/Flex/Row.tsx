import * as React from "react";
import {Cell, ICellProps} from "./Cell";

export const Row: React.FC<Omit<ICellProps, "direction">> = (props) => (
    <Cell
        {...props} />
);