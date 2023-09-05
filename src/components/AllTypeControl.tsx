import React from 'react'; // Import React library
import ButtonBox from "./ButtonBox";
import { AllTypeControlProps, types } from "./DataType";
import ImageBox from "./ImageBox";
import MenuBox from "./MenuBox";
import SocialBox from "./SocialBox";
import SpacerBox from "./SpacerBox";
import TextBox from "./TextBox";
import VideoBox from "./VideoBox";

export function AllTypeControl ({ data }: AllTypeControlProps) {
    const { type } = data;
    const types: types = {
        "text": <TextBox    />,
        "image": <ImageBox  />,
        "button": <ButtonBox />,
        "social": <SocialBox />,
        "menu": <MenuBox />,
        "spacer": <SpacerBox />,
        "video": <VideoBox />,
    };

    return types[type as keyof typeof types]
}