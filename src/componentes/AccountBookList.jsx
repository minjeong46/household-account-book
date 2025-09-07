import React from "react";

const AccountBookList = ({
    bookList,
    categoryFilter,
    sortFilter,
    startDateSort,
    endDateSort,
}) => {
    let sortFilterBookList = [...bookList];

    if (categoryFilter) {
        sortFilterBookList = sortFilterBookList.filter(
            (item) => item.category === categoryFilter
        );
    }

    if (sortFilter === "priceHigh") {
        sortFilterBookList.sort((a, b) => b.price - a.price);
    } else if (sortFilter === "priceLow") {
        sortFilterBookList.sort((a, b) => a.price - b.price);
    } else if (sortFilter === "latest") {
        sortFilterBookList.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortFilter === "earliest") {
        sortFilterBookList.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (startDateSort && endDateSort) {
        sortFilterBookList = sortFilterBookList.filter(
            (item) =>
                new Date(item.date) >= new Date(startDateSort) &&
                new Date(item.date) <= new Date(endDateSort)
        );
    }

    return (
        <div>
            {sortFilterBookList.map((item, index) => (
                <div key={index + item.date}>
                    {item.name},{item.category},{`${item.price}원`},{item.date}
                </div>
            ))}
        </div>
    );
};

export default AccountBookList;
