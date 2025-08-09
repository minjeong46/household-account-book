import { useState } from "react";
import "./App.css";
import AccountBookInput from "./componentes/AccountBookInput";
import AccountBookList from "./componentes/AccountBookList";
import AccountBookSort from "./componentes/AccountBookSort";

function App() {
    const [bookList, setBookList] = useState([
        {
            name: "화장품",
            price: 10000,
            category: "life",
            date: "2025-05-05",
            memoCheck: true,
            memo: "파운데이션",
            reSel: false,
        },
        {
            name: "마라탕",
            price: 14000,
            category: "food",
            date: "2025-07-28",
            memoCheck: false,
            memo: "",
            reSel: true,
        },
    ]);
    const categoryList = [
        { label: "식비", value: "food" },
        { label: "고정비", value: "fixed" },
        { label: "차량유지비", value: "car" },
        { label: "생활/쇼핑비", value: "life" },
        { label: "문화비", value: "culture" },
        { label: "의료비", value: "medical" },
        { label: "기타", value: "etc" },
    ];

    const [categoryFilter, setCategoryFilter] = useState("");
    const [sortFilter, setSortFilter] = useState("");

    const getSelectedCategoryFilter = (category) => {
        setCategoryFilter(category);
    };

    const getSelectedSortFilter = (sort) => {
        setSortFilter(sort);
    };

    return (
        <main className="w-screen min-h-screen flex justify-center items-center">
            <div>
                <AccountBookInput
                    bookList={bookList}
                    setBookList={setBookList}
                    categoryList={categoryList}
                />
                <AccountBookSort
                    categoryList={categoryList}
                    getSelectedCategoryFilter={getSelectedCategoryFilter}
                    getSelectedSortFilter={getSelectedSortFilter}
                />
                <AccountBookList
                    bookList={bookList}
                    categoryFilter={categoryFilter}
                    sortFilter={sortFilter}
                />
            </div>
        </main>
    );
}

export default App;
