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
                checked={todo.completed}
                onCheckedChange={() => onToggle(todo.id)}
            >
                <Checkbox.Label>
                    <Text
                        textDecoration={
                            todo.completed ? "line-through" : "none"
                        }
                    >
                        {todo.text}
                    </Text>
                </Checkbox.Label>
            </Checkbox.Root>

            <Button
                size="sm"
                colorScheme="red"
                onClick={() => onDelete(todo.id)}
            >
                削除
            </Button>
        </HStack>
    );
}

export default TodoItem;