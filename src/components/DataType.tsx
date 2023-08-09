export  type DragStart = {
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