// Global user session context interface for provider
export interface ILayoutContext {
    sidebarWidth: number
    isSidebarOpen: boolean
    toggleSidebar: () => void
    setSidebarWidth: (value: number) => void
};