import React, { useState } from 'react';
import { Space, Table, Button, Modal, Form, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICategory } from '../../types/Category';
import { Link } from 'react-router-dom'

interface Props {
    categories: ICategory[];
    onAdd: (category: ICategory) => void;
    onUpdate: (category: ICategory) => void;
    onRemove: (id: number) => void;
}

const CategoryForm: React.FC<props: IPop> = ({
    categories,
    onAdd,
    onUpdate,
    onRemove,
}) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [editingCategory, setEditingCategory] = useState<ICategory | null>(null);

    const handleAddCategory = () => {
        setVisible(true);
        setEditingCategory(null);
        form.resetFields();
    };

    const handleEditCategory = (category: ICategory) => {
        setVisible(true);
        setEditingCategory(category);
        form.setFieldsValue(category);
    };

    const handleDeleteCategory = (id: number) => {
        onRemove(id);
    };

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                if (editingCategory) {
                    onUpdate({ ...editingCategory, ...values });
                } else {
                    const newCategory = { ...values, id: categories.length + 1 };
                    onAdd(newCategory);
                }
                setVisible(false);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const columns: ColumnsType<ICategory> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => handleEditCategory(record)}>
                        Edit
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => handleDeleteCategory(record.id)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    const data: ICategory[] = props.products.map((item: ICategory) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />

        </div>
    );
};

export default CategoryForm;