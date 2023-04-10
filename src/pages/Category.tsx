import { useEffect, useState } from "react";
import { Table } from "antd";

interface Category {
    name: string;
    description: string;
}

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch("/api/categories")
            .then((response) => response.json())
            .then((data: Category[]) => setCategories(data));
    }, []);

    const columns = [
        {
            title: "Tên danh mục",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
    ];

    return (
        <div>
            <h1>Danh sách các danh mục</h1>
            <Table columns={columns} dataSource={categories} />
        </div>
    );
};

export default Categories;