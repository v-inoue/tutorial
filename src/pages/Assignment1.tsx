import { useState } from "react";
import {
    VStack,
    Heading,
    Button,
    Text,
} from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";

/* ✅ Todoの型 */
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

function Assignment1() {
    const [text, setText] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    /* 追加 */
    const addTodo = () => {
        if (text.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setText("");
    };

    /* 完了切り替え */
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    /*  削除 */
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    /*   全削除 */
    const clearTodos = () => {
        setTodos([]);
    };

    return (
        <VStack minH="100svh" p={10} gap={6}>
            <Heading>Assignment1：Todoアプリ</Heading>

            {/* 入力部分 */}
            <TodoInput
                text={text}
                setText={setText}
                onAdd={addTodo}
            />

            {/* To do一覧 */}
            <VStack w="full" maxW="400px" align="stretch">
                {todos.length === 0 && (
                    <Text color="gray.500" textAlign="center">
                        Todoはまだありません
                    </Text>
                )}

                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </VStack>

            {/* 全削除 */}
            {todos.length > 0 && (
                <Button
                    variant="outline"
                    colorScheme="red"
                    onClick={clearTodos}
                >
                    全削除
                </Button>
            )}
        </VStack>
    );
}

export default Assignment1;