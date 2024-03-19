'use client'
import type { SectionName } from '@/lib/types'
import React, { useState, createContext, useContext } from 'react'

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    lastClickTime: number
    setLastClickTime: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({
    children
}: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [lastClickTime, setLastClickTime] = useState<number>(0)

    return <ActiveSectionContext.Provider
        value={{
            activeSection,
            setActiveSection,
            lastClickTime,
            setLastClickTime
        }} >{children}</ActiveSectionContext.Provider>
}

export const useActiveSectionContext = () => {
    const context = React.useContext(ActiveSectionContext)
    if (!context) {
        throw new Error('useActiveSection must be used within an ActiveSectionContextProvider')
    }
    return context
}

export default ActiveSectionContextProvider