
 const AccessType = {
  ANONYMOUS: "anonymous",
  USER: "user",
  ADMIN: "admin",
}

export { AccessType };
  
 
/**
 * Interface Type for Menu Item
 */
export interface MenuItemType {
    key: string
    title: string
    path: string
    icon: any
    access: string[] //AccessType.ANONYMOUS | AccessType.USER | AccessType.ADMIN
    submenu: MenuItemType[] | null
};


