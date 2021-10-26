import { List, Browse as BrowseFilter, Enum as EnumFilter, Text as TextFilter, Boolean, app, post } from '@List';
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

const value = (item) => {
    switch (item.typeKey) {
        case 'Text':
            break;
        case 'Integer':
            break;
        case 'PositiveInteger':
            break;
        case 'Decimal':
            break;
        case 'Boolean':
            return <Boolean
                column='currentValue'
                value={item.currentValue || false}
                action={(value) => `/systemConfig/setValue?id=${item.id}&value=${value}`}
            />
            break;
        case 'NullableBoolean':
            break;
        case 'Color':
            break;
        case 'SingleChoice':
            break;
        case 'MultipleChoice':
            break;
        default:
            break;
    }
}

const row = (item) => {
    return <>
        <td>{item.configItemName}</td>
        <td>{item.typeKey}</td>
        <td>
            {
                value(item)
            }
        </td>
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
        hasDelete={true}
    />
}

export default SystemConfigs;