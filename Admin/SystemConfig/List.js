import { List, Browse as BrowseFilter, Enum as EnumFilter, Text as TextFilter, app, post } from '@List';
import { Browse } from '@Browse';
import { Form, Browse as BrowseInput, Enum as EnumInput, Text } from '@Form';

const configItemCard = (item) => {
    return <>
        <div>{item.name}</div>
    </>
}

const ConfigItemBrowser = () => {
    return <Browse
        entity='configItem'
        card={configItemCard}
    />
}

const inputs = <>
    <BrowseInput
        column='configItemId'
        browser={ConfigItemBrowser}
        display={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
    <EnumInput
        column='TypeId'
        entity='configType'
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

const headers = <>
    <th>Name</th>
</>

const row = (item) => {
    return <>
        <td>{item.name}</td>
    </>
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

export default SystemConfigs;