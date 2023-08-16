import { DragStart2, DroppedItem, selctedDetailsType } from "./DataType";
import { MdFormatAlignLeft } from "react-icons/md"

export const GridBox = [
    {
        id: Math.random(), 
        column: [12],
        content: [{id: Math.random(),blocks: [],title: "col2",width: "100%",type: "structure",}]
    },
    {
        id: Math.random(), 
        column: [5, 5],
        content: [{id: Math.random(),blocks: [],title: "col2",width: "100%",type: "structure"},{id: Math.random(),blocks: [],title: "col2", width: "100%", type: "structure" }]
    },
    {
        id: Math.random(), 
        column: [3, 3,3],
        content: [{ id: Math.random(), blocks: [], title: "col3", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "col3", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "col3", width: "100%", type: "structure" }]
    },
    {
        id: Math.random(), 
        column: [2,2,2,2],
        content: [{ id: Math.random(), blocks: [], title: "col4", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "col4", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "col4", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "col4", width: "100%", type: "structure" }]
    },
    {
        id: Math.random(), 
        column: [3,7],
        content: [{ id: Math.random(), blocks: [], title: "col2", width: "30%", type: "structure" }, { id: Math.random(), blocks: [], title: "col2", width: "70%", type: "structure" }]
    },
    {
        id: Math.random(), 
        column: [3,7],
        content: [{ id: Math.random(), blocks: [], title: "col2", width: "70%", type: "structure" }, { id: Math.random(), blocks: [], title: "col2", width: "30%", type: "structure" }]
    },
];

export const components:DragStart2[] = [
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "text", type: "text",active: false, style: {align: "left",background: "#ffffff",color: "#000"} }] 
},
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "image", type: "image", imageDetails: "", src: "", active: false, checked: "width", style: {width: 0, height: 0, width2: 0, height2: 0, align: "left"} }]
},
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "button", type: "button", href: "",active: false, style: { align: "center", bgColor: "#0d49b2", color: "#ffffff",borderRadius: "1", fontSize: "15" }  }]
},
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "social", type: "social", active: false, href: ["","",""], style: { align: "center" } }]
},
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "menu", type: "menu",  active: false, href: ["","","",""],style: { color: "#0d49b2",fontSize: "13" } }]
},
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "spacer", type: "spacer", active: false,style: { color: "#000000", align: "center",width:0 ,width2:0,border:0 ,border2:0 }}]
},
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "video", type: "video", videoDetails: "", src: "", active: false, checked: "width", style:{width: 0, height: 0, width2: 0, height2: 0, align: "left"} }]
},
];


export const initialState: DroppedItem[] = [
    { content: [{ id: Math.random(), blocks: [], title: "dropItems1", width: "100%", type: "structure" }] },
    { content: [{ id: Math.random(), blocks: [], title: "dropItems2", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "dropItems2", width: "100%", type: "structure" }] },
    { content: [{ id: Math.random(), blocks: [], title: "dropItems3", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "dropItems3", width: "100%", type: "structure" }, { id: Math.random(), blocks: [], title: "dropItems3", width: "100%", type: "structure" }] },
    { content: [{ id: Math.random(), blocks: [], title: "dropItems1", width: "100%", type: "structure" }] },
  ];
export const selctedDetails: selctedDetailsType = {
    type: "",
    active: false,
    itemIndex1: 0,
    itemIndex2: 0,
    itemIndex3: 0,
}