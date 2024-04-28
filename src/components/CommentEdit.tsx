import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const CommentEdit: React.FC = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export default CommentEdit;