import { SidebarItem } from './sidebar-item.model';

export const sidebarItems = [ 
    new SidebarItem (1, 'Dashboard', 'pages/dashboard', null, 'fa-home', null, false, 0),
    new SidebarItem (2, 'Charts', null, null, 'fa-bar-chart', null, true, 0),
    new SidebarItem (3, 'Ng2-Charts', 'pages/charts/ng2charts', null, 'fa-caret-right', null, false, 2),
    new SidebarItem (4, 'UI Features', null, null, 'fa-laptop', null, true, 0), 
    new SidebarItem (5, 'Buttons', 'pages/ui/buttons', null, 'fa-caret-right', null, false, 4),
    new SidebarItem (6, 'Cards', 'pages/ui/cards', null, 'fa-caret-right', null, false, 4), 
    new SidebarItem (7, 'Components', 'pages/ui/components', null, 'fa-caret-right', null, false, 4), 
    new SidebarItem (8, 'Icons', 'pages/ui/icons', null, 'fa-caret-right', null, false, 4), 
    new SidebarItem (9, 'Grid', 'pages/ui/grid', null, 'fa-caret-right', null, false, 4),  
    new SidebarItem (10, 'List Group', 'pages/ui/list-group', null, 'fa-caret-right', null, false, 4),  
    new SidebarItem (11, 'Media Objects', 'pages/ui/media-objects', null, 'fa-caret-right', null, false, 4),   
    new SidebarItem (12, 'Tabs & Accordions', 'pages/ui/tabs-accordions', null, 'fa-caret-right', null, false, 4),  
    new SidebarItem (13, 'Typography', 'pages/ui/typography', null, 'fa-caret-right', null, false, 4), 
    new SidebarItem (14, 'Mail', 'pages/mail/mail-list/inbox', null, 'fa-envelope-o', null, false, 0), 
    new SidebarItem (15, 'Calendar', 'pages/calendar', null, 'fa-calendar', null, false, 0), 
    new SidebarItem (16, 'Form Elements', null, null, 'fa-pencil-square-o', null, true, 0), 
    new SidebarItem (17, 'Form Inputs', 'pages/form-elements/inputs', null, 'fa-caret-right', null, false, 16),
    new SidebarItem (18, 'Form Layouts', 'pages/form-elements/layouts', null, 'fa-caret-right', null, false, 16),
    new SidebarItem (19, 'Form Validations', 'pages/form-elements/validations', null, 'fa-caret-right', null, false, 16),
    new SidebarItem (20, 'Form Wizard', 'pages/form-elements/wizard', null, 'fa-caret-right', null, false, 16),
    new SidebarItem (21, 'Tables', null, null, 'fa-table', null, true, 0), 
    new SidebarItem (22, 'Basic Tables', 'pages/tables/basic-tables', null, 'fa-caret-right', null, false, 21),
    new SidebarItem (23, 'Dynamic Tables', 'pages/tables/dynamic-tables', null, 'fa-caret-right', null, false, 21),
    new SidebarItem (24, 'Editors', null, null, 'fa-pencil', null, true, 0), 
    new SidebarItem (25, 'Froala Editor', 'pages/editors/froala-editor', null, 'fa-caret-right', null, false, 24),
    new SidebarItem (26, 'Ckeditor', 'pages/editors/ckeditor', null, 'fa-caret-right', null, false, 24),
    new SidebarItem (27, 'Maps', null, null, 'fa-globe', null, true, 0), 
    new SidebarItem (28, 'Vector Maps', 'pages/maps/vectormaps', null, 'fa-caret-right', null, false, 27),
    new SidebarItem (29, 'Google Maps', 'pages/maps/googlemaps', null, 'fa-caret-right', null, false, 27),
    new SidebarItem (30, 'Leaflet Maps', 'pages/maps/leafletmaps', null, 'fa-caret-right', null, false, 27),
    new SidebarItem (31, 'Pages', null, null, 'fa-file-o', null, true, 0), 
    new SidebarItem (32, 'Login', '/login', null, 'fa-caret-right', null, false, 31),
    new SidebarItem (33, 'Register', '/register', null, 'fa-caret-right', null, false, 31),
    new SidebarItem (34, 'Blank Page', 'pages/blank', null, 'fa-caret-right', null, false, 31),
    new SidebarItem (35, 'Error Page', '/pagenotfound', null, 'fa-caret-right', null, false, 31),    
    new SidebarItem (140, 'Menu Level 1', null, null, 'fa-folder-open-o', null, true, 0),
    new SidebarItem (141, 'Menu Level 2', null, null, 'fa-folder-open-o', null, true, 140),
    new SidebarItem (142, 'MenuLevel 3', null, null, 'fa-folder-open-o', null, true, 141),
    new SidebarItem (143, 'MenuLevel 4', null, null, 'fa-folder-open-o', null, true, 142),
    new SidebarItem (144, 'MenuLevel 5', null, null, 'fa-folder-o', null, false, 143), 
];