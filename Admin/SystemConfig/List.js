import { List, Browse as BrowseFilter, Enum as EnumFilter, Text as TextFilter, app, post } from '@List';
import { Browser } from '@Browse';
import { Form, Browse, Enum, Text } from '@Form';

const inputs = <>
    <Browse
        column='configItemId'
        browser={ConfigItemBrowser}
        display={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
    <Enum
        column='TypeId'
        enum='Type'
        placeholder='Type'
    />
</>

const CreateSystemConfig = () => {
    return <Form
        title="Create system config"
        entity='systemConfig'
        inputs={inputs}
    />
}

const SystemConfigs = () => {
    return <List
        title="System Configs"
        entity='systemConfig'
        headers={headers}
        row={row}
        create={CreateSystemConfig}
    />
}

return SystemConfigs;