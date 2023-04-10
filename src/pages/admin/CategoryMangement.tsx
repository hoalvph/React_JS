import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from "../../types/Category"
import { Space, Table, Button, message, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface IProps {
    category: ICategory[],
    onRemove: (id: number) => void
}
interface DataType {
    key: string | number;
    id: number;
    name: string;
}
const { Search } = Input;

const CategoryManagement = (props: IProps) => {
    // const [messageApi, contextHolder] = message.useMessage();
    // const success = () => {
    //     messageApi.open({
    //         type: 'success',
    //         content: 'This is a prompt message with custom className and style',
    //         className: 'custom-class',
    //         duration: 1.3,
    //         style: {
    //             // marginTop: '20vh',
    //         },
    //     });
    // };
    const removeCategory = (id: number) => {
        // success();
        props.onRemove(id)
    }
    const [searchText, setSearchText] = useState('');

    const searchProducts = (value: string) => {
        setSearchText(value);
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => {
                if (searchText && text.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                    return null;
                }
                return <p>{text}</p>;
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                console.log(record),
                <Space size="middle">
                    {/* {contextHolder} */}
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/categories/${record.id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.category.map((item: ICategory) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button style={{ float: 'left', marginBottom: 20 }} type='primary'><Link to={'/admin/categories/add'}>Add New Category</Link></Button>
            <Search style={{ width: 400, float: 'right' }} placeholder="Search by product name" onSearch={searchProducts} enterButton />
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}
export default CategoryManagement