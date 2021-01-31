import * as React from "react";
import {Cell, ICellProps} from "./Cell";

export const Col: React.FC<Omit<ICellProps, "direction">> = (props) => (
    <Cell
        {...props}
        direction="column"/>
);
