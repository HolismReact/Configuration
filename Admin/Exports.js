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

export { ConfigurationRoutes }
export { Settings }
export { EntityConfigs }
export { EntityTypeConfigs }
export { SystemConfigs }