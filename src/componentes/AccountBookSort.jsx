import React from "react";

const AccountBookSort = ({
    categoryList,
    getSelectedCategoryFilter,
    getSelectedSortFilter,
    getStartDateSort,
    getEndDateSort,
}) => {
    const sortFilter = [
        { label: "가격 높은 순", value: "priceHigh" },
        { label: "가격 낮은 순", value: "priceLow" },
        { label: "최신 순", value: "latest" },
        { label: "오래된 순", value: "earliest" },
    ];

    const onChangeCategory = (e) => {
        getSelectedCategoryFilter(e.target.value);
    };

    const onChangeSortFilter = (e) => {
        getSelectedSortFilter(e.target.value);
    };

    const onChangeStartDate = (e) => {
        getStartDateSort(e.target.value);
    };
    const onChangeEndDate = (e) => {
        getEndDateSort(e.target.value);
    };

    return (
        <div>
            <select onChange={onChangeCategory}>
                <option value="">유형 필터</option>
                {categoryList.map((category) => {
                    return (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    );
                })}
            </select>
            <select onChange={onChangeSortFilter}>
                <option value="">정렬 기준</option>
                {sortFilter.map((sort) => {
                    return (
                        <option key={sort.value} value={sort.value}>
                            {sort.label}
                        </option>
                    );
                })}
            </select>
            <div>
                <input
                    type="date"
                    placeholder="시작"
                    onChange={onChangeStartDate}
                ></input>
                <input
                    type="date"
                    placeholder="종료"
                    onChange={onChangeEndDate}
                ></input>
            </div>
        </div>
    );
};

export default AccountBookSort;
