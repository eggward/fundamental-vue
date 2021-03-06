import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = ({
    FormSet,
    FormGroup,
    FormItem,
    FormLabel,
    FormMessage,
    FieldSet,
    Input,
    InputGroup,
    Legend,
    TextArea,
    Select,
}) => {
    return {
        componentStatus: 'stable',
        icon: 'form',
        relatedComponents: [
            FormSet,
            FormGroup,
            FormItem,
            FormLabel,
            FormMessage,
            FieldSet,
            Input,
            InputGroup,
            Legend,
            TextArea,
            Select,
        ],
    };
};
