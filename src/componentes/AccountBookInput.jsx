import React, { useState } from "react";

const AccountBookInput = ({ bookList, setBookList }) => {
    const initialInput = {
        name: "",
        price: 0,
        list: "",
        date: "",
        memoCheck: false,
        memo: "",
        reSel: false,
    };
    const [input, setInput] = useState(initialInput);

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInput({
            ...input,
            [name]:
                type === "checkbox"
                    ? checked
                    : name === "reSel"
                    ? value === "true"
                    : value,
        });
        console.log(input.memoCheck);
    };

    const onClickHandler = (e) => {
        e.preventDefault();
        setBookList([...bookList, input]);

        setInput(initialInput);
    };

    return (
        <form>
            <div className="mb-2">
                <label htmlFor="name" className="pr-2">
                    이름
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-52"
                    placeholder="이름을 입력하세요"
                    onChange={onChange}
                    value={input.name}
                    required
                />
            </div>
            <div className="mb-2">
                <label htmlFor="price" className="pr-2">
                    가격
                </label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="가격을 입력하세요"
                    className="w-52"
                    onChange={onChange}
                    value={input.price}
                    required
                />
            </div>
            <div className="mb-2">
                <label htmlFor="" className="pr-2">
                    유형
                </label>
                <select
                    name="list"
                    id="list"
                    onChange={onChange}
                    value={input.list}
                    required
                >
                    <option value="food">식비</option>
                    <option value="fixed">고정비</option>
                    <option value="car">차랑유지비</option>
                    <option value="life">생활/쇼핑비</option>
                    <option value="culture">문화비</option>
                    <option value="medical">의료비</option>
                    <option value="etc">기타</option>
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="" className="pr-2">
                    구입 날짜
                </label>
                <input
                    type="date"
                    name="date"
                    onChange={onChange}
                    value={input.date}
                    required
                />
            </div>
            <div className="mb-2">
                <label className="pr-2">메모</label>
                <div>
                    <input
                        type="checkbox"
                        id="memoCheck"
                        name="memoCheck"
                        onChange={onChange}
                        checked={input.memoCheck}
                    />
                    <label htmlFor="memoTrue">메모 작성</label>
                </div>
                {input.memoCheck && (
                    <input
                        type="text"
                        id="memo"
                        name="memo"
                        placeholder="메모를 입력하세요"
                        className="w-52"
                        onChange={onChange}
                        value={input.memo}
                        required
                    />
                )}
            </div>
            <div className="mb-2">
                <label className="pr-2">재구매 의사</label>
                <input
                    type="radio"
                    id="reSelTrue"
                    name="reSel"
                    value="true"
                    onChange={onChange}
                    checked={input.reSel === true}
                />
                <label htmlFor="reSelTrue">한다</label>
                <input
                    type="radio"
                    id="reSelFalse"
                    name="reSel"
                    value="false"
                    onChange={onChange}
                    checked={input.reSel === false}
                />
                <label htmlFor="reSelFalse">안한다</label>
            </div>
            <button type="submit" onClick={(e) => onClickHandler(e)}>
                저장
            </button>
        </form>
    );
};

export default AccountBookInput;
