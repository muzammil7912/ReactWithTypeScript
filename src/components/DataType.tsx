

export type DragStart = {
    id: Number,
    column: number[],
    content: {
        id: number;
        blocks: DragStart2[] | never[] | undefined;
        title: string;
        width: string;
        type: string;
    }[],
}
export type DragStart2 = {
    id?: Number,
    content2?: [{
        id?:any;
        title?: string;
        text?: string;
        type?: string;
        active?: boolean;
        checked?: string;
        videoDetails?: string;
        src?: string;
        href?: string[] | string;
        imageDetails?: string;
        style?: {
            align?: string;
            background?: string;
            color?: string;
            width?: number;
            height?: number;
            width2?: number;
            height2?: number;
            border?: number;
            border2?: number;
            bgColor?: string;
            borderRadius?: string;
            fontSize?: string;
        };
    }]
} | any
export type Content = {
    id: number;
    blocks: any;
    title: string;
    width: string;
    type: string;
  };
export type DroppedItem = {
    content: Content[];
  };
  export type content = Content[]
export type selctedDetailsType = {
  type: string;
  active: boolean;
  itemIndex1: number;
  itemIndex2: number;
  itemIndex3: number;
}
  export type e  = React.DragEvent<HTMLDivElement>


  export type AllBoxProps = {
    data: {
        id?:any;
        title?: string;
        text?: string;
        type?: string;
        active?: boolean;
        checked?: string;
        videoDetails?: string;
        src?: string;
        href?: string[] | string;
        imageDetails?: string;
        style: {
            align?: "left" | "center" | "right";
            background?: string;
            color?: string;
            width?: number;
            height?: number;
            width2?: number;
            height2?: number;
            border?: number;
            border2?: number;
            bgColor?: string;
            borderRadius?: string;
            fontSize?: string;
        };
    };
  }
  