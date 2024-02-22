import {  ReactNode, createContext, useState } from "react";

export type con =[React.ReactNode[],React.Dispatch<React.SetStateAction<React.ReactNode[]>>]

export const DashboardContext = createContext<any|null>(null)

export function DashboardProvider({children}: {children: React.ReactNode}){
    const [widgets,setWidgets]=useState<ReactNode[]>([]);

    return (
        <DashboardContext.Provider value = {[widgets,setWidgets]}>
            {children}
        </DashboardContext.Provider>
    )
}