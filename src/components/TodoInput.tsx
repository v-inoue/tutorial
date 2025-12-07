import { HStack, Input, Button } from "@chakra-ui/react";

/* propsの型 */
type TodoInputProps = {
    text: string;
    setText: (value: string) => void;
    onAdd: () => void;
};

function TodoInput({ text, setText, onAdd }: TodoInputProps) {
    return (
        <HStack w="full" maxW="400px">
            <Input
                placeholder="やることを入力"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button colorScheme="teal" onClick={onAdd}>
                追加
            </Button>
        </HStack>
    );
}

export default TodoInput;