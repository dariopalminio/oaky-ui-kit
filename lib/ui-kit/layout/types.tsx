// Global user session context interface for provider
export interface ILayoutContext {
    sidebarWidth: number
    isSidebarOpen: boolean
    toggleSidebar: (styleType?: "primary" | "secondary" | undefined) => void
};