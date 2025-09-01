import React from "react";

const AccountBookList = ({
    bookList,
    categoryFilter,
    sortFilter,
    startDateSort,
    endDateSort,
}) => {
    let sortFilterBookList = bookList;

    const categoryFilterBookList = bookList.filter(
        (item) => item.category === categoryFilter
    );

    if (sortFilter === "priceHigh") {
        sortFilterBookList = [...bookList].sort((a, b) => b.price - a.price);
    } else if (sortFilter === "priceLow") {
        sortFilterBookList = [...bookList].sort((a, b) => a.price - b.price);
    } else if (sortFilter === "latest") {
        sortFilterBookList = [...bookList].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );
    } else if (sortFilter === "earliest") {
        sortFilterBookList = [...bookList].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
    }

    if (startDateSort && endDateSort) {
        sortFilterBookList = bookList.filter(
            (item) => item.date >= startDateSort && item.date <= endDateSort
        );
    }

    return (
        <div>
            {categoryFilter
                ? categoryFilterBookList &&
                  categoryFilterBookList.map((item) => {
                      return (
                          <div>
                              {item.name}
                              {item.category}
                              {item.price}
                              {item.date}
                          </div>
                      );
                  })
                : sortFilterBookList &&
                  sortFilterBookList.map((item, index) => {
                      return (
                          <div key={index + `${new Date(item.date)}`}>
                              {item.name}
                              {item.category}
                              {item.price}
                              {item.date}
                          </div>
                      );
                  })}
        </div>
    );
};

export default AccountBookList;
