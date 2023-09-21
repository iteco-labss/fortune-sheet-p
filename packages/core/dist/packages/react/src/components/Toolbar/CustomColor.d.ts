import React from "react";
import "./index.css";
declare type Props = {
    onCustomPick: (color: string | undefined) => void;
    onColorPick: (color: string) => void;
};
export declare const CustomColor: React.FC<Props>;
export {};
