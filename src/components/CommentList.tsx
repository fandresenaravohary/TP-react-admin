import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

const CommentList: React.FC = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="title" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export default CommentList;