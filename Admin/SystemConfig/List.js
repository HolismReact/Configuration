import { List, Browse as BrowseFilter, Enum as EnumFilter, Text as TextFilter, app, post } from '@List';
import { Browse } from '@Browse';
import { Form, Browse as BrowseInput, Text } from '@Form';

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
        placeholder='Config item'
        display={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
</>

const CreateSystemConfig = () => {
    return <Form
        title="Create system config"
        entity='systemConfig'
        inputs={inputs}
    />
}

const filters = <>
    <TextFilter
        column='ConfigItemName'
        placeholder='Config name'
    />
    <EnumFilter
        column='TypeId'
        entity='configType'
        placeholder='Type'
    />
</>

const headers = <>
    <th>Name</th>
    <th>Type</th>
    <th>Value</th>
</>

const row = (item) => {
    return <>
        <td>{item.configItemName}</td>
        <td>{item.typeKey}</td>
        <td>{item.currentValue}</td>
    </>
}

const SystemConfigs = () => {
    return <List
        title="System Configs"
        entity='systemConfig'
        filters={filters}
        headers={headers}
        row={row}
        create={CreateSystemConfig}
    />
}

export default SystemConfigs;