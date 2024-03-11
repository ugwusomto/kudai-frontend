import { ReactNode , CSSProperties  } from "react";

export interface CommonProps {
    className?:string;
    children?:ReactNode;
    styles?:CSSProperties
}