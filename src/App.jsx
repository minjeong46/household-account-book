import { useState } from "react";
import "./App.css";
import AccountBookInput from "./componentes/AccountBookInput";
import AccountBookList from "./componentes/AccountBookList";

function App() {
    const [bookList, setBookList] = useState([]);

    return (
        <main className="w-screen min-h-screen flex justify-center items-center">
            <AccountBookInput bookList={bookList} setBookList={setBookList} />
            <AccountBookList bookList={bookList} />
        </main>
    );
}

export default App;
