import React from 'react';

const AccountBookList = ({bookList}) => {
    return (
        <div>
            {
                bookList && bookList.map((item)=>{
                    return(
                        <div>{item.name}</div>
                    )
                })
            }
        </div>
    );
};

export default AccountBookList;