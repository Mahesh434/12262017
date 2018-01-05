export const PKCompleteMenu: PKMenuItem[] = [
    { key: 'WELCOME', route: '/welcome', icon: 'fa fa-sign-in', name: 'Welcome', children: [], hideChildren: true },
    { key: 'ABOUTUS', route: '/aboutus', icon: 'fa fa-sign-in', name: 'About Us', children: [], hideChildren: true },
    { key: 'CONTACTUS', route: '/contactus', icon: 'fa fa-sign-in', name: 'Contact Us', children: [], hideChildren: true },
    { key: 'LOGIN', route: '/projectk', icon: 'fa fa-sign-in', name: 'Login', children: [], hideChildren: true },
    {
        key: 'CLIENT', route: '/client', icon: 'fa fa-address-book-o', name: 'Client', children: [
            { key: 'CLIENT_CREATE', route: '/create', icon: 'fa fa-user-plus', name: 'Create', children: [], hideChildren: true },
            { key: 'CLIENT_EDIT', route: '/edit', icon: 'fa fa-pencil-square-o', name: 'Edit', children: [], hideChildren: true },
            { key: 'CLIENT_DELETE', route: '/delete', icon: 'fa fa-trash-o', name: 'Delete', children: [], hideChildren: true }
        ], hideChildren: true
    },
    {
        key: 'USER', route: '/user', icon: 'fa fa-user-circle-o', name: 'User', children: [
            { key: 'USER_CREATE', route: '/create', icon: 'fa fa-user-plus', name: 'Create', children: [], hideChildren: true },
            { key: 'USER_EDIT', route: '/edit', icon: 'fa fa-pencil-square-o', name: 'Edit', children: [], hideChildren: true },
            { key: 'USER_DELETE', route: '/delete', icon: 'fa fa-trash-o', name: 'Delete', children: [], hideChildren: true },
            { key: 'USER_ALL', route: '/all', icon: 'fa fa-address-book-o', name: 'All', children: [], hideChildren: true }
        ], hideChildren: true
    },
    {
        key: 'USER_MY_PROFILE', route: '/user/my', icon: 'fa fa-user-circle-o',
        name: 'My Profile', children: [], hideChildren: true
    },
    {
        key: 'CLIENT_MY_PROFILE', route: '/client/my-profile', icon: 'fa fa-user-circle-o',
        name: 'My Profile', children: [], hideChildren: true
    },
    {
        key: 'DASHBOARD', route: '/dashboard', icon: 'fa fa-user-circle-o',
        name: 'Dashboard', children: [], hideChildren: true
    },
    {
        key: 'SEARCH', route: '/search', icon: 'fa fa-user-circle-o',
        name: 'Search', children: [], hideChildren: true
    }
];

export const PKMenu: PKMenuItem[] = PKCompleteMenu.filter((item) => {
    return item.key === 'LOGIN' || item.key === 'WELCOME' || item.key === 'ABOUTUS' || item.key === 'CONTACTUS';
});

export interface PKMenuItem {
    key: string;
    route: string;
    icon: string;
    name: string;
    children: PKMenuItem[];
    hideChildren: boolean;
}
