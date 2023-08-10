

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
export type Content = {
    id: number;
    blocks: any[];
    title: string;
    width: string;
    type: string;
  };
export type DroppedItem = {
    content: Content[];
  };
export type content = Content[]
export type UpdateItemAtAction = {
    type: 'UPDATE_ITEM';
    payload: {
      item: DroppedItem;
      index: number;
    };
  };
export type AddItemAtAction = {
    type?: 'ADD_BLOCK';
    payload: {
      item?: DragStart2;
      index?: number;
    };
  };

  export type e  = React.DragEvent<HTMLDivElement>