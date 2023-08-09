export type DragStart = {
    id: Number,
    column: number[],
    content: {
        id: number;
        blocks: never[];
        title: string;
        width: string;
        type: string;
    }[],
}
export type DragStart2 = {
    id: Number,
    content2: {
        id: number;
        title: string;
        type: string;
        active: boolean;
        checked?: string;
        videoDetails?: string;
        src?: string;
        href?: string[] | string;
        imageDetails?: string;
        style: {
            align?: string;
            background?: string;
            color?: string;
            width?: null;
            height?: null;
            width2?: null;
            height2?: null;
            border?: null;
            border2?: null;
            bgColor?: string;
            borderRadius?: string;
            fontSize?: string;
        };
    }[]
}