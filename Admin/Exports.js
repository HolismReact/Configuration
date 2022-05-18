import SettingsIcon from '@mui/icons-material/Settings';
import { EntityConfigs } from './EntityConfigs/List'
import { SystemConfigs } from './SystemConfig/List'
import { EntityTypeConfigs } from './EntityTypeConfig/List'
import { Settings } from './Settings'

const ConfigurationRoutes = [
    {
        "path": "/systemConfigs",
        "component": SystemConfigs
    },
    {
        "path": "/settings",
        "component": Settings
    }
]

const ConfigurationMenu = [
    {
        "title": "Configurations",
        "icon": SettingsIcon,
        "children": [
            {
                "title": "System",
                "url": "/systemConfigs"
            },
            {
                "title": "Entity types",
                "url": "/entityTypeConfigs"
            },
            {
                "title": "Entities",
                "url": "/entityConfigs"
            },
            {
                "title": "Users",
                "url": "/userConfigs"
            }
        ]
    }
]

export { ConfigurationRoutes }
export { Settings }
export { EntityConfigs }
export { EntityTypeConfigs }
export { SystemConfigs }
export { ConfigurationMenu }