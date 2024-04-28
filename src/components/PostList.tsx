import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

const PostList: React.FC = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;