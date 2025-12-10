import { Route, Routes } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import Home from "./pages/Assignment0";
import Assignment1 from "./pages/Assignment1";
import Assignment2 from "./pages/Assignment2";

function App() {
  return (
    <VStack minH="100svh" w="full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment1" element={<Assignment1 />} />
        <Route path="/assignment2" element={<Assignment2 />} />
      </Routes>
    </VStack>
  );
}

export default App;