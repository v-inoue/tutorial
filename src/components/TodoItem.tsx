import { HStack, Text, Button, Checkbox } from "@chakra-ui/react";

/* Todoの型 */
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

/* propsの型 */
type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <HStack
            p={3}
            borderWidth="1px"
            borderRadius="md"
            justify="space-between"
        >
            <Checkbox.Root
            // checked=
            // onCheckedChange=
            >
                <Checkbox.Label>
                    <Text
                    // textDecoration=　三項演算子で完了済みなら取り消し線
                    >
                        {/* ここにtodoを表示 */}
                    </Text>
                </Checkbox.Label>
            </Checkbox.Root>
        </HStack>
    );
}

export default TodoItem;