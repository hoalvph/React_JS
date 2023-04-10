import { useEffect, useState } from "react";
import { IProduct } from "../types/product";
import { Link } from 'react-router-dom';
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

const ProductPage = (props: IProps) => {
    const [searchText, setSearchText] = useState('');

    const removeProduct = (id: number) => {
        props.onRemove(id);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: (imgLink) => <img src={imgLink} alt="" />,
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type="primary" >
                        <Link to={`/products/${record.id}`}>Chi Tiết</Link>
                    </Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item.id,
            ...item
        };
    });

    const dataFiltered = data.filter((item) => {
        const name = item.name.toLowerCase();
        const description = item.description.toLowerCase();
        const searchTextLower = searchText.toLowerCase();
        return name.includes(searchTextLower) || description.includes(searchTextLower);
    });

    return (
        <div>
            <h1>Product Page</h1>
            <div>
                <input type="text" value={searchText} onChange={handleChange} placeholder="Tìm kiếm sản phẩm" />
            </div>
            <div>
                <Table columns={columns} dataSource={dataFiltered} pagination={{ pageSize: 10 }} />
            </div>
        </div>
    );
};

export default ProductPage;