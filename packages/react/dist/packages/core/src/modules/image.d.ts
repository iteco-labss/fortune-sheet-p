import { GlobalCache } from "../types";
import { Context } from "../context";
declare type ImageProps = {
    defaultWidth: number;
    defaultHeight: number;
    currentObj: null;
    currentWinW: null;
    currentWinH: null;
    resize: null;
    resizeXY: null;
    move: boolean;
    moveXY: object | null;
    cursorStartPosition: {
        x: number;
        y: number;
    } | null;
};
export declare const imageProps: ImageProps;
export declare function generateRandomId(prefix: string): string;
export declare function showImgChooser(): void;
export declare function saveImage(ctx: Context): void;
export declare function removeActiveImage(ctx: Context): void;
export declare function insertImage(ctx: Context, image: HTMLImageElement): void;
export declare function cancelActiveImgItem(ctx: Context, globalCache: GlobalCache): void;
export declare function onImageMoveStart(ctx: Context, globalCache: GlobalCache, e: MouseEvent): void;
export declare function onImageMove(ctx: Context, globalCache: GlobalCache, e: MouseEvent): boolean;
export declare function onImageMoveEnd(ctx: Context, globalCache: GlobalCache): void;
export declare function onImageResizeStart(globalCache: GlobalCache, e: MouseEvent, resizingSide: string): void;
export declare function onImageResize(ctx: Context, globalCache: GlobalCache, e: MouseEvent): boolean;
export declare function onImageResizeEnd(ctx: Context, globalCache: GlobalCache): void;
export {};
