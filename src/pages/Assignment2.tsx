import { useEffect, useState } from "react";
import { VStack, HStack, Text, Button, Box, Input } from "@chakra-ui/react";

function Assignment2() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("0回です");

    const updateCountMessage = () => {
        setCount(count + 1);
        setMessage(`${count}回です`);
    };

    useEffect(() => {
        setMessage(`${count}回です`);
    }, [count]);

    // ====== 買い物カート ======
    const priceA = 500;
    const priceB = 800;

    // ✅ 商品Cだけ「編集できる価格」にする
    const [priceC, setPriceC] = useState(1200);
    const [isEditingC, setIsEditingC] = useState(false);

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    const [total, setTotal] = useState(0);

    // ✅ 合計金額を自動計算（priceCも監視）
    useEffect(() => {
        const sum =
            countA * priceA +
            countB * priceB +
            countC * priceC;

        setTotal(sum);
    }, [countA, countB, countC, priceC]);

    // ✅ マイナス処理（0未満にならない）
    const decreaseA = () => {
        if (countA > 0) setCountA(countA - 1);
    };

    const decreaseB = () => {
        if (countB > 0) setCountB(countB - 1);
    };

    const decreaseC = () => {
        if (countC > 0) setCountC(countC - 1);
    };

    // ✅ リセット
    const resetCart = () => {
        setCountA(0);
        setCountB(0);
        setCountC(0);
    };

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
            <VStack p={10} gap={4}>
                <Text fontSize="xl">🛒 買い物カート</Text>

                {/* 商品A */}
                <HStack>
                    <Text width="150px">商品A（500円）</Text>
                    <Button onClick={decreaseA}>-</Button>
                    <Button onClick={() => setCountA(countA + 1)}>+</Button>
                    <Text>{countA} 個</Text>
                </HStack>

                {/* 商品B */}
                <HStack>
                    <Text width="150px">商品B（800円）</Text>
                    <Button onClick={decreaseB}>-</Button>
                    <Button onClick={() => setCountB(countB + 1)}>+</Button>
                    <Text>{countB} 個</Text>
                </HStack>

                {/* ✅ 商品C（ダブルクリックで価格編集） */}
                <HStack>
                    <Text
                        onDoubleClick={() => setIsEditingC(true)}
                        cursor="pointer"
                        userSelect="none"
                        width="150px"
                    >
                        商品C（
                        {isEditingC ? (
                            <Input
                                size="sm"
                                width="80px"
                                autoFocus
                                value={priceC}
                                onChange={(e) =>
                                    setPriceC(Number(e.target.value))
                                }
                                onBlur={() => setIsEditingC(false)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        setIsEditingC(false);
                                    }
                                }}
                            />
                        ) : (
                            <>{priceC}円</>
                        )}
                        ）
                    </Text>

                    <Button onClick={decreaseC}>-</Button>
                    <Button onClick={() => setCountC(countC + 1)}>+</Button>
                    <Text>{countC} 個</Text>
                </HStack>

                {/* 合計 */}
                <Text fontSize="xl">💰 合計：{total} 円</Text>

                {/* リセット */}
                <Button colorScheme="red" variant="outline" onClick={resetCart}>
                    カートをリセット
                </Button>

                <Text fontSize="sm" color="gray.500">
                    ※ 商品Cの価格はダブルクリックで編集できます
                </Text>
            </VStack>
        </>
    );
}

export default Assignment2;