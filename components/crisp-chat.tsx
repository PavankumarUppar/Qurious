"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";


export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("944d5929-c368-4662-824e-b03dc4ae6787");
    }, []);
    
    return null;
}

