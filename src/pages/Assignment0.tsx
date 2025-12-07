import { useState } from "react";
import { VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { FaReact, FaPalette } from "react-icons/fa";
import { RiResetRightLine } from "react-icons/ri";
import { MdNextPlan } from "react-icons/md";

import { useNavigate } from "react-router-dom";
function Home() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate(); //ページ遷移用の関数

    //  回数を増やす関数
    const increment = () => {
        setCount(count + 1);
    };

    //  回数をリセットする関数
    const reset = () => {

    };

    // 課題ページへ遷移する関数
    const goToAssignment1Page = () => {
        navigate("/assignment1");
    }




    return (
        <VStack p={10} minH="100svh" w="full" justify="flex-start" gap={100}>
            <VStack>
                <Heading>チュートリアル</Heading>
                <Text>このページは次の技術で作られています。</Text>
                <HStack>
                    <VStack>
                        <FaReact size={40} />
                        <Text>React</Text>
                    </VStack>

                    <VStack>
                        <FaPalette size={40} />
                        <Text>Chakra UI</Text>
                    </VStack>
                </HStack>
            </VStack>

            <VStack >
                <HStack>
                    <Button onClick={increment}>
                        +1
                    </Button>
                    <Button variant="surface" colorPalette="red">
                        リセット <RiResetRightLine />
                    </Button>
                </HStack>
                <Text fontSize="xl">カウント：{count}</Text>
            </VStack>

        </VStack>
    );
}

export default Home;
