import { DragStart2 } from "./DataType";

export const GridBox = [
    {
        id: Math.random(), 
        column: [12],
        content: [{id: Math.random(),blocks: [],title: "col2",width: "50%",type: "structure",}]
    },
    {
        id: Math.random(), 
        column: [5, 5],
        content: [{id: Math.random(),blocks: [],title: "col2",width: "50%",type: "structure"},{id: Math.random(),blocks: [],title: "col2", width: "50%", type: "structure" }]
    },
    {
        id: Math.random(), 
        column: [3, 3,3],
        content: [{ id: Math.random(), blocks: [], title: "col3", width: "50%", type: "structure" }, { id: Math.random(), blocks: [], title: "col3", width: "50%", type: "structure" }, { id: Math.random(), blocks: [], title: "col3", width: "50%", type: "structure" }]
    },
    {
        id: Math.random(), 
        column: [2,2,2,2],
        content: [{ id: Math.random(), blocks: [], title: "col4", width: "50%", type: "structure" }, { id: Math.random(), blocks: [], title: "col4", width: "50%", type: "structure" }, { id: Math.random(), blocks: [], title: "col4", width: "50%", type: "structure" }, { id: Math.random(), blocks: [], title: "col4", width: "50%", type: "structure" }]
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
    content2: [{ id: Math.random(), title: "image", type: "image", imageDetails: "", src: "", active: false, checked: "width", style: {width: null, height: null, width2: null, height2: null, align: "left"} }]
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
    content2: [{ id: Math.random(), title: "spacer", type: "spacer", active: false,style: { color: "#000000", align: "center",width:null ,width2:null,border:null ,border2:null }}]
},
{
    id: Math.random(),
    content2: [{ id: Math.random(), title: "video", type: "video", videoDetails: "", src: "", active: false, checked: "width", style:{width: null, height: null, width2: null, height2: null, align: "left"} }]
},
];