import { useEffect, useState } from "react";
import { VStack, HStack, Text, Button, Box, Input } from "@chakra-ui/react";

function Assignment2() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("0回です");

    const updateCountMessage = () => {
        setCount(count + 1);
        setMessage(`${count}回です`);
    };

    // ここにuseEffectを追加して、countが更新されるたびにmessageも更新するようにする



    // ====== 買い物カート ======
    // const priceA = 500;
    // const priceB = 800;
    // const priceC = 1200;

    // const [countA, setCountA] = useState(0);
    // const [countB, setCountB] = useState(0);
    // const [countC, setCountC] = useState(0);

    // const [total, setTotal] = useState(0);

    // const decreaseA = () => {
    // };
    // const decreaseB = () => {
    // };
    // const decreaseC = () => {

    // };


    return (
        <>
            {/* ===== 上のカウンター ===== */}
            <VStack p={10}>
                <Text fontSize="xl">メインカウント：{count}</Text>

                <Button onClick={updateCountMessage}>
                    +1
                </Button>

                <Box p={4} borderWidth="1px" borderRadius="md">
                    <Text>message：</Text>
                    <Text>{message}</Text>
                </Box>
            </VStack>

            {/* ===== 買い物カート ===== */}

            {/* <VStack p={10} gap={4}>
                <Text fontSize="xl">🛒 買い物カート</Text>

                <HStack>
                    <Text w="120px">商品A（500円）</Text>
                    <Button onClick={() => setCountA(countA + 1)}>+</Button>
                    <Text>{countA} 個</Text>
                </HStack>

                <HStack>
                    <Text w="120px">商品B（800円）</Text>
                    <Button onClick={() => setCountB(countB + 1)}>+</Button>
                    <Text>{countB} 個</Text>
                </HStack>

                <HStack>
                    <Text w="120px">商品C（1200円）</Text>
                    <Button onClick={() => setCountC(countC + 1)}>+</Button>
                    <Text>{countC} 個</Text>
                </HStack>

                <Text fontSize="xl">💰 合計：{total} 円</Text>

            </VStack > */}
        </>
    );
}

export default Assignment2;