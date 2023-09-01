import React from 'react'; // Import React library
import ButtonBox from "./ButtonBox";
import { AllTypeControlProps, types } from "./DataType";
import ImageBox from "./ImageBox";
import MenuBox from "./MenuBox";
import SocialBox from "./SocialBox";
import SpacerBox from "./SpacerBox";
import TextBox from "./TextBox";
import VideoBox from "./VideoBox";

export function AllTypeControl ({ data, update, selctedDetails }: AllTypeControlProps) {
    const { type } = data;
    const types: types = {
        "text": <TextBox update={setAllData} selctedDetails={allData.selctedDetails}  data={data} />,
        "image": <ImageBox update={setAllData} selctedDetails={allData.selctedDetails}  data={data} />,
        "button": <ButtonBox />,
        "social": <SocialBox />,
        "menu": <MenuBox />,
        "spacer": <SpacerBox />,
        "video": <VideoBox />,
    };

    return types[type as keyof typeof types]
}