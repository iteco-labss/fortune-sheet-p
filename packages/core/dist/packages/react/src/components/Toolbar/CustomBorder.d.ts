import React from "react";
import "./index.css";
declare type Props = {
    onPick: (changeColor?: string, changeStyle?: string) => void;
};
declare const CustomBorder: React.FC<Props>;
export default CustomBorder;
