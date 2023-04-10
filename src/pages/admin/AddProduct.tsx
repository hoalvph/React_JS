import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { Select, Space } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';

interface IProps {
    onAdd: (product: IProduct) => void
}
interface IFormInput {
    id: number,
    name: string,
    price: number
    image: string,
    description: string



}
const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
const AddProductPage = (props: IProps) => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values)
        navigate('/admin/products')

    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Products
                    </Button>
                </Form.Item>
            </Form>


        </div>
    )
}

export default AddProductPage