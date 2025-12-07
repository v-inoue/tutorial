# Assignment1解説

このページでは、**コンポーネント分離**の基礎を学びます。

---
## コンポーネント分離とは

Reactでは、画面を **小さな部品（コンポーネント）** に分けて管理することができます。  
この考え方を **「コンポーネント分離」** と呼びます。

例えば、このTodoアプリでは次のように役割を分けています。

| コンポーネント | 役割 |
|----------------|------|
| Assignment1 | Todo全体の状態管理 |
| TodoInput | 入力フォームの表示 |
| TodoItem | 1つのTodoの表示 |

このように分けることで、次のようなメリットがあります。

- コードが読みやすくなる
- バグを見つけやすくなる
- 別のページでも再利用できる
- チーム開発しやすくなる

---

## TodoInputコンポーネントの役割

`TodoInput` は、**「新しいTodoを入力して追加する部分」だけを担当するコンポーネント** です。

もとの `Assignment1` に書かれていた次のコードを、  
専用のコンポーネントとして切り出しています。

```tsx
<HStack w="full" maxW="400px">
    <Input
        placeholder="やることを入力"
        value={text}
        onChange={(e) => setText(e.target.value)}
    />
    <Button colorScheme="teal" onClick={addTodo}>
        追加
    </Button>
</HStack>
```
これを TodoInput.tsx として分離しています。

## TodoInputのコード解説
```ts
type TodoInputProps = {
    text: string;
    setText: (value: string) => void;
    onAdd: () => void;
};
```
ここでは親コンポーネント（Assignment1）から受け取るデータの型を定義しています。

| プロパティ | 意味 |
|------|------|
| text | 入力欄の文字 |
|setText|入力欄を更新する関数|
|onAdd|追加ボタンが押されたときの処理|

次に、受け取ったデータを画面に反映します。

```jsx
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
```
ここでのポイントは次の3つです。
- value={text} → 親から受け取った文字を表示している
- onChange → 入力されたら親の setText を実行
- onClick={onAdd} → ボタンを押すと親の addTodo が実行される

このように、TodoInputでは、画面の表示のみを担当しており、実際のデータ管理はすべて親コンポーネントに任せています。そのため、引数で親コンポーネントの変数とそのSet関数を受け取り、利用することで親コンポーネントの変数を更新しています。

>### ＊Task　Todo Itemの実装
>TodoInputを参考に、タスクの表示と削除を行うTodoItemを完成させてみよう