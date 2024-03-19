'use client'
import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data'

type SectionName = typeof links[number]['name']

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({
    children
}: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    return <ActiveSectionContext.Provider
        value={{
            activeSection,
            setActiveSection
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