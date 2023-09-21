import React from "react";
declare type Props = {
    type: "ok" | "yesno";
    onOk?: () => void;
    onCancel?: () => void;
    children?: React.ReactNode;
};
declare const MessageBox: React.FC<Props>;
export default MessageBox;
